export default function Editor( {data, info, sections, onChange, changeData, changeSections} ) {
    function handleDelete(e) {
        const deletedId = Number(e.target.parentNode.className.slice(23))

        const deletedData = data.find((d) => d.id === deletedId)
        changeData([...data].filter((d) => d.id !== deletedData.id));

        const alteredSection = sections.find((s) => s.dataIds.includes(deletedId))
        const filteredIds = alteredSection.dataIds.filter(i => i !== deletedId);
        
        const newSections = [...sections].map((s) => 
        s.id === alteredSection.id ? {...s, dataIds: filteredIds} : s
        )

        changeSections(newSections)
    }

    function handleAdd(e) {
        const sectionId = Number(e.target.parentNode.className.slice(23));
        const section = sections.find((s) => s.id === sectionId);

        const dummy = {
            title: 'Absolutely nothing', 
            startDate: 'Now', 
            endDate: 'Never', 
            role: 'Nothing', 
            info: 'I did nothing.', 
            location: 'Nowhere'
        }

        const takenIds = [];
        data.forEach((d) => takenIds.push(d.id));
        
        let expId = 0;
        while (takenIds.includes(expId)) {
            expId += 1;
        }

        dummy.id = expId;
        const newIds = Array.from(section.dataIds);
        newIds.push(expId)
        
        // changeData([...data, dummy]);
        // const newSections = [...sections].map((s) => 
        // s.id === sectionId ? {...s, dataIds: newIds} : s
        // )

        // changeSections(newSections)
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
                        <div key={s.id} className={'editor-section' + ' section-' + s.id}>
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
                            <button onClick={(e) => handleAdd(e) }>{'+ ' + s.title}</button>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}