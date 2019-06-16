import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import React from 'react';
import { shallow } from 'enzyme';
import EmployeeComponent from './EmployeeTree';

configure({ adapter: new Adapter() });

describe('EmployeeTreeComponent', () => {
    const Data = [
        { employeeName: "Alan", employeeId: "100", managerId: "150" },
        { employeeName: "Martin", employeeId: "220", managerId: "100" },
        { employeeName: "Jamie", employeeId: "150", managerId: "" },
        { employeeName: "Jimmy", employeeId: "250", managerId: "" },
        { employeeName: "Alex", employeeId: "275", managerId: "100" },
        { employeeName: "Steve", employeeId: "400", managerId: "150" },
        { employeeName: "David", employeeId: "190", managerId: "400" }
      ];
  it('should render only single CEO even when multiple CEO are present', () => {
    const component = shallow(<EmployeeComponent EmployeeData={Data} />);
  
    expect(component).toMatchSnapshot();
  });

  it('should not render duplicate records', () => {
    const Data = [
        { employeeName: "Alan", employeeId: "100", managerId: "150" },
        { employeeName: "Martin", employeeId: "220", managerId: "100" },
        { employeeName: "Martin", employeeId: "220", managerId: "100" },
        { employeeName: "Jimmy", employeeId: "250", managerId: "" },
        { employeeName: "Alex", employeeId: "275", managerId: "100" },
        { employeeName: "Steve", employeeId: "400", managerId: "150" },
        { employeeName: "David", employeeId: "190", managerId: "400" }
      ];
   
    const component = shallow(<EmployeeComponent EmployeeData={Data} />);
  
    expect(component).toMatchSnapshot();
  });
  it('should not only valid employee hierarchy', () => {
    const Data = [
        { employeeName: "Alan", employeeId: "100", managerId: "150" },
        { employeeName: "Martin", employeeId: "220", managerId: "100" },
        { employeeName: "Martin", employeeId: "220", managerId: "100" },
        { employeeName: "Jimmy", employeeId: "250", managerId: "" },
        { employeeName: "Alex", employeeId: "275", managerId: "100" },
        { employeeName: "Steve", employeeId: "400", managerId: "150" },
        { employeeName: "David", employeeId: "190", managerId: "400" }
      ];
   
    const component = shallow(<EmployeeComponent EmployeeData={Data} />);
  
    expect(component).toMatchSnapshot();
  });

  it('should not render tree when no CEO', () => {
    const Data = [
        { employeeName: "Alan", employeeId: "100", managerId: "150" },
        { employeeName: "Martin", employeeId: "220", managerId: "100" },
        { employeeName: "Martin", employeeId: "220", managerId: "100" },
        { employeeName: "Jimmy", employeeId: "250", managerId: "" },
        { employeeName: "Alex", employeeId: "275", managerId: "100" },
        { employeeName: "Steve", employeeId: "400", managerId: "150" },
        { employeeName: "David", employeeId: "190", managerId: "400" }
      ];
   
    const component = shallow(<EmployeeComponent EmployeeData={Data} />);
  
    expect(component).toMatchSnapshot();
  });


});