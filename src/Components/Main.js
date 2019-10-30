import React, { Component } from 'react'
import Title from './title'
import Instagram from './tuligram'
import AddPhoto from './addphoto'
import { Route } from 'react-router-dom'
class Main extends Component {
    constructor() {
        super()
        this.state = {
            posts: [{
                id: 0,
                description: "halo ",
                imageLink: "https://cdn.pixabay.com/photo/2015/05/31/15/07/business-792113_1280.jpg"
            }]
        }
        this.removePhoto = this.removePhoto.bind(this)
    }
    removePhoto(postRemoved) {
        console.log(postRemoved.description)
        this.setState((state) => ({
            posts: state.posts.filter(post => post !== postRemoved)
        }))
    }
    addPhoto(postSubmitted) {
        this.setState(state => ({
            posts: state.posts.concat([postSubmitted])
        }))
    }
    componentDidMount() {
    }

    componentDidUpdate(prevProps, prevState) {
        console.log(prevState.posts)
        console.log(this.state)
    }
    render() {
        console.log(this.state.posts)
        return (

            <div>
                <Route exact path="/" render={() => (
                    <div>
                        <Title title={'tuligram'} />
                        <Instagram posts={this.state.posts} onRemovePhoto={this.removePhoto} onNavigate={this.navigate} />
                    </div>
                )} />
                <Route path="/AddPhoto" render={({ history }) => (
                    <AddPhoto onAddPhoto={(addedPost) => {
                        this.addPhoto(addedPost)
                        history.push('/')
                    }} />
                )} />
            </div>
        )
    }
}
export default Main