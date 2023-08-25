import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Chart.css'

const Chart = (props) => {
    console.log(props.dailySentiments[0].date);
    console.log(typeof props.dailySentiments[0].date);
    const positiveData = new Array(7).fill(null);
    const neutralData = new Array(7).fill(null);
    const negativeData = new Array(7).fill(null);
    const dates = ["Day 1","Day 2","Day 3","Day 4","Day 5","Day 6","Day 7"];

    for(let i = 0; i< props.dailySentiments.length; i++) {
        const date = props.dailySentiments[i].date.split('T')[0];
        console.log(props.dailySentiments[i].date);
        console.log(typeof props.dailySentiments[i].date);

        dates[i] = date;
        positiveData[i] = props.dailySentiments[i].sentiment.positive;
        neutralData[i] = props.dailySentiments[i].sentiment.neutral;
        negativeData[i] = props.dailySentiments[i].sentiment.negative;
    }
    const chartData = {
        series: [
            {
                name: "Postive",
                data: positiveData
            },
            {
                name: "Neutral",
                data: neutralData
            },
            {
                name: "Negative",
                data: negativeData
            }
        ],
        options: {
            chart: {
                height: 350,
                width: 500,
                type: 'line',
                dropShadow: {
                    enabled: true,
                    color: '#000',
                    top: 18,
                    left: 7,
                    blur: 10,
                    opacity: 0.2
                },
                toolbar: {
                    show: true,
                    tools: {
                        download: true,
                        selection: false,
                        zoom: false,
                        zoomin: false,
                        zoomout: false,
                        pan: false,
                        reset: false | '<img src="/static/icons/reset.png" width="20">',
                        customIcons: [] // Show only the download option
                    },
                }
            },
            colors: ['#77B6EA', '#545454'],
            dataLabels: {
                enabled: true,
            },
            stroke: {
                curve: 'smooth'
            },
            title: {
                text: `Sentiment for ${props.searchWord}`,
                align: 'left'
            },
            grid: {
                borderColor: '#e7e7e7',
                row: {
                    colors: ['#f3f3f3', 'transparent'],
                    opacity: 0.5
                },
            },
            markers: {
                size: 1
            },
            xaxis: {
                categories: dates,
                title: {
                    text: 'Dates'
                }
            },
            yaxis: {
                title: {
                    text: 'Sentiment count'
                },
                min: 5,
                max: 100
            },
            legend: {
                position: 'top',
                horizontalAlign: 'right',
                floating: true,
                offsetY: -25,
                offsetX: -5
            }
        }
    };

    return (
        <div id="chart">
            <ReactApexChart options={chartData.options} series={chartData.series} type="line" height={350} />
        </div>
    );
};

export default Chart;
