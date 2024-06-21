function about_me(){
    remove_class_active();
    $("#btn_about_me").addClass("active");
    $("#btn_device_about_me").addClass("active");
    $("#section-about-me").slideDown();
    $("#row_close").slideUp(function(){
        $("#device-menu").slideUp();
    });
}

function courses(){
    remove_class_active();
    $("#btn_courses").addClass("active");
    $("#btn_device_courses").addClass("active");
    $("#section-courses").slideDown();
    $("#row_close").slideUp(function(){
        $("#device-menu").slideUp();
    });
}

function certifications(){
    remove_class_active();
    $("#btn_certifications").addClass("active");
    $("#btn_device_certifications").addClass("active");
    $("#section-certifications").slideDown();
    $("#row_close").slideUp(function(){
        $("#device-menu").slideUp();
    });
}

function projects(){
    remove_class_active();
    $("#btn_projects").addClass("active");
    $("#btn_device_projects").addClass("active");
    $("#section-projects").slideDown();
    $("#row_close").slideUp(function(){
        $("#device-menu").slideUp();
    });
}

function cv(){
    window.location.href="resources/images/Bahaa Yassine CV1.pdf";
}

function remove_class_active(){
    $("#btn_about_me").removeClass("active");
    $("#btn_courses").removeClass("active");
    $("#btn_certifications").removeClass("active");
    $("#btn_projects").removeClass("active");

    $("#btn_device_about_me").removeClass("active");
    $("#btn_device_courses").removeClass("active");
    $("#btn_device_certifications").removeClass("active");
    $("#btn_device_projects").removeClass("active");

    $("#section-about-me").slideUp();
    $("#section-courses").slideUp();
    $("#section-certifications").slideUp();
    $("#section-projects").slideUp();
}

function open_device_menu(){
    $("#device-menu").slideDown(function(){
        $("#row_close").slideDown();
    });
}

function close_menu(){
    $("#row_close").slideUp(function(){
        $("#device-menu").slideUp();
    });
}