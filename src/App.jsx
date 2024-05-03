import Curriculum from "./Curriculum";
import Editor from './Editor.jsx';
import { data, info, sections } from "./data";
import { useState } from 'react';

function App() {
  const [initialData, changeData] = useState(data);
  const [initialInfo, changeInfo] = useState(info);
  const [initialSections, changeSections] = useState(sections);

  function handleChange(e) {
    if (e.target.parentNode.className === 'editor-info-section') {
      const newValue = e.target.className.slice(12);
      const newInfo = {...initialInfo, [newValue]: e.target.value};

      changeInfo(newInfo)

    } else {
      const changedValue = e.target.className.slice(4);
      const expId = Number(e.target.parentNode.classList[1].substring(4));
      const alteredData = {...initialData.find((d) => d.id === expId)};

      alteredData[changedValue] = e.target.value;

      changeData([...initialData].map((d) => 
        d.id === expId ? alteredData : d
      ))
    }
  }

  return (
    <>
      <Editor 
      data={initialData} 
      info={initialInfo} 
      sections={initialSections} 
      onChange={handleChange} 
      changeData={changeData} 
      changeSections={changeSections} />
      <Curriculum data={initialData} info={initialInfo} sections={initialSections} />
    </>
  )
}

export default App
