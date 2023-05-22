<template>
    <div class="echart" id="mychart" :style="myChartStyle" ></div>

</template>

<script>
import * as echarts from "echarts";


export default {
    data() {
        return {
            xData: ['Sydney', 'Melbourne', 'Adelaide', 'Brisbane', 'Perth', 'Central Coast', 'Ballarat', 'Darwin', 'Hobart', 'Sunshine Coast', 'Townsville', 'Riverine'],
            yData: [14228, 14535, 14068, 15018, 13625, 15812, 63, 6633, 3036, 14015, 52, 2001],
            myChartStyle: { float: "left", width: "1150px", height: "400px" }

        };
    },
    mounted() {
        this.initEcharts();
    },
    methods: {
        initEcharts() {

            const option = {
                title: {
                    text: 'Distribution of data across cities',
                },
                xAxis: {
                    data: this.xData,
                    axisLabel:{
                        show: true,
                        interval: 0,
                    }

                },
                yAxis: {},
                series: [
                    {
                        type: "bar",
                        data: this.yData,
                        showBackground: true,
                    }
                ]
            };
            const myChart = echarts.init(document.getElementById("mychart"));
            myChart.setOption(option);
            window.addEventListener("resize", () => {
                myChart.resize();
            });

        }
    }
};
</script>
