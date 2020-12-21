import React, { Component } from 'react'
import Chart from "chart.js"
Chart.defaults.global.defaultFontColor = "#ffffff";




export default class LineGraph extends Component {

    chartRef = React.createRef();

    componentDidMount(){
        const monthChart = this.chartRef.current.getContext("2d");

        new Chart(monthChart,
            {
                type: "line",
                data: {
                    labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30],
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
                                ticks:{display: true,
                                padding:8,},

                            gridLines: {
                                zeroLineWidth: 0.5,
                                zeroLineColor: "#ffffff",
                                display: true,
                                color: "#ffffff",
                                drawBorder: false,
                                lineWidth: 0.5,}
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
                    id="monthChart"
                    ref={this.chartRef}
                
                />
            </div>
        )
    }
}

