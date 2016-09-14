module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    'string-replace': {
      dist: {
        files: [{
          src: '../view/*.html',
          dest: '../dest/'
        }],
        options: {
          replacements: [{
            pattern: '<div class="ctrl-audit icon btn">启用</div>',
            replacement: '<div class="ctrl-tick icon btn">启用</div>'
          }]
        }
      }
    }
  });
  grunt.loadNpmTasks('grunt-string-replace');
  grunt.registerTask('stringreplace-task', ['string-replace']);
}