import React, { Component } from 'react';
import axios from 'axios';

class NavComonent extends Component {
    state={
        termFromTopSearch:'',
        imageData:[],
        totalCount:''
    }
    
    render(){
        
        return(
            <div>
                <nav className="navbar sticky-top navbar-dark bg-dark">
                <a className="navbar-brand" href="#home">Unsplash-ReactJS</a>
                </nav>
                {/* {imagesFromComponent} */}
            </div>
        );
    }
}

export default NavComonent;