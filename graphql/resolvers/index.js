const authResolver = require('./auth');
const resourcesResolver = require('./resources');

const rootResolver = {
  ...authResolver,
  ...resourcesResolver,
};

module.exports = rootResolver;