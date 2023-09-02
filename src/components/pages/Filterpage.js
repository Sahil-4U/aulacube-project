import React, { useState } from 'react';

function Filterpage({ filtered, setfilter }) {
    const [val, setVal] = useState("");
    const handleClick = () => {
        const filteredArray = filtered.filter((data) => data.postId == val);
        setfilter(filteredArray);
        setVal('');
    }
    return (
        <div className='container form-group'>
            <input type='text' className='form-control'
                placeholder='enter postId'
                value={val}
                onChange={(e) => setVal(e.target.value)} />
            <div className='text-center mt-1'>
                <button className='btn btn-outline-success' onClick={handleClick}>click me</button>
            </div>
        </div>
    )
}

export default Filterpage;