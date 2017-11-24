/**
 * Created by shaojinkun on 2017/11/23.
 */
var util = {
    goReviousPage:function () {
        window.history.go(-1)
    }
}
$("#titleBarBack").click(function () {
    util.goReviousPage()
})