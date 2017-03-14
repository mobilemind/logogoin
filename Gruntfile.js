/*global module:false*/
module.exports = function(grunt) {
  "use strict";
  // Project configuration
  grunt.initConfig({
    "clean": {
      "files": ["web/logogoin.*"]
    },
    "js2uri":  {
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
    "jshint": {
      "files": ["Gruntfile.js", "src/logogoin.js"],
      "options": {
        "bitwise": true,
        "boss": true,
        "browser": true,
        "eqnull": true,
        "evil": true,
        "lastsemic": true,
        "latedef": true,
        "multistr": true,
        "noarg": true,
        "noempty": true,
        "node": true,
        "scripturl": true,
        "strict": true,
        "sub": true,
        "trailing": true,
        "undef": true,
        "unused": true
      }
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
    }
  });

  // Load plugins
  grunt.loadNpmTasks("grunt-contrib-clean");
  grunt.loadNpmTasks("grunt-contrib-jshint");
  grunt.loadNpmTasks("grunt-contrib-uglify");
  grunt.loadNpmTasks("js2uri");

  // Default task
  grunt.registerTask("default", [ "clean", "jshint", "uglify", "js2uri"] );
  // test task
  grunt.registerTask("test", [ "default"] );
};
