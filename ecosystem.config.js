module.exports = {
  apps: [
    {
      name: 'next-app1',
      script: 'yarn',
      args: 'start',
      env_production: {
        NODE_ENV: 'production',
      },
    },
  ],
};
