import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';


function App() {
  const [name, setName] = useState('');
  const [age, setAge] = useState(0);
  const [country, setCountry] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState(0);
  const [employeeList, setEmployeeList] = useState([]);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const addEmployee = () => {
    axios
      .post('http://localhost:3001/create', {
        name: name,
        age: age,
        country: country,
        position: position,
        salary: salary,
      })
      .then(() => console.log('success'));
  };

  const getEmployees = () => {
    axios.get('http://localhost:3001/my_bio').then((response) => {
      setEmployeeList(response.data);
      setSelectedEmployeeId(null);
      setIsEditing(false);
    });
  };

  const deleteEmployee = (id) => {
    axios.delete(`http://localhost:3001/delete/${id}`).then((response) => {
      setEmployeeList(employeeList.filter((emp) => emp.id !== id));
    });
  };

  useEffect(() => {
    getEmployees();
  }, []);


  return (
    <>
    <div className="information" > 
    <form onSubmit={addEmployee}>
      <label>Name</label>
      <input type="text" name="name" onChange={(e) => setName(e.target.value)} />
      <label>Age</label>
      <input type="text" name="age" onChange={(e) => setAge(e.target.value)} />
      <label>Country</label>
      <input type="text" name="country" onChange={(e) => setCountry(e.target.value)} />
      <label>Position</label>
      <input type="text" name="position" onChange={(e) => setPosition(e.target.value)} />
      <label>Salary</label>
      <input type="text" name="salary" onChange={(e) => setSalary (e.target.value)} />
      <button type ="submit">Add Employee</button>


      </form>
    </div>





{employeeList.map((emp) => {
  return (
    
    <div key={emp.id} style={{ marginLeft: '20%' }}>
      <p>Name: {emp.name}</p>
      <p>Age: {emp.age}</p>
      <p>Country: {emp.country}</p>
      <p>Position: {emp.position}</p>
      <p>Salary: {emp.salary}</p>
      {isEditing && selectedEmployeeId === emp.id ? (
        
        <button 
          onClick={() => {
            axios.put(`http://localhost:3001/update/${emp.id}`, {
              name,
              age,
              country,
              position,
              salary,
            }).then(() => {
              getEmployees();
              setIsEditing(false);
            });
          }}
        >
          Update
        </button>
      ) : (
       
        <button
          onClick={() => {
            setName(emp.name);
            setAge(emp.age);
            setCountry(emp.country);
            setPosition(emp.position);
            setSalary(emp.salary);
            setSelectedEmployeeId(emp.id);
            setIsEditing(true);
          }}
        >
          Edit
        </button>
        
      )}
     
      <button onClick={() => deleteEmployee(emp.id)}>Delete</button>
      </div>

  );
})}

    </>
  );
}

export default App;