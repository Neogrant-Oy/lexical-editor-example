// src/App.tsx
import React from 'react';
import { EditorState } from 'lexical';
import { LexicalComposer } from '@lexical/react/LexicalComposer';
import { RichTextPlugin } from '@lexical/react/LexicalRichTextPlugin';
import { ContentEditable } from '@lexical/react/LexicalContentEditable';
import { HistoryPlugin } from '@lexical/react/LexicalHistoryPlugin';
import { OnChangePlugin } from '@lexical/react/LexicalOnChangePlugin';
import LexicalErrorBoundary from '@lexical/react/LexicalErrorBoundary'

import { ToolbarPlugin } from './ToolbarPlugin';

const editorConfig = {
  namespace: 'MyEditor',
  theme: {
    paragraph: 'editor-paragraph',
  },
  onError(error: Error) {
    console.error(error);
  },
};

function onChange(editorState: EditorState) {
  // Handle editor state changes here
  console.log(editorState);
}

function Placeholder() {
  return <div className="editor-placeholder">Enter text...</div>;
}

const App: React.FC = () => {
  return (
    <div className="App">
      <LexicalComposer initialConfig={editorConfig}>
        <ToolbarPlugin />
        <RichTextPlugin
          contentEditable={<ContentEditable className="editor-content-editable" />}
          placeholder={<Placeholder />}
          ErrorBoundary={LexicalErrorBoundary}
        />
        <ToolbarPlugin /> {/* Add the ToolbarPlugin */}
        <HistoryPlugin />
        <OnChangePlugin onChange={onChange} />
      </LexicalComposer>
    </div>
  );
};

export default App;
