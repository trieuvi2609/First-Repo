import React from 'react';
import PropTypes from 'prop-types';
import AlbumList from '../../Album-feature/components/AlbumList' 
AlbumFeature.propTypes = {};

function AlbumFeature(props) {
    const albumList = [
        {
            id : 1,
            name : ' Nhạc Hoa Thịnh hành',
            thumbnailUrl : 'https://avatar-ex-swe.nixcdn.com/playlist/2017/11/16/d/d/c/9/1510804753557_500.jpg'
        },
        {
            id : 2,
            name : ' Nhạc Mỹ Thịnh hành',
            thumbnailUrl : 'https://avatar-ex-swe.nixcdn.com/playlist/2017/11/16/d/d/c/9/1510804753557_500.jpg'
        },
        {
            id : 3,
            name : ' Nhạc Việt Thịnh hành',
            thumbnailUrl : 'https://avatar-ex-swe.nixcdn.com/playlist/2017/11/16/d/d/c/9/1510804753557_500.jpg'
        }
    ]
    return (
        <div>
            <h2> Có thể bạn sẽ thích đấy</h2>
            <AlbumList albumList = {albumList} />
        </div>
    );
}

export default AlbumFeature;