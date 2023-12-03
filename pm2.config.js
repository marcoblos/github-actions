module.exports = {
  apps: [
    {
      name: "api",
      cwd: "./apps/api",
      script: "npm",
      args: "start",
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "shared",
      cwd: "./apps/shared",
      script: "npm",
      args: "run start:live",
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "paymentWidget",
      cwd: "./apps/paymentWidget",
      script: "npm",
      args: "run start:live",
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "payment",
      cwd: "./apps/payment",
      script: "npm",
      args: "run start:live",
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "dashboard",
      cwd: "./apps/dashboard",
      script: "npm",
      args: "run start:live",
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "login",
      cwd: "./apps/login",
      script: "npm",
      args: "run start:live",
      env: {
        NODE_ENV: "development"
      }
    },
    {
      name: "host",
      cwd: "./apps/host",
      script: "npm",
      args: "run start:live",
      env: {
        NODE_ENV: "development"
      }
    },
  ],
}
