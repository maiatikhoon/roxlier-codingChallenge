
import * as React from 'react';
import { BarChart } from '@mui/x-charts/BarChart';

export default function Chart1({currentMonthStats, currentMonth}) {  

  const [value , setValue ] = React.useState([]) ; 
  let data;   
 
  const getBarData = async()=> { 

       try { 
         const response = await  fetch(`http://localhost:3000/allTransaction/barchart/${currentMonth}`) ;
          data = await response.json() ;  

          
 
      
           let value = Object.values(data) ; 
          setValue(value) ;  
        
          console.log(value) ;
        
       } catch (error) {
            console.log(error) ;
       }
  } 

  React.useEffect( ()=> { 

        getBarData() ;
  }, [currentMonth])

  console.log("values of object", value) ; 
  const arr = value;
  return ( 
      <div className='w-full flex flex-col items-center justify-center'>
         <h1 className='text-4xl font-bold'> Bar Chart - {currentMonth} </h1> 
          
        <BarChart
            xAxis={[
            {
                id: 'barCategories',
                data: 
                 [ '0-100',
                    '101-200',
                    '201-300',
                    '301-400',
                    '401-500',
                    '501-600',
                    '601-700',
                    '701-800',
                    '801-900',
                    '901-above'],
                scaleType: 'band',
            },
            ]}
            series={[
            {
                data: arr, 
            },
            ]}
            width={500}
            height={300}
        />
            </div>
  );
}