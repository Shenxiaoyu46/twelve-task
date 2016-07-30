$(document).ready(function() {

    // 到一定的距离显示
    /*单例模式*/
    var gotop = {
        init: function() {
            var me = this;
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.scrollTop = $(window).scrollTop();
            me.btn = $(".to-top");
        },
        bind: function() {
            var me = this;
            if (me.scrollTop == 0) {
                me.btn.css("display", "none");
            }
        }
    }
    gotop.init();
    var length = {
        init: function() {
            var me = this;
            this.bind();
        },
        bind: function() {
            var me = this;
            $(window).scroll(function() {
                me.scrollTop = $(window).scrollTop();
                if (me.scrollTop >= 40) {
                    gotop.btn.fadeIn();
                } else {
                    gotop.btn.fadeOut();
                }
            });
        }
    }
    length.init();
    $(".to-top").hover(function() {
        $(".icon-text").css("display", "block");
        $(".icontop").css("display", "none");
    }, function() {
        $(".icon-text").css("display", "none");
        $(".icontop").css("display", "block");
    });
    $(".to-top").click(function() {
        $("body").animate({ "scrollTop": "0px" }, 300);
    });
});
