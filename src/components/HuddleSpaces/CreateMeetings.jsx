import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAccount, useSignMessage } from "wagmi";
import { Toaster, toast } from "react-hot-toast";

const CreateMeetings = () => {
    const [savedRoomData, setsavedRoomData] = useState(() => [{ title: "", description: "", roomId: "" }])
    const { address, isConnected } = useAccount();

    useEffect(() => {
        const localSavedRoomData = JSON.parse(localStorage.getItem('savedRoomData'));
        console.log(localSavedRoomData);
        if (localSavedRoomData) {
            setsavedRoomData(localSavedRoomData);
        }
        // localStorage.setItem('savedRoomData', JSON.stringify(savedRoomData));
    }, []);


    const [roomData, setroomData] = useState({ title: "", description: "", hostAddress: address })


    const handler = async (req, res) => {
        try {
            if (roomData.title.length === 0) {
                toast.error("Title not provided")
                return
            }
            if (roomData.description.length === 0) {
                toast.error("Description not provided")
                return
            }
            if (roomData.hostAddress.length === 0) {
                toast.error("Host address not provided")
                return
            }

            const { data } = await axios.post(
                'https://api.huddle01.com/api/v1/create-iframe-room',
                {
                    title: roomData.title,
                    description: roomData.description,
                    hostWallets: roomData.hostAddress.split(","),
                    videoOnEntry: true,
                    muteOnEntry: true
                },
                {
                    headers: {
                        'Content-Type': 'application/json',
                        'x-api-key': " WjVq0kKoGaZS1sHmhWTjXSX7suWMKoLB",
                    },
                }
            );

            if (data) {
                console.log(data);
                const existingRooms = JSON.parse(localStorage.getItem('savedRoomData')) || [];
                existingRooms.push({ id: data.data.roomId, title: roomData.title, description: roomData.description });
                localStorage.setItem('savedRoomData', JSON.stringify(existingRooms));
                setsavedRoomData(existingRooms)
                toast.success("Room Created Successfully")
            }
        } catch (error) {
            console.log(error);
            console.log("something went wrong");
        }
    };


    return (
        <div className='w-full h-full justify-center items-center flex flex-col my-10'>
            <Toaster />
            <p className='items-center text-xl'>Generate Unique room for online Meetups</p>
            <form class="max-w-sm mx-auto my-10">
                <div class="mb-5">
                    <label for="title" class="block mb-2 text-lg font-medium text-gray-900 ">Enter title</label>
                    <input type="text" value={roomData.title} onChange={(e) => setroomData({ ...roomData, title: e.target.value })} id="text" class="bg-gray-50 border border-gray-300 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intro to Web3" required />
                </div>
                <div class="mb-5">
                    <label for="description" class="block mb-2 text-lg font-medium text-gray-900 ">Description</label>
                    <input type="text" id="description" value={roomData.description} onChange={(e) => setroomData({ ...roomData, description: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Intro to Web3" required />
                </div>
                <div class="mb-5">
                    <label for="" class="block mb-2 text-lg font-medium text-gray-900 ">Host Wallet Address</label>
                    <span className='text-sm'>If multiple hosts, add Wallet address seperated with a coma</span>
                    <textarea type="text" value={roomData.hostAddress} onChange={(e) => {
                        setroomData({ ...roomData, hostAddress: e.target.value })

                    }} id="text" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" required />
                </div>


            </form>

            <button className='btn bg-blue-600 rounded-lg text-white' onClick={handler}>
                Generate room id
            </button>
            <span>
                Generated Room ids:
            </span>

            {savedRoomData.map((r) => {
                return <p><span className='text-xl'>{r.title}</span>  :  <span className='italic'>
                    <a target='_blank' href={`/joinRoom/${r.id}`} className='text-blue-500 hover:text-blue-700'>{`decentraclasses.com/joinRoom/${r.id}`}</a></span>  </p>

            })}


        </div>
    )
}

export default CreateMeetings