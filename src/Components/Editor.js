import React, {Component} from 'react';
import CodeMirror from 'react-codemirror';
import 'codemirror/lib/codemirror.css';
import './Editor.css';
import 'codemirror/mode/jsx/jsx';

const Editor = (props) => {
    const { code, updateCode } = props;
    const options = {
        lineNumbers: true,
        mode: 'jsx',
        matchBrackets: true,
    };
    
    return (
        <div className='Editor'>
            <CodeMirror
                value={code}
                onChange={updateCode}
                options={options} />
        </div>
    )
}

export default Editor;