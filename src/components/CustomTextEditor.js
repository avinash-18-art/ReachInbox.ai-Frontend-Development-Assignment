import React, { useState } from 'react';
import { Editor, EditorState, RichUtils } from 'draft-js';
import 'draft-js/dist/Draft.css';

const CustomTextEditor = () => {
  const [editorState, setEditorState] = useState(EditorState.createEmpty());

  const handleKeyCommand = (command) => {
    const newState = RichUtils.handleKeyCommand(editorState, command);
    if (newState) {
      setEditorState(newState);
      return 'handled';
    }
    return 'not-handled';
  };

  return (
    <div className="border p-4 rounded">
      <Editor 
        editorState={editorState} 
        handleKeyCommand={handleKeyCommand} 
        onChange={setEditorState} 
      />
      <div className="flex justify-end mt-2">
        <button className="bg-green-500 text-white py-1 px-4 rounded">SAVE</button>
        <button className="bg-blue-500 text-white py-1 px-4 ml-2 rounded">Variables</button>
      </div>
    </div>
  );
};

export default CustomTextEditor;
