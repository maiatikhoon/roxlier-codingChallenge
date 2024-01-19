import "./App.css";
import Table from "./components/Table/Table"; 
import Statistics from "./components/Statistics/Statistics";

import Chart1 from "./components/Barchart/Chart1";

import { useState } from "react";
function App() {  

   const [ currentMonth , setCurrentMonth ] = useState() ;  

   const [ currMonthStats , setCurrMonthStats ] = useState() ;

   function getCurrentMonth(month) { 
       setCurrentMonth(month)
   } 

   function getCurrentMonthStats(data) { 
         setCurrMonthStats(data) ;

   }
  return (
    <div className="w-full ">
      <h1 className="text-3xl text-center text-white p-4 bg-green-500 ">

        Transaction Dashboard
      </h1>
      <Table setMonth={getCurrentMonth} currentMonth={currentMonth}/> 
       
       <Statistics currentMonth={currentMonth} currentMonthStats={getCurrentMonthStats}/>
       
       <Chart1 currentMonthStats={currMonthStats} currentMonth={currentMonth}/>
    </div>
  );
}

export default App;
