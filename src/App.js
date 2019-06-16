import React from 'react';
import logo from './logo.svg';
import  EmployeeTree from '../src/components/EmployeeTree/EmployeeTree.js'

const EmployeeData = [
  { employeeName: "Alan", employeeId: "100", managerId: "150" },
  { employeeName: "Martin", employeeId: "220", managerId: "220" },
  { employeeName: "Jamie", employeeId: "150", managerId: "" },
  { employeeName: "Alex", employeeId: "275", managerId: "100" },
  { employeeName: "Steve", employeeId: "400", managerId: "150" },
  { employeeName: "David", employeeId: "190", managerId: "400" }
];
function App() {
  return (
    <div className="App">
      <EmployeeTree EmployeeData={EmployeeData}/>
    </div>
  );
}

export default App;
