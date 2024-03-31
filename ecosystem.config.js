const path = require("path");

module.exports = {
  apps: [
    {
      name: "experss-server",
      script: "/Users/thabish/Dev/my-proj/my-server/src/index.ts",
      script: path.join(__dirname, "/src/index.ts"),
      watch: true, //auto reload TURN false IN PRODUCTION,
      out_file: path.join(__dirname, "/logs/app.log"),
      error_file: path.join(__dirname, "/logs/app.error.logs"),
      // instances: -1,
      // exec_mode: "cluster",
      // max_memory_restart: '1G', // restart if memory > 1G
      // cron_restart:, '0 */24 * * *', // restart every 24 hours
      // restart_delay: 10000 // wait for 10 sec before restarting
      // max_restarts: 16, // restart if restarts > 16, usually done to avoid continuous restarts and crashes
      // min_uptime: 5000, // amount of time for app to be up before restarting
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "proxy-server",
      script: path.join(__dirname, "/../../vercel-proxy-server/src/index.ts"),
      watch: true, //auto reload TURN false IN PRODUCTION
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
