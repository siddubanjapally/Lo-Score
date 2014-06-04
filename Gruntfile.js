module.exports = function(grunt) {
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: true
            },
            lint: ['Gruntfile.js', 'src/**/*.js']
        }
    });
};
