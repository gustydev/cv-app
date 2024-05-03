export default function Editor( {data, info, sections, onChange, changeData} ) {
    function handleDelete(e) {
        const deletedId = Number(e.target.parentNode.className.slice(23))
        const deletedData = data.find((d) => d.id === deletedId)
        changeData([...data].filter((d) => d !== deletedData));
    }

    console.log(data)
    
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
                                            <button onClick={(e) => {handleDelete(e)}}>Delete</button>
                                        </div>
                                    )
                                } else {
                                    return null;
                                }
                            })}
                            <button>{'+ ' + s.title}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}