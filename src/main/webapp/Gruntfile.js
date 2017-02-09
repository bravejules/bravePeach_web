module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        copy: {
            options: {},
            main: { files: [
                // includes files within path and its sub-directories
                {expand: true, cwd:'assets/js', src: ['**'], dest: 'dist/js', filter:'isFile', flatten:true},
                {expand: true, cwd:'assets/image' ,src: ['**'], dest: 'dist/image', filter:'isFile'},
                ], },
        },

        cssmin:{
            minify:{

                    files:[

                        { expand: true,
                cwd: 'assets/css',
                src: ['*.css','!*.min.css'],
                dest: 'dist/css',
                ext: '.css'},
                        {expand:true,
                            cwd:'assets/css',
                            src: ['*.min.css'],
                            dest: 'dist/css',
                            ext : '.min.css'}]

            },
            options:{
                keepSpecialComments: 0
            }
        },


        'handlebars': {
            options: {
                namespace: "Handlebars.templates",
                processName:function(filePath) {
                    var pattern=/handlebar\/(.+\/)*(.+)\.hbs/gi;
                    return pattern.exec(filePath)[2];
                }
            },
            compile : {
                files: {
                    //destination : [target list]
                    "dist/template/template.js" : ["handlebar/head.hbs", "handlebar/header.hbs", "handlebar/footer.hbs", "handlebar/nav_general.hbs"],
                    "dist/template/login.js" : ["handlebar/login.hbs"],
                    "dist/template/main.js" : ["handlebar/main.hbs"],
                    "dist/template/sign_up.js" : ["handlebar/sign_up.hbs"],
                    "dist/template/sign_up_form.js" : ["handlebar/sign_up_form.hbs"],
                    "dist/template/sign_up_ok.js" : ["handlebar/sign_up_ok.hbs"],
                    "dist/template/write_trip.js" : ["handlebar/write_trip.hbs"],
                    "dist/template/trip_list.js" : ["handlebar/trip_list.hbs"],
                    "dist/template/help.js" : ["handlebar/help.hbs"],
                    "dist/template/guide_support_list.js" : ["handlebar/guide_support_list.hbs"],
                    "dist/template/html_list.js" : ["handlebar/html_list.hbs"],
                    "dist/template/message_list.js" : ["handlebar/message_list.hbs"],
                    "dist/template/welcome.js" : ["handlebar/welcome.hbs"],
                    "dist/template/header.js" : ["handlebar/head.hbs", "handlebar/header.hbs"],
                    "dist/template/head.js" : ["handlebar/head.hbs"],
                    "dist/template/enroll_trip.js" : ["handlebar/enroll_trip.hbs"],
                    "dist/template/find_guide.js" : ["handlebar/find_guide.hbs"]
                }
            }
        },
        // grunt watch 명령으로 아래 옵션을 실행
        watch:{
            files:'handlebar/*.hbs',
            tasks: ['default','handlebars']
        }
    });

    grunt.loadNpmTasks('grunt-contrib-handlebars');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // Default task(s).
    grunt.registerTask('default', ['handlebars','cssmin','copy']); //grunt 명령어로 실행할 작업

};