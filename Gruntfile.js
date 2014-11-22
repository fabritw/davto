module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: '<json:package.json>',
    watch: {
      default: {
        options: {
          spawn: false,
          interrupt: true,
          livereload: true
        },
        files: ['index.html']
      }
    },
    connect: {
      server: {
        options: {
          port: 9000,
          livereload: 35729,
          hostname: 'localhost'
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');

  // Default task.
  grunt.registerTask('default', ['connect', 'watch']);

};
