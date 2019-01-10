import React,{Component} from 'react';
import {Api,Url  } from '../service';
import PostCard from '../container/PostCard';
import Loading from '../container/loading';

class Home extends Component{
   state={
       posts:null
   }

    componentDidMount = async() => {
        await Api.getData(Url.GetPosts)
            .then(res=>this.setState({posts:res}))
    }
    
    render(){
        const{posts}=this.state;
        const  postsData = posts ?
            posts.map((item,key)=>{
                return(
                    <PostCard
                        key={key}
                        title={item.title}
                        body={item.body}
                        route={'/Post/'+ item.id}
                    />
                )
            })
            : 
            <Loading/>
        return(
            <div className="container">
                <h1>Home</h1>
                {postsData}
            </div>
        )
    }
}

export default Home;
