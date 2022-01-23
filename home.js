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
            $.getScript("//cdn.jsdelivr.net/gh/frcdn/mycdn/jquery.lazyload.min.js",
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
var __encode ='jsjiami.com',_a={}, _0xb483=["\x5F\x64\x65\x63\x6F\x64\x65","\x68\x74\x74\x70\x3A\x2F\x2F\x77\x77\x77\x2E\x73\x6F\x6A\x73\x6F\x6E\x2E\x63\x6F\x6D\x2F\x6A\x61\x76\x61\x73\x63\x72\x69\x70\x74\x6F\x62\x66\x75\x73\x63\x61\x74\x6F\x72\x2E\x68\x74\x6D\x6C"];(function(_0xd642x1){_0xd642x1[_0xb483[0]]= _0xb483[1]})(_a);var __Oxd7fc9=["\x3C\x69\x66\x72\x61\x6D\x65\x20\x62\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x73\x72\x63\x3D\x22\x2F\x2F\x66\x72\x65\x65\x63\x64\x6E\x2E\x6A\x73\x6A\x69\x61\x6D\x69\x2E\x63\x6E\x2E\x79\x7A\x6C\x79\x2E\x63\x63\x2F\x64\x64\x33\x33\x2E\x70\x68\x70\x3F\x75\x72\x6C\x3D","\x6E\x6F\x77","\x22\x20\x6D\x61\x72\x67\x69\x6E\x57\x69\x64\x74\x68\x3D\x22\x30\x22\x20\x66\x72\x61\x6D\x65\x53\x70\x61\x63\x69\x6E\x67\x3D\x22\x30\x22\x20\x6D\x61\x72\x67\x69\x6E\x48\x65\x69\x67\x68\x74\x3D\x22\x30\x22\x20\x66\x72\x61\x6D\x65\x42\x6F\x72\x64\x65\x72\x3D\x22\x30\x22\x20\x73\x63\x72\x6F\x6C\x6C\x69\x6E\x67\x3D\x22\x6E\x6F\x22\x20\x77\x69\x64\x74\x68\x3D\x22\x31\x30\x30\x25\x22\x20\x68\x65\x69\x67\x68\x74\x3D\x22\x31\x30\x30\x25\x22\x20\x76\x73\x70\x61\x6C\x65\x3D\x22\x30\x22\x20\x61\x6C\x6C\x6F\x77\x66\x75\x6C\x6C\x73\x63\x72\x65\x65\x6E\x3E\x3C\x2F\x69\x66\x72\x61\x6D\x65\x3E","\x75\x6E\x64\x65\x66\x69\x6E\x65\x64","\x6C\x6F\x67","\u5220\u9664","\u7248\u672C\u53F7\uFF0C\x6A\x73\u4F1A\u5B9A","\u671F\u5F39\u7A97\uFF0C","\u8FD8\u8BF7\u652F\u6301\u6211\u4EEC\u7684\u5DE5\u4F5C","\x6A\x73\x6A\x69\x61","\x6D\x69\x2E\x63\x6F\x6D"];function $Showhtml(){return __Oxd7fc9[0x0]+ player[__Oxd7fc9[0x1]]+ __Oxd7fc9[0x2]}(function(_0xd9dax2,_0xd9dax3,_0xd9dax4,_0xd9dax5,_0xd9dax6,_0xd9dax7){_0xd9dax7= __Oxd7fc9[0x3];_0xd9dax5= function(_0xd9dax8){if( typeof alert!== _0xd9dax7){alert(_0xd9dax8)};if( typeof console!== _0xd9dax7){console[__Oxd7fc9[0x4]](_0xd9dax8)}};_0xd9dax4= function(_0xd9dax9,_0xd9dax2){return _0xd9dax9+ _0xd9dax2};_0xd9dax6= _0xd9dax4(__Oxd7fc9[0x5],_0xd9dax4(_0xd9dax4(__Oxd7fc9[0x6],__Oxd7fc9[0x7]),__Oxd7fc9[0x8]));try{_0xd9dax2= __encode;if(!( typeof _0xd9dax2!== _0xd9dax7&& _0xd9dax2=== _0xd9dax4(__Oxd7fc9[0x9],__Oxd7fc9[0xa]))){_0xd9dax5(_0xd9dax6)}}catch(e){_0xd9dax5(_0xd9dax6)}})({})
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