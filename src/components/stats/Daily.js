import React, { Component } from 'react'
import Chart from "chart.js"
Chart.defaults.global.defaultFontColor = "#ffffff";




export default class LineGraph extends Component {

    chartRef = React.createRef();

    componentDidMount(){
        const dailyChart = this.chartRef.current.getContext("2d");

        new Chart(dailyChart,
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
                                left: 24,
                                right: 40,
                                top: 24,
                                bottom: 4
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
                    id="dailyChart"
                    ref={this.chartRef}
                
                />
            </div>
        )
    }
}

