import React, { Component } from 'react'
import { Bar, Line, Pie } from 'react-chartjs-2'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import Select from '@material-ui/core/Select';

export default class Chart extends Component {


  constructor(props) {
    super()
    this.state = {
      charData: props.chartData
    }
  }
  static defaultProps = {
    displayTitle: true,
    displayLegend: true,
    legendPosition: 'right'
  };

    render() {
        return ( <
            div className = "chart" >
            <Bar data = { this.state.charData }
            width = { 600 }
            height = { 400 }
              options = {{
                  title: {
                    display: this.props.displayTitle,
                    text: 'Detected Persons',
                    fontSize: 20
                  },
                  legend: {
                    display: this.props.displayLegend,
                    position: this.props.legendPosition
                  }

            }, { maintainAspectRatio: false }}
            />
              <center><br/>
                <Button variant="contained" color="primary">Daily</Button>
                <Button variant="contained" color="primary">Weekly</Button>
                <Button variant="contained" color="primary">Monthly</Button>
              </center>
            </div>
        )
    }
}
