// components/LineChart.tsx
import React from 'react'
import { Line } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement, // Importar PointElement para manejar los puntos
  CategoryScale,
  LinearScale,
  TooltipItem,
  ChartOptions
} from 'chart.js'

// Registrar los componentes necesarios
ChartJS.register(
  Title,
  Tooltip,
  Legend,
  LineElement,
  PointElement,
  CategoryScale,
  LinearScale
)

// Define los tipos de opciones y datos para TypeScript
// eslint-disable-next-line @typescript-eslint/no-empty-object-type
interface LineChartOptions extends ChartOptions<'line'> {}

const LineGraph: React.FC = () => {
  const dataValues = [16, 19, 3, 17, 2, 3, 7]

  // Define el color de la línea
  const borderColor = 'rgb(6, 180, 219)' // Amarillo

  // Define los datos del gráfico
  const data = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
    datasets: [
      {
        label: 'Flujo',
        data: dataValues,
        borderColor: borderColor, // Color de la línea
        borderWidth: 2, // Grosor de la línea
        fill: false, // No rellenar el área debajo de la línea
        pointRadius: 0 // Ocultar los puntos
      }
    ]
  }

  // Define las opciones del gráfico
  const options: LineChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top' as const
      },
      tooltip: {
        callbacks: {
          label: function (context: TooltipItem<'line'>) {
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
        beginAtZero: true,
        grid: {
          display: false // Ocultar las líneas de cuadrícula en el eje x
        }
      },
      y: {
        beginAtZero: true,
        grid: {
          display: false // Ocultar las líneas de cuadrícula en el eje y
        }
      }
    }
  }

  return (
    <div className='w-full h-full mt-14'>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineGraph
