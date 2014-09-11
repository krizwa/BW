module.exports = function(grunt) {

  grunt.initConfig({
    less: {
      development: {
        options: {
          compress: false,
          yuicompress: false,
          optimization: 2
        },
        files: [
          {
            expand: true,
            cwd: 'less_3_clientlibces1.7/5_components/',
            src: ['*.less'],
            dest: 'css_3_clientlibces1.7/5_components/',
            rename: function(dest, src) {
              return dest + src.replace(/\.less$/, ".css");
            }
          },
          {
            "css_2_clientlibbth1.7/clientlib1.7.css":"less/**/*.less"
          },
          {
            "wealth.barclays.com/etc/designs/bwpublic/clientlib1.7.css":"less/**/*.less"
          }
        ]
      }
    },
    watch: {
      styles: {
        files: ['less_3_clientlibces1.7/**/*.less'], // which files to watch
        tasks: ['less'],
        options: {
          nospawn: true
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-less');
  grunt.loadNpmTasks('grunt-refactor');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('default', ['watch']);
};