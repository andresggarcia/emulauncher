var exec = require('child_process').exec;

module.exports = {
  listAvds: async () => {
    return new Promise((res, rej) => {
      exec("$ANDROID_HOME/tools/emulator -list-avds", (error, stdout, stderr) => {
        if (error) {
          rej(error);
        } else {
          setTimeout(() => {
            const a = stdout
              .split(/\r?\n/)
              .filter((a) => (a))
            res(a);
          }, 700);
        }
      })
    })
      .then(res => res)
      .catch(err => err)
  },
  runAvd: (avdName) => {
    exec(`$ANDROID_HOME/tools/emulator -avd ${avdName}`, (err, stdout, stderr) => stdout)
  }
}
