import { useState } from 'react';
import { info, data, sections } from './data';
import Curriculum from './Curriculum';

export default function Editor( {data, info, sections} ) {
    return (
        <div className='editor'>
            <div className="editor-section">
                <h1>Personal information</h1>
                <input type='text' value={info.name} />
                <input type='text' value={info.email} />
                <input type="text" value={info.phone} />
                <input type="text" value={info.location} />
            </div>
            <div className='editor-cv-sections'>
                <h1>Sections</h1>
                <div className="editor-section">
                    <h1>Education</h1>
                    <input type="text" value='' />
                </div>
                <div className="editor-section">
                    <h1>Professional experience</h1>
                    <input type="text" />
                </div>
            </div>
        </div>
    )
}