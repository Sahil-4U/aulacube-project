import React from 'react'
import Layout from '../layout/Layout'

function Contactpage() {
    return (
        <Layout>
            <div className="container mt-5">
                <h1 className='text-center'>Contact Us</h1>
                <form>
                    <div className="form-group mt-2">
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" placeholder="Enter your name" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="email">Email:</label>
                        <input type="email" className="form-control" id="email" placeholder="Enter your email" />
                    </div>
                    <div className="form-group mt-2">
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" rows={4} placeholder="Enter your message" />
                    </div>
                    <div className=' m-4'>
                        <button type="submit" className="btn btn-outline-success ">Submit</button>
                    </div>
                </form>
            </div>

        </Layout>
    )
}

export default Contactpage