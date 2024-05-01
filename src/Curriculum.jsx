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

function Section( {name, data} ) {
    return (
        <div className={'section' + ' ' + name}>
            <h1>{name}</h1>
            {data.map((d) => {
                return (
                <div key={d.id} className='experience'>
                    <div className='experience-title'>{d.title}</div>
                    <div className='experience-date'>{d.startDate + ' -'}&nbsp;{d.endDate}</div>
                    <div className='experience-role'>{d.role}</div>
                    <div className='experience-location'>{d.location}</div>
                    <div className='experience-info'>{d.info}</div>
                </div>
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