import React, {useState} from 'react';
import axios from 'axios';
import ImageResult from '../ImageResult/ImageResult';
import classes from './MainCover.module.css';
// import InfiniteScroll from 'react-infinite-scroller';
import {Dialog} from '@material-ui/core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faHeart, 
        faPlus, 
        faArrowDown, 
        faMapPin, 
        faShare, 
        faInfo,
        faThumbsUp
         } from '@fortawesome/free-solid-svg-icons';
import Moment from 'react-moment';



const MainCover = (props) => {
    const [searchText, setSearchText] = useState('');
    const [imageData, setImageData] = useState([]);
    const [dialogOpen, setDialogOpen] = useState(false);
    const [infoDialogOpen, setInfoDialogOpen] = useState(false);
    const [dialogImg, setDialogImg] = useState('');
    const [name, setName] = useState('');
    const [profileImage, setProfileImage] = useState('');
    const [username, setUserName] = useState('');
    const [location, setLocation] = useState('');
    const [published, setPublished] = useState('');
    const [likes, setLikes] = useState('');
    const [downloads, setDownloads] = useState('');

    
    // const [loaded, setIsLoaded] = useState(false);

    React.useEffect(() => {
        fetchImages();
      }, []);
    
      const fetchImages = (count = 10) => {
        const apiRoot = "https://api.unsplash.com";
        const accessKey =
          "a22f61e98da4efa25d8860e77a91a596867dd335ecdf7feb12e086943db9565a";
    
        axios
          .get(`${apiRoot}/photos/random?client_id=${accessKey}&count=${count}`)
          .then(res => {
            setImageData([...imageData, ...res.data]);
    
            console.log(imageData);
          });
      };

    const handleSubmit = (e, count=15) =>{
        // console.log(searchText);
        // e.preventDefault();
        
        // let props.searchText;


        
        const client_ID = "de9303375d7a484e5fff76d8f86bd5057fecc7601fa9836ecd37fe28f6b5e3fc";
        console.log(searchText);
        e.preventDefault();
        axios.get('https://api.unsplash.com/search/photos', {
            params: { 
                query: searchText,
                per_page:count },
            headers: {
                Authorization: `Client-ID ${client_ID}`
            }
        }).then(response=> {
            // console.log(response)
            //   this.setState({imageData: response.data.results, totalCount: response.data.total})
            setImageData(response.data.results);
            console.log(response);  
        }  
            )
        .catch(error=>error)

    }
    const handleChange = (e) => {
        setSearchText(e.target.value);
    }
    const clicked = (url, name, profile_image, username, location, published, likes, downloads) => {
        // console.log("clicked")
        setDialogOpen(true)
        setDialogImg(url)
        setName(name)
        setProfileImage(profile_image)
        setUserName(username)
        setLocation(location)
        setPublished(published)
        setLikes(likes)
        setDownloads(downloads)
    }
    const handleBackDrop = () => {
        setDialogOpen(false)
    }
    const mouseOver = () => {
        // console.log("mouse")
        document.getElementsByClassName('col34')

    }
    const getInfo = () => {
        setInfoDialogOpen(true)
    }
    const dialogBackDropHandle = () => {
        setInfoDialogOpen(false)
    }
    
    let imagesFromURL;
    const gotImages = imageData;
    if(gotImages
        //  && loaded
         ){
        imagesFromURL = (
            
            gotImages.map(
                (image)=> (
                    <div key={image.id}  >
                        <ImageResult 
                        src={image.urls.small} 
                        alt={image.urls.small}
                        clickHandler={()=>clicked(
                            image.urls.small,
                            image.user.name, 
                            image.user.profile_image.small,
                            image.user.username,
                            image.user.location,
                            image.created_at,
                            image.likes,
                            image.downloads
                            )}
                        mouseOver={mouseOver}
                          />
                    </div>
                )
            )
        );
    }


    
    return (
        <div>
            <div className="jumbotron jumbotron-fluid "
            style={{backgroundImage:"url(https://images.unsplash.com/photo-1575962003912-57a2874288c9?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjI0MzIzfQ)"}}>
            <div className="container">
                <h1 className="display-2 font-weight-bold ">Unsplash</h1>
                <p className="lead">The internet’s source of freely usable images.</p>
                <footer className="blockquote-footer lead">Powered by RSA ReactJS Developer</footer>
                <form onSubmit={handleSubmit}>
                    <input className="form-control mr-sm-2"
                    type="search"
                    placeholder="Search Image" 
                    aria-label="Search" 
                    value={searchText}
                    onChange= {handleChange} /> 
                </form>
            </div>
            </div>
            {/* <InfiniteScroll
                pageStart={0}
                loadMore={fetchImages }
                hasMore={true}
                loader={<div className="loader" >Loading ...</div>}
            > */}
                <div className="container" >
                    <div className={classes.cursor}>
                        <div className={classes.col34}>
                            
                            {imagesFromURL} 
                        </div>
                    </div>
                    
                </div>

                
                        <Dialog 
                            open={dialogOpen}
                            onBackdropClick={handleBackDrop}
                            maxWidth={false}
                            fullWidth={true}
                        >
                             <div className="container">
                                <div className="row mt-2">
                                    <div className="col-3">
                                        <div className="row">
                                            <img src={profileImage} 
                                            className="img-fluid" 
                                            alt={profileImage}
                                            style={{borderRadius:"50%"}} />
                                            
                                                <p className="m-0 ml-2"> {name}<br /> <small> @{username} </small> </p>
                                                <p> </p>
                                            
                                            
                                        </div>
                                    </div>
                                    <div className="col-3"></div>
                                    <div className="col-1">
                                    </div>
                                    <div className="">
                                    </div>
                                    <div className="col-5">
                                        <button className="btn btn-success float-right "><FontAwesomeIcon icon={faArrowDown} />Download Free</button>
                                        <button className="btn btn-secondary mr-2 float-right" ><FontAwesomeIcon icon={faPlus} />Collect </button>
                                        <button className="btn btn-secondary mr-2 float-right"> <FontAwesomeIcon icon={faHeart} /> </button>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                        <div className="row"></div>
                                    </div>
                                    <div className="col-4">
                                    <img src={dialogImg} className="img-fluid" alt={dialogImg}  />
                                    </div>
                                    <div className="col-4"></div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <FontAwesomeIcon icon={faMapPin} /> {location}
                                    </div>
                                    <div className="col-6 ">
                                        <button className="btn btn-secondary float-right" onClick={getInfo}><FontAwesomeIcon icon={faInfo} />info</button>
                                        <button className="btn btn-secondary float-right"><FontAwesomeIcon icon={faShare} />Share</button>
                                    </div>
                                </div>
                             </div>
                            
                       
                        
                        <button className="btn btn-dark" style={{borderRadius:"0px"}} onClick={handleBackDrop} >Close</button>

                        </Dialog>
                        <div className="container">
                        <Dialog
                        open={infoDialogOpen}
                        onBackdropClick={dialogBackDropHandle}
                        maxWidth="xl"
                        fullWidth={true}
                        >
                            <div className="container">
                                <div className="row">
                                    <div className="col-12">
                                        <h1 className="display-6 font-weight-bold">Info</h1>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-6">
                                        <p>Published on &nbsp;
                                            <Moment format="MMM D YYYY" >
                                                {published}
                                            </Moment>
                                        </p>
                                    </div>
                                    <div className="col-6"></div>
                                </div>
                                <div className="row">
                                    <div className="col-4">
                                    <p><FontAwesomeIcon icon={faThumbsUp} />
                                        <strong>Likes</strong></p>
                                        <h1 className="display-4 font-weigh-bold"><p> {likes}</p> </h1>
                                    </div>
                                    <div className="col-4">{downloads} </div>
                                    <div className="col-4"></div>
                                </div>
                            </div>
                           
                            

                        </Dialog>
                        </div>

                        
                        
                


                
                
            {/* </InfiniteScroll> */}

            
        </div>
    );
}

export default MainCover;