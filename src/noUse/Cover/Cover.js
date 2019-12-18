import React, { Component } from 'react';
import axios from 'axios';
import ImagesList from '../ImagesList/ImagesList';
import classes from './Cover.module.css';
import { Dialog } from '@material-ui/core';
import Button from '@material-ui/core/Button';
// import HoverData from '../HoverData/HoverData';


class Cover extends Component {
    state = {
        termFromTopSearch:'',
        count:'',
        open:false,
        imageDialog:'',
        hover:false
    }

    handleChange=(e)=>{
        this.setState({termFromTopSearch: e.target.value})
    }
    handleSubmit = (e) => {
        const {termFromTopSearch} = this.state;
        const client_ID = "de9303375d7a484e5fff76d8f86bd5057fecc7601fa9836ecd37fe28f6b5e3fc";
        console.log(termFromTopSearch);
        e.preventDefault();
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: termFromTopSearch},
            headers: {
                Authorization: `Client-ID ${client_ID}`
            }
        }).then(response=> 
            // console.log(response)
              this.setState({imageData: response.data.results, totalCount: response.data.total})
                )
        .catch(error=>error)
    }
    clicked = () => {
        console.log("cliced")
    }
    onOpen = () => {
       console.log("opened")
    }
    handleClose =() => {
        this.setState({open: false})
    }
    openImage=(gotImageFromMap) => {
        this.setState({
                open:true, 
                imageDialog: gotImageFromMap
            })
        // console.log("image open")
    }
    hoverHandler = () => {
        // this.setState({hover: false})
        console.log("hover")
    }
    render(){
        let imagesFromComponent;
        const gotImages = this.state.imageData;
        if(gotImages){
            imagesFromComponent = (
                gotImages.map((image, index)=>(
                    <div key={index} >
                        <ImagesList source={image.urls.small} onClick={()=>this.openImage(
                            image.urls.small
                        )} 
                         />
                        
                    </div>
                ))
                
            )
        }
        const actions = [
            <Button variant="contained" 
                   style={{background:'#2E3B55',color:'white'}}
                   onClick={this.handleClose}
                   >
                Close
           </Button>
         ];
        return(
            <div>
                <div className="jumbotron jumbotron-fluid">
                    <div className="container">
                        <h1 className="display-3 font-weight-bold">Unsplash</h1>
                        <p className="lead">The internet’s source of freely usable images.</p>
                        <footer className="blockquote-footer lead">Powered by RSA ReactJS Developer</footer>
                        <form onSubmit={this.handleSubmit}>
                            <input className="form-control mr-sm-2"
                            type="search"
                            placeholder="Search Image" 
                            aria-label="Search" 
                            value={this.state.termFromTopSearch}
                            onChange= {this.handleChange} /> 
                        </form>
                    </div>
                </div>
                
                    <div className="container">
                        <div  className={classes.col34} >
                            {imagesFromComponent}
                        </div>
                        <Dialog
                        actions={actions}
                        modal={false}
                        open={this.state.open}
                        onRequestClose={this.handleClose}
                        fullWidth={true}
                        
                        >
                            <img src={this.state.imageDialog} alt={this.state.imageDialog} />
                            
                        </Dialog>
                    </div>
                    

            </div>
        );
    }
}

export default Cover;


// const UnsplashImage = ({ url, key }) => (
//     <div className="image-item" key={key} >
//       <img src={url} />
//     </div>
//   );
  
//   let Collage = () => {
//     const [images, setImages] = React.useState([]);
//     const [loaded, setIsLoaded] = React.useState(false);
  
//     React.useEffect(() => {
//       fetchImages();
//     }, []);
  
//     const fetchImages = (count = 10) => {
//       const apiRoot = "https://api.unsplash.com";
//       const accessKey =
//         "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";
  
//       axios
//         .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
//         .then(res => {
//           setImages([...images, ...res.data]);
//           setIsLoaded(true);
  
//           console.log(images);
//         });
//     };
  
//     return (
//       <div className="hero is-fullheight is-bold is-info">
//         <div className="hero-body">
//           <div className="container">
//             <div className="header content">
//               <h2 className="subtitle is-6">Code Challenge #16</h2>
//               <h1 className="title is-1">
//                 Infinite Scroll Unsplash Code Challenge
//               </h1>
//             </div>
  
//             <InfiniteScroll
//               dataLength={images}
//               next={() => fetchImages(5)}
//               hasMore={true}
//               loader={
//                 <img
//                   src="https://res.cloudinary.com/chuloo/image/upload/v1550093026/scotch-logo-gif_jq4tgr.gif"
//                   alt="loading"
//                 />
//               }
//             >
//               <div className="image-grid" style={{ marginTop: "30px" }}>
//                 {loaded
//                   ? images.map((image, index) => (
//                       <UnsplashImage
//                         url={image.urls.regular}
//                         key={index}
//                       />
//                     ))
//                   : ""}
//               </div>
//             </InfiniteScroll>
//           </div>
//         </div>
//       </div>
//     );
//   };
  
//   ReactDOM.render(<Collage />, document.getElementById("root"));
  