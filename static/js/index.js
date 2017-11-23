(function () {
   // console.log($)

    // $.ajax({
    //     url : 'https://cnodejs.org/api/v1/topics',
    //     type : 'get',
    //     // data : {
    //     //     userId : userId,
    //     //     bdId : staffId
    //     // },
    //     dataType : 'json',
    //     success : function(data) {
    //         console.log(JSON.stringify(data))
    //     }
    // })
    $('#currentBtn').on('click',function () {
        $('.history').hide();
        $('.current').show();
        $(this).addClass("tapSelected")
        $('#historyBtn').remove("tapSelected")

    })
    $('#historyBtn').on('click',function () {
        $('.history').show();
        $('.current').hide()
        $(this).addClass("tapSelected")
        $('#currentBtn').removeClass("tapSelected")

    })
})()