import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Routes,
  Route,
} from "react-router-dom";
import OverviewPage from './pages/OverviewPage';
import StudentPage from './pages/StudentPage';
import StudentData from './data/StudentData';


function App() {
  const StudentNames = [...new Set(StudentData.map(item => item.name))]
  return (
<Router>
<div className="App">
  <header className="App-header">
        <h1>Winc Academy Student Dashboard</h1>
        <nav className="navigation">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
        </ul>
      </nav>
      </header>
      <main>
        <Routes>
          <Route
            path="/Students/:name"
            element={<StudentPage studentData={StudentData} />}
          />

          <Route 
          path="/"
          element={<OverviewPage
              studentData={StudentData}
              students={StudentNames}
            />} />
        </Routes>
      </main>
</div>
</Router> 
  )
}

export default App;
