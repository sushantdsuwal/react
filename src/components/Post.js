import React, { Component } from 'react'
import { Api, Url } from '../service';
import Loading from '../container/loading';

class Post extends Component {
    state = {
        postData: null,
        comment: null,

    };

    componentDidMount = async () => {
        const post_id = this.props.match.params.post_id;
        // POST
        const postData = await Api.getData(Url.GetPostById + post_id)
        this.setState({ postData })

        // Comments
        const comment = await Api.getData(Url.GetPostById + post_id + "/comments")
        this.setState({ comment })

    }

    onClickLike = () => {

    }

    render() {
        const { postData, comment } = this.state;
        return (
            postData ?
                <div className="container">
                    <div className="card" style={{ margin: 10, }}>
                        <div className="card-body">
                            <h2 style={{ color: 'orangered' }}>{postData.title}</h2>
                            <p>{postData.body}</p>
                        </div>
                    </div>

                    <div className="card" style={{ margin: 20, backgroundColor: '#EEE' }}>
                        <h3 style={{ margin: 15, }}>Comment</h3>
                        {comment != null ?
                            comment.map((item, key) => {
                                return (
                                    <div className="card" key={item.id} style={{ margin: 15, }}>
                                        <div className="card-body">
                                            <h5 className="card-title">{item.name}</h5>
                                            <h6 className="card-subtitle mb-2 text-muted">{item.email}</h6>
                                            <p className="card-text">{item.body}</p>
                                            <i className="far fa-thumbs-up"
                                                onClick={this.onClickLike(item.id)}
                                                style={{ margin: 5, cursor: "pointer" }}>Like</i>
                                            <i className="far fa-thumbs-down" style={{ margin: 5, cursor: "pointer" }}>Dislike</i>
                                        </div>
                                    </div>
                                )
                            })
                            :
                            <div className="container" style={{ margin: 15 }}>
                                <h5>loading comment...</h5>
                            </div>
                        }
                    </div>
                </div>
                :
                <Loading />
        )
    }
}

export default Post;
