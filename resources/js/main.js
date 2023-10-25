function about_me(){
    remove_class_active();
    $("#btn_about_me").addClass("active");
    $("#btn_device_about_me").addClass("active");
    $("#section-about-me").slideDown();
    $("#device-menu").hide();
}

function courses(){
    remove_class_active();
    $("#btn_courses").addClass("active");
    $("#btn_device_courses").addClass("active");
    $("#section-courses").slideDown();
    $("#device-menu").hide();
}

function certifications(){
    remove_class_active();
    $("#btn_certifications").addClass("active");
    $("#btn_device_certifications").addClass("active");
    $("#section-certifications").slideDown();
    $("#device-menu").hide();
}

function projects(){
    remove_class_active();
    $("#btn_projects").addClass("active");
    $("#btn_device_projects").addClass("active");
    $("#section-projects").slideDown();
    $("#device-menu").hide();
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

    $("#section-about-me").hide();
    $("#section-courses").hide();
    $("#section-certifications").hide();
    $("#section-projects").hide();
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