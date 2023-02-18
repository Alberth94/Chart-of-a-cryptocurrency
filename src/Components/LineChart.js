import moment from 'moment';
import { Line } from 'react-chartjs-2';
import { Chart } from 'chart.js/auto';
import './LineChart.css'


function LineChart(props) {
  const { data, currencyName } = props;

  return (
    <div className='LineChart'>
      <Line
        data={{
          labels: Array.from({ length: data.length }, (_, i) =>
            moment().subtract(data.length - i - 1, 'days').format('MMM DD YYYY')
          ),
          datasets: [
            {
              label: currencyName + ' in dollar',
              data,
              backgroundColor: 'yellow',
              borderColor: 'green',
              borderWidth: 2,
              pointRadius: 4,
            },
          ],
        }}
        options={{
          scales: {
            y: {
              ticks: {
                color: 'black',
                font: {
                  weight: 'bold'
                }
              },
            },
            x: {
              ticks: {
                color: 'black',
                font: {
                  weight: 'bold'
                }
                
              },
            },
          },
        }}
      />
    </div>
  );
}

export default LineChart;