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
const options: ChartOptions<'pie'> = {
  responsive: true,
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true
    }
  }
}

const CakeGraph: React.FC = () => {
  return (
    <div className='w-[180px] h-[180px]'>
      <Pie data={data} options={options} />
    </div>
  )
}

export default CakeGraph
