import React, { Component } from 'react';
import renderHTML from 'react-render-html';

import './Preview.css';

const Preview = ({ code }) => 
    <div className='Preview'>
        {renderHTML(code)}
    </div>

export default Preview; 