var common = [
    `--format ${
      process.env.CI || !process.stdout.isTTY ? 'progress' : 'progress-bar'
      }`,
    '--require ./features/support/*.ts',
    '--require-module ts-node/register'
  ].join(' ');
  
  module.exports = {
    default: common,
  };