//Class based component useful for dynamic data fetching

import React, { Component } from 'react';
import { ScrollView, Text } from 'react-native';
import axios from 'axios';
import AlbumDetail from './src/components/AlbumDetail';

class AlbumList extends Component {
    state = {
        albums: []
    };

    componentWillMount() {
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({ albums: response.data }));
    }

    renderAlbums() {
        this.state.albums.map(album => //map is an iterator good for arrays
            //key needs to be unique so pick a field in the data that is unique
            <AlbumDetail key={album.title} album={album} /> //album is props we are sending to AlbumDetail
        );
    }

    render() {

        return (
            <ScrollView>
                {this.renderAlbums()}
            </ScrollView>
        );
    }
}

export default AlbumList;
