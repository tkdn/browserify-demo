/*global module:false*/
module.exports = function(grunt) {
  'use srtict';

  // Project configuration.
  grunt.initConfig({
    uglify: {
      dist: {
        src: 'dist/bundle.js',
        dest: 'dist/bundle.min.js'
      }
    },
    browserify: {
      dist: {
        src: ['index.js'],
        dest: 'dist/bundle.js'
      }
    }
  });
  grunt.loadNpmTasks('grunt-browserify');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  // Default task.
  grunt.registerTask('default', ['browserify','uglify']);

};
