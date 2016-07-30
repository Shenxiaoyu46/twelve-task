$(document).ready(function() {
/*这里用了单例模式。四个点击事件，虽然名称不同但是运用手法相同，都是点击自己的时候自己显示，而
其他的隐藏。对于每次都要写类似的显示，消失的函数。这样写可以提高系统性能，节约一点资源。*/
    // 我的关注
    var index = {
        init: function() {
            var me = this;
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.btn1 = $(".menu_mine");
            me.btn2 = $(".myconcern-container");
        },
        bind: function() {
            var me = this;
            me.btn1.click(function(e) {
                item1.btn2.hide();
                item2.btn2.hide();
                item3.btn2.hide();
                me.btn2.show();
                me.btn1.css({
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
        }
    }
    index.init();
    // 我的导航
    $(".myconcern-container").click(function() {
        $(".nav-blank").toggle();

    });
    // 推荐
    var item1 = {
        init: function() {
            var me = this;
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.btn1 = $("#menus-item1");
            me.btn2 = $("#news-innercon");
        },
        bind: function() {
            var me = this;
            me.btn1.click(function(e) {
                me.btn2.show();
                item2.btn2.hide();
                item3.btn2.hide();
                index.btn2.hide();
                me.btn1.css({
                    "background-color": "#9a9da2",
                    "font-weight": "bold",
                    "color": " #fff"
                });
                index.btn1.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
                item2.btn1.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
                item3.btn1.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
            });
        }
    }
    item1.init();
    // 导航
    var item2 = {
        init: function() {
            var me = this;
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.btn1 = $("#menus-item2");
            me.btn2 = $(".nav-container");
        },
        bind: function() {
            var me = this;
            me.btn1.click(function(e) {
                item1.btn2.hide();
                item3.btn2.hide();
                me.btn2.show();
                me.btn1.css({
                    "background-color": "#9a9da2",
                    "font-weight": "bold",
                    "color": " #fff"
                });
                item1.btn1.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
                index.btn1.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
                item3.btn2.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
            });
        }
    }
    item2.init();
    // 视频
    var item3 = {
        init: function() {
            var me = this;
            this.render();
            this.bind();
        },
        render: function() {
            var me = this;
            me.btn1 = $("#menus-item3");
            me.btn2 = $(".video-wrapper");
        },
        bind: function() {
            var me = this;
            me.btn1.click(function(e) {
                item1.btn2.hide();
                item2.btn2.hide();
                index.btn2.hide();
                me.btn2.show();
                me.btn1.css({
                    "background-color": "#9a9da2",
                    "font-weight": "bold",
                    "color": " #fff"
                });
                item1.btn1.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
                item2.btn1.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
                index.btn1.css({
                    "background-color": "#fff",
                    "color": "#333"
                });
            });
        }
    }
    item3.init();
});
