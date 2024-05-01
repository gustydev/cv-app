import { useState } from 'react';
import { initialData, initialSections } from './data';

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

function Section( {name, data} ) {
    return (
        <div className={'section' + ' ' + name}>
            <h1>{name}</h1>
            {data.map((d) => {
                return (
                <>
                    <input type='text' value={d.title} className='section-title' />
                    <input type="text" value={d.startDate} className='section-startDate' />
                    <input type="text" value={d.endDate} className='section-endDate' />
                    <input type="text" value={d.role} className='section-role' />
                    <input type="text" value={d.info} className='section-info' />
                    <input type="text" value={d.location} className='section-location' />
                </>
                )
            })}
        </div>
    )
}

export default function Curriculum() {
    return (
        <div className='curriculum'>
            <Info />
            <div className="sections">
                {initialSections.map((s) => {
                    return <Section 
                    name={s.title} 
                    data={initialData.filter((d) => s.dataIds.includes(d.id))} />;
                })}
            </div>
        </div>
    )
}