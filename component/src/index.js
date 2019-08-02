import React from 'react';
import ReactDOM from 'react-dom';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';

const App = () => {
    return (
    <div className="ui container comments">
        <ApprovalCard>
            <CommentDetail author="Vineet" timeAgo="Today At 4:45PM" content="Its great article. Explained very well." />
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sumit" timeAgo="Today At 2:45AM" content="Keep it buddy. Doing good"/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Ajeet" timeAgo="Yesterday At 9:45AM" content="Wooh! One of the great article i have ever seen."/>
        </ApprovalCard>
        <ApprovalCard>
            <CommentDetail author="Sonali"timeAgo="Today At 1:45PM" content="Well explained and have given a clear picture of the title. Thouand thumps up for your article."/>
        </ApprovalCard>
    </div>
    );
}

ReactDOM.render(<App />, document.querySelector('#root'));