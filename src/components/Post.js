import React,{Component} from 'react'
import { Api,Url } from '../service';
import Loading from '../container/loading';

class Post extends Component {
    state={
        postData:null
    };

    componentDidMount = async()=> {
        const post_id=this.props.match.params.post_id;
        await Api.getData(Url.GetPostById+post_id)
        .then(res=>  this.setState({postData:res}))
    }

    render(){
        const {postData}=this.state;
        return (
           postData?
                <div className="container">
                    <div className="card" style={{margin: 10,}}>
                        <div className="card-body">
                            <h3 style={{color:'orangered'}}>{postData.title}</h3>
                            <p>{postData.body}</p>
                        </div>
                    </div>
                </div>
            :
            <Loading/>
        )
    }
}

export default Post;
