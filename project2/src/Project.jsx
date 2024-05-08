import React, { useState, useEffect } from 'react';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [position, setPosition] = useState('');
  const [salary, setSalary] = useState('');
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    const storedEmployees = JSON.parse(localStorage.getItem('employees')) || [];
    setEmployees(storedEmployees);
  }, []);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !position || !salary) return;
    
    const newEmployee = {
      id: Date.now(),
      name,
      position,
      salary: parseFloat(salary)
    };

    const updatedEmployees = [...employees, newEmployee];
    setEmployees(updatedEmployees);
    localStorage.setItem('employees', JSON.stringify(updatedEmployees));

    setName('');
    setPosition('');
    setSalary('');
  };

  return (
    <div className="employee-form-container">
      <h2>Add New Employee</h2>
      <form onSubmit={handleFormSubmit} className="employee-form">
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />
        <input
          type="number"
          placeholder="Salary"
          value={salary}
          onChange={(e) => setSalary(e.target.value)}
        />
        <button type="submit">Add Employee</button>
      </form>
      <div className="employee-list">
        <h2>Employee Details</h2>
        {employees.map(employee => (
          <div key={employee.id} className="employee-card">
            <p><strong>Name:</strong> {employee.name}</p>
            <p><strong>Position:</strong> {employee.position}</p>
            <p><strong>Salary:</strong> ${employee.salary}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EmployeeForm;
