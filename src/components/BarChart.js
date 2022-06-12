import React from 'react'

const Chart = ({ children, height, width }) => (
  <svg viewBox={`0 0 ${width} ${height}`} height={height} width={width}>
    {children}
  </svg>
)

const Bar = ({ color = '#000', x, y, height, width }) => (
  <rect fill={color} x={x} y={y} height={height} width={width} />
)

const greatestValue = values => values.reduce((acc, cur) => (cur > acc ? cur : acc), -Infinity)

const BarChart = ({ data }) => {
  // console.log(data);
  const barWidth = 50
  const barMargin = 10
  const width = data.length * (barWidth + barMargin)
  const height = greatestValue(data.map(datas => datas.amount))

  return (
    <>
        <h3>Bar Chart</h3>
        <Chart height={height} width={width}>
          {data.map((datas, index) => (
            <Bar
              key={datas.name}
              color="#34b7eb"
              x={index * (barWidth + barMargin)}
              y={height - datas.amount}
              width={barWidth}
              height={datas.amount}
            />
          ))}
        </Chart>
        
    </>
  );
}

export default BarChart;

