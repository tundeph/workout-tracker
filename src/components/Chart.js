import React from "react"
import { Line } from "react-chartjs-2"

function Chart({ data, width, height }) {
  return (
    <div>
      <Line
        data={data}
        width={width}
        height={height}
        options={{
          title: {
            display: true,
            text: "Average Rainfall per month",
            fontSize: 20,
          },
          legend: {
            display: true,
            position: "right",
          },
          maintainAspectRatio: true,
        }}
      />
    </div>
  )
}

export default Chart
