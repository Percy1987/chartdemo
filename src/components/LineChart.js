import React, { Component } from "react"
import "../App.css"

class LineChart extends Component {

  getMinX() {
    const { data } = this.props;
    return data[0].x;
  }
  getMaxX() {
    const { data } = this.props;
    return data[data.length - 1].x;
  }

  getMinY() {
    const { data } = this.props;
    return data.reduce((min, p) => p.y < min ? p.y : min, data[0].y);
  }
  getMaxY() {
    const { data } = this.props;
    return data.reduce((max, p) => p.y > max ? p.y : max, data[0].y);
  }

  getSvgX(x) {
    const { svgWidth } = this.props;
    return (x / this.getMaxX() * svgWidth);
  }
  getSvgY(y) {
    const { svgHeight } = this.props;
    return svgHeight - (y / this.getMaxY() * svgHeight);
  }
  
  makePath() {
    const { data, color } = this.props;
    let pathD = "M " + this.getSvgX(data[0].x) + " " + this.getSvgY(data[0].y) + " ";

    pathD += data.map((point, i) => {
      return "L " + this.getSvgX(point.x) + " " + this.getSvgY(point.y) + " ";
    });

    return (
      <path className="linechart_path" d={pathD} style={{ stroke: color }} />
    );
  }
  
  makeAxis() {
    const minX = this.getMinX(), maxX = this.getMaxX();
    const minY = this.getMinY(), maxY = this.getMaxY();

    return (
      <g className="linechart_axis">
        <line
          x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
          x2={this.getSvgX(maxX)} y2={this.getSvgY(minY)} />
        <line
          x1={this.getSvgX(minX)} y1={this.getSvgY(minY)}
          x2={this.getSvgX(minX)} y2={this.getSvgY(maxY)} />
      </g>
    );
  }
  
  render() {
    const { svgHeight, svgWidth } = this.props;

    return (
      <>
        <h3>Line Chart</h3>
        <svg viewBox={`0 0 ${svgWidth} ${svgHeight}`}>
          {this.makePath()}
          {this.makeAxis()}
        </svg>
      </>
    );
  }
}

LineChart.defaultProps = {
  data: [], 
  color: '#22dcfd',
  svgWidth: 450, 
  svgHeight: 200, 
}

export default LineChart;