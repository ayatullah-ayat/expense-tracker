
import ChartBar from "./ChartBar";

import './Chart.css';

const Chart = (props) => {

    const dataPointValues = props.dataPoints.map(dataPoint => dataPoint.value);

    const dataPointMax = Math.max(...dataPointValues);

    return(
        <div className='chart'>
            { props.dataPoints.map((dataPoint, index) => 
                <ChartBar   key= { index }
                            label = { dataPoint.label }
                            maxValue = { dataPointMax }
                            value = { dataPoint.value } 
                />) 
            }
        </div>
    );
}

export default Chart;