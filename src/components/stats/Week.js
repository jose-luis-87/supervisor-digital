import React, { Component } from 'react'
import Chart from "chart.js"
Chart.defaults.global.defaultFontColor = "#ffffff";

export default class LineGraph extends Component {

    chartRef = React.createRef();

    componentDidMount(){

        const weekChart = this.chartRef.current.getContext("2d");

        new Chart(weekChart,
            {
                type: "line",
                data: {
                    labels: ["lunes", "martes", "miércoles", "jueves", "viernes", "sábado", "domingo"],
                    datasets: this.props.data
                },

              
                options: {

                    defaultColor: "#fffff",
                    showLines: false,
                    responsive: true,
                    maintainAspectRatio: false,
                    
                    layout: {
                            padding: {
                                left: 20,
                                right: 30,
                                top: 0,
                                bottom: 0
                            },
                            
                        },
                        
                    legend: {
                            display: false,
                            },

                    scales: {

                        xAxes: [{
                            
                            ticks:{
                                display: true,
                                padding:8,
                            },

                            gridLines: {
                                zeroLineWidth: 0.5,
                                zeroLineColor: "#ffffff",
                                display: true,
                                color: "#ffffff",
                                drawBorder: false,
                                lineWidth: 0.5,
                            }
                        }],

                        yAxes: [
                          {
                            gridLines: {
                                display: false,
                                color: "#ffffff",
                                drawBorder: true,
                              },
                              
                            ticks: {
                                display: false,
                                stepSize: 6,
                                min:6,
                                max: 24,
                                maxTicksLimit: 4
                            },
                          }
                        ]
                      }, 
                      
                }
            }
        )
    }
    render() {
        return (
            <div className="wrapperChart">
                <canvas
                    id="weekChart"
                    ref={this.chartRef}
                />
            </div>
        )
    }
}

