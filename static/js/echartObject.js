
// 基于准备好的dom，初始化echarts实例
var myChartCurrent = echarts.init(document.getElementById('mainCurrent'));
// var myChartHistory = echarts.init(document.getElementById('mainHistory'));


var base = +new Date(2017, 9, 3);
var oneDay = 24 * 3600 * 1000;
var dateCurrent = [];

var dataCurrent = [];
var dateHistory = [];

var dataHistory = [];
for (var i = 1; i < 200; i++) {
    var now = new Date(base += oneDay);
    // dateCurrent.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));
    dateCurrent.push("00:10")
    dataCurrent.push((Math.random()) * 20);
}
console.log(dataCurrent)
for (var i = 1; i < 20000; i++) {

    dataHistory.push(Math.round((Math.random() - 0.5) * 20 + dataCurrent[i - 1]));
}
for (var i = 1; i < 1000; i++) {
    var now = new Date(base += oneDay);
    dateHistory.push([now.getFullYear(), now.getMonth() + 1, now.getDate()].join('/'));

}
// console.log(data)
// console.log(date)
var optionCurrent = {
    tooltip: {
        show:false,
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },

    title: {
        left: 'center',
        text: '',
    },
    toolbox: {
        // feature: {
        //     dataZoom: {
        //         yAxisIndex: 'none',
        //         xAxisIndex: 'none'
        //     },
        //     restore: {},
        //     saveAsImage: {}
        // }
    },
    legend:{
        legend:'vertical',
        itemGap:75,
        selectedMode:false,
        top:0,
        left:0,
        selectedMode:false
    },
    grid:{
        // show:true,
        borderColor:'#ff5151',
        x:36,
        x2:6
    },
    // xAxis: {
    //     type: 'category',
    //     boundaryGap: false,
    //     data: dateCurrent
    // },
    xAxis: [
        {
            type: 'category',
            color:'#333',
            axisTick: {
                alignWithLabel: true,
                inside:true,
                lineStyle:{
                    width:0,
                    color:'#333'
                },
                length:4

            },
            axisLabel:{
                margin:10,
                color:'#333',
                align:'center',
                color:'#999999',
                fontSize:'0.20rem',
                width:10
            },
            boundaryGap: ['0%', '20%'],
            nameGap:100,
            axisLine: {
                show:false,
                onZero: false,
                lineStyle: {
                    color: '#ff5151'
                },
                width:1
            },
            areaStyle:{
                lineStyle:{
                    color:['#ff5151']
                }

            },
            splitNumber:10,
            triggerEvent:false,
            axisPointer: {
                triggerTooltip:false,
                show:false,
                label: {
                    formatter: function (params) {
                        return '金价' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data.toString().substr(0,5) : '');
                    }
                }
            },


            data: dateCurrent
        }
    ],
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        axisLine:{
            lineStyle:{
                opacity:0
            }
        },
        axisLabel:{
            margin:10,
            color:'#999999',
            fontSize:'0.24rem'
        },
        axisTick: {
            alignWithLabel: true,
            inside:true,
            lineStyle:{
                width:0
            }
        },
        triggerEvent:false

    },
    dataZoom: [{
        type: 'inside',
        show:false,
        start: 0,
        end: 10
    }, {
        show:false,
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 0,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffsetX: 0,
            shadowOffsetY: 0
        }
    }],
    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            clickable:false,
            itemStyle: {
                normal: {
                    color: '#ff5151',
                    borderWidth:1
                }
            },
            areaStyle: {
                normal: {
                    color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
                        offset: 0,
                        color: 'rgba(255, 81, 81,0.25)'
                    }, {
                        offset: 1,
                        color: '#fff'
                        // color: 'rgb(255, 70, 131)'
                    }])
                }
            },
            lineStyle:{
                normal:{
                    width:1
                }

            },
            markLine:{
                silent:true
            },
            silent:true,
            data: dataCurrent
            // data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }
    ],
    geo:{
        roam:false
    },
    calculable:false

};

var optionHistoryOneMonth = {
    tooltip: {
        show:false,
        trigger: 'axis',
        position: function (pt) {
            return [pt[0], '10%'];
        }
    },

    title: {
        left: 'center',
        text: '',
    },
    toolbox: {
        // feature: {
        //     dataZoom: {
        //         yAxisIndex: 'none',
        //         xAxisIndex: 'none'
        //     },
        //     restore: {},
        //     saveAsImage: {}
        // }
    },
    legend:{
        legend:'vertical',
        itemGap:75,
        selectedMode:false,
        top:0,
        left:0,
        selectedMode:false
    },
    grid:{
        // show:true,
        borderColor:'#ff5151',
        x:36,
        x2:6
    },
    // xAxis: {
    //     type: 'category',
    //     boundaryGap: false,
    //     data: dateCurrent
    // },
    xAxis: [
        {
            type: 'category',
            color:'#333',
            axisTick: {
                alignWithLabel: true,
                inside:true,
                lineStyle:{
                    width:0,
                    color:'#333'
                },
                length:4

            },
            axisLabel:{
                margin:10,
                color:'#333',
                align:'center',
                color:'#999999',
                fontSize:'0.20rem',
                width:10
            },
            boundaryGap: ['0%', '20%'],
            nameGap:100,
            axisLine: {
                show:false,
                onZero: false,
                lineStyle: {
                    color: '#ff5151'
                },
                width:1
            },
            areaStyle:{
                lineStyle:{
                    color:['#ff5151']
                }

            },
            splitNumber:10,
            triggerEvent:false,
            axisPointer: {
                triggerTooltip:false,
                show:false,
                label: {
                    formatter: function (params) {
                        return '降水量  ' + params.value
                            + (params.seriesData.length ? '：' + params.seriesData[0].data.toString().substr(0,5) : '');
                    }
                }
            },


            data: dateCurrent
        }
    ],
    yAxis: {
        type: 'value',
        boundaryGap: [0, '100%'],
        axisLine:{
            lineStyle:{
                opacity:0
            }
        },
        axisLabel:{
            margin:10,
            color:'#999999',
            fontSize:'0.24rem'
        },
        axisTick: {
            alignWithLabel: true,
            inside:true,
            lineStyle:{
                width:0
            }
        },
        triggerEvent:false

    },
    dataZoom: [{
        type: 'inside',
        show:false,
        start: 0,
        end: 10
    }, {
        show:false,
        start: 0,
        end: 10,
        handleIcon: 'M10.7,11.9v-1.3H9.3v1.3c-4.9,0.3-8.8,4.4-8.8,9.4c0,5,3.9,9.1,8.8,9.4v1.3h1.3v-1.3c4.9-0.3,8.8-4.4,8.8-9.4C19.5,16.3,15.6,12.2,10.7,11.9z M13.3,24.4H6.7V23h6.6V24.4z M13.3,19.6H6.7v-1.4h6.6V19.6z',
        handleSize: '80%',
        handleStyle: {
            color: '#fff',
            shadowBlur: 0,
            shadowColor: 'rgba(0, 0, 0, 0.2)',
            shadowOffsetX: 0,
            shadowOffsetY: 0
        }
    }],
    series: [
        {
            name:'模拟数据',
            type:'line',
            smooth:true,
            symbol: 'none',
            sampling: 'average',
            clickable:false,
            itemStyle: {
                normal: {
                    color: '#ff5151',
                    borderWidth:1
                }
            },

            lineStyle:{
                normal:{
                    width:1
                }

            },
            markLine:{
                silent:true
            },
            silent:true,
            data: dataCurrent
            // data: [2.6, 5.9, 9.0, 26.4, 28.7, 70.7, 175.6, 182.2, 48.7, 18.8, 6.0, 2.3]
        }
    ],
    geo:{
        roam:false
    },
    calculable:false

};
// 使用刚指定的配置项和数据显示图表。
// myChartCurrent.setOption(option);
// myChartHistory.setOption(option);

// var a=123;