import React, { useEffect, useState } from 'react';
import Layout from '../layout/Layout'
import Filterpage from './Filterpage'
import { useData } from '../../context/Context'

function Dashboardpage() {
    const [data] = useData();
    const [filter, setFilter] = useState([]);
    const [showdata, setShowdata] = useState([]);

    useEffect(() => {
        setFilter(data)
    }, [data])

    const handletrClick = (packet) => {
        setShowdata((p) => [packet, ...p])
    }
    return (
        <Layout>
            <center className='my-4'>
                <h2>Comments Section</h2>
            </center>
            <div className='dashb'>
                <div className='row px-1'>
                    <div className='col-4 container-fluid text-primary text-center'>
                        <h3>Filter section</h3>
                    </div>
                    <div className='col-8 container-fluid text-secondary text-center'>
                        <h2>Post section</h2>
                    </div>
                </div>
                <div className='row px-2'>
                    <div className='col-4 container-fluid'>
                        <div>
                            <Filterpage filtered={data} setfilter={setFilter} />
                        </div>
                        <div>
                            <table className='table table-striped'>
                                <thead>
                                    <tr>
                                        <th>
                                            ID
                                        </th>
                                        <th className='text-center'>
                                            Name
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filter && filter.map((val) => {
                                        return (
                                            <tr key={val.id} onClick={() => handletrClick(val)}>
                                                <td>{val.id}</td>
                                                <td >{val.name}</td>
                                            </tr>
                                        )
                                    })}
                                </tbody>

                            </table>
                        </div>
                    </div>
                    <div className='col-8 ps-5 container-fluid d-flex flex-wrap' style={{ height: '80vh' }}>
                        {
                            showdata && showdata.map((val) => {
                                return (
                                    <div className="card shadow m-1 cards" key={val.id}>
                                        <div className="card-body">
                                            <h5 className="card-title bg-info text-light">Post Id:{val.postId}</h5>
                                            <h6 className="card-subtitle mb-2 text-body-secondary">Name:{val.name}</h6>
                                            <p className="card-text">Body:{val.body}</p>
                                        </div>
                                    </div>

                                )
                            })
                        }
                    </div>

                </div>
            </div>
        </Layout>
    )
}

export default Dashboardpage