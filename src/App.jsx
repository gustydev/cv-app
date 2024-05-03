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
      const newValue = e.target.className.slice(4);
      const expId = Number(e.target.parentNode.classList[1].substring(4));
      const oldData = initialData.find((d) => d.id === expId);
      changeData([...initialData, oldData[newValue] = e.target.value])
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
      <Curriculum data={initialData} info={initialInfo} sections={initialSections}></Curriculum>
    </>
  )
}

export default App
