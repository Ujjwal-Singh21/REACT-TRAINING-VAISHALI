import './App.css';
import Footer from './Components/Footer';
import Content  from './Components/Content';
import Header from './Components/Header';
import { SortedTableFn } from './Labs/SortedTableFn';
import SortedTableClass from './Labs/SortedTableClass';
import ClickCounter from './Components/HOC/ClickCounter';
import HoverCounter from './Components/HOC/HoverCounter';

function App() {
  return (
    <div className="App">
     {/* <Header companyName='Capgemini' country='France'/> */}
     {/* <Content /> */}
     {/* <Footer companyName='Capgemini'/> */}
     <ClickCounter />
     <HoverCounter />

     {/* Labs */}
     {/* ------ */}
     {/* <SortedTableFn employeeArr={employeeArr}/> */}
     {/* <SortedTableClass employeeArr={employeeArr}/> */}
    </div>
  );
}

export default App;

let employeeArr = [
  
  {
    empId: 1001,
    empName: 'Rahul',
    empSal: 9000,
    empDep: 'JAVA',
    empjoiningdate: '2014-12-6'
  },
  {
    empId: 1002,
    empName: 'Vikash',
    empSal: 11000,
    empDep: 'ORAAPS',
    empjoiningdate: '2022-12-6'
  },
  {
    empId: 1003,
    empName: 'Uma',
    empSal: 12000,
    empDep: 'JAVA',
    empjoiningdate: '2010-12-6'
  },
  {
    empId: 1004,
    empName: 'Sachin',
    empSal: 11500,
    empDep: 'ORAAPS',
    empjoiningdate: '2017-12-11'
  },
  {
    empId: 1005,
    empName: 'Amol',
    empSal: 7000,
    empDep: '.NET',
    empjoiningdate: '2018-1-1'
  },
  {
    empId: 1006,
    empName: 'Vishal',
    empSal: 17000,
    empDep: 'BI',
    empjoiningdate: '2012-12-9'
  },
  {
    empId: 1007,
    empName: 'Rajita',
    empSal: 21000,
    empDep: 'BI',
    empjoiningdate: '2014-6-7'
  },
  {
    empId: 1008,
    empName: 'Neelima',
    empSal: 81000,
    empDep: 'TESTING',
    empjoiningdate: '2015-6-22'
  },
  {
    empId: 1009,
    empName: 'Daya',
    empSal: 1000,
    empDep: 'TESTING',
    empjoiningdate: '2016-6-3'
  }
]