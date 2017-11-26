
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
                if($('.switchGrams').html() == '切换成按克重'){
                    that.takeGrams($(".numInput").val())
                }else{
                    that.takeMoney($(".numInput").val());
                    $(".RMB").hide()
                }
            }
        })
    },
    takeGrams:function (val) {
        var rgpPrice = parseFloat($(".rgpPrice").text());
        var addPrice = parseFloat($(".addPrice").text());
        var grams = val / (rgpPrice + rgpPrice)
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
                $(".numInput").attr("placeholder","请输入购买金额")
            }
        })
    },
    takeMoney:function (val) {
        var rgpPrice = parseFloat($(".rgpPrice").text());
        var addPrice = parseFloat($(".addPrice").text());
        var money = val * rgpPrice + val * rgpPrice;
        $(".logo").html('预估金额<span class="titleMoney">' + money+ '</span>元');
        this.balanceTips(val)
    },
    balanceTips:function (val) {
        var balanceMoney = parseFloat($(".balanceMoney").text());
        var titleMoney = parseFloat($(".titleMoney").text());
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
    }


}
buyCurrentGold.init()