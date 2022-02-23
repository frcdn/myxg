function setTab(name, cursel, n) {
    for (i = 1; i <= n; i++) {
        var menu = document.getElementById(name + i);
        var con = document.getElementById("c" + name + i);
        menu.className = i == cursel ? "on": "";
        con.style.display = i == cursel ? "block": "none"
    }
};
function $$(id) {
    return document.getElementById(id);
}
window.onscroll = function() {
    var top = document.documentElement.scrollTop || document.body.scrollTop;
    var toTop = document.getElementById("gotop");
    if (top > 100) {
        toTop.style.display = "block"
    } else {
        toTop.style.display = "none"
    }
};
var toTop = new
function() {
    var Timer = null;
    function $id(id) {
        return typeof id == "string" ? document.getElementById(id) : id
    };
    this.goto = function(objName) {
        $id(objName).onclick = function() {
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            startNove();
            return false
        };
        var startNove = function() {
            if (Timer) clearInterval(Timer);
            Timer = setInterval(doMove, 10)
        };
        var doMove = function() {
            var iSpeed = 0;
            var top = document.documentElement.scrollTop || document.body.scrollTop;
            iSpeed = (0 - top) / 30;
            iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
            if (Math.abs(iSpeed) < 1 && Math.abs(0 - top) < 1) {
                clearInterval(Timer);
                Timer = null
            }
            window.scrollTo(0, (top + iSpeed))
        }
    }
};
var stui = {
	'common': {
		
		'lazyload': function() {
            $.getScript("//cdn.jsdelivr.net/gh/frcdn/mycdn/js/jquery.lazyload.min.js",
            function() {
                $(".lazyload").lazyload({
                    effect: "fadeIn",
                    threshold: 200,
                    failurelimit: 20,
                });
                var windowWidth = $(window).width();
                if (windowWidth < 820) {
                    $(".tu").removeClass("lazyload")
                }
            })
        },
		
		'closebtn': function(){
			$(".tips_close").click(function(){
				$("#tips_play").remove();
			});
		},

	}
};
function $Showhtml(){return'\x3c\x69\x66\x72\x61\x6d\x65 \x62\x6f\x72\x64\x65\x72\x3d\x22\x30\x22 \x73\x72\x63\x3d\x22\x2f\x2f\x6b\x61\x6e\x2e\x79\x7a\x6c\x79\x2e\x63\x63\x2f\x61\x64\x64\x6f\x6e\x73\x2f\x64\x70\x6c\x61\x79\x65\x72\x2f\x3f\x75\x72\x6c\x3d'+player['\x75\x72\x6c']+'\x22 \x6d\x61\x72\x67\x69\x6e\x57\x69\x64\x74\x68\x3d\x22\x30\x22 \x66\x72\x61\x6d\x65\x53\x70\x61\x63\x69\x6e\x67\x3d\x22\x30\x22 \x6d\x61\x72\x67\x69\x6e\x48\x65\x69\x67\x68\x74\x3d\x22\x30\x22 \x66\x72\x61\x6d\x65\x42\x6f\x72\x64\x65\x72\x3d\x22\x30\x22 \x73\x63\x72\x6f\x6c\x6c\x69\x6e\x67\x3d\x22\x6e\x6f\x22 \x77\x69\x64\x74\x68\x3d\x22\x31\x30\x30\x25\x22 \x68\x65\x69\x67\x68\x74\x3d\x22\x31\x30\x30\x25\x22 \x76\x73\x70\x61\x6c\x65\x3d\x22\x30\x22 \x61\x6c\x6c\x6f\x77\x66\x75\x6c\x6c\x73\x63\x72\x65\x65\x6e\x3e\x3c\x2f\x69\x66\x72\x61\x6d\x65\x3e'};
$(document).ready(function() {
    $("#main").append("<div id='overlay'></div>");
    $('.ss').on('click',
    function() {
        $("#menu_m_b").slideToggle();
        $("#overlay").toggleClass("show");
        $(this).children().toggleClass('off')
    });
    $(".history a").click
    (function() {
        $(".jilu").fadeToggle();
        $("#overlay").toggleClass("show")
    });
	stui.common.lazyload();
	stui.common.closebtn();
});
