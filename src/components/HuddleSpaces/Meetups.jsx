import React, { useEffect, useState } from 'react'
import { HuddleIframe } from "@huddle01/iframe";
import { useParams } from 'react-router-dom';
import { iframeApi } from '@huddle01/iframe';
import axios from "axios";
import { BiInfoCircle, BiLogoAndroid, BiLogoApple, BiLogoInternetExplorer, BiLogoLinkedin, BiLogoTwitter, BiWorld, BiX } from 'react-icons/bi';
import { Link } from 'react-router-dom';

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
        <div className='flex flex-col w-full items-center my-10 gap-10' >
            <div className='gap-5 flex flex-col items-center'>
                <Link to="https://linktr.ee/zapit" target='_blank'>
                    <svg width="149" height="40" viewBox="0 0 149 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M131.41 9.89648H125.472V31.2734H131.41V9.89648Z" fill="#3267CF" />
                        <path d="M29.76 37.4411C25.3214 39.9292 19.9357 40.7357 14.6451 39.2687C9.32916 37.7951 5.1129 34.3036 2.59486 29.8529C0.0779296 25.4022 -0.742966 19.9913 0.731789 14.6755C1.01501 13.6566 1.37236 12.6775 1.79498 11.7427C2.78848 9.54774 6.01345 10.7791 4.91596 13.2185C4.5741 13.9774 4.28645 14.7717 4.05743 15.597C2.83824 19.9957 3.51644 24.4707 5.59858 28.1536C7.68292 31.8343 11.1701 34.7229 15.5678 35.942C19.8184 37.1202 24.142 36.5262 27.752 34.6056C30.1163 33.3466 31.8045 36.296 29.76 37.4411ZM10.2098 2.58906C14.6485 0.100978 20.0342 -0.705521 25.3247 0.761443C30.6407 2.23615 34.8569 5.72655 37.375 10.1772C39.8908 14.629 40.7128 20.04 39.238 25.3558C38.9548 26.3747 38.5975 27.3538 38.1748 28.2875C37.2699 30.2855 34.0913 28.9502 35.0538 26.8117C35.3957 26.0527 35.6833 25.2584 35.9124 24.4331C37.1315 20.0344 36.4534 15.5594 34.3713 11.8765C32.2869 8.19473 28.7997 5.30726 24.402 4.08811C20.1514 2.9099 15.8289 3.5062 12.2178 5.42453C9.93765 6.63594 8.08895 3.77613 10.2098 2.58906Z" fill="#3267CF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M128.639 7.12565C130.575 7.12565 132.202 5.49904 132.202 3.56283C132.202 1.62662 130.575 0 128.639 0C126.703 0 125.076 1.62662 125.076 3.56283C125.076 5.49904 126.703 7.12565 128.639 7.12565Z" fill="#3267CF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M110.726 26.4516C114.182 26.4516 116.456 24.0618 116.456 20.6961C116.456 17.332 114.182 14.9423 110.726 14.9423C107.269 14.9423 104.994 17.332 104.994 20.6961C104.996 24.0635 107.269 26.4516 110.726 26.4516ZM104.996 10.1677H99.1467V31.2278V39.9826H104.996V35.7122V31.2278V28.9937C111.041 34.7816 122.305 29.8821 122.305 20.6977C122.305 11.5279 111.04 6.58795 104.996 12.4018V10.1677Z" fill="#3267CF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M82.4192 26.2853C78.9627 26.2853 76.6891 23.9196 76.6891 20.5877C76.6891 17.2573 78.9627 14.8916 82.4192 14.8916C85.8758 14.8916 88.1493 17.2573 88.1493 20.5877C88.1509 23.9212 85.8774 26.2853 82.4192 26.2853ZM88.151 10.165V12.3766C82.1069 6.62118 70.8417 11.5115 70.8417 20.5893C70.8417 29.6814 82.1053 34.5317 88.151 28.8019V31.0136H94V10.165H88.151Z" fill="#3267CF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M65.186 9.89648C66.3002 9.89648 67.2595 10.4264 67.8674 11.3792C68.4769 12.3304 68.5656 13.4396 68.1173 14.4812C67.84 15.1247 67.4853 15.7484 67.0499 16.3589L60.2602 25.8922H69.8523V31.2734H56.4275C55.3134 31.2734 54.3556 30.7435 53.7461 29.7907C53.1367 28.8379 53.048 27.7303 53.4962 26.6887C53.7735 26.0452 54.1283 25.4199 54.5636 24.811L61.3534 15.2777H52.632V9.89648H65.186Z" fill="#3267CF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M148.63 15.5701V10.1167H144.152V4.15625L138.451 5.87075V10.1167H134.973V15.5701H138.451V23.6971C138.451 30.7682 142.366 31.7175 148.63 31.1266V26.0089C146.762 26.1203 144.152 26.1671 144.152 23.6971V15.5701H148.63Z" fill="#3267CF" />
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M15.6059 16.9215C15.3761 16.0344 14.5023 15.2893 13.9312 14.8851L12.5548 14.0034L10.035 12.3886L7.51416 10.775L4.99328 9.16129C4.15372 8.62377 3.31306 8.08624 2.47351 7.54762C0.103981 6.0301 1.48926 5.43903 3.62791 6.03228C4.70938 6.33054 5.79086 6.62989 6.87123 6.92706L11.5904 8.23045L15.2126 9.2323C18.2682 11.4206 19.7462 14.9681 15.6059 16.9215ZM24.3649 23.1752C24.5957 24.0623 25.4684 24.8074 26.0395 25.2117L27.416 26.0933L29.9357 27.7081L32.4566 29.3207L34.9775 30.9343C35.817 31.4719 36.6577 32.0094 37.4972 32.548C39.8667 34.0655 38.4815 34.6555 36.3428 34.0634C35.2613 33.7651 34.1799 33.4657 33.0995 33.1686L28.3803 31.8652L24.757 30.8622C21.7015 28.6761 20.2245 25.1297 24.3649 23.1752ZM15.9936 18.2457L17.5943 17.2307C17.5943 17.2307 23.2425 13.8439 17.5567 9.88018L21.0287 10.8394L25.7468 12.1428C34.5875 14.5824 29.4 18.3495 27.1785 19.8211C26.6504 20.1718 26.1102 20.4985 25.5778 20.8361L23.976 21.851L22.3753 22.866C22.3753 22.866 16.7282 26.2528 22.4129 30.2165L18.9409 29.2573L15.9969 28.4445C6.88558 25.9284 10.0947 22.1504 12.7912 20.2756C13.3104 19.9129 13.8583 19.5993 14.3918 19.2606L15.9936 18.2457ZM26.5521 25.5394C26.5521 25.5394 26.3356 25.4225 26.0395 25.2117L26.5521 25.5394ZM13.4175 14.5573C13.4175 14.5573 13.634 14.6742 13.9301 14.8862L13.4175 14.5573Z" fill="#3267CF" />
                    </svg>
                </Link>

                <div className='flex  flex-wrap w-full items-center gap-5'>
                    <Link className='flex justify-center align-middle flex-col' to="https://zapit.io/" target="_blank">
                        <BiWorld className='h-6 items-center w-full' color='black' />
                        <span>Website</span>                    </Link>
                    <Link className='flex justify-center align-middle flex-col' to="https://play.google.com/store/apps/details?id=io.wallet.zapit" target="_blank">
                        <BiLogoAndroid color="green" className='h-6 items-center w-full' />
                        <span>Android</span>                    </Link>
                    <Link className='flex justify-center align-middle flex-col' to="https://apps.apple.com/in/app/zapit-io/id1558433083" target="_blank">
                        <BiLogoApple color="black" className='h-6 items-center w-full' />
                        <span>IOS</span>                    </Link>
                    <Link className='flex justify-center align-middle flex-col' to="https://twitter.com/zapit_io" target="_blank">
                        <BiX className='h-6 items-center w-full' color='black' />
                        <span>Twitter</span>
                    </Link>
                    <Link className='flex justify-center align-middle flex-col' to="https://www.linkedin.com/company/zapit-io/" target="_blank">
                        <BiLogoLinkedin className='h-6 items-center w-full' color='blue' />
                        <span>Linkedin</span>
                    </Link>
                </div>

            </div>
            <HuddleIframe roomUrl={`https://iframe.huddle01.com/${id}`} className="w-full h-[800px] aspect-video" />
        </div>
    )
}

export default Meetups