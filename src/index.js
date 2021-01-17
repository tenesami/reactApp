import React from 'react';
import ReactDOM from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail'
import ApprovalCard from './ApprovalCard'

const App = () => {
  return (
    <div className= "ui conatiner comments">
        <ApprovalCard>
            <CommentDetail authorImg={faker.image.image()} authorName="Samuel" blogTime="12 minutes ago" blogPost="Nice BolgPost"/>
        </ApprovalCard>
        
        <ApprovalCard>
            <CommentDetail authorImg={faker.image.image()} authorName="Michael" blogTime="2 hours ago" blogPost="Wow such nice blog"/>
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail authorImg={faker.image.image()} authorName="Natinael" blogTime="12 days ago" blogPost="Wonderful job"/>
        </ApprovalCard>
        
    </div>
  );
  
};

ReactDOM.render(<App />, document.querySelector('#root'));
