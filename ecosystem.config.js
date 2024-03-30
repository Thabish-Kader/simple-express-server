module.exports = {
  apps: [
    {
      name: "experss-server",
      script: "/Users/thabish/Dev/my-proj/my-server/src/index.ts",
      watch: true, //auto reload TURN false IN PRODUCTION
      env: {
        NODE_ENV: "development",
      },
    },
    {
      name: "proxy-server",
      script: "/Users/thabish/Dev/my-proj/vercel-proxy-server/src/index.ts",
      watch: true, //auto reload TURN false IN PRODUCTION
      env: {
        NODE_ENV: "development",
      },
    },
  ],
};
