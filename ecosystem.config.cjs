module.exports = {
  apps: [
    {
      name: "ivanreshetar.com",
      script: "./node_modules/next/dist/bin/next start -p 3050",
      cwd: "/www/wwwroot/ivanreshetar.com",
      instances: 1,
      exec_mode: "fork",
      watch: false,
      max_memory_restart: "500M",
      log_date_format: "YYYY-MM-DD HH:mm:ss Z",
      merge_logs: true,
      env_file: "/www/wwwroot/ivanreshetar.com/.env",
    },
  ],
};
