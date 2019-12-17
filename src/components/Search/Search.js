import React, {Component} from 'react';
import axios from 'axios';
import ImagesList from '../ImagesList/ImagesList';
import CountHandler from '../countHandler/countHandler';

class Search extends Component {
    state={
        term:'',
        imageData: [],
        totalCount:''
    }

    termChange = (e) => {
        this.setState({term: e.target.value} );
    }
     submitTerm = (e) => {
        const {term} = this.state;
        const client_ID = "de9303375d7a484e5fff76d8f86bd5057fecc7601fa9836ecd37fe28f6b5e3fc";
        console.log(term);
        e.preventDefault();
        axios.get('https://api.unsplash.com/search/photos', {
            params: { query: term},
            headers: {
                Authorization: `Client-ID ${client_ID}`
            }
        }).then(response=> 
            // console.log(response)
              this.setState({imageData: response.data.results, totalCount: response.data.total})
                )
        .catch(error=>error)
    }

    render(){
        // console.log(this.state.imageData)
        return(
            <div>
                <form onSubmit={this.submitTerm}>
                    <input type="text" value={this.state.term} onChange={this.termChange} />
                    
                </form>
                {this.state.imageData.length > 0 ? (<CountHandler count={this.state.totalCount}/>) :
                null
                }
                {this.state.imageData.length > 0 ? (<ImagesList images={this.state.imageData} className="row" />) :
                null
                }
                
            </div>
            
        );
    }
}


export default Search;