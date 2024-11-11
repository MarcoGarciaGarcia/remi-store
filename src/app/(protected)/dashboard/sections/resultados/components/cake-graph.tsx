// components/PieChart.tsx
import React from 'react'
import { Pie } from 'react-chartjs-2'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  ArcElement,
  ChartOptions
} from 'chart.js'

// Registrar los componentes necesarios
ChartJS.register(Title, Tooltip, Legend, ArcElement)

// Define los tipos de opciones y datos para TypeScript
interface PieChartOptions extends ChartOptions<'pie'> {}

const CakeGraph: React.FC = () => {
  // Datos de los estados
  const dataValues = [85, 10, 5] // Ejemplo: [Pagado, Pendiente, Fuera de plazo]

  // Colores para cada estado
  const backgroundColors = [
    'rgba(250, 207, 1, 1)', // Pagado (verde)
    'rgba(143, 142, 142, 1)', // Pendiente (amarillo)
    'rgba(0, 0, 0, 1)' // Fuera de plazo (rojo)
  ]

  // Definir los datos del gráfico
  const data = {
    labels: ['Pagado', 'Pendiente', 'Fuera de plazo'],
    datasets: [
      {
        data: dataValues,
        backgroundColor: backgroundColors, // Colores asignados
        borderColor: 'rgba(255, 255, 255, 1)', // Sin borde
        borderWidth: 1
      }
    ]
  }

  // Definir las opciones del gráfico
  const options: PieChartOptions = {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            const label = context.label || ''
            const value = context.raw
            return `${label}: ${value}`
          }
        }
      }
    }
  }

  return (
    <div className='w-[180px] h-[180px]'>
      <Pie data={data} options={options} />
    </div>
  )
}

export default CakeGraph
