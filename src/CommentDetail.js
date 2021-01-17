import React from 'react'


const CommentDetail = (props) => {
    //console.log(props)
    return (
        <div className="comment">
        <a href="/" className="avatar">
          <img alt="avatar" src={props.authorImg}/>
        </a>
        <div className="content">
            <a href="/" className="author">
                {props.authorName}
            </a>
            <div className="metadata">
                <span className="date">{props.blogTime}</span>
            </div>
            <div className="text">{props.blogPost}</div>

        </div>

      </div>
    )
}
export default CommentDetail;