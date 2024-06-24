import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useAccount, useSignMessage } from "wagmi";
import { Toaster, toast } from "react-hot-toast";

const CreateMeetings = () => {
    const [savedRoomData, setsavedRoomData] = useState(() => [{ _id: "", title: "", description: "", bannerImageLink: "", eventDate: "", eventTime: "", eventDuration: "", eventLink: "" }])
    const { address, isConnected } = useAccount();
    const [dataChanged, setdataChanged] = useState(false)

    useEffect(() => {
        if (isConnected == false) {
            toast.error("Please Connect wallet")
        }
        const getEventData = async () => {
            const data = await axios.get(`https://decentra-1-5-backend.onrender.com/api/events/wallet/${address}`)
            console.log(data);
            setsavedRoomData(data.data)

        }
        getEventData()
    }, [dataChanged]);
    console.log(savedRoomData);


    const [roomData, setroomData] = useState({ title: "", description: "", hostAddress: address, bannerImageLink: "", eventDate: "", eventTime: "", eventDuration: "" })


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
            if (roomData.bannerImageLink.length === 0) {
                toast.error("Banner Image Link not provided")
                return
            }
            if (roomData.eventDate.length === 0) {
                toast.error("Event Date not provided")
                return
            }
            if (roomData.eventTime.length === 0) {
                toast.error("Event Time not provided")
                return
            }
            if (roomData.eventDuration.length === 0) {
                toast.error("Event Duration not provided")
                return
            }

            const data = await axios.post("http://localhost:8080/api/events", {
                title: roomData.title,
                description: roomData.description,
                hostWalletAddresses: roomData.hostAddress.split(","),
                bannerImageLink: roomData.bannerImageLink,
                eventDate: roomData.eventDate,
                time: roomData.eventTime,
                duration: roomData.eventDuration
            })

            if (data) {
                toast.success("Room Created Successfully")
                setdataChanged(!dataChanged)
                setroomData({ title: "", description: "", hostAddress: "", bannerImageLink: "", eventDate: "", eventTime: "", eventDuration: "" });
            }
        } catch (error) {
            console.log(error);
            console.log("something went wrong");
        }
    };

    const deleteRoomData = async ({ id }) => {
        try {
            const response = await axios.delete(`https://decentra-1-5-backend.onrender.com/api/events/${id}`, {
                walletAddress: address
            });
            if (response) {
                toast.success("Room Data Deleted Successfully");
                setdataChanged(!dataChanged)

            }
        } catch (error) {
            console.log(error);
            console.log("Something went wrong while deleting room data");
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
                    <label for="bannerImageLink" class="block mb-2 text-lg font-medium text-gray-900 ">Banner Image Link</label>
                    <input type="text" id="bannerImageLink" value={roomData.bannerImageLink} onChange={(e) => setroomData({ ...roomData, bannerImageLink: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="https://example.com/banner.jpg" required />
                </div>
                <div class="mb-5">
                    <label for="eventDate" class="block mb-2 text-lg font-medium text-gray-900 ">Date of Event (dd/mm/yy)</label>
                    <input type="text" id="eventDate" value={roomData.eventDate} onChange={(e) => setroomData({ ...roomData, eventDate: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="dd/mm/yy" required />
                </div>
                <div class="mb-5">
                    <label for="eventTime" class="block mb-2 text-lg font-medium text-gray-900 ">Time of Event (hh:mm)</label>
                    <input type="text" id="eventTime" value={roomData.eventTime} onChange={(e) => setroomData({ ...roomData, eventTime: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="hh:mm" required />
                </div>
                <div class="mb-5">
                    <label for="eventDuration" class="block mb-2 text-lg font-medium text-gray-900 ">Duration of Event (in hours)</label>
                    <input type="text" id="eventDuration" value={roomData.eventDuration} onChange={(e) => setroomData({ ...roomData, eventDuration: e.target.value })} class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="2 hours" required />
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

            {savedRoomData.map((r, index) => {
                return (
                    <div className="flex items-center justify-between">
                        <span className="text-sm mr-2 font-bold">{index + 1}</span>
                        <p><span className='text-xl'>{r.title}</span>  :  <span className='italic'>
                            <a target='_blank' href={`/joinRoom/${r.eventLink}`} className='text-blue-500 hover:text-blue-700'>{`decentraclasses.com/joinRoom/${r.eventLink}`}</a></span>
                        </p>
                        <div className="flex items-center">
                            <button onClick={() => deleteRoomData({ id: r._id })} className="btn bg-red-600 rounded-lg p-4 text-white">Delete</button>
                        </div>
                    </div>
                );
            })}


        </div>
    )
}

export default CreateMeetings