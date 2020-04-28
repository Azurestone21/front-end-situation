// 柱形图1
(function () {
  // 1. 初始化实例
  let myChart = echarts.init(document.querySelector(".bar1 .chart"));
  // 2. 指定配置和数据
  let option = {
    // 线条颜色
    color: ['#2f89cf'],
    // 提示框组件
    tooltip: {
      trigger: 'axis',
      // 坐标轴指示器，坐标轴触发有效
      axisPointer: {
        // 默认为直线，可选为：'line' | 'shadow'
        type: 'shadow'
      }
    },
    // 图形大小
    grid: {
      top: '10%',
      left: '0%',
      right: '0%',
      bottom: '4%',
      // 刻度标签
      containLabel: true
    },
    // X 坐标
    xAxis: [
      {
        type: 'category',
        data: ["旅游行业", "教育培训", "游戏行业", "医疗行业", "电商行业", "社交行业", "金融行业"],
        // 坐标轴
        axisLine: {
          show: false
        },
        // 刻度标签
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        // 刻度线
        axisTick: {
          // 保证刻度线和标签对齐
          alignWithLabel: true
        }
      }
    ],
    // Y 坐标
    yAxis: [
      {
        type: 'value',
        // 坐标轴
        axisLine: {
          lineStyle: "rgba(255,255,255,.1)"
        },
        // 刻度标签
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: "12"
          }
        },
        // 水平分割线
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '直接访问',
        type: 'bar',
        // 柱形宽度
        barWidth: '35%',
        data: [200, 300, 300, 900, 1500, 1200, 600],
        itemStyle: {
          // 圆弧
          barBorderRadius: 5
        }
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 自适应页面宽度
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

// 柱形图2
(function () {
  // 1. 初始化实例
  let myChart = echarts.init(document.querySelector(".bar2 .chart"));
  // 2. 坐标名称
  let titlename = ["HTML5", "CSS3", "javascript", "VUE", "NODE"];
  let data = [70, 34, 60, 78, 69];
  let valdata = [702, 350, 610, 793, 664];
  // 柱形图颜色
  let myColor = ["#1089E7", "#F57474", "#56D0E3", "#F8B448", "#8B78F6"];
  let option = {
    grid: {
      top: '10%',
      left: '20%',
      right: '10%',
      bottom: '3%',
    },
    xAxis: {
      show: false
    },
    yAxis: [
      // 有两个Y坐标，要有两个坐标对象
      {
        show: true,
        data: titlename,
        // 如果不加，柱形图显示的坐标名称顺序是数组中传入的名称顺序逆序
        inverse: true,
        axisLine: {
          show: false
        },
        axisLabel: {
          color: "#fff",
          /*rich: {
            lg: {
              backgroundColor: "#339911",
              color: "#fff",
              borderRadius: 15,
              // padding: 5,
              align: "center",
              width: 15,
              height: 15
            }
          }*/
        },
        axisTick: {
          show: false
        }
      },
      {
        show: true,
        // 是否是反向坐标轴
        inverse: true,
        data: valdata,
        axisLabel: {
          textStyle: {
            fontSize: 12,
            color: "#fff"
          }
        }
      }
    ],
    series: [
      {
        name: '条',
        type: 'bar',
        // 使用的 y 轴的 index，在单个图表实例中存在多个 y轴的时候有用
        // 相当于z-index
        yAxisIndex: 0,
        // 同一系列的柱间距离，默认为类目间距的20%
        // barCategoryGap: 10,
        data: data,
        barWidth: 10,
        itemStyle: {
          normal: {
            barBorderRadius: 20,
            // params是所有柱对象
            color: function (params) {
              let num = myColor.length;
              return myColor[params.dataIndex % num];
            }
          }
        },
        label: {
          normal: {
            show: true,
            // 图标显示在柱形图内部
            position: "inside",
            // a:name b:刻度名称 c:数值
            formatter: "{c}%"
          }
        }
      },
      {
        name: '框',
        type: 'bar',
        yAxisIndex: 1,
        // barCategoryGap: 10,
        data: [100, 100, 100, 100, 100],
        barWidth: 15,
        itemStyle: {
          normal: {
            color: "none",
            borderColor: "#00c1de",
            borderWidth: 3,
            barBorderRadius: 15
          }
        }
      }
    ]
  };
  // 3. 把配置给实例对象
  myChart.setOption(option);
  // 4. 自适应页面宽度
  window.addEventListener("resize", function () {
    myChart.resize();
  })
})();

// 折线图1
(function() {
  // 数据
  let yearData = [
    {
      year: '2020',  // 年份
      data: [  // 两个数组是因为有两条线
        [24, 40, 101, 134, 90, 230, 210, 230, 120, 230, 210, 120],
        [40, 64, 191, 324, 290, 330, 310, 213, 180, 200, 180, 79]
      ]
    },
    {
      year: '2021',  // 年份
      data: [  // 两个数组是因为有两条线
        [123, 175, 112, 197, 121, 67, 98, 21, 43, 64, 76, 38],
        [143, 131, 165, 123, 178, 21, 82, 64, 43, 60, 19, 34]
      ]
    }
  ];

  // 1. 初始化实例
  let myChart = echarts.init(document.querySelector(".line1 .chart"));

  // 2. 指定配置和数据
  let option = {
    color: ["#00f2f1", "#ed3f35"],
    tooltip: {
      // 通过坐标轴来触发
      trigger: 'axis'
    },
    legend: {
      // 图例靠右 必须加引号
      right: "10%",
      // 图例文字的颜色
      textStyle: {
        color: "#4c9bfd"
      }
    },
    grid: {
      top: "20%",
      left: "3%",
      right: "4%",
      bottom: "3%",
      // 显示边框
      show: true,
      borderColor: "#012f4a",
      containLabel: true
    },
    xAxis: {
      type: 'category',
      boundaryGap: false,
      data: ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'],
      // 坐标轴
      axisLine: {
        show: false
      },
      // 刻度标签
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去刻度线
      axisTick: {
        show: false
      }
    },
    yAxis: {
      type: 'value',
      // 坐标轴
      axisLine: {
        show: false
      },
      // 刻度标签
      axisLabel: {
        color: "rgba(255,255,255,.7)"
      },
      // 去刻度线
      axisTick: {
        show: false
      },
      // 水平分割线
      splitLine: {
        lineStyle: {
          color: "#012f4a"
        }
      }
    },
    series: [
      {
        name: '新增粉丝',
        type: 'line',
        stack: '总量',
        // 折现平滑
        smooth: true,
        data: yearData[0].data[0]
      },
      {
        name: '新增游客',
        type: 'line',
        stack: '总量',
        smooth: true,
        data: yearData[0].data[1]
      }
    ]
  };

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  // 4. 自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

  // 5. 点击年份改变数据
  $(".line1 h2").on("click", "a", function () {
    // alert(1);
    // console.log($(this).index());
    // console.log(yearData[$(this).index()].data[0]);
    option.series[0].data = yearData[$(this).index()].data[0];
    option.series[1].data = yearData[$(this).index()].data[1];
    myChart.setOption(option);
  })
})();

// 折线图2
(function() {
  // 1. 初始化实例
  let myChart = echarts.init(document.querySelector(".line2 .chart"));

  // 2. 指定配置和数据
  let option = {
    tooltip: {
      trigger: 'axis',
      axisPointer: {
        lineStyle: {
          color: "#dddc6b"
        }
      }
    },
    legend: {
      top: "0%",
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    grid: {
      left: "10",
      top: "30",
      right: "10",
      bottom: "10",
      containLabel: true
    },
    xAxis: [
      {
        type: 'category',
        boundaryGap: false,
        data: [ "01","02","03","04","05","06","07","08","09","10","11","12","13","14","15","16","17","18","19","20","21","22","23","24","25","26","26","28","29","30"],
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.2)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        }
      },
      // {
      //   axisPointer: { show: false },
      //   axisLine: { show: false },
      //   position: "bottom",
      //   offset: 20
      // }
    ],
    yAxis: [
      {
        type: 'value',
        axisLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        },
        axisLabel: {
          textStyle: {
            color: "rgba(255,255,255,.6)",
            fontSize: 12
          }
        },
        axisTick: { show: false },
        splitLine: {
          lineStyle: {
            color: "rgba(255,255,255,.1)"
          }
        }
      }
    ],
    series: [
      {
        name: '播放量',
        type: 'line',
        smooth: true,
        // 拐点形状
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 是否显示拐点
        showSymbol: false,
        // 折线样式
        lineStyle: {
          normal: {
            color: "#0184d5",
            width: 2
          }
        },
        // 填充样式
        areaStyle: {
          normal: {
            // 渐变色
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(1, 132, 213, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(1, 132, 213, 0.1)"
                  }
                ],
                false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 鼠标悬停在拐点上的样式
        itemStyle: {
          normal: {
            color: "#0184d5",  // 也是图例的颜色
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30, 40, 30, 40, 30, 40, 30, 60, 20, 40, 20, 40, 30, 60, 20, 40, 20, 40]
      },
      {
        name: '转发量',
        type: 'line',
        smooth: true,
        // 拐点形状
        symbol: "circle",
        // 拐点大小
        symbolSize: 5,
        // 是否显示拐点
        showSymbol: false,
        // 折线样式
        lineStyle: {
          normal: {
            color: "#00d887",
            width: 2
          }
        },
        // 填充样式
        areaStyle: {
          normal: {
            color: new echarts.graphic.LinearGradient(
                0,
                0,
                0,
                1,
                [
                  {
                    offset: 0,
                    color: "rgba(0, 216, 135, 0.4)"
                  },
                  {
                    offset: 0.8,
                    color: "rgba(0, 216, 135, 0.1)"
                  }
                ],
                false
            ),
            shadowColor: "rgba(0, 0, 0, 0.1)"
          }
        },
        // 鼠标悬停在拐点上的样式
        itemStyle: {
          normal: {
            color: "#00d887",
            borderColor: "rgba(221, 220, 107, .1)",
            borderWidth: 12
          }
        },
        data: [50, 30, 50, 60, 10, 50, 30, 50, 60, 40, 60, 40, 80, 30, 50, 60, 10, 50, 30, 70, 20, 50, 10, 40, 50, 30, 70, 20, 50, 10, 40]
      }
    ]
  };

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  // 4. 自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

// 饼图1
(function() {
  // 1. 初始化实例
  let myChart = echarts.init(document.querySelector(".pie1 .chart"));

  // 2. 指定配置和数据
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b}: {c} ({d}%)'
    },
    legend: {
      // orient: 'vertical',
      // 图例距离底部的距离
      bottom: "0%",
      // 图例标识的宽高
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: 12
      }
    },
    series: [
      {
        name: '年龄分布',
        type: 'pie',
        // 设置饼图位置
        center: ["50%", "42%"],
        // 设置饼图大小
        // 第一个值 里圆的大小
        // 第一二个值 外圆的大小
        radius: ['40%', '60%'],
        color: [
          "#065aab",
          "#066eab",
          "#0682ab",
          "#0696ab",
          "#06a0ab",
          "#06b4ab",
          "#06c8ab",
          "#06dcab",
          "#06f0ab"
        ],
        // 标签
        label: {
          show: false,
          position: 'center'
        },
        // 标签和图形的连线
        labelLine: {
          show: false
        },
        data: [
          { value: 1, name: "0岁以下" },
          { value: 4, name: "20-29岁" },
          { value: 2, name: "30-39岁" },
          { value: 2, name: "40-49岁" },
          { value: 1, name: "50岁以上" }
        ]
      }
    ]
  };

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  // 4. 自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });

})();

// 饼图2
(function() {
  // 1. 初始化实例
  let myChart = echarts.init(document.querySelector(".pie2 .chart"));

  // 2. 指定配置和数据
  let option = {
    tooltip: {
      trigger: 'item',
      formatter: '{a} <br/>{b} : {c} ({d}%)'
    },
    legend: {
      top: 'bottom',
      itemWidth: 10,
      itemHeight: 10,
      textStyle: {
        color: "rgba(255,255,255,.5)",
        fontSize: "12"
      }
    },
    // 注意颜色写的位置
    color: [
      "#006cff",
      "#60cda0",
      "#ed8884",
      "#ff9f7f",
      "#0096ff",
      "#9fe6b8",
      "#32c5e9",
      "#1d9dff"
    ],
    series: [
      {
        name: '点位统计',
        type: 'pie',
        center: ["50%", "40%"],
        radius: ["10%", "60%"],
        roseType: 'radius',
        data: [
          { value: 20, name: "云南" },
          { value: 26, name: "北京" },
          { value: 24, name: "山东" },
          { value: 25, name: "河北" },
          { value: 20, name: "江苏" },
          { value: 25, name: "浙江" },
          { value: 30, name: "深圳" },
          { value: 42, name: "广东" }
        ],
        // 修饰饼形图文字相关的样式 label对象
        label: {
          fontSize: 10
        },
        labelLine: {
          // 连接到图形的线长度
          length: 10,
          // 连接到文字的线长度
          length2: 10
        }
      },
    ]
  };

  // 3. 把配置和数据给实例对象
  myChart.setOption(option);
  // 4. 自适应
  window.addEventListener("resize", function() {
    myChart.resize();
  });
})();

