module.exports=function(grunt){
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! create by <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            static_mappings: {
                files: [{
                    src: 'dest/scripts/change.js',
                    dest: 'dest/build/change.min.js'
                },{
                  src: 'dest/scripts/moreproduct.js',
                    dest: 'dest/build/moreproduct.min.js'
                },{
                  src: 'dest/scripts/nav.js',
                  dest: 'dest/build/nav.min.js'
                },{
                  src: 'dest/scripts/gototop.js',
                  dest: 'dest/build/gototop.min.js'
                  }],
            }
        },
        concat: {
            bar: {
                src: ['dest/build/*.js'],
                dest: 'dest/dest/all.min.js',
            }
        },
        watch: {
            files: ['dest/dest/all.min.js'],
            tasks: ['uglify', 'concat']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.registerTask('default',['uglify','concat','watch']);

};
