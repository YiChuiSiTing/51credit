
var util = {
    goReviousPage: function () {
        window.history.go(-1)
    },
    amount: function (v) {
        var regStrs = [
            // ['^0(\\d+)$', '$1'], //禁止录入整数部分两位以上，但首位为0
            ['[^\\d\\.]+$', ''], //禁止录入任何非数字和点
            ['\\.(\\d?)\\.+', '.$1'], //禁止录入两个以上的点
            ['^(\\d+\\.\\d{2}).+', '$1'] //禁止录入小数点后两位以上
        ];
        for (var i = 0; i < regStrs.length; i++) {
            var reg = new RegExp(regStrs[i][0]);
            v = v.replace(reg, regStrs[i][1]);
        }
        return v;
    }
}
$("#titleBarBack").click(function () {
    util.goReviousPage()
})