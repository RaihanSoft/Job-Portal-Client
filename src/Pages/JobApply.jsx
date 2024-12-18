import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import useAuth from '../Hooks/useAuth/useAuth'
import Swal from 'sweetalert2'

const JobApply = () => {

    const { id } = useParams()
    const { user, } = useAuth()
    const navigate = useNavigate()



    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const Linkdine = form.linkdine.value
        const Github = form.Github.value
        const Portfolio = form.Portfolio.value


        const jobApplications = {
            job_id: id,
            applicant_email: user.email,
            Linkdine,
            Github,
            Portfolio
        }
        fetch('http://localhost:3000/job-applications', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(jobApplications)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: "Drag me!",
                        icon: "success",
                        draggable: true
                    });
                    
                    navigate('/myApplications')
                }
            })

    }

    return (
        <div className="hero bg-base-200 min-h-screen">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                    <form onSubmit={handleSubmit} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Linkdine</span>
                            </label>
                            <input type="text" placeholder="Linkdine Url" name='linkdine' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Github</span>
                            </label>
                            <input type="text" placeholder="Github Url" name='Github' className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Portfolio</span>
                            </label>
                            <input type="text" placeholder="Portfolio Url" name='Portfolio' className="input input-bordered" required />
                        </div>



                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Apply Now</button>
                        </div>

                    </form>
                </div>
            </div>
        </div>
    )
}

export default JobApply
