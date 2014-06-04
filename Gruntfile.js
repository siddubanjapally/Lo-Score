module.exports = function(grunt) {
    grunt.registerTask('default', ['jshint', 'karma:spec']);
    grunt.registerTask('test', ['karma:singleRun']);
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-karma');
    grunt.initConfig({
        jshint: {
            options: {
                reporter: require('jshint-stylish'),
                jshintrc: true
            },
            lint: ['Gruntfile.js', 'src/**/*.js']
        },
        karma: {
            spec: {
                configFile: 'karma.conf.js',
                autoWatch: true
            },
            singleRun: {
                configFile: 'karma.conf.js',
                singleRun: true
            }
        }
    });
};
