import React, { Component } from 'react';
import ReactMarkdown from 'react-markdown';

import './Preview.css';

const Preview = ({ code }) => 
    <div className='Preview'>
        <ReactMarkdown source={code} />
    </div>

export default Preview; 