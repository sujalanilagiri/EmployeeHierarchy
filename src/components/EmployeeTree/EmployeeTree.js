import React, { Component,Fragment } from "react";
import "../../App.css";
import OrgChart from "react-orgchart";
import "react-orgchart/index.css";
import './EmployeeTree.css';
import {
    Table,
    Tr,
  } from 'styled-table-component';

const RejectedList = (props) =>{
  let  data = Array.from(props.data);
    return (
        <Table>
        <thead>
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Reason</th>     
          </tr>
        </thead>
        <tbody>
         {data.map((rejectedEmployee)=>{
             return (<Tr active>
             <td>{rejectedEmployee.name}</td>
             <td>{rejectedEmployee.reason}</td>
             </Tr>)
         })} 
          
        </tbody>
        </Table>
    )
   
}

class EmployeeTree extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {  

  let employeeTreeObject;

  let rejectedEmployees=[];

function buildHierarchy(arry) {

    var roots = [], children = {};

    // find the top level nodes and hash the children based on parent
    for (var i = 0, len = arry.length; i < len; ++i) {
        var item = arry[i];
        var p = item.managerId;
        if(!Object.values(children).some((manager=>manager.some(employee=>employee.value.employeeName===item.employeeName))))
       { var target = !p ? roots : (children[p] || (children[p] = []))
        target.push({ value: item });
       }
       else{
        rejectedEmployees.push ({name:[item.employeeName],
                                 reason :'Duplicate Entry of Employee'});
    }
    }
    
    // function to recursively build the tree
    var findChildren = function(parent) {
        
        if (children[parent.value.employeeId]) {
            parent.children = children[parent.value.employeeId];
            children[parent.value.employeeId]['validEmployee'] = true;
            for (var i = 0, len = parent.children.length; i < len; ++i) {
                findChildren(parent.children[i]);
            }
        }
    };  

    // enumerate through to handle the case where there are multiple roots
    for (var i = 0, len = roots.length; i < len; ++i) {
        findChildren(roots[i]);
    }
    Object.entries(children).map((child)=> child[1].validEmployee ? null:rejectedEmployees.push({name:[child[0]] ,
                                                                                     reason: 'Manager is not a valid Employee'}))
    return roots;
}

let  employeeTree = buildHierarchy(this.props.EmployeeData);
  
     if (employeeTree.length > 0){
         employeeTreeObject= employeeTree.reduce((acc,emp)=> {rejectedEmployees.push({name:[emp.value.employeeName],
                                                                                                       reason :'Only on CEO can be shown in the Hierarchy'}); return acc})
     }  

    const MyNodeComponent = ({ node }) => {
        return (
       node ?
        <div
          className="initechNode"
        >
          {node.value.employeeName}
        </div>:<div>No CEO Exists in the current Data.Please add CEO Details</div>
      );
    };
     
    return (
      <Fragment>
      { employeeTreeObject ? <div className="App" id="initechOrgChart">
        <OrgChart tree={employeeTreeObject} NodeComponent={MyNodeComponent} />
        <RejectedList data = {rejectedEmployees}/>
    </div> :<div><strong>No CEO Exists in the current Data.Please add CEO Details</strong></div> }
     
      </Fragment>
    );
  }
}

export default EmployeeTree;
