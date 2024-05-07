function Info( {data} ) {
    return (
        <div className='info'>
            <div className='info-name'>{data.name}</div>
            <div className='info-email'>{data.email}</div>
            <div className='info-phone'>{data.phone}</div>
            <div className='info-location'>{data.location}</div>
        </div>
    )
}

function Section( {name, data} ) {
    return (
        <div className='section'>
            <h1>{name}</h1>
            {data.map((d) => {
                return (
                <div key={d.id} className='experience'>
                    <div className='experience-title'>{d.title}</div>
                    <div className='experience-date'>
                    {(d.startDate && d.endDate) ? (d.startDate + ' - ' + d.endDate) : (d.startDate + d.endDate)}
                    </div>
                    <div className='experience-role'>{d.role}</div>
                    <div className='experience-location'>{d.location}</div>
                    <div className='experience-info'>{d.info}</div>
                </div>
                )
            })}
        </div>
    )
}

export default function Curriculum( {info, sections, data} ) {
    return (
        <div className='curriculum'>
            <Info data={info} />
            <div className="sections">
                {sections.map((s) => {
                    return <Section key={s.id}
                    name={s.title} 
                    data={data.filter((d) => s.dataIds.includes(d.id))} />;
                })}
            </div>
        </div>
    )
}