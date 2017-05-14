//Libraries

import React from 'react';
import { AppRegistry, View } from 'react-native';
import Header from './src/components/header';
import AlbumList from './src/components/AlbumList';

//Component
//For stylistic purposes we write the following as seen below
// const App = () => {
//     return (
//         <Text>Some Text</Text>
//     );
// };
const App = () => (
    <View style={{ flex: 1 }}>
        <Header headerText={'Albums!'} />
        <AlbumList />
    </View>
);


//Rendering to device
AppRegistry.registerComponent('albums', () => App);
