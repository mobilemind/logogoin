module.exports = function (grunt) {
  "use strict";

  // Project configuration
  grunt.initConfig({
    "clean": {"files": ["web/logogoin.*"]},
    "eslint": {
      "options": {"configFile": ".eslintrc.yml"},
      "target": ["Gruntfile.js", "src/*.js"]
    },
    "js2uri": {
      "options": {
        "appendVersion": true,
        "appendVoid": true,
        // "customVersion": "", // use value from meta.version
        "entityEncode": false,
        "forceLastSemicolon": false,
        "noLastSemicolon": true,
        "protocol": "javascript:",
        "useNewlineEOL": true,
        "useSingleQuote": true
      },
      "web/logogoin.js.url": ["web/logogoin.js"]
    },
    "pkg": grunt.file.readJSON("package.json"),
    "uglify": {
      "options": {
        "codegen": {"quote_keys": false},
        "compress": {
          "booleans": true,
          "cascade": true,
          "conditionals": true,
          "dead_code": true,
          "drop_debugger": true,
          "evaluate": true,
          "hoist_funs": false,
          "hoist_vars": false,
          "if_return": true,
          "join_vars": true,
          "loops": true,
          "properties": true,
          "sequences": true,
          "unsafe": false,
          "unused": true,
          "warnings": true
          },
        "report": "min"
      },
      "web/logogoin.js": ["src/logogoin.js"]
    },
    "yamllint": {
      "files": {"src": [".*.yml", "*.yml", "*.yaml"]},
      "options": {"schema": "FAILSAFE_SCHEMA"}
    }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("@sailshq/grunt-contrib-uglify");
  grunt.loadNpmTasks("grunt-eslint");
  grunt.loadNpmTasks("grunt-yamllint");
  grunt.loadNpmTasks("js2uri");

  // Default task
  grunt.registerTask("default", ["yamllint", "eslint", "clean", "uglify", "js2uri"]);
  // test task
  grunt.registerTask("test", ["default"]);
};
