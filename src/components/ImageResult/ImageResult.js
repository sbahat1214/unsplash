import React from 'react';
import classes from  './ImageResult.module.css';

const ImageResult = (props) => {
    // console.log(props)
    return(
        <div >
            <img src={props.src} 
                alt={props.alt} 
                onClick={props.clickHandler} 
                className={`"img-fluid ${classes.border} ${classes.img} "`}
                onMouseOver={props.mouseOver}
             />
        </div>
    );
}

export default ImageResult;