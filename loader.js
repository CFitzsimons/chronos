const normalizedPath = require('path').join(__dirname, 'modules');

const modules = [];
require('fs').readdirSync(normalizedPath).forEach((fileName) => {
  modules.push(require(`./modules/${fileName}`));
});

module.exports = modules;
