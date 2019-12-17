import React, { Component } from 'react';
import {GridList} from '@material-ui/core';
import Masonry from 'react-masonry-css';


class ImagesList extends Component {
   
    render(){
        let imagesDataProp;
        const imagesFromArray = this.props.images;
        // const count = this.props
        if(imagesFromArray){
            imagesDataProp = (

                // <GridList cols={3} cellHeight="auto">
                //     {
                //         imagesFromArray.map(singleImage=> <img src={singleImage.urls.small} alt={singleImage.results}  />)
                //     }
                // </GridList>
                <GridList cols={3}>
                    <Masonry 
                    breakpointCols={3}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_row"
                    >
                        {
                            imagesFromArray.map(singleImage=> <img src={singleImage.urls.small} alt={singleImage.results}  />)
                        }
                    </Masonry>
                </GridList>
                
                
                // imagesFromArray.map(singleImage=>
                //     <div key={singleImage.id} className="row">
                //         <img src={singleImage.urls.small}
                //             alt={singleImage.results}
                //             height="100px"
                //             style={{}}
                //         />
                //     </div>
                   
                //     )
            );
        }
        
        return(
            <div>
                {imagesDataProp}
               
            </div>
        );
    }
}

export default ImagesList;