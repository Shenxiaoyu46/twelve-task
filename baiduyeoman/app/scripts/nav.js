$(document).ready(function(){
// 我的关注
    $(".menu_mine").click(function(e) {

        $("#news-innercon").hide();
        $(".nav-container").hide();
        $(".video-wrapper").hide();
        $(".myconcern-container").show();

        $(".menu_mine").css({
            "background-color": "#9a9da2",
            "color": "#fff",
            "font-weight": "bold",
            "background-image": "none"
        });
        $(".menus-item").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $(".mine-icon").css("background-position", "-144px 0");

    });
    // 我的导航
    $(".myconcern-container").click(function() {
        $(".nav-blank").toggle();

    });
    // 推荐
    $("#menus-item1").click(function() {

        $("#news-innercon").show();
        $(".nav-container").hide();
        $(".video-wrapper").hide();
        $(".myconcern-container").hide();
        $("#menus-item1").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": " #fff"
        });
        $(".menu_mine").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $("#menus-item2").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $("#menus-item3").css({
            "background-color": "#fff",
            "color": "#333"
        });
    });
    // 导航
    $("#menus-item2").click(function() {

        $("#news-innercon").hide();
        $(".video-wrapper").hide();
        $(".nav-container").show();
        $("#menus-item2").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": " #fff"
        });

        $("#menus-item1").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $(".menu_mine").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $("#menus-item3").css({
            "background-color": "#fff",
            "color": "#333"
        });

    });
    // 视频
    $("#menus-item3").click(function() {

        $("#news-innercon").hide();
        $(".nav-container").hide();
        $(".myconcern-container").hide();
        $(".video-wrapper").show();
        $("#menus-item3").css({
            "background-color": "#9a9da2",
            "font-weight": "bold",
            "color": " #fff"
        });
        $("#menus-item1").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $("#menus-item2").css({
            "background-color": "#fff",
            "color": "#333"
        });
        $(".menu_mine").css({
            "background-color": "#fff",
            "color": "#333"
        });
    });
});