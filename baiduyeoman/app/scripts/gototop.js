$(document).ready(function() {
    $(".to-top").hover(function() {
        $(".icon-text").css("display", "block");
        $(".icontop").css("display", "none");
    }, function() {
        $(".icon-text").css("display", "none");
        $(".icontop").css("display", "block");
    });
    // 到一定的距离显示
    var	scrollTop=$(window).scrollTop();
    if (scrollTop==0) {
	$(".to-top").css("display","none");
}
$(window).scroll(function(){
var	scrollTop=$(window).scrollTop();
	if (scrollTop>=40) {
	$(".to-top").fadeIn();
}else{
	$(".to-top").fadeOut();
}
});
$(".to-top").click(function(){
$("body").animate({"scrollTop":"0px"},300);
});
});
