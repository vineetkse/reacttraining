import React from 'react';
import SearchBar from './SearchBar';
import API from '../api/unsplash';
import ImageList from './ImageList';

class App extends React.Component {

    state= {images: []};

    onSearchSubmit = async term => {
        const PHOTOS_URI = '/search/photos';
        const response = await API.get(`${PHOTOS_URI}`, {
            params: {query: term},
        });

        this.setState({images: response.data.results});
    }

    render() {
        return (
            <div className="ui container" style={{marginTop: '10px'}}>
                <SearchBar onSubmit={this.onSearchSubmit}/>
                <ImageList images={this.state.images}/>
            </div>
        );
    }
}

export default App;