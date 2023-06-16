import './App.css';
import { useState } from "react";
import Axios from 'axios';

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [shifts, setShifts] = useState(0);
  const [position, setPosition] = useState("");

  const [newShifts, setNewShifts] = useState(0);

  const [employeeList, setEmployeeList] = useState([]);
  const [isViewingEmployees, setIsViewingEmployees] = useState(false);

  const addEmployee = () => {
    Axios.post("http://localhost:3001/create", {
      firstName: firstName,
      lastName: lastName,
      shifts: shifts,
      position: position
    })
      .then(() => {
        setEmployeeList([...employeeList, {
          firstName: firstName,
          lastName: lastName,
          shifts: shifts,
          position: position
        },]);

        window.location.reload();
      });
  };

  const toggleViewEmployees = () => {
    if (isViewingEmployees) {
      setIsViewingEmployees(false);
      setEmployeeList([]);
    } else {
      Axios.get("http://localhost:3001/employees").then((response) => {
        setEmployeeList(response.data);
        setIsViewingEmployees(true);
      });
    }
  }

  const updateEmployeeShifts = (id) => {
    Axios.put("http://localhost:3001/update", { shifts: newShifts, id: id }).then((response) => {
      setEmployeeList(employeeList.map((val) => {
        return val.id === id ? { id: val.id, firstName: val.firstName, lastName: val.lastName, shifts: newShifts, position: val.position } : val
      }))
    });
  }

  const deleteEmployee = (id) => {
    Axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(employeeList.filter((val) => {
        return val.id !== id;
      }))
    })
  };

  return (
    <div className="App">
      <div className="top-bar">
        <div className="title-wrapper">
          <h1 className="title">Schedule Assistant</h1>
          <span className="how-to-use">How to Use</span>
        </div>
        <span className="trademark">&#8482;</span>
      </div>
      <div className="information">
        <label>First Name: </label>
        <input
          type="text"
          onChange={(event) => {
            setFirstName(event.target.value);
          }}
        />
        <label>Last Name: </label>
        <input
          type="text"
          onChange={(event) => {
            setLastName(event.target.value);
          }}
        />
        <label>Shifts/Week: </label>
        <input
          type="number"
          onChange={(event) => {
            setShifts(event.target.value);
          }}
        />
        <label>Position: </label>
        <div style={{ position: "relative" }}>
          <select
            style={{ width: "300px", height: "50px" }}
            onChange={(event) => {
              setPosition(event.target.value);
            }}
          >
            <option value="Manager">Manager</option>
            <option value="Supervisor">Supervisor</option>
            <option value="Top">Top</option>
            <option value="End">End</option>
            <option value="Concession">Concession</option>
            <option value="Bus">Bus</option>
          </select>
          <span className="select-icon">&#9662;</span>
        </div>

        <button onClick={addEmployee}>Add Employee</button>
      </div>
      <br />
      <div className='employees'>
        <button onClick={toggleViewEmployees}>
          {isViewingEmployees ? "Close" : "View All Employees"}
        </button>

        {employeeList.map((val, key) => {
          return (
            <div className='employee' key={key}>
              <div>
                <h3>Name: {val.firstName} {val.lastName}</h3>
                <h3>Position: {val.position}</h3>
                <h3>Shifts/Week: {val.shifts}</h3>
              </div>
              <div>
                {" "}
                <input
                  type='text'
                  placeholder='Shifts/Week'
                  onChange={(event) => {
                    setNewShifts(event.target.value);
                  }}
                />
                <button onClick={() => { updateEmployeeShifts(val.id) }}> Update </button>
                <br />
                <button onClick={() => { deleteEmployee(val.id) }}>Delete</button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
