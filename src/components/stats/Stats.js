import React, { useState, useEffect, useRef} from 'react';
import Daily from "./Daily"
import Week from "./Week"
import Month from "./Month"
import { ArrowsBar } from '../ArrowsBar';

export const Stats = () => {


    let _data = [
        {
             label: 'Apertura',
             backgroundColor:"#0C8530",
             pointRadius: 6,
             
             data: [
                 7, 8, 
             ],
         },

         {
             label: 'Cierre',
             backgroundColor:  "#FF8A01",
             pointRadius: 6,
             
             data: [
                 19, 20
             ],
         }
   ]


   let _dataWeek = [
    {
         label: 'Apertura',
         backgroundColor:"#0C8530",
         pointRadius: 6,
         
         data: [
             7, 8, 8, 9, 8, 10, 7
         ],
     },

     {
         label: 'Cierre',
         backgroundColor:  "#FF8A01",
         pointRadius: 6,
         
         data: [
             19, 18, 20, 18, 20, 21, 20
         ],
     }

     
]



let _dataMonth = [
    {
         label: 'Apertura',
         backgroundColor:"#0C8530",
         pointRadius: 6,
         
         data: [
             7, 8, 8, 9, 8, 10, 7, 8, 8, 9, 8, 10, 7, 8, 8, 9, 8, 10, 7, 8, 8, 9, 8, 10, 7, 8, 8, 9, 8, 10, 8, 9, 8, 10, 7, 
         ],
     },

     {
         label: 'Cierre',
         backgroundColor:  "#FF8A01",
         pointRadius: 6,
         
         data: [
             19, 18, 20, 18, 20, 21, 20, 18, 20, 18, 20, 21, 20, 18, 20, 18, 20, 21, 20, 18, 20, 18, 20, 21, 20, 21, 20, 18, 20,
         ],
     }

     
]
    const chartsRef= useRef(null);

    const [stateChart, setstateChart] = useState({
        
        chart: 1,
        contentChart: '',
        
    });

   

    
    

    useEffect(() => {

        function sigChart() {

            let nuevoChart = null;
            switch (stateChart.chart) {
                case 1:
                    nuevoChart = <Daily data={_data}/>;
                    break;
                case 2:
                    nuevoChart = <Week data={_dataWeek}/>;
                    break;
                case 3:
                    nuevoChart = <Month data={_dataMonth}/>;
                    break; 
                default:
                    break;
            }
            setstateChart(prevState => ({ ...prevState, contentChart: nuevoChart }));

        }
        sigChart();


    }, [stateChart.chart]);


    function setChart(event) {

        let nuevoChart = parseInt(event.currentTarget.dataset.chart);
        setstateChart(prevState => ({ ...prevState, chart: nuevoChart }));

    }


    return (
        <div id="panelCharts" className="wrapperCharts" ref={chartsRef} >
            <div className="buttonsFilter">
                    <div onClick={setChart} data-chart={1} className={`${"btnFilter"} ${stateChart.chart === 1 ? "btnActive": ""}`}>
                        <p>Hoy</p>
                    </div>
                    <div onClick={setChart} data-chart={2} className={`${"btnFilter"} ${stateChart.chart === 2 ? "btnActive" : ""}`}>
                        <p>Últimos 7 días</p>
                    </div>
                    <div onClick={setChart} data-chart={3} className={`${"btnFilter"} ${stateChart.chart === 3 ? "btnActive"  : ""}`}>
                        <p>Últimos 30 días</p>
                    </div>
                    
            </div>
                
            <ArrowsBar/>
            <div className="stats">
                <div className="dataBar">
                    <p>12 A.M.</p>
                    <div className="orangeBar"></div>
                    <p>6 P.M.</p>
                    <div className="blueBar"></div>
                    <p>12 P.M.</p>
                    <div className="greenBar"></div>
                    <p>6 A.M.</p>
                </div>   
                {stateChart.contentChart}
            </div>
            
           
       
        </div>
    )
}
