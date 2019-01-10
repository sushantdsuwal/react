import React from 'react';
import { Link } from "react-router-dom";

const PostCard = ({title,body, route}) =>{
    return(
        <div className="card" style={{margin: 10,}}>
            <div className="card-body">
                <h3>{title}</h3>
                <p>{body}</p>
                <Link to={route}>
                    <button className="float-right">Go</button>
                </Link>
            </div>
         </div>
    )
}

export default PostCard;