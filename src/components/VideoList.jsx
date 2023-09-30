import React from 'react';
import Video from './Video';

export default function VideoList({videos}) {
    return (
        <>
            { videos.map((video) => <Video key={crypto.randomUUID()} video={video}/>) }
        </>
    );
}