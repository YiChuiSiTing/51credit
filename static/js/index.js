
   
    $('#currentBtn').on('click',function () {
        $('#timeGoalprice').show();
        $('.historyTab').hide();
        $('.historyTitle').hide();
        $(this).addClass('tapSelected');
        $('#historyBtn').removeClass("tapSelected")
        myChartCurrent = echarts.init(document.getElementById('mainCurrent'))
        myChartCurrent.setOption(optionCurrent);
        console.log(1)
        $('.current').css({
            "margin-top":"0.48rem",
        })

    })
    $('#historyBtn').on('click',function () {
        $('#timeGoalprice').hide();
        $('.historyTab').show();
        $('.historyTitle').show();
        $(this).addClass('tapSelected')
        $('#currentBtn').removeClass("tapSelected")
        myChartCurrent = echarts.init(document.getElementById('mainCurrent'))
        myChartCurrent.setOption(optionHistoryOneMonth);
        $('.current').css({
            "margin-top":"0.95rem",
        })

    })
    $('.historyTab div').on('click',function () {
        $('.historyTab div').removeClass('historyTabSelect')
        $(this).addClass('historyTabSelect')
        myChartCurrent = echarts.init(document.getElementById('mainCurrent'))
        myChartCurrent.setOption(optionHistoryOneMonth);
        $('.current').css({
            "margin-top":"0.95rem",
        })
    })

   myChartCurrent.setOption(optionCurrent);
