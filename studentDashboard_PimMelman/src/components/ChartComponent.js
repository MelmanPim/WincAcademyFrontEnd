import React from 'react';
import InputSelect from './InputSelect';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryGroup, VictoryZoomContainer, VictoryLabel } from 'victory';

class ChartComponent extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            showDifficult: true,
            showFun: true
        }

        this.handleCheckboxChange = this.handleCheckboxChange.bind(this)
    }

    handleCheckboxChange(name, state) {

        if (name === 'difficult') {
            this.setState(() => {
                return {
                    showDifficult: state
                }
            })
        } else if (name === 'fun') {
            this.setState(() => {
                return {
                    showFun: state
                }
            })
        }
    }

    render() {
        const renderDifficultChart = (showIfDifficult) => {
            if (showIfDifficult === true) {
                return (
                    <VictoryBar
                        labels={({ datum }) => datum.difficult}
                        labelComponent={
                        <VictoryLabel 
                        dy={8} 
                        />}
                        data={this.props.studentData}
                        x="assignment"
                        y="difficult"
                        style={{ data: { fill: "#4f8bc9" }, labels: { fill: "white", fontSize: "5" } }}
                    />
                )
            }
        }

        const renderFunChart = (showIfFun) => {
            if (showIfFun === true) {
                return (
                    <VictoryBar
                        labels={({ datum }) => datum.fun}
                        labelComponent={<VictoryLabel dy={8} />}
                        data={this.props.studentData}
                        x="assignment"
                        y="fun"
                        style={{ data: { fill: "#1d334a" }, labels: { fill: "white", fontSize: "5" } }}
                    />
                )
            }
        }

        return (
            <div className="ChartComponent">
                <div className="InputSelect">
                    <label className='InputSelectLabel'>
                    <InputSelect
                        selectName={'difficult'}
                        selectChange={this.handleCheckboxChange}
                    />Difficulty</label>
                    <br />
                    <label className='InputSelectLabel'>
                    <InputSelect
                        selectName={'fun'}
                        selectChange={this.handleCheckboxChange}
                    />Fun</label>
                </div>

                <VictoryChart
                    domainPadding={{ x: 20 }}
                    height={200}
                    className="VictoryChart-BarChart"
                    containerComponent={
                        <VictoryZoomContainer
                        zoomDomain={{x: [0, 10]}}
                        allowZoom={false}
                        />
                      }
                >
                    <VictoryAxis
                        tickFormat={this.props.studentData.assigment}
                        style={{
                            tickLabels: { textAnchor: 'end',
                            fontSize: 6,
                            padding: 3,
                            writingMode: "horizontal",
                            angle: -20,
                            backgroundColor: "white", },
                            ticks: { stroke: "grey", size: 3 }
                        }}
                    />
                    <VictoryAxis
                        dependentAxis
                        tickFormat={[1, 2, 3, 4, 5]}
                        style={{
                            tickLabels: { 
                                fontSize: 10,
                                padding: 3,
                             },
                            ticks: { stroke: "grey", size: 3 },
                            grid: { stroke: "#D3D3D3" }
                        }}
                    />
                    <VictoryGroup 
                    offset={10} 
                    style={{ data: { width: 8 } }}
                    >
                        {renderDifficultChart(this.state.showDifficult)}
                        {renderFunChart(this.state.showFun)}
                    </VictoryGroup>
                </VictoryChart>
                <div className="ComponentInfo">
                    <p className="fun">Fun of assignment</p>
                    <p className="difficult">Difficulty of assignment</p>
                </div>
                
            </div>


        )
    }
}

export default ChartComponent;