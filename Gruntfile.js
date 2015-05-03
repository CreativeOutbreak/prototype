module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    style: 'expanded'
                },
                files: {
                    'css/main.css': 'scss/main.scss',
                    'css/main2.css': 'scss/main2.scss',
                    'css/header.css': 'scss/header.scss',
                }
            }
        },
        
        watch: {
            scripts: {
                files: ['scss/**/*.scss'],
                tasks: ['sass'],
                options: {
                    spawn: false,
                },
            },
        },

    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass', 'watch']);
};
