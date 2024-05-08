export default function Editor( {data, info, sections, onChange, changeData, changeSections} ) {
    function handleDelete(e) {
        const deletedId = Number(e.target.parentNode.className.slice(13))

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
        const sectionId = Number(e.target.parentNode.className.slice(21));
        const section = sections.find((s) => s.id === sectionId);

        const exp = {
            title: '', 
            startDate: '', 
            endDate: '', 
            role: '', 
            info: '', 
            location: ''
        }

        const takenIds = [];
        data.forEach((d) => takenIds.push(d.id));
        
        let expId = 0;
        while (takenIds.includes(expId)) {
            expId += 1;
        }

        exp.id = expId;
        const newIds = Array.from(section.dataIds);
        newIds.push(expId)
        
        changeData([...data, exp]);
        
        const newSections = [...sections].map((s) => 
            s.id === sectionId ? {...s, dataIds: newIds} : s
        )

        changeSections(newSections)
    }

    // function handleAddSection(e) {
    //     const section = {
    //         title: '',
    //         dataIds: []
    //     }

    //     const takenIds = [];
    //     sections.forEach((s) => takenIds.push(s.id));

    //     let sectionId = 0;
    //     while (takenIds.includes(sectionId)) {
    //         sectionId += 1;
    //     }

    //     section.id = sectionId;

    //     const title = prompt('Name your section:');
    //     if (!title) {
    //         return;
    //     }

    //     section.title = title;

    //     changeSections([...sections, section]);
    // }
    
    return (
        <div className='editor'>
            <div className="edit-info">
                <h1>Personal info</h1>
                <input type='text' className='edit-info-name' value={info.name} onChange={onChange} placeholder='Name' />
                <input type='text' className='edit-info-email' value={info.email} onChange={onChange} placeholder='Email' />
                <input type="text" className='edit-info-phone' value={info.phone} onChange={onChange} placeholder='Phone' />
                <input type="text" className='edit-info-location' value={info.location} onChange={onChange} placeholder="Location" />
            </div>
            <div className='edit-sections'>
                {sections.map((s) => { return (
                    <div key={s.id} className={'edit-section' + ' section-' + s.id}>
                        <h1>{s.title}</h1>
                        {data.map((d) => { if (s.dataIds.includes(d.id)) {
                            return (
                                <div className={'edit-exp' + ' exp-' + d.id} key={d.id}>
                                    <input type="text" className='edit-exp-title' value={d.title} onChange={onChange} placeholder='Institution' />
                                    <input type="text" className='edit-exp-startDate' value={d.startDate} onChange={onChange} placeholder='Start date'/>
                                    <input type="text" className='edit-exp-endDate' value={d.endDate} onChange={onChange} placeholder='End date'/>
                                    <input type="text" className='edit-exp-role' value={d.role} onChange={onChange} placeholder='Position, degree or role'/>
                                    <input type="text" className='edit-exp-info' value={d.info} onChange={onChange} placeholder='Description'/>
                                    <input type="text" className='edit-exp-location' value={d.location} onChange={onChange} placeholder='Location'/>
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
                {/* <button onClick={(e) => handleAddSection(e)}>New section</button> */}
            </div>
        </div>
    )
}