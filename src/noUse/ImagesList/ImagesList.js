import React from 'react';
import classes from  './ImageList.module.css'

const ImagesList = ({source, clicked}) => {
    return (
        <div >
            <img src={source} 
            alt={source} 
            className={` "img-fluid ${classes.border} "`}
            onClick={clicked}
            
              />
            {/* hello */}
        </div>
    );
}

export default ImagesList;