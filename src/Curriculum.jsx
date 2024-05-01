import { useState } from 'react';

function Info() {
    return (
        <div className='info'>
            <input type="text" value='John Doe' className='name' />
            <input type='text' value='johndoe@fakemail.net' className='email' />
            <input type="text" value='(12) 34567-8901' className='phone' />
            <input type="text" value='Antarctica' className='location' />
        </div>
    )
}

function Education() {
    return (
        <div className="education">
            <h1>Education</h1>
            <input type="text" value='Very good university' className='edu-title' />
            <input type="text" value='Apr. 2000' className='edu-start' />
            <input type="text" value='May 2024' className='edu-end' />
            <input type="text" value='Planet Earth' className='edu-location' />
            <input type="text" value='PHD in Computaria' className='edu-degree' />
            <input type="text" value='Did many things and learned a lot' className='edu-info' />
        </div>
    )
}

function Jobs() {
    return (
        <div className="jobs">
            <h1>Jobs</h1>
            <input type="text" value='Joe Accounting' className='job-company' />
            <input type="text" value='Apr. 2020' className='job-start' />
            <input type="text" value='May 2020' className='job-end' />
            <input type="text" value='Master accountant' className='job-position' />
            <input type="text" value='Did many things and learned a lot!' className='job-info' />
            <input type="text" value='Antarctica' className='job-location' />
        </div>
    )
}

export default function Curriculum() {
    return (
        <div className='curriculum'>
            <Info />
            <Education />
            <Jobs />
        </div>
    )
}