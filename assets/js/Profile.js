// JavaScript Document

$(document).ready(function(){
						   
						     $('#demo1').flexImages({rowHeight: 140});
			
	//logoimg定位
	/*$(window).scroll(function(){
							  
	var scrollTop = $(this).scrollTop(); 

	if(scrollTop>366){

	$(".logoimg").css({"position":"fixed","top":"0","z-index":"1000","height":"68px"});

	}
	else{

	$(".logoimg").css("cssText","top:366 !important"); 
	}
	});*/
	
	// 基于准备好的dom，初始化echarts图表
							
	var myChart = echarts.init(document.getElementById('map')); 
option = {
    title : {
        text: '那些年留下的足迹',
        subtext: '行者智也',
		textStyle:{
		fontSize: 30,
		fontWeight: 'bolder',
		color: '#333'
					},               
        sublink: '',
        x:'center'
    },
    tooltip : {
        trigger: 'item'
    },
  	
	  /*legend: {
        orient: 'vertical',
        x:'left',
		y: 'top',		
	
        data:[{name:"生活过的城市",textStyle : {color:"auto"}},{name:"走过的城市",textStyle : {color:"auto"}},{name:"计划中的城市",textStyle : {color:"auto"}}]
    
	},*/
    series : [
        {
            name: '生活过的城市',
            type: 'map',
            mapType: 'china',
            hoverable: false,
            roam:false,
            data : [],
            markPoint : {
                symbolSize: 8,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                itemStyle: {
                    normal: {
						/*color: '#00AB4F',	
                        borderColor: '#87cefa',
                        borderWidth: 1,      */      // 标注边线线宽，单位px，默认为1
                        label: {
                            show: false
                        }
                    },
                    emphasis: {
                      /*  borderColor: '#1e90ff',*/
                        borderWidth: 5,
                        label: {
                            show: false
                        }
                    }
                },
                data : [
                 
					{name: "无锡",value: ""},                 
                    {name: "江阴", value: ""},
                    {name: "上海", value: ""},
                    {name: "东台", value: ""}
                ]
            },
            geoCoord: {
				"北京":[116.3,39.9],
                "东台":[120.23,32.45], 
				"徐州":[117.11,34.15],
                "舟山":[122.207216,29.985295],               
                "盐城":[120.13,33.38],               
                "青岛":[120.33,36.07],       
                "南通":[121.05,32.08],
                "拉萨":[91.11,29.97],             
                "上海":[121.48,31.22],           
                "厦门":[118.1,24.46],           
                "湖州":[120.1,30.86],            
                "连云港":[119.16,34.59],         
                "泰州":[119.9,32.49],             
                "江阴":[120.26,31.91],            
                "深圳":[114.07,22.62],
                "苏州":[120.62,31.32],          
                "张家港":[120.555821,31.875428],  
                "桂林":[110.28,25.29],                      
                "扬州":[119.42,32.39],
                "常州":[119.95,31.79],             
                "南京":[118.78,32.04],
                "无锡":[120.29,31.59],
                "秦皇岛":[119.57,39.95],  
				"张家港":[120.32,31.52],  
				"昆山":[120.58,31.24	],
				"稻城":[100.3,29.03],
				"拉萨":[91.15,29.30],
				"张家界":[110.27,29.20]
            }
        },
        {
           name: '走过的城市',
            type: 'map',
            mapType: 'china',
            hoverable: false,
            roam:false,
            data : [ ],
            markPoint : {
                symbolSize: 8,       // 标注大小，半宽（半径）参数，当图形为方向或菱形则总宽度为symbolSize * 2
                itemStyle: {
                    normal: {
                      /*  borderColor: '#87cefa',
                        color: '#F44336',	*/
                        borderWidth: 1,            // 标注边线线宽，单位px，默认为1
                        label: {
                            show: false
                        }
                    },
                    emphasis: {
                     /*   borderColor: '#1e90ff',*/
                        borderWidth: 5,
                        label: {
                            show: false
                        }
                    }
                },
                data : [
               
					{name: "北京", value:"" },
                    {name: "湖州", value: ""},           
                    {name: "徐州", value: ""},
                    {name: "南京", value:""},
					{name: "苏州", value:""},
					{name: "常州", value:""},
					{name: "昆山", value:""},
					{name: "张家港", value:""},
                ]
            }
        },
		{
			name: '计划中的城市',
			type: 'map',
			mapType: 'china',
			data:[],	
			markPoint : {
				symbol:'emptyCircle',
				symbolSize : function (v){
					return 10 + v/100
				},
				effect : {
					show: true,
					shadowBlur : 0
				},
				itemStyle:{
					normal:{
						label:{show:false}
					}
				},
				data : [
					{name: "稻城", value:""},
					{name: "拉萨", value: ""},
					{name: "张家界", value:"" },
				]
			}
	}
    ]
};
                    
                    
       // 为echarts对象加载数据 
        myChart.setOption(option);
		
		   
						   
						   })