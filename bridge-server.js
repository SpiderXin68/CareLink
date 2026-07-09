const http = require("http");
const fs = require("fs");
const path = require("path");

const root = __dirname;
const port = Number(process.env.CARELINK_PORT || 5173);
const storeDir = path.join(root, "data");
const storePath = path.join(storeDir, "huawei-health-live.json");

const mime = {
  ".html": "text/html; charset=utf-8",
  ".css": "text/css; charset=utf-8",
  ".js": "text/javascript; charset=utf-8",
  ".json": "application/json; charset=utf-8",
  ".md": "text/markdown; charset=utf-8",
  ".png": "image/png",
};

function sendJson(res, status, body) {
  res.writeHead(status, {
    "Content-Type": "application/json; charset=utf-8",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "content-type",
    "Access-Control-Allow-Methods": "GET,POST,OPTIONS",
  });
  res.end(JSON.stringify(body, null, 2));
}

function readBody(req) {
  return new Promise((resolve, reject) => {
    let body = "";
    req.on("data", (chunk) => {
      body += chunk;
      if (body.length > 1024 * 1024) {
        reject(new Error("Payload too large"));
        req.destroy();
      }
    });
    req.on("end", () => resolve(body));
    req.on("error", reject);
  });
}

function serveFile(res, urlPath) {
  const safePath = urlPath === "/" ? "/index.html" : urlPath;
  const filePath = path.normalize(path.join(root, safePath));
  if (!filePath.startsWith(root)) {
    res.writeHead(403);
    res.end("Forbidden");
    return;
  }

  fs.readFile(filePath, (error, data) => {
    if (error) {
      res.writeHead(404);
      res.end("Not found");
      return;
    }
    res.writeHead(200, { "Content-Type": mime[path.extname(filePath)] || "application/octet-stream" });
    res.end(data);
  });
}

const server = http.createServer(async (req, res) => {
  const url = new URL(req.url, `http://${req.headers.host || "localhost"}`);

  if (req.method === "OPTIONS") {
    sendJson(res, 204, {});
    return;
  }

  if (url.pathname === "/api/health/latest" && req.method === "GET") {
    if (!fs.existsSync(storePath)) {
      sendJson(res, 200, { connected: false, message: "No Huawei Health data received yet." });
      return;
    }
    sendJson(res, 200, JSON.parse(fs.readFileSync(storePath, "utf8")));
    return;
  }

  if (url.pathname === "/api/health/huawei" && req.method === "POST") {
    try {
      const payload = JSON.parse(await readBody(req));
      const record = {
        connected: true,
        receivedAt: new Date().toISOString(),
        source: payload.source || "HUAWEI_HEALTH",
        residentId: payload.residentId || "r001",
        residentName: payload.residentName || "李秀兰",
        metrics: {
          heartRateBpm: Number(payload.metrics?.heartRateBpm ?? payload.heartRateBpm ?? 0),
          steps: Number(payload.metrics?.steps ?? payload.steps ?? 0),
          sleepHours: Number(payload.metrics?.sleepHours ?? payload.sleepHours ?? 0),
          caloriesKcal: Number(payload.metrics?.caloriesKcal ?? payload.caloriesKcal ?? 0),
          workoutMinutes: Number(payload.metrics?.workoutMinutes ?? payload.workoutMinutes ?? 0),
        },
        raw: payload.raw || payload,
      };

      fs.mkdirSync(storeDir, { recursive: true });
      fs.writeFileSync(storePath, JSON.stringify(record, null, 2), "utf8");
      sendJson(res, 200, { ok: true, stored: record });
    } catch (error) {
      sendJson(res, 400, { ok: false, error: error.message });
    }
    return;
  }

  serveFile(res, decodeURIComponent(url.pathname));
});

server.listen(port, "0.0.0.0", () => {
  console.log(`CareLink bridge server running: http://localhost:${port}`);
  console.log("Huawei POST endpoint: /api/health/huawei");
});
