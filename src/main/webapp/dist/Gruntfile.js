module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

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

    // Default task(s).
    grunt.registerTask('default', ['handlebars']); //grunt 명령어로 실행할 작업

};