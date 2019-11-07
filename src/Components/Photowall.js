import React from 'react'
import Photo from './photo'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
//anchor tag, href attribute
function PhotoWall(props) {
    return <div className="info">
        <Link className="addIcon" to="/AddPhoto"> </Link>
        <div className="photoGrid" >
            {props.posts
                .sort(function (x, y) {
                    return y.id - x.id
                })
                .map((post, index) => <Photo key={index} post={post} index={index} {...props} />)}
        </div>
    </div>
}
PhotoWall.propTypes = {
    posts: PropTypes.array.isRequired,
}
export default PhotoWall