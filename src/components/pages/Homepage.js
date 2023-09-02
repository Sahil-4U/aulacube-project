import React from 'react'
import Layout from '../layout/Layout'
import { useNavigate } from 'react-router-dom'

function Homepage() {
    const navigate = useNavigate();
    return (
        <Layout>
            <div className='container'>
                <div className=' ms-5'>
                    <div className='h1 container-fluid d-flex  flex-wrap'>

                        AULACUBE :<p className='bg-secondary text-light  px-3 py-1'>Bringing parents, schools, and technology together.</p>

                    </div>
                </div>
                <div className="container-fluid">
                    <div className='bg-dark p-5 m-5 text-light'>
                        <p>AulaCube is a forward-thinking ed-tech company that brings together parents, schools, and technology with the student at the center. Our name, 'AulaCube,' is inspired by the Latin word for 'classroom' (Aula) and represents the synergy of the three dimensions - parents, schools, and technology - that empower students.

                            We offer an integrated education tech ecosystem that fosters collaboration and transparent communication between parents and educators. Our AI-driven School Management System offers real-time insights into students' academic and extracurricular progress. Join us as we reshape the educational experience with AulaCube, creating an enriching and supportive environment for every student's journey.</p>
                    </div>
                    <div className='container text-center'>
                        <div className='btn btn-outline-info' onClick={() => navigate('/dashboardpage')}>
                            Click me to show task
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default Homepage