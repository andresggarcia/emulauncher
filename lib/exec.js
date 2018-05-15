var exec = require('child_process').exec;

module.exports = {
  execute: async (command, callback) => {
    await exec(command, async function (error, stdout, stderr) { await callback(stdout); });
  }
}
