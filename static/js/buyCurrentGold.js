
$(function () {


    //takeGrams

    //showCounter

})
var buyCurrentGold = {
    init:function () {
        this.changeSelected();
        this.onfucous();
        this.switchGrams();
        this.changePrice();
        this.buy();
        this.hankPositionErr();
    },
    changeSelected:function () {
        //changeSelected
        $(".checkImg").click(function () {
            if($(this).attr("src") == '../static/img/noRead.png'){
                $(this).attr("src",'../static/img/read.png')
            }else{
                $(this).attr("src",'../static/img/noRead.png')
            }
        })
    },
    onfucous:function () {
        //onfocus
        var that = this;
        $(".numInput").on('input',function () {
            if($(this).val() == ''){
                $(".RMB").hide();
                $(".arrow_box").hide();
                $(".keepDown").attr("disabled","disabled").css("opacity",'0.45')
            }else{
                $(".keepDown").removeAttr("disabled").css("opacity",'1')
                $(this).val(util.amount($(this).val()))
                $(".RMB").show();
                $(this).css("color","#333");
                $(".arrow_box").show();
                var len = ($(this).val() + "").length
                $(".arrow_box").css("right",3.8 - len * 0.15 + "rem")
                if($('.switchGrams').html() == '切换成按克重'){
                    that.takeGrams($(".numInput").val());
                     $(".RMB").show()
                }else{
                    that.takeMoney($(".numInput").val());
                    $(".RMB").hide()
                }
            }
        })
    },
    hankPositionErr:function(){
        $(".numInput").focus(function(){
            $(".keepDown").css("position","relative")
        });
        $(".numInput").blur(function(){    
            $(".keepDown").css("position","absolute").css("bottom","0px")
        });
        //  键盘放下时也要监听这个方法   for  andriod
        //获取当前页面高度
        var winHeight = $(window).height();   
        $(window).resize(function(){
           var thisHeight=$(this).height();
            if(winHeight - thisHeight >50){ 
                //窗口发生改变(小),故此时键盘打开
                //当软键盘打开，在此处操作
                $(".keepDown").css("position","relative")
            }else{
                //窗口发生改变(小),故此时键盘收起
                //当软键盘收起，在此处操作
            $(".keepDown").css("position","absolute").css("bottom","0px")
            }
        });
    },
    takeGrams:function (val) {
        var rgpPrice = parseFloat($(".rgpPrice").text());
        var addPrice = parseFloat($(".addPrice").text());
        var grams = val / (rgpPrice + addPrice)
        $(".logo").html('<h1 class="logo">预估克重:<span class="grams"></span>克</h1>');
        $(".grams").text(grams.toFixed(2));
        this.balanceTips(val)
    },
    switchGrams:function () {
        $(".switchGrams").click(function () {
            $(".numInput").val("");
            $(".arrow_box").hide();
            $(".balanceMes").hide();
            if($(this).text() == '切换成按克重'){
                $(".RMB").hide()
                $(this).text('切换成按金额');
                $(".numInput").attr("placeholder","请输入购买克数")
            }else{
                $(this).text('切换成按克重')
                $(".numInput").attr("placeholder","请输入购买金额");
            }
        })
    },
    takeMoney:function (val) {
        var rgpPrice = parseFloat($(".rgpPrice").text());
        var addPrice = parseFloat($(".addPrice").text());
        var money = val * (rgpPrice + addPrice)
        $(".logo").html('预估金额<span class="titleMoney">' + money+ '</span>元');
        this.balanceTips(val)
    },
    balanceTips:function (val) {
        var balanceMoney = parseFloat($(".balanceMoney").text());
        var titleMoney = parseFloat($(".titleMoney").text());
        console.log(val,balanceMoney,titleMoney)
        if(val > balanceMoney || titleMoney > balanceMoney || val == 0){
            $(".balanceMes").show()
            $(".keepDown").attr("disabled","disabled").css("opacity",'0.45')
        }else{
            $(".balanceMes").hide()
        }
        
    },
    changePrice:function () {
        $(".changePrice").click(function () {
            $(".payMesBox").show();
            $(".showChangeBox").show();
            $("#payBox").hide();
        });
        this.cancle();
        this.enter();
    },
    buy:function () {
        $(".keepDown").click(function () {
            $(".payMesBox").show();
            $(".showChangeBox").hide();
            $("#payBox").show();
        });
    },
    cancle:function () {
        $("#cancle,.close").click(function () {
            $(".payMesBox").hide();
        })
    },
    enter:function () {
        $("#enter").click(function () {
            $(".showChangeBox").hide();
            $("#payBox").show();
            $(".payMesBox").hide();
        })
        this.surePay();
    },
    surePay:function () {
        $(".surePay").click(function () {
            $(".alertTips").show();
        })
        this.know();
    },
    know:function () {
        $(".know").click(function () {
            $(".fullScreen").hide();
        })
    },
    plus:function () {
        var num=0.1;
        var price=Number($(".addPrice").text());
        var saprice=Number($(".price").text())
        $(".addPrice").text(buyCurrentGold.accAdd(price,num));
        $('.price').text(buyCurrentGold.accAdd(saprice,num))
    },
    minus:function () {
            var num=0.1;
            var price=Number($(".addPrice").text());
            var saprice=Number($(".price").text())
            if($(".addPrice").text()<=0){
                $(".addPrice").text('0.0');
                $('.price').text('0.0')
            }else{
                $(".addPrice").text(buyCurrentGold.Subtr(price,num));
                $('.price').text(buyCurrentGold.Subtr(saprice,num))
            }

    },
    accAdd:function (arg1,arg2){
        var r1,r2,m;
        try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
        try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
        m=Math.pow(10,Math.max(r1,r2))
        return (arg1*m+arg2*m)/m
    },
    Subtr:function (arg1,arg2){
        var r1,r2,m,n;
        try{r1=arg1.toString().split(".")[1].length}catch(e){r1=0}
        try{r2=arg2.toString().split(".")[1].length}catch(e){r2=0}
        m=Math.pow(10,Math.max(r1,r2));
        n=(r1>=r2)?r1:r2;
        return ((arg1*m-arg2*m)/m).toFixed(n);
    }


}
buyCurrentGold.init()