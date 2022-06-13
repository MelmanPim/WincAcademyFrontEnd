import React from 'react';
import { Link } from "react-router-dom";

const StudentsPage = (props) => {
    const studentLinks = props.students.map(item => {
        const studentUrl = "/Students/" + item
        return (
            <li key={item}>
                <Link to={studentUrl}>{item}</Link>
            </li>
        )
    })
    
    return (
        <div className="StudentsPage">
            <h1>View a single student</h1>
            <div className="ListBlock">
                <ul className="StudentsPageList">
                    {studentLinks}
                </ul>
            </div>
        </div>
    )
}

export default StudentsPage;