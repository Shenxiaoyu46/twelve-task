$(document).ready(function() {
    localStorage = window.localStorage;
    var i = 1;
    var key = "theme";
    // 更换皮肤
    $(".skin_img_content img").hover(function() {
        i = $(this).attr("id");
        $(".skin_content img").attr("src", 'images/style' + i + '.jpg');
    });
    $(".skin_img_content img").click(function() {
        i = $(this).attr("id");
        $(".bg-container img").attr("src", 'images/style' + i + 's.jpg');
        localStorage.setItem(key, i);
        $('.img-choose' + i + '').css("display", "block");
    });
    // 换肤
    $(".s-skin").click(function() {
        $(".bodystyle").slideDown();
    });
    // 换肤收起
    $(".s-skin-up").click(function() {
        $(".bodystyle").slideUp();
    });
});
window.onload = function() {
    var i = localStorage.getItem("theme");
    if (i > 0) {
        $(".bg-container img").attr("src", 'images/style' + i + 's.jpg');
    }

}
