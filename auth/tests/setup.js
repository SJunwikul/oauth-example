const DebugControl = require("../utilities/debug.js");
DebugControl.setLevel(DebugControl.levels.ALL);

module.exports = {
  server: require("../app.js"),
};
