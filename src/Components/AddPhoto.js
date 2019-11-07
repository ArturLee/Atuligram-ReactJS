//add photo class here we get the link of the photo and the description
import Title from './Title'
import React, { Component } from 'react'

class AddPhoto extends Component {
    constructor() {
        super()
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event) {
        event.preventDefault();
        const imageLink = event.target.elements.link.value
        const description = event.target.elements.description.value
        const post = {
            id: Number(new Date()),
            description: description,
            imageLink: imageLink
        }
        if (description && imageLink) {
            this.props.onAddPhoto(post)
        }
    }
    render() {
        return (
            <div>
            <Title title={'tuligram'} />
                <div className="form">
                    <form onSubmit={this.handleSubmit}>
                        <input type="text" placeholder="Link" name="link" />
                        <input type="text" placeholder="Desciption" name="description" />
                        <button> Post </button>
                    </form>
                </div>
            </div>
        )
    }
}
export default AddPhoto
