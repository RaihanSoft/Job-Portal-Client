import { useEffect, useState } from "react"
import { FaDollarSign } from "react-icons/fa"

const HotJobs = () => {

    const [jobs, setJobs] = useState([])
    useEffect(() => {
        fetch('http://localhost:3000/jobs')
            .then(res => res.json())
            .then(data => setJobs(data))

    }, [])

    return (
        <div>
            <div className="text-center py-10 " >
                <h2 className="text-3xl font-bold " >Jobs of the day</h2>
                <p>Search and connect with the right candidates faster</p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-items-center gap-6 ">
                {
                    jobs.map(job =>
                        <div className="card bg-base-100 shadow-xl">
                            <figure>
                                <img
                                    src={job.company_logo}
                                    alt="Jobs"
                                    className="w-16 " />

                            </figure>
                            <div className="card-body">
                                <h2 className="text-xl font-bold">
                                    {job.title}
                                </h2>
                                <div className="flex gap-2 flex-wrap">
                                    {
                                        job.requirements.map(skill => <p className=" hover:text-blue-500 border-2 rounded-md text-center ">{skill}</p>)
                                    }
                                </div>
                                <div className="card-actions justify-end">
                                    <p className="flex items-center text-center" >
                                        <span className="font-medium"> Salary</span> <FaDollarSign size={14} /> : {job.salaryRange.min} - {job.salaryRange.max} {job.salaryRange.currency}
                                    </p>
                                </div>
                            </div>
                        </div>
                    )
                }

            </div>
        </div>
    )
}

export default HotJobs
