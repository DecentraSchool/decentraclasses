import React, { useEffect } from 'react'
import { HuddleIframe } from "@huddle01/iframe";
import { useParams } from 'react-router-dom';
import { iframeApi } from '@huddle01/iframe';

const Meetups = () => {

    const { id } = useParams();

    return (
        <div>
            <HuddleIframe roomUrl={`https://iframe.huddle01.com/${id}`} className="w-full h-[800px] aspect-video" />
        </div>
    )
}

export default Meetups