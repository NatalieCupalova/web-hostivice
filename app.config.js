module.exports = {
  apps: [
    {
      name: "web-hostivice",
      script: "./app.js",
      env: {
        PORT: 8089,
        NODE_ENV: "production"
      },
      cwd: "/apps/web-hostivice",
      node_args: "--harmony"
    }
  ]
}