import React, { Component } from 'react';
import './styles/Gallery.css';

class Gallery extends Component {
    render() {
        console.log('props', this.props)
        return (
            <div className="Gallery">
                Gallery from Gallery
            </div>
        )
    }
}

export default Gallery;