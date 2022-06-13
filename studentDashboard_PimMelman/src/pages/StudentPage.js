import React from 'react';
import ChartComponent from '../components/ChartComponent';
import { useParams } from "react-router-dom";

const StudentPage = (props) => {
        const {name}  = useParams();

        console.log({name})

        const studentData = props.studentData.filter(item => {
            return item.name === name
        })
    
        return (
            <div className="StudentPage">
                <h1>Data of {name}</h1>
                <ChartComponent
                    studentData={studentData}
                />
            </div>
        )
}

export default StudentPage;