import React from 'react'
import './blog.css'
import { Article } from '../../Components'
import {blog01,blog02,blog03,blog04,blog05} from './import'

function Blog() {
    return (
        <div className='blog section-padding d-flex flex-column' id='blog'>
            <div className="blog-heading">
                <h1 className="gradient-text">
                    A lot is happening We are blogging about it.
                </h1>
            </div>
            <div className="blog-container d-flex">
                <div className="groupA">
                    <Article imgUrl={blog01} date='Sep 26, 2023' title='GPT and Open AI is the future. Let us explore how it is?'/>
                </div>
                <div className="groupB">
                <Article imgUrl={blog02} date='Sep 26, 2023' title='GPT and Open AI is the future. Let us explore how it is?'/>
                <Article imgUrl={blog03} date='Sep 26, 2023' title='GPT and Open AI is the future. Let us explore how it is?'/>
                <Article imgUrl={blog04} date='Sep 26, 2023' title='GPT and Open AI is the future. Let us explore how it is?'/>
                <Article imgUrl={blog05} date='Sep 26, 2023' title='GPT and Open AI is the future. Let us explore how it is?'/>
                </div>
            </div>
        </div>
    )
}

export default Blog