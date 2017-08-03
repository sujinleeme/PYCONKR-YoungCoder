// the kludge is used to
// load dependency files into the global namespace, so that the
// examples can run on node.

module.exports = function() {
  for (var i = 0; i < arguments.length; i++)
    (1,eval)(require("fs").readFileSync(__dirname + "/../" + arguments[i], "utf8"));
};
