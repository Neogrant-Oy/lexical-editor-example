// src/ToolbarPlugin.tsx
import React from 'react';
import { FORMAT_TEXT_COMMAND } from 'lexical';
import { useLexicalComposerContext } from '@lexical/react/LexicalComposerContext';

const ToolbarPlugin: React.FC = () => {
  const [editor] = useLexicalComposerContext();

  const handleBold = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'bold');
  };

  const handleItalic = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'italic');
  };

  const handleUnderline = () => {
    editor.dispatchCommand(FORMAT_TEXT_COMMAND, 'underline');
  };

  return (
    <div className="editor-toolbar">
      <button onClick={handleBold}>Bold</button>
      <button onClick={handleItalic}>Italic</button>
      <button onClick={handleUnderline}>Underline</button>
    </div>
  );
};

export { ToolbarPlugin };
