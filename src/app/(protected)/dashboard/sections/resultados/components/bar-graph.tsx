// components/BarChart.tsx
import React from 'react'
import { Bar } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale,
  TooltipItem,
  ChartOptions
} from 'chart.js'

// Registrar los componentes necesarios
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

// Define los tipos de opciones y datos para TypeScript
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface BarChartOptions extends ChartOptions<'bar'> {}

const BarGraph: React.FC = () => {
  const dataValues = [16, 19, 3, 17, 2, 3, 7]

  // Function to determine color based on value
  const getColor = (value: number) => {
    if (value > 15) return 'rgb(6, 180, 219)' // High values
    if (value > 5) return 'rgb(103, 227, 249)' // Medium values
    return 'rgb(14, 111, 144)' // Low values
  }

  // Generate an array of colors for each data point
  const backgroundColors = dataValues.map(getColor)

  // Define the chart data
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Value',
        data: dataValues,
        backgroundColor: backgroundColors, // Apply dynamic colors
        borderColor: 'rgba(0, 0, 0, 0)',
        borderWidth: 1
      }
    ]
  }

  // Define the chart options
  const options: BarChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const 
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'bar'>) {
            let label = context.dataset.label || ''
            if (label) {
              label += ': '
            }
            if (context.parsed.y !== null) {
              label += context.parsed.y
            }
            return label
          }
        }
      }
    },
    scales: {
      x: {
        beginAtZero: true
      },
      y: {
        beginAtZero: true
      }
    }
  }

  return (
    <div className='w-full h-full mt-14'>
      <Bar data={data} options={options} />
    </div>
  )
}

export default BarGraph
