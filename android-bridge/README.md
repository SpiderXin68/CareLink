# CareLink Android Huawei Health Bridge

这个目录用于真实接入华为手表/华为运动健康数据。

当前本机已经生成调试签名：

- Package name: `com.carelink.healthbridge`
- Keystore: `android-bridge/keystore/carelink-dev.jks`（本地文件，不提交到 GitHub）
- Alias: `carelink-dev`
- SHA-256 certificate fingerprint: `9A:1D:09:17:C6:56:4F:68:10:5F:1F:29:1B:AA:C1:25:0C:77:80:76:40:7E:38:66:6C:5A:21:D1:E1:99:3B:D9`

## 真实数据链路

1. 华为手表/手环先同步到手机的华为运动健康 App。
2. CareLink Android Bridge 通过 HMS Core Health Service Kit 请求用户授权。
3. 授权成功后读取心率、步数、睡眠、运动等数据。
4. Bridge App 将数据 POST 到电脑上的 CareLink 接收服务：

```http
POST http://<电脑局域网IP>:5173/api/health/huawei
Content-Type: application/json
```

示例 payload：

```json
{
  "source": "HUAWEI_HEALTH",
  "residentId": "r001",
  "residentName": "李秀兰",
  "metrics": {
    "heartRateBpm": 76,
    "steps": 4321,
    "sleepHours": 6.4,
    "caloriesKcal": 218,
    "workoutMinutes": 22
  }
}
```

## 下一步你需要在华为开发者后台操作

1. 打开 AppGallery Connect / 华为开发者联盟。
2. 创建 Android 应用。
3. 包名填写：`com.carelink.healthbridge`。
4. 配置 SHA-256 指纹：`9A:1D:09:17:C6:56:4F:68:10:5F:1F:29:1B:AA:C1:25:0C:77:80:76:40:7E:38:66:6C:5A:21:D1:E1:99:3B:D9`。
5. 开通 HMS Core / Health Service Kit。
6. 申请读取健康数据相关权限：心率、步数/活动、睡眠、运动记录。
7. 下载 `agconnect-services.json`。
8. 把 `agconnect-services.json` 放到：`android-bridge/app/agconnect-services.json`。

完成第 8 步后告诉我，我再继续生成/调整 Android 工程并带你编译安装 APK。

## CareLink 本地接收服务

本项目已经有接收服务：`../bridge-server.js`。

启动后访问：

- 网页：`http://localhost:5173`
- 最新健康数据：`http://localhost:5173/api/health/latest`
- 手机端 POST：`http://<电脑局域网IP>:5173/api/health/huawei`

注意：手机访问电脑时不要用 `localhost`，要用电脑在同一 Wi-Fi 下的局域网 IP。
