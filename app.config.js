module.exports = {
  apps: [
    {
      name: "natalie-cupalova-website",
      script: "./app.js",
      env: {
        PORT: 8089,
        NODE_ENV: "production"
      },
      cwd: "/apps/natalie-cupalova-website",
      node_args: "--harmony"
    }
  ]
}