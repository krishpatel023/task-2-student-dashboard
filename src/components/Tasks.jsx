import React from 'react'
import TaskIndividual from './TaskIndividual'

export default function Tasks() {
  return (
    <div className='w-full h-full bg-primary-color text-primary-complementary rounded-lg flex flex-col items-center'>
        <div className='w-[90%] h-[90%]'>
          <h1 className="font-semibold text-lg mt-4">Tasks</h1>
          <TaskIndividual/>
          <TaskIndividual/>
          <TaskIndividual/>
        </div>
        <button className='text-underline'>
          View All
        </button>
    </div>
  )
}
