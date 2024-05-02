export default function Editor( {data, info, sections, onChange} ) {
    return (
        <div className='editor'>
            <div className="editor-info-section">
                <h1>Personal information</h1>
                <input type='text' className='editor-info-name' value={info.name} onChange={onChange} />
                <input type='text' className='editor-info-email' value={info.email} onChange={onChange} />
                <input type="text" className='editor-info-phone' value={info.phone} onChange={onChange} />
                <input type="text" className='editor-info-location' value={info.location} onChange={onChange} />
            </div>
            <div className='editor-cv-sections'>
                <h1>Sections</h1>
                {sections.map((s) => {
                    return (
                        <div key={s.id} className='editor-section'>
                            <h1>{s.title}</h1>
                            {data.map((d) => {
                                if (s.dataIds.includes(d.id)) {
                                    return (
                                        <div className={'editor-section-exp' + ' exp-' + d.id} key={d.id}>
                                            <input type="text" className='exp-title' value={d.title} onChange={onChange} />
                                            <input type="text" className='exp-startDate' value={d.startDate} onChange={onChange} />
                                            <input type="text" className='exp-endDate' value={d.endDate} onChange={onChange} />
                                            <input type="text" className='exp-role' value={d.role} onChange={onChange} />
                                            <input type="text" className='exp-info' value={d.info} onChange={onChange} />
                                            <input type="text" className='exp-location' value={d.location} onChange={onChange} />
                                        </div>
                                    )
                                } else {
                                    return null;
                                }
                            })}
                        </div>
                    )
                })}
            </div>
        </div>
    )
}