import React, { useEffect, useState } from 'react'
import { HuddleIframe } from "@huddle01/iframe";
import { useParams } from 'react-router-dom';
import { iframeApi } from '@huddle01/iframe';
import axios from "axios";

const Meetups = () => {

    const { id } = useParams();
    const [roomDetails, setroomDetails] = useState({})

    const getRoomDetails = async () => {
        const response = await axios.get(
            `https://api.huddle01.com/api/v1/room-details/${id}`,
            {
                headers: {
                    'x-api-key': 'WjVq0kKoGaZS1sHmhWTjXSX7suWMKoLB',
                },
            }
        );
        setroomDetails(response)
    }

    console.log(roomDetails);

    useEffect(() => {
        getRoomDetails()
    }, [id])

    return (
        <div>
            <HuddleIframe roomUrl={`https://iframe.huddle01.com/${id}`} className="w-full h-[800px] aspect-video" />
        </div>
    )
}

export default Meetups