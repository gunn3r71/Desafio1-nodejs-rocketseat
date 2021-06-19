const processJs = require('./process');

let flags = processJs.getFlags(process.argv);

console.log(`${flags.flagGreeting}, ${flags.flagName}`);