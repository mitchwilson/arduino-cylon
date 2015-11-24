module.exports = function(grunt) {
    grunt.initConfig({
        jshint: {
            files: [
                '*.js',
                '*.json',
                'robot/**/*.js'
            ]
        },
        watch: {
            files: ['<%= jshint.files %>'],
            task: ['jshint']
        }
    });
    grunt.loadNpmTasks('grunt-contrib-jshint');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default', ['jshint', 'watch']);
};
