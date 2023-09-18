import React from 'react';
import ReactApexChart from 'react-apexcharts';
import './Chart.css'

const Chart = (props) => {
    const positiveData = new Array(7).fill(null);
    const neutralData = new Array(7).fill(null);
    const negativeData = new Array(7).fill(null);
    const dates = ["Day 1", "Day 2", "Day 3", "Day 4", "Day 5", "Day 6", "Day 7"];

    console.log(props.dailySentiments.length);

    for (let i = 0; i < props.dailySentiments.length; i++) {
        const date = props.dailySentiments[i].date.split('T')[0];

        dates[i] = date;
        positiveData[i] = props.dailySentiments[i].sentiment.positive;
        neutralData[i] = props.dailySentiments[i].sentiment.neutral;
        negativeData[i] = props.dailySentiments[i].sentiment.negative;
    }

    const chartData = {
        series: [
            {
                name: "Postive",
                data: positiveData,
                color: '#00FF00'
            },
            {
                name: "Neutral",
                data: neutralData,
                color: '#808080'
            },
            {
                name: "Negative",
                data: negativeData,
                color: '#FF6F61'
            }
        ],
        options: {
            chart: {
                height: 350,
                width: 500,
                type: 'bar',
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
                    colors: ['#E7D1FF', 'transparent'],
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
        <div className="chart">
            <div id="chart">
                <ReactApexChart options={chartData.options} series={chartData.series} type="bar" height={350} />
            </div>
        </div>
    );
};

export default Chart;
