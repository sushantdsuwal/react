import React from 'react';

const Loading = (props) => {
    return (
        <div className="container" style={{ position: 'absolute', top: '50%', left: '50%' }}>
            <h2>loading {props.label}...</h2>
        </div>
    )
}

export default Loading;