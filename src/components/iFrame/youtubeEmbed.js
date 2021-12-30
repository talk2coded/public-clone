import React from 'react';
import PropTypes from 'prop-types';

function YoutubeEmbed({embedId}) {
    return(
        <div className='video-res'>
            <iframe width="853" height="480" src={`https://www.youtube.com/embed/${embedId}`} frameBorder="0" allow="autoplay" allowFullScreen title="Embedded youtube"/>
        </div>
    )
}