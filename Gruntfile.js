/*global module:false*/
module.exports = function(grunt) {
  "use strict";
  // Project configuration
  grunt.initConfig({
    meta: {
      version: '0.0.6'
    },
    jshint: {
      files: ['Gruntfile.js', 'src/*.js'],
      options: {
        strict: true,
        latedef: true,
        noarg: true,
        noempty: true,
        trailing: true,
        undef: true,
        unused: true,
        sub: true,
        boss: true,
        eqnull: true,
        evil: true,
        lastsemic: true,
        multistr: true,
        scripturl: true,
        browser: true
      }
    },
    uglify: {
      'web/logogoin.js': ['src/*.js'],
      options: {
        mangle: {toplevel: true},
        squeeze: {sequences: false, conditionals: false, hoist_vars: true},
        codegen: {quote_keys: false}
      }
    },
    js2uri:  {
     'web/logogoin.js': ['web/logogoin.js'],
      options: {
        protocol: 'javascript:',
        useNewlineEOL: true,
        useSingleQuote: true,
        appendVoid: true,
        // customVersion: '', // use value from meta.version above
        appendVersion: true,
        noLastSemicolon: true,
        forceLastSemicolon: false,
        entityEncode: false
      }
    }
  });

  // Load "jshint" plugin
  grunt.loadNpmTasks('grunt-contrib-jshint');

  // Load "uglify" plugin
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Load "js2uri" plugin
  grunt.loadNpmTasks('js2uri');

  // Default task
  grunt.registerTask('default', [ "jshint", "uglify", "js2uri"] );
};
