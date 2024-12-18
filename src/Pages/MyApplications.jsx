import React, { useEffect, useState } from 'react'
import useAuth from '../Hooks/useAuth/useAuth'


const MyApplications = () => {
  const [jobs, setJobs] = useState([])
  const { user } = useAuth()
  useEffect(() => {
    fetch(`http://localhost:3000/job-application?email=${user.email}`)
      .then(res => res.json())
      .then(data => setJobs(data))
  }, [user.email])

  return (
    <div>
      {
        jobs.map((job, index) =>
          <div key={index} className="overflow-x-auto">
            <table className="table">
              {/* head */}

              <tbody>
                {/* row 1 */}
                <tr>
                  <th>
                    <label>
                      <input type="checkbox" className="checkbox" />
                    </label>
                  </th>
                  <td>
                    <div className="flex items-center gap-3">
                      <div className="avatar">
                        <div className="mask mask-squircle h-12 w-12">
                          <img
                            src={job.company_logo}
                            alt="Avatar Tailwind CSS Component" />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold">{job.company}</div>
                        <div className="text-sm opacity-50">{job.title}</div>
                      </div>
                    </div>
                  </td>
                  <td>
                   {job.applicant_email}
                    <br />
                    <span className="badge badge-ghost badge-sm">Desktop Support Technician</span>
                  </td>
                  <td className="btn btn-ghost mt-4 ">Update</td>
                  <th className='' >
                    <button className="btn btn-ghost">X</button>
                  </th>
                </tr>
              </tbody>
            </table>
          </div>
        )
      }
    </div>
  )
}

export default MyApplications 
