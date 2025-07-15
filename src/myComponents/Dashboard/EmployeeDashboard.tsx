import React, { useEffect, useState } from 'react'
import Header from "../Utils/Header"
import MetricCard from "../Utils/MetricCard"
import TaskList from "../TaskList/TaskList"

const EmployeeDashboard = ({currUser, setUser}:{currUser: any, setUser: any}) => {

  const [currUserData, setCurrUserData] = useState(currUser.data);
  
  return (
    <div className='w-screen h-max md:h-screen bg-[#1C1C1C] py-6 px-6 lg:px-8'>
      <Header currUserData={currUserData} setUser={setUser}/>
      <br />
      <div className=' w-full h-1/3 grid grid-row-2 md:grid-row-1 grid-cols-2 md:grid-cols-4 gap-4 py-4'>
        <MetricCard digit={currUserData.TaskCount.newTasks} desc='New Tasks' bgcolor='bg-blue-800'/>
        <MetricCard digit={currUserData.TaskCount.acceptedTasks} desc='Accepted Tasks' bgcolor='bg-yellow-800'/>
        <MetricCard digit={currUserData.TaskCount.completedTasks} desc='Completed Tasks' bgcolor='bg-green-800'/>
        <MetricCard digit={currUserData.TaskCount.failedTasks} desc='Failed Tasks' bgcolor='bg-red-800'/>
      </div>
      <TaskList id={currUserData.id} tasks={currUserData.tasks} setUserData={setCurrUserData}/>
    </div>
  )
}

export default EmployeeDashboard
