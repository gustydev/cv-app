import Curriculum from "./Curriculum";
import Editor from './Editor.jsx';
import { data, info, sections } from "./data";
import { useState } from 'react';

function App() {
  const [initialData, changeData] = useState(data);
  const [initialInfo, changeInfo] = useState(info);
  const [initialSections, changeSections] = useState(sections);

  return (
    <>
      <Editor data={initialData} info={initialInfo} sections={initialSections}></Editor>
      <Curriculum data={initialData} info={initialInfo} sections={initialSections}></Curriculum>
    </>
  )
}

export default App
