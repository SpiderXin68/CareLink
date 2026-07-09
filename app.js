const residents = [
  {
    id: "r001",
    name: "李秀兰",
    age: 78,
    sex: "女",
    building: "A2",
    room: "3 单元 502",
    tags: ["独居", "高血压", "糖尿病"],
    family: "女儿 王敏",
    doctor: "周医生",
    nurse: "陈护理",
    lastUpload: "08:42",
    adherence: 62,
    sleep: 5.2,
    activity: 1300,
    bp: [146, 152, 150, 158, 162, 156, 168],
    glucose: [7.6, 8.1, 8.4, 7.9, 8.7, 9.2, 9.6],
    heart: [74, 78, 82, 80, 86, 84, 91],
    notes: "连续三天血糖偏高，今早收缩压达到 168 mmHg，建议复测并电话随访。",
  },
  {
    id: "r002",
    name: "张建国",
    age: 82,
    sex: "男",
    building: "B1",
    room: "1 单元 203",
    tags: ["空巢", "冠心病", "用药提醒"],
    family: "儿子 张远",
    doctor: "吴医生",
    nurse: "刘护理",
    lastUpload: "09:10",
    adherence: 48,
    sleep: 6.1,
    activity: 820,
    bp: [138, 142, 140, 145, 147, 150, 151],
    glucose: [6.4, 6.2, 6.5, 6.8, 6.9, 7.1, 7.3],
    heart: [68, 71, 72, 76, 79, 82, 84],
    notes: "智能药盒记录显示昨日漏服晚间药，活动量下降，需要家属提醒。",
  },
  {
    id: "r003",
    name: "陈桂芳",
    age: 73,
    sex: "女",
    building: "C3",
    room: "2 单元 1101",
    tags: ["糖尿病", "睡眠下降"],
    family: "儿子 陈峻",
    doctor: "周医生",
    nurse: "陈护理",
    lastUpload: "07:58",
    adherence: 86,
    sleep: 4.7,
    activity: 2400,
    bp: [128, 130, 132, 129, 135, 136, 134],
    glucose: [7.1, 7.4, 7.6, 7.8, 8.0, 8.1, 8.3],
    heart: [72, 73, 76, 75, 77, 78, 80],
    notes: "血糖趋势缓慢上升，睡眠低于 5 小时，建议复测空腹血糖。",
  },
  {
    id: "r004",
    name: "赵德明",
    age: 69,
    sex: "男",
    building: "D4",
    room: "4 单元 601",
    tags: ["高血压", "规律运动"],
    family: "妻子 刘琴",
    doctor: "吴医生",
    nurse: "刘护理",
    lastUpload: "08:20",
    adherence: 92,
    sleep: 7.0,
    activity: 5200,
    bp: [126, 124, 130, 128, 132, 129, 127],
    glucose: [5.7, 5.9, 5.8, 6.0, 5.9, 6.1, 5.8],
    heart: [66, 68, 70, 69, 68, 67, 66],
    notes: "指标稳定，保持现有运动和用药计划。",
  },
  {
    id: "r005",
    name: "沈月娥",
    age: 86,
    sex: "女",
    building: "E2",
    room: "1 单元 101",
    tags: ["半失能", "跌倒风险", "独居"],
    family: "孙女 沈宁",
    doctor: "周医生",
    nurse: "马护理",
    lastUpload: "06:55",
    adherence: 78,
    sleep: 5.8,
    activity: 360,
    bp: [134, 138, 140, 144, 148, 151, 155],
    glucose: [6.8, 6.9, 7.2, 7.5, 7.4, 7.6, 7.9],
    heart: [76, 78, 80, 82, 85, 88, 89],
    notes: "毫米波雷达提示凌晨起夜频繁，活动量显著偏低，上门服务优先级较高。",
  },
  {
    id: "r006",
    name: "周海平",
    age: 66,
    sex: "男",
    building: "B2",
    room: "2 单元 902",
    tags: ["糖尿病", "复诊提醒"],
    family: "妻子 黄蕾",
    doctor: "吴医生",
    nurse: "马护理",
    lastUpload: "09:25",
    adherence: 90,
    sleep: 6.6,
    activity: 4100,
    bp: [132, 130, 131, 133, 135, 136, 134],
    glucose: [6.6, 6.8, 7.0, 7.2, 7.5, 7.4, 7.6],
    heart: [70, 72, 73, 74, 73, 75, 74],
    notes: "轻度血糖波动，明日慢病复诊，可由系统提醒。",
  },
];

const buildings = [
  { id: "A1", residents: 42, elder: 17 },
  { id: "A2", residents: 56, elder: 24 },
  { id: "B1", residents: 49, elder: 19 },
  { id: "B2", residents: 53, elder: 21 },
  { id: "C3", residents: 61, elder: 26 },
  { id: "D4", residents: 45, elder: 14 },
  { id: "E2", residents: 38, elder: 18 },
  { id: "E5", residents: 57, elder: 22 },
  { id: "F1", residents: 40, elder: 13 },
  { id: "F3", residents: 44, elder: 16 },
];

const loopSteps = [
  ["采集", "血压、血糖、心率、活动、用药"],
  ["识别", "异常检测与慢病趋势判断"],
  ["分层", "绿、黄、橙、红四级风险"],
  ["派单", "生成医生随访或护理上门任务"],
  ["干预", "电话随访、复测、复诊、就医引导"],
  ["沉淀", "更新档案和社区健康风险地图"],
];

const complianceItems = [
  ["单独授权", "老人授权后，家属和护理员按角色查看必要数据。"],
  ["最小采集", "只采集闭环服务需要的指标，不采集无关隐私信息。"],
  ["分级权限", "居民、家属、医生、护理员、管理端看到的数据粒度不同。"],
  ["脱敏治理", "社区大屏只展示楼栋或网格风险，不暴露个人身份。"],
  ["日志审计", "所有查看、修改、导出动作留痕，便于追责。"],
];

const huaweiMetrics = [
  ["heart-pulse", "心率", "静息心率、连续心率趋势、异常心率提示"],
  ["footprints", "步数与活动", "每日步数、活动强度、久坐和低活动风险"],
  ["moon", "睡眠", "睡眠时长、睡眠质量、夜间醒来次数"],
  ["flame", "运动记录", "运动类型、时长、消耗和恢复建议"],
  ["watch", "设备状态", "绑定设备、最近同步时间、电量和佩戴状态"],
];

const huaweiFlow = [
  ["watch", "华为手表", "采集心率、步数、睡眠、运动等穿戴数据。"],
  ["smartphone", "运动健康 App", "用户登录华为帐号，并在手机端完成数据同步。"],
  ["shield-check", "Health Service Kit", "开发者应用申请健康数据权限，用户授权后读取。"],
  ["server", "CareLink 接入服务", "清洗、脱敏、统一字段并写入居民健康档案。"],
  ["cpu", "AI 风险引擎", "结合血压、血糖、用药和活动趋势生成风险分层。"],
];

const huaweiRequirements = [
  ["开发者应用", "需要在华为开发者联盟创建应用，集成 HMS Core Health Service Kit。"],
  ["用户授权", "心率、睡眠、运动等健康数据属于敏感信息，必须由本人授权并可撤回。"],
  ["移动端/后端同步", "静态网页无法直接读取手表，正式版需要 App、小程序配套服务端或原生桥接。"],
  ["合规存储", "只保存闭环服务必要字段，社区大屏继续做楼栋级脱敏展示。"],
];

let selectedId = residents[0].id;
let activeFilter = "all";
let generatedTasks = [];
let huaweiConnected = false;
let huaweiLastSync = "未同步";
let huaweiLiveRecord = null;
let toastTimer;

const riskMeta = {
  green: { label: "正常", score: 24, action: "健康建议", color: "green" },
  yellow: { label: "关注", score: 48, action: "提醒复测", color: "yellow" },
  orange: { label: "需随访", score: 72, action: "医生随访", color: "orange" },
  red: { label: "需干预", score: 91, action: "家医协同", color: "red" },
};

function latest(values) {
  return values[values.length - 1];
}

function riskFor(person) {
  let score = 0;
  const systolic = latest(person.bp);
  const glucose = latest(person.glucose);
  const heart = latest(person.heart);

  if (systolic >= 160) score += 32;
  else if (systolic >= 150) score += 22;
  else if (systolic >= 140) score += 12;

  if (glucose >= 9) score += 28;
  else if (glucose >= 8) score += 18;
  else if (glucose >= 7) score += 8;

  if (heart >= 90) score += 12;
  if (person.adherence < 60) score += 16;
  if (person.activity < 900) score += 16;
  if (person.sleep < 5.5) score += 8;
  if (person.tags.includes("独居")) score += 8;
  if (person.tags.includes("跌倒风险")) score += 14;

  if (score >= 70) return "red";
  if (score >= 48) return "orange";
  if (score >= 24) return "yellow";
  return "green";
}

function riskScore(person) {
  const key = riskFor(person);
  const systolic = latest(person.bp);
  const glucose = latest(person.glucose);
  const bonus = Math.min(7, Math.max(0, Math.round((systolic - 120) / 8 + (glucose - 6) * 2)));
  return Math.min(96, riskMeta[key].score + bonus);
}

function selectedResident() {
  return residents.find((person) => person.id === selectedId) || residents[0];
}

function qs(selector, root = document) {
  return root.querySelector(selector);
}

function qsa(selector, root = document) {
  return [...root.querySelectorAll(selector)];
}

function showToast(message) {
  const toast = qs("#toast");
  toast.textContent = message;
  toast.classList.add("is-visible");
  window.clearTimeout(toastTimer);
  toastTimer = window.setTimeout(() => toast.classList.remove("is-visible"), 2600);
}

function formatRisk(person) {
  const key = riskFor(person);
  return `<span class="risk-pill ${key}">${riskMeta[key].label}</span>`;
}

function renderMetrics() {
  const risks = residents.map(riskFor);
  const redCount = risks.filter((risk) => risk === "red").length;
  const orangeCount = risks.filter((risk) => risk === "orange").length;
  const abnormal = risks.filter((risk) => risk !== "green").length;
  const avgAdherence = Math.round(residents.reduce((sum, item) => sum + item.adherence, 0) / residents.length);
  const metrics = [
    ["纳入居民", "486", "试点 1 个社区，重点样本 220 人"],
    ["今日异常", String(abnormal + 18), `${redCount} 个红色，${orangeCount} 个橙色`],
    ["随访效率", "+32%", "AI 自动生成优先名单"],
    ["用药触达", `${avgAdherence}%`, "药盒、短信、小程序三端提醒"],
  ];

  qs("#metricGrid").innerHTML = metrics
    .map(
      ([label, value, note]) => `
        <article class="metric-card">
          <p>${label}</p>
          <strong>${value}</strong>
          <span>${note}</span>
        </article>
      `,
    )
    .join("");
}

function buildingRisk(buildingId) {
  const people = residents.filter((person) => person.building === buildingId);
  if (people.some((person) => riskFor(person) === "red")) return "red";
  if (people.some((person) => riskFor(person) === "orange")) return "orange";
  if (people.some((person) => riskFor(person) === "yellow")) return "yellow";
  return "green";
}

function renderMap() {
  qs("#communityMap").innerHTML = buildings
    .map((building, index) => {
      const risk = buildingRisk(building.id);
      const riskPeople = residents.filter((person) => person.building === building.id && riskFor(person) !== "green").length;
      const bars = Array.from({ length: 8 }, (_, barIndex) => {
        const height = 20 + ((building.elder + index * 7 + barIndex * 9) % 70);
        return `<i style="height:${height}%"></i>`;
      }).join("");

      return `
        <button class="building ${risk}" type="button" data-building="${building.id}">
          <strong>${building.id} 栋</strong>
          <span>${building.residents} 户居民 / ${building.elder} 名老人</span>
          <span>${riskPeople ? `${riskPeople} 名需关注` : "暂无个人级预警"}</span>
          <div class="mini-bars" aria-hidden="true">${bars}</div>
        </button>
      `;
    })
    .join("");
}

function alertItems() {
  const highRisk = residents
    .filter((person) => riskFor(person) !== "green")
    .sort((a, b) => riskScore(b) - riskScore(a))
    .map((person) => {
      const risk = riskFor(person);
      return {
        person,
        risk,
        title: `${person.name} · ${riskMeta[risk].action}`,
        body: person.notes,
      };
    });

  return highRisk;
}

function renderAlerts() {
  const alerts = alertItems();
  qs("#queueCount").textContent = `${alerts.length} 项`;
  qs("#alertList").innerHTML = alerts
    .map(
      ({ person, risk, title, body }) => `
        <article class="alert-item">
          <span class="risk-pill ${risk}">${riskMeta[risk].label}</span>
          <div>
            <div class="item-title">
              <strong>${title}</strong>
              <span>${person.lastUpload}</span>
            </div>
            <p class="item-body">${body}</p>
          </div>
        </article>
      `,
    )
    .join("");
}

function renderLoop() {
  qs("#loopSteps").innerHTML = loopSteps
    .map(
      ([title, text], index) => `
        <article class="loop-step">
          <b>${index + 1}</b>
          <strong>${title}</strong>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

function renderPatientList() {
  const filtered = residents.filter((person) => activeFilter === "all" || riskFor(person) === activeFilter);
  qs("#patientList").innerHTML = filtered
    .map(
      (person) => `
        <button class="patient-card ${person.id === selectedId ? "is-selected" : ""}" type="button" data-patient-id="${person.id}">
          <div class="item-title">
            <strong>${person.name} · ${person.age} 岁</strong>
            ${formatRisk(person)}
          </div>
          <p class="item-body">${person.building} 栋 ${person.room}</p>
          <div class="patient-meta">
            ${person.tags.map((tag) => `<span>${tag}</span>`).join("")}
          </div>
        </button>
      `,
    )
    .join("");

  qsa("[data-patient-id]").forEach((button) => {
    button.addEventListener("click", () => {
      selectedId = button.dataset.patientId;
      renderAll();
    });
  });
}

function sparkline(values, color = "#0f766e") {
  const max = Math.max(...values);
  const min = Math.min(...values);
  const range = Math.max(1, max - min);
  const points = values
    .map((value, index) => {
      const x = 6 + index * (88 / Math.max(1, values.length - 1));
      const y = 30 - ((value - min) / range) * 24;
      return `${x},${y}`;
    })
    .join(" ");

  return `
    <svg class="sparkline" viewBox="0 0 100 36" preserveAspectRatio="none" aria-hidden="true">
      <polyline points="${points}" fill="none" stroke="${color}" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"></polyline>
    </svg>
  `;
}

function renderCasePanel() {
  const person = selectedResident();
  const risk = riskFor(person);
  const score = riskScore(person);
  const details = [
    ["血压", `${latest(person.bp)}/${Math.max(72, latest(person.heart) - 12)} mmHg`, sparkline(person.bp)],
    ["血糖", `${latest(person.glucose).toFixed(1)} mmol/L`, sparkline(person.glucose, "#b7791f")],
    ["心率", `${latest(person.heart)} 次/分`, sparkline(person.heart, "#2563eb")],
    ["用药依从性", `${person.adherence}%`, `${person.adherence < 70 ? "低于目标，需提醒" : "达标"}`],
    ["睡眠", `${person.sleep} 小时`, `${person.sleep < 5.5 ? "睡眠不足" : "稳定"}`],
    ["活动量", `${person.activity} 步`, `${person.activity < 1000 ? "显著偏低" : "今日已记录"}`],
  ];

  qs("#casePanel").innerHTML = `
    <div class="case-hero">
      <div>
        <h4>${person.name}的健康档案</h4>
        <p>${person.age} 岁，${person.sex}，${person.building} 栋 ${person.room}。签约医生 ${person.doctor}，家属联系人 ${person.family}。</p>
      </div>
      <div class="score-ring">
        <div>
          <strong>${score}</strong>
          <span>风险分</span>
        </div>
      </div>
    </div>
    <div class="item-title">
      <strong>AI 建议：${riskMeta[risk].action}</strong>
      <span class="risk-pill ${risk}">${riskMeta[risk].label}</span>
    </div>
    <p class="item-body">${person.notes}</p>
    <div class="case-details" style="margin-top:16px">
      ${details
        .map(
          ([label, value, extra]) => `
            <div class="detail-box">
              <span>${label}</span>
              <strong>${value}</strong>
              ${String(extra).startsWith("<svg") ? extra : `<span>${extra}</span>`}
            </div>
          `,
        )
        .join("")}
    </div>
  `;
}

function tasks() {
  const baseTasks = alertItems().map(({ person, risk }) => ({
    id: `task-${person.id}`,
    person,
    risk,
    title: risk === "red" ? "立即电话随访并通知家属" : "安排复测与慢病随访",
    owner: risk === "red" ? `${person.doctor} + ${person.family}` : person.doctor,
  }));

  return [...baseTasks, ...generatedTasks];
}

function renderTasks() {
  const list = tasks();
  qs("#taskSummary").textContent = `${list.length} 待处理`;
  qs("#taskList").innerHTML = list
    .map(
      (task) => `
        <article class="task-item" data-task-id="${task.id}">
          <div class="item-title">
            <strong>${task.person.name}</strong>
            <span class="risk-pill ${task.risk}">${riskMeta[task.risk].label}</span>
          </div>
          <p class="item-body">${task.title}。责任人：${task.owner}</p>
          <div class="task-actions">
            <button type="button" data-action="ack">标记已联系</button>
            <button type="button" data-action="visit">转上门服务</button>
          </div>
        </article>
      `,
    )
    .join("");

  qsa(".task-actions button").forEach((button) => {
    button.addEventListener("click", () => {
      const item = button.closest(".task-item");
      const action = button.dataset.action === "visit" ? "已转上门服务" : "已记录联系结果";
      item.remove();
      showToast(action);
      qs("#taskSummary").textContent = `${Math.max(0, qsa(".task-item").length)} 待处理`;
    });
  });
}

function renderResident() {
  const person = selectedResident();
  const risk = riskFor(person);
  const meta = riskMeta[risk];
  const statusText =
    risk === "red"
      ? "今天需要社区医生和家属一起确认"
      : risk === "orange"
        ? "今天建议复测，并等待医生随访"
        : risk === "yellow"
          ? "有轻微波动，按提醒复测即可"
          : "今天指标稳定，按计划生活";

  qs("#residentStatus").innerHTML = `
    <span class="status-band ${risk}">${meta.label} · ${meta.action}</span>
    <h4>${statusText}</h4>
    <p>${person.name}，最近一次上传 ${person.lastUpload}。系统只给出健康管理建议，诊疗由签约医生确认。</p>
  `;

  const actions = [
    ["pill", "按时服药", person.adherence < 80 ? "晚间药待确认" : "今日已完成"],
    ["gauge", "复测血压", latest(person.bp) >= 140 ? "建议 30 分钟后复测" : "无需额外复测"],
    ["footprints", "轻量运动", person.activity < 2000 ? "饭后慢走 10 分钟" : "今日活动达标"],
  ];

  qs("#largeActions").innerHTML = actions
    .map(
      ([icon, title, text]) => `
        <div class="large-action">
          <i data-lucide="${icon}"></i>
          <div>
            <strong>${title}</strong>
            <span>${text}</span>
          </div>
        </div>
      `,
    )
    .join("");

  renderVitalCards();
}

function renderVitalCards() {
  const person = selectedResident();
  const cards = [
    ["血压趋势", `${latest(person.bp)} mmHg`, person.bp, "#0f766e"],
    ["血糖趋势", `${latest(person.glucose).toFixed(1)} mmol/L`, person.glucose, "#b7791f"],
    ["心率趋势", `${latest(person.heart)} 次/分`, person.heart, "#2563eb"],
  ];

  qs("#vitalCards").innerHTML = cards
    .map(
      ([label, value, values, color]) => `
        <article class="vital-card">
          <span>${label}</span>
          <strong>${value}</strong>
          ${sparkline(values, color)}
        </article>
      `,
    )
    .join("");
}

function renderFamily() {
  const person = selectedResident();
  const risk = riskFor(person);
  qs("#familySummary").innerHTML = `
    <span class="status-chip ${risk}">${riskMeta[risk].label}</span>
    <h4>${person.name} · ${person.building} 栋</h4>
    <p>${person.family} 已获得老人授权，可查看风险状态、异常提醒、随访结果，不展示无关隐私。</p>
    <div class="summary-strip">
      <div><strong>${person.lastUpload}</strong><span>最近上传</span></div>
      <div><strong>${person.adherence}%</strong><span>用药依从</span></div>
      <div><strong>${person.sleep}h</strong><span>昨晚睡眠</span></div>
      <div><strong>${person.activity}</strong><span>今日步数</span></div>
    </div>
  `;

  const timeline = [
    ["09:18", `${person.doctor} 已收到 ${riskMeta[risk].label} 风险提醒。`],
    ["08:43", `系统向 ${person.family} 推送健康状态。`],
    ["08:42", `${person.name} 完成居家测量。`],
    ["昨日", "智能药盒同步服药记录。"],
  ];

  qs("#familyTimeline").innerHTML = timeline
    .map(
      ([time, text]) => `
        <article class="timeline-item">
          <time>${time}</time>
          <p class="item-body">${text}</p>
        </article>
      `,
    )
    .join("");

  const permissions = ["健康状态", "异常提醒", "随访记录", "月度报告"];
  qs("#permissionList").innerHTML = permissions
    .map(
      (item) => `
        <div class="permission-item">
          <strong>${item}</strong>
          <span class="toggle" aria-label="${item}已授权"></span>
        </div>
      `,
    )
    .join("");
}

function renderNursing() {
  const visits = residents
    .filter((person) => ["red", "orange"].includes(riskFor(person)) || person.tags.includes("独居"))
    .sort((a, b) => riskScore(b) - riskScore(a));

  qs("#visitList").innerHTML = visits
    .map(
      (person, index) => `
        <article class="visit-item">
          <div class="item-title">
            <strong>${index + 1}. ${person.name}</strong>
            ${formatRisk(person)}
          </div>
          <p class="item-body">${person.building} 栋 ${person.room} · 护理员 ${person.nurse}</p>
          <div class="visit-meta">
            <span>血压 ${latest(person.bp)} mmHg</span>
            <span>步数 ${person.activity}</span>
            <span>${person.tags.slice(0, 2).join(" / ")}</span>
          </div>
        </article>
      `,
    )
    .join("");

  const photos = [
    ["package-check", "药盒照片"],
    ["utensils", "饮食记录"],
    ["home", "居住环境"],
    ["file-check-2", "随访签名"],
  ];

  qs("#photoGrid").innerHTML = photos
    .map(
      ([icon, label]) => `
        <div class="photo-item">
          <div>
            <i data-lucide="${icon}"></i>
            <strong>${label}</strong>
          </div>
        </div>
      `,
    )
    .join("");
}

function huaweiSnapshot(person) {
  const liveMetrics = huaweiLiveRecord?.metrics;
  return {
    source: "HUAWEI_HEALTH",
    residentId: person.id,
    residentName: person.name,
    authorized: huaweiConnected,
    lastSync: huaweiLastSync,
    metrics: {
      heartRateBpm: liveMetrics?.heartRateBpm || latest(person.heart),
      steps: liveMetrics?.steps || person.activity,
      sleepHours: liveMetrics?.sleepHours || person.sleep,
      caloriesKcal: liveMetrics?.caloriesKcal || 0,
      workoutMinutes: liveMetrics?.workoutMinutes || 0,
      medicationAdherence: person.adherence,
    },
    carelinkMapping: {
      heartRateBpm: "vitalSigns.heartRate",
      steps: "behavior.activity.steps",
      sleepHours: "behavior.sleep.durationHours",
      workout: "rehab.exerciseRecord",
    },
    riskEngineInput: ["heartRateBpm", "steps", "sleepHours", "medicationAdherence"],
  };
}

function renderDevices() {
  const person = selectedResident();
  const status = huaweiConnected ? "已授权接入" : "待用户授权";
  const statusColor = huaweiConnected ? "green" : "yellow";
  const lastSyncText = huaweiConnected ? huaweiLastSync : "等待模拟授权";
  const dataMode = huaweiLiveRecord ? "真实桥接数据" : window.location.protocol === "file:" ? "file 页面仅支持演示" : "等待手机端推送";

  qs("#deviceStatus").innerHTML = `
    <div class="device-status-row">
      <span class="status-chip ${statusColor}">${status}</span>
      <span class="status-chip green">Huawei Watch / Band</span>
      <span class="status-chip yellow">Health Service Kit</span>
      <span class="status-chip ${huaweiLiveRecord ? "green" : "yellow"}">${dataMode}</span>
    </div>
    <h4>${person.name}的华为运动健康数据接入</h4>
    <p>正式版本通过华为运动健康与 Health Service Kit 获取用户授权后的心率、步数、睡眠和运动记录。手机端桥接 APK 读取真实数据后推送到 CareLink 本地接收服务，再写入健康档案和 AI 风险引擎。</p>
    <div class="summary-strip">
      <div><strong>${latest(person.heart)}</strong><span>当前心率 bpm</span></div>
      <div><strong>${person.activity}</strong><span>今日步数</span></div>
      <div><strong>${person.sleep}h</strong><span>昨晚睡眠</span></div>
      <div><strong>${lastSyncText}</strong><span>最近同步</span></div>
    </div>
  `;

  qs("#deviceMetrics").innerHTML = huaweiMetrics
    .map(
      ([icon, title, text]) => `
        <article class="device-metric">
          <i data-lucide="${icon}"></i>
          <div>
            <strong>${title}</strong>
            <span>${text}</span>
          </div>
        </article>
      `,
    )
    .join("");

  qs("#huaweiFlow").innerHTML = huaweiFlow
    .map(
      ([icon, title, text], index) => `
        <article class="flow-step">
          <i data-lucide="${icon}"></i>
          <div>
            <strong>${index + 1}. ${title}</strong>
            <p>${text}</p>
          </div>
        </article>
      `,
    )
    .join("");

  qs("#huaweiPayload").textContent = JSON.stringify(huaweiSnapshot(person), null, 2);

  qs("#sourceList").innerHTML = huaweiRequirements
    .map(
      ([title, text]) => `
        <article class="source-item">
          <strong>${title}</strong>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

function renderEngine() {
  const person = selectedResident();
  const inputs = [
    ["血压偏离", Math.min(100, Math.max(0, latest(person.bp) - 110)), `${latest(person.bp)} mmHg`],
    ["血糖偏离", Math.min(100, Math.round(latest(person.glucose) * 9)), `${latest(person.glucose).toFixed(1)} mmol/L`],
    ["用药风险", 100 - person.adherence, `${person.adherence}%`],
    ["活动不足", Math.max(0, Math.min(100, 100 - person.activity / 50)), `${person.activity} 步`],
    ["睡眠不足", Math.max(0, Math.min(100, (7 - person.sleep) * 18)), `${person.sleep} 小时`],
  ];

  qs("#engineInputs").innerHTML = inputs
    .map(
      ([label, value, text]) => `
        <div class="engine-input">
          <strong>${label}</strong>
          <div class="bar-track"><div class="bar-fill" style="width:${value}%"></div></div>
          <span>${text}</span>
        </div>
      `,
    )
    .join("");

  const risk = riskFor(person);
  qs("#riskOutput").innerHTML = `
    <div>
      <span class="risk-pill ${risk}">${riskMeta[risk].label}</span>
      <strong>${riskScore(person)}</strong>
      <p>${person.name} 当前输出为“${riskMeta[risk].action}”。系统生成任务和建议，医生确认后执行医疗相关处置。</p>
    </div>
  `;

  qs("#complianceList").innerHTML = complianceItems
    .map(
      ([title, text]) => `
        <article class="compliance-item">
          <strong>${title}</strong>
          <p>${text}</p>
        </article>
      `,
    )
    .join("");
}

function applyHuaweiLiveRecord(record) {
  if (!record?.connected || !record.metrics) return false;
  const person = residents.find((item) => item.id === record.residentId) || selectedResident();
  selectedId = person.id;

  const heartRate = Number(record.metrics.heartRateBpm);
  if (heartRate > 0) {
    person.heart.push(heartRate);
    if (person.heart.length > 7) person.heart.shift();
  }

  const steps = Number(record.metrics.steps);
  if (steps > 0) person.activity = steps;

  const sleepHours = Number(record.metrics.sleepHours);
  if (sleepHours > 0) person.sleep = Number(sleepHours.toFixed(1));

  person.lastUpload = new Date(record.receivedAt || Date.now()).toLocaleTimeString("zh-CN", {
    hour: "2-digit",
    minute: "2-digit",
  });
  huaweiLastSync = person.lastUpload;
  huaweiConnected = true;
  huaweiLiveRecord = record;
  return true;
}

async function fetchLiveHuaweiData(showEmptyToast = true) {
  if (window.location.protocol === "file:") {
    showToast("真实数据需要从 http://localhost:5173 打开，file 页面无法读取本地接口");
    return false;
  }

  try {
    const response = await fetch(`/api/health/latest?t=${Date.now()}`);
    const record = await response.json();
    if (!applyHuaweiLiveRecord(record)) {
      if (showEmptyToast) showToast("还没有收到手机端推送的华为健康数据");
      return false;
    }
    renderAll();
    showToast("已读取真实华为运动健康数据");
    return true;
  } catch (error) {
    showToast(`读取真实数据失败：${error.message}`);
    return false;
  }
}

function renderAll() {
  renderMetrics();
  renderMap();
  renderAlerts();
  renderLoop();
  renderPatientList();
  renderCasePanel();
  renderTasks();
  renderResident();
  renderFamily();
  renderNursing();
  renderDevices();
  renderEngine();
  if (window.lucide) window.lucide.createIcons();
}

function switchView(view) {
  qsa("[data-view]").forEach((section) => section.classList.toggle("is-active", section.dataset.view === view));
  qsa("[data-view-target]").forEach((button) => button.classList.toggle("is-active", button.dataset.viewTarget === view));
  const titles = {
    command: "社区指挥台",
    doctor: "医生工作台",
    resident: "居民端",
    family: "家属端",
    nursing: "护理端",
    devices: "设备接入",
    engine: "AI 风险引擎",
  };
  qs("#viewTitle").textContent = titles[view] || "康邻 CareLink";
}

function simulateMeasurement() {
  const person = selectedResident();
  const adjust = (values, spread) => {
    const next = Math.max(0, Math.round(latest(values) + (Math.random() * spread * 2 - spread)));
    values.push(next);
    if (values.length > 7) values.shift();
  };

  adjust(person.bp, 8);
  person.glucose.push(Number(Math.max(4.5, latest(person.glucose) + (Math.random() * 1.2 - 0.4)).toFixed(1)));
  if (person.glucose.length > 7) person.glucose.shift();
  adjust(person.heart, 5);
  person.lastUpload = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
  renderAll();
  showToast(`${person.name} 的新测量已接入，风险等级已刷新`);
}

function generateFollowupTasks() {
  const newTasks = residents
    .filter((person) => riskFor(person) === "yellow")
    .map((person) => ({
      id: `generated-${person.id}-${Date.now()}`,
      person,
      risk: "yellow",
      title: "系统生成复测提醒和家属触达任务",
      owner: person.doctor,
    }));

  generatedTasks = newTasks;
  renderTasks();
  showToast(`已生成 ${newTasks.length} 条黄色风险复测任务`);
}

function syncHuaweiData() {
  if (window.location.protocol !== "file:") {
    fetchLiveHuaweiData(true);
    return;
  }

  const person = selectedResident();
  const nextHeart = Math.max(58, Math.min(112, latest(person.heart) + Math.round(Math.random() * 10 - 4)));
  person.heart.push(nextHeart);
  if (person.heart.length > 7) person.heart.shift();
  person.activity = Math.max(120, Math.round(person.activity + 220 + Math.random() * 850));
  person.sleep = Number(Math.max(3.8, Math.min(8.2, person.sleep + (Math.random() * 0.8 - 0.3))).toFixed(1));
  person.sleep = Number(person.sleep);
  person.lastUpload = new Date().toLocaleTimeString("zh-CN", { hour: "2-digit", minute: "2-digit" });
  huaweiLastSync = person.lastUpload;
  huaweiConnected = true;
  renderAll();
  showToast(`已同步 ${person.name} 的华为运动健康数据`);
}

function connectHuaweiHealth() {
  huaweiConnected = true;
  syncHuaweiData();
  switchView("devices");
  showToast("模拟授权完成：华为运动健康数据已接入 CareLink");
}

function bindEvents() {
  qsa("[data-view-target]").forEach((button) => {
    button.addEventListener("click", () => switchView(button.dataset.viewTarget));
  });

  qsa("[data-filter]").forEach((button) => {
    button.addEventListener("click", () => {
      activeFilter = button.dataset.filter;
      qsa("[data-filter]").forEach((item) => item.classList.toggle("is-active", item === button));
      renderPatientList();
    });
  });

  qs("#simulateBtn").addEventListener("click", simulateMeasurement);
  qs("#taskBtn").addEventListener("click", generateFollowupTasks);
  qs("#huaweiConnectBtn").addEventListener("click", connectHuaweiHealth);
  qs("#huaweiSyncBtn").addEventListener("click", syncHuaweiData);
  qs("#helpBtn").addEventListener("click", () => showToast("已通知家属、社区医生和物业值守台"));
  qs("#voiceBtn").addEventListener("click", () => showToast("语音问候已发送给老人端"));
  qs("#routeBtn").addEventListener("click", () => showToast("已按风险等级和楼栋距离优化上门路线"));
  qs("#serviceForm").addEventListener("submit", (event) => {
    event.preventDefault();
    showToast("上门记录已同步到医生工作台");
  });

  if (window.location.protocol !== "file:") {
    window.setInterval(() => fetchLiveHuaweiData(false), 15000);
  }
}

function tickClock() {
  const text = new Date().toLocaleString("zh-CN", {
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
  });
  qs("#clockText").textContent = text;
}

window.addEventListener("DOMContentLoaded", () => {
  tickClock();
  window.setInterval(tickClock, 30000);
  bindEvents();
  renderAll();
});
