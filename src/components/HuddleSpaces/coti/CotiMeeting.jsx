import React, { useEffect, useState } from 'react'
import { HuddleIframe } from "@huddle01/iframe";
import { useParams } from 'react-router-dom';
import { iframeApi } from '@huddle01/iframe';
import axios from "axios";
import { BiInfoCircle, BiLogoAndroid, BiLogoApple, BiLogoDiscord, BiLogoGithub, BiLogoInternetExplorer, BiLogoLinkedin, BiLogoTelegram, BiLogoTwitter, BiWorld, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const CotiMeeting = () => {

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
        console.log(response);
        setroomDetails(response)
    }

    console.log(roomDetails);

    useEffect(() => {
        getRoomDetails()
    }, [id])

    return (
        <div className='flex flex-col w-full items-center my-10 gap-10' >
            <div className='gap-5 flex flex-col items-center'>
                <Link to="https://coti.io/" target='_blank'>
                    <img className='flex w-[250px] ' src="https://res.cloudinary.com/dn3s8nalf/image/upload/v1719239152/luzutckyelpjjpowbahz.png" />
                </Link>

                <div className='flex  flex-wrap w-full items-center gap-5'>
                    <Link className='flex justify-center align-middle flex-col' to="https://github.com/coti-io" target="_blank">
                        <BiLogoGithub className='h-6 items-center w-full' color='black' />
                        <span>Github</span>                    </Link>
                    <Link className='flex justify-center align-middle flex-col' to="https://t.me/COTInetwork" target="_blank">
                        <BiLogoTelegram color="darkblue" className='h-6 items-center w-full' />
                        <span>Telegram</span>                    </Link>
                    <Link className='flex justify-center align-middle flex-col' to="https://discord.com/invite/wfAQfbc3Df" target="_blank">
                        <BiLogoDiscord color="black" className='h-6 items-center w-full' />
                        <span>Discord</span>                    </Link>
                    <Link className='flex justify-center align-middle flex-col' to="https://x.com/COTInetwork" target="_blank">
                        <BiX className='h-6 items-center w-full' color='black' />
                        <span>Twitter</span>
                    </Link>
                    <Link className='flex justify-center align-middle flex-col' to="https://www.linkedin.com/company/coti-ltd" target="_blank">
                        <BiLogoLinkedin className='h-6 items-center w-full' color='blue' />
                        <span>Linkedin</span>
                    </Link>
                </div>

            </div>
            <HuddleIframe roomUrl={`https://iframe.huddle01.com/${id}`} className="w-full h-[800px] aspect-video" />
        </div>
    )
}

export default CotiMeeting