import React from 'react';
import ChartComponent from '../components/ChartComponent';
import StudentsPage from './StudentsPage';

class OverviewPage extends React.Component {
    constructor(props) {
        super(props)
        const students = props.students.map(item => {
            return {
                name: item,
                state: true
            }
        })

        this.state = {
            students: students
        }

    }

    calculateAvgDifficulty(studentData, assignment) {
        let average = 0;
        let items = 0;
        studentData.forEach(item => {
            if (item.assignment === assignment) {
                average += item.difficult
                items++;
            }
        })
        return Math.round(average / items * 10) / 10
    }

    calculateAvgFun(studentData, assignment) {
        let average = 0;
        let items = 0;
        studentData.forEach(item => {
            if (item.assignment === assignment) {
                average += item.fun
                items++;
            }
        })
        return Math.round(average / items * 10) / 10
    }

    avgStudentData(studentData) {
        const averageStudentData = []
        let filterItemId = 1
        studentData.forEach(studentItem => {
            const data = averageStudentData.find(filterItem => {
                return studentItem.assignment === filterItem.assignment
            })
            if (data === undefined) {
                const avgDifficulty = this.calculateAvgDifficulty(studentData, studentItem.assignment)
                const avgFun = this.calculateAvgFun(studentData, studentItem.assignment)
                averageStudentData.push({
                    id: filterItemId + 1,
                    name: 'average',
                    assignment: studentItem.assignment,
                    difficult: avgDifficulty,
                    fun: avgFun
                })
            }
        })
        // console.log(filteredData)
        return averageStudentData
    }

    filteredStudentsData() {
        const filteredStudentsData = this.props.studentData.filter(studentDataItem => {
            const student = this.state.students.find(studentItem => {
                return studentItem.name === studentDataItem.name
            })
            return (student !== undefined && student.state === true)
        })
        return filteredStudentsData
    }

    render() {
        const filteredStudentsData = this.filteredStudentsData(this.props.studentData)
        const averageStudentData = this.avgStudentData(filteredStudentsData)
        return (
            <div className="OverviewPage">
                <h1>Dashboard Overview All Students</h1>
                
                <ChartComponent
                    studentData={averageStudentData}
                />
                <StudentsPage students={this.props.students}/>
            </div>
        )
    }
  }

export default OverviewPage;