import React from 'react'
import { useLoaderData } from 'react-router-dom'

const JobDetails = () => {
  const { title, location, jobType, category, applicationDeadline, description, company_logo } = useLoaderData()
  return (
    <div className='flex items-center justify-center py-10 ' >
      <div className="card bg-base-100 w-96 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">{category}</h2>
          <p>{description}</p>
        </div>
        <div>
          <p className='font-semibold pl-8'>title: {title}</p>
          <p className='font-semibold pl-8'>location: {location}</p>
          <p className='font-semibold pl-8'>jobType: {jobType}</p>
        </div>
        <figure className='py-10' >
          <img
            src={company_logo}
            alt="Shoes"
            className='w-72' />
        </figure>
      </div>
    </div>
  )
}

export default JobDetails
