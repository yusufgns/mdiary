'use client'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import {Doughnut} from 'react-chartjs-2'

ChartJS.register(
  ArcElement,
  Tooltip,
  Legend
)

export default function Barchart() {
  const data = {
    datasets: [{
      label: 'Poll',
      data: [12],
      backgroundColor: 'red',
      borderWidth: 0,
      circumference: 270
    }]
  }

  const backgroundCircle: any = {
    id: 'backgroundCircle',
    beforeDatasetsDraw(chart: any, args: any, pluginOptions: any) {
        const {ctx} = chart;
        ctx.save();

        const xCoor = chart.getDatasetMeta(0).data[0].x;
        const yCoor = chart.getDatasetMeta(0).data[0].y;
        const innerRadius = chart.getDatasetMeta(0).data[0].innerRadius;
        const outherRadius = chart.getDatasetMeta(0).data[0].outerRadius;
        const width = outherRadius - innerRadius;
        const angle = Math.PI / 180;

        ctx.beginPath();
        ctx.lineWidth = width;
        ctx.strokeStyle = `#B9B8B9`
        ctx.arc(xCoor, yCoor, outherRadius - width / 2, 0, angle * 360, false);
        ctx.stroke()
    }
  }


  return (
    <>
        <div>
            <Doughnut data={data} plugins={[backgroundCircle]}></Doughnut>
        </div>
    </>
  )
}