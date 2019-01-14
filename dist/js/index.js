//banner部分轮播图
lunbotu();
function lunbotu() {
    var outer = document.getElementById("outer");
    var arr = document.getElementById("arr");
    var left = arr.getElementsByClassName("arr-left")[0];
    var right = arr.getElementsByClassName("arr-right")[0];
    var screen = document.getElementsByClassName("index-banner-body-screen")[0];
    var ul = screen.getElementsByTagName("ul")[0];
    var ulliArr = ul.getElementsByTagName("li");
    ulliArr[0].style.display = "block";
    var img = ul.getElementsByTagName("img")[0];
    var imgWidth = img.offsetWidth;
    var tab = document.getElementsByClassName("index-banner-body-tab")[0];
    var ol = tab.getElementsByTagName("ol")[0];
    var olliArr = ol.getElementsByTagName("li");
    var line = document.getElementsByClassName("index-banner-body-tab-red")[0];
    var key = 0;
    for (var i = 0; i < olliArr.length; i++) {
        olliArr[i].index = i;
        olliArr[i].onmouseenter = function () {
            for (var j = 0; j < olliArr.length; j++) {
                olliArr[j].className = "";
                ulliArr[j].style.display = "none";
            }
            this.className = "current";
            ulliArr[this.index].style.display = "block";
            ulliArr[this.index].style.transition = "all 1s";
            var s = this.index * line.offsetWidth;
            animateHS(line, s);
            key = this.index;
        }
    }
    //左右键绑定方法：
    right.onclick = autoPlay;
    left.onclick = function () {
        key--;
        if(key==-1){
            key=4;
        }
        for(var i=0;i<ulliArr.length;i++){
            ulliArr[i].style.display = "none";
            olliArr[i].className = "";
        }
        ulliArr[key].style.display = "block";
        olliArr[key].className = "current";
        var s = key*line.offsetWidth;
        animateHS(line,s);
    }
    var timer = null;
    timer = setInterval(autoPlay,1500);
    outer.onmouseenter = function () {
        animateHS(left,0);
        animateHS(right,imgWidth-33);
        clearInterval(timer);
    }
    outer.onmouseleave = function () {
        animateHS(left,-33);
        animateHS(right,imgWidth);
        timer = setInterval(autoPlay,1500);
    }
    function autoPlay(){
        key++;
        if(key==5){
            key=0;
        }
        for(var i=0;i<ulliArr.length;i++){
            ulliArr[i].style.display = "none";
            olliArr[i].className = "";
        }
        ulliArr[key].style.display = "block";
        olliArr[key].className = "current";
        var s = key*line.offsetWidth;
        animateHS(line,s);
    }
}
//匀速动画
function animateHS(ele, target) {
    clearInterval(ele.timer);
    ele.timer = setInterval(function () {
        var step = (target - ele.offsetLeft) / 10;
        step = step > 0 ? Math.ceil(step) : Math.floor(step);
        ele.style.left = ele.offsetLeft + step + "px";
        if (Math.abs(target - ele.offsetLeft) <= Math.abs(step)) {
            ele.style.left = target + "px";
            clearInterval(ele.timer);
        }
    }, 20);
}

//倒计时：
getTime();
function getTime(){
    var timer = null;
    var box = document.getElementsByClassName("index-time")[0];
    var spArr = box.getElementsByTagName("span");
    timer = setInterval(function () {
        var nowtime = new Date().getTime();
        var future = new Date("2017/9/10 00:00:00").getTime();
        var time = future - nowtime;
        if(time<=0){
            clearInterval(timer);
        }
        var day = parseInt(time/1000/60/60/24);
        var hour = parseInt(time/1000/60/60%24);
        var minute = parseInt(time/1000/60%60);
        var second = parseInt(time/1000%60);
        //格式化时间：
        day = day<10?"0"+day:day;
        hour = hour<10?"0"+hour:hour;
        minute = minute<10?"0"+minute:minute;
        second = second<10?"0"+second:second;
        var str = day+hour+minute+second;
        for(var i=0;i<str.length;i++){
            spArr[i].innerHTML = str[i];
        }
    },1000)
}
//吸铁效果：
$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop()>=$(".index-best").outerHeight()+$(".index-logo").outerHeight()){
            $(".index-nav").addClass("fixed").slideDown(500);
            $(".index-banner").css("margin-top",$(".index-logo").outerHeight());
        }
        else{
            $(".index-nav").removeClass("fixed");
            $(".index-banner").css("margin-top","");
        }
    })
})




//楼梯效果
$(function () {
    $(window).scroll(function () {
        if($(window).scrollTop()>=2400){
            $(".index-left-box").css({
                position: "fixed",
                left: 256,
                top: "60px"
            });
            var idx = Math.floor(($(window).scrollTop()-2400)/$(".foolter-body").outerHeight());
            $(".index-left-box li").eq(idx).addClass("current").siblings().removeClass("current");
        }
        else{
            $(".index-left-box").removeAttr("style");
        }
    })
    $(".index-left-box li a").click(function () {
        var target = $(this).parent().index()*$(".foolter-body").outerHeight()+2400;
        $(window).scrollTop(target);
        $(this).parent().addClass("current").siblings().removeClass("current");
        return false;
    })
})
//特效部分：
$(function () {
    $(".index-texiao-body-enter").mouseenter(function () {
        $(this).children(".index-texiao-body-enter-top").stop().animate({"width":0},500);
        $(this).children(".index-texiao-body-enter-left").stop().animate({"height":0},500);
    })
    $(".index-texiao-body-enter").mouseleave(function () {
        $(this).children(".index-texiao-body-enter-top").stop().animate({"width":319},500);
        $(this).children(".index-texiao-body-enter-left").stop().animate({"height":152},500);
    })
})


//右侧盒子特效：
$(function () {
    //$(".index-right-box .zhanghao").mouseenter(function () {
    //    $(".index-right-box-login").stop().animate({"width": 260},300).show();
    //    $(".index-right-box-login span").show();
    //})
    //$(".index-right-box .zhanghao").mouseleave(function () {
    //    $(".index-right-box-login").stop().animate({"width": 0},300).hide();
    //    $(".index-right-box-login span").hide();
    //})
    //点击×号关闭：
    //小图标
    $(".index-right-box-login span").click(function () {
        $(".index-right-box-login").stop().animate({"width": 0},300).hide();
        $(".index-right-box-login span").hide();
    })
    $(".index-right-box-little ul li").mouseenter(function () {
        $(this).children("p").stop().animate({"width":150},300).show();
    })
    $(".index-right-box-little ul li").mouseleave(function () {
        $(this).children("p").stop().animate({"width":0},300).hide();
    })
    $(".index-right-box-fanhui ul li").mouseenter(function () {
        $(this).children("p").stop().animate({"width":150},300).show();
    })
    $(".index-right-box-fanhui ul li").mouseleave(function () {
        $(this).children("p").stop().animate({"width":0},300).hide();
    })
})

//返回顶部
returnTop();
function returnTop(){
    var div = document.getElementsByClassName("index-right-box-fanhui")[0];
    var li = div.getElementsByTagName("li")[1];
    li.onclick = function () {
        var target = 0;
        var leader = 0;
        var timer = setInterval(function () {
            leader = scrollTop();
            step = (target-leader)/10;
            step = step>0?Math.ceil(step):Math.floor(step);
            leader = leader + step;
            window.scrollTo(0,leader);
            if(Math.abs(leader-target)<=Math.abs(step)){
                clearInterval(timer);
            }
        },30)
    }
    function scrollTop(){
        return window.pageYOffset || document.documentElement.scrollTop;
    }
}


//透明效果：
$(function () {
    $(".foolter-body ul img").mouseenter(function () {
        console.log(123)
        var num = 10;
        var timer = null;
        var that = $(this);
        timer = setInterval(function () {
            that.stop().fadeTo(500,0.6);
            num--;
            if(num==4){
                that.stop().fadeTo(500,1);
                clearInterval(timer);
            }
        },200)
    })
})




