import React from 'react';

import BarchartComponent from '../components/BarchartComponent'
import PiechartComponent from '../components/PiechartComponent'
import RadialbarChart from '../components/RadialbarChart'
import LinechartComponent from '../components/LinechartComponent'
import AreachartComponent from '../components/AreachartComponent'

function Dashboard() {

    
    function GridItem({title, children}){
        return(
            <div className="flex flex-col items-center justify-center p-4 border rounded-xl h-[400px]">
                <h3 className='text-2xl font-semibold text-white mb-4'>{title}</h3>
                {children}
            </div>
        )
    }

    
  return (
    <main className='flex min-h-screen flex-col items-center justify-center px-4 md:px-8 xl:px-10 py-44'>
        <div className='grid xl:grid-cols-3 lg:grid-cols-2 w-full gap-10 max-w-[1400px]'>
            <GridItem title="BarChart">
                <BarchartComponent/>
            </GridItem>
            <GridItem title="PieChart">
                <PiechartComponent/>
            </GridItem>
            {/* <GridItem title="RadialbarChart">
                <RadialbarChart/>
            </GridItem> */}
            <GridItem title="LinechartComponent">
                <LinechartComponent/>
            </GridItem>
            <GridItem title="AreachartComponent">
                <AreachartComponent/>
            </GridItem>
            
        </div>
    </main>
  )
}

export default Dashboard