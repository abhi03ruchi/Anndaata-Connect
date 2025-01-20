import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import ProfileDataService from "../adminPage/admin";
import { useEffect } from 'react';
import { Alert } from 'react-bootstrap';
import Banner from "../../Components/Banner";
import './Form.css';
import { useNavigate } from 'react-router-dom';
import Tilt from 'react-parallax-tilt';
export default function DonorForm({ id, setRecordId }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (name === "" || email === "" || address === "" || phone === "") {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newRecord = {
            name,
            email,
            address,
            phone
        };
        console.log(newRecord);

        try {
            if (id !== undefined && id !== "") {
                await ProfileDataService.updateBook(id, newRecord);
                setRecordId("");
                setMessage({ error: false, msg: "Updated successfully!" });
            } else {
                await ProfileDataService.addName(newRecord);
                setMessage({ error: false, msg: "New Book added successfully!" });
            }
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }

        setName("");
        setEmail("");
        setAddress("");
        setPhone("");

        navigate('/ngoList');
    };

    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await ProfileDataService.getName(id);
            console.log("the record is :", docSnap.data());
            setName(docSnap.data().name);
            setEmail(docSnap.data().email);
            setAddress(docSnap.data().address);
            setPhone(docSnap.data().phone);
        } catch (err) {
            setMessage({ error: true, msg: err.message });
        }
    };

    useEffect(() => {
        console.log("The id here is : ", id);
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id]);


    return (
        <>
            {message?.msg && (
                <Alert
                    variant={message?.error ? "danger" : "success"}
                    dismissible
                    onClose={() => setMessage("")}
                >
                    {message?.msg}
                </Alert>
            )}

            <Banner />
            <form onSubmit={handleSubmit} className='p-[-100px] bgImg' >
                <h2 className="text-center text-7xl mb-10 leading-7 text-gray-900"
                    style={{ fontFamily: 'DM Serif Text' }}
                >Profile</h2>
            <Tilt>
                <div className='box'>
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className=" flex justify-center items-center text-center mt-8 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="grid gap-4 grid-cols-1 col-span-full text-center">
                                <label htmlFor="photo" className="grid grid-cols-1 grid-rows-2 gap-x-2 gap-y-2 block text-6xl font-medium leading-8 text-gray-900"
                                style={{ fontFamily: 'DM Serif Text' }}>
                                    Photo
                                </label>
                                <div className="-mt-10 -mr-5 ml-20 mb-40 grid grid-cols-1 grid-rows-1 gap-x-9 gap-y-9">
                                    <UserCircleIcon className="mt-4 mr-10 h-[230px] w-[230px] text-gray-300" aria-hidden="true" />
                                    <button
                                        type="button"
                                        className="rounded-md bg-red px-1.5 py-1.5 text-base font-bold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                        >
                                        Change
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="text-left border-b border-gray-900/10">
                        <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="first-name" className="block text-lg ml-25 -mb-4 mr-20 font-bold leading-6 text-gray-900">
                                Name
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        autoComplete="given-name"
                                        className=" peer block w-[20rem] -ml- 10 mt-8 appearance-none border-0 border-b-2 border-gray-700 
                                        bg-transparent px-0 py-2.5 text-lg text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="last-name" className="block text-lg ml-10 font-bold leading-6 text-gray-900">
                                    Email address
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        autoComplete="email"
                                        className="peer block w-[15rem] ml-10 appearance-none border-0 border-b-2 border-gray-700 
                                        bg-transparent px-0 py-3 text-lg text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="number" className="block text-lg font-bold -ml-15 mr-15 -mb-3 leading-6 text-gray-900 
">
                                    Phone Number
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="number"
                                        name="number"
                                        type="number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        autoComplete="number"
                                        className="relative peer block w-[12rem] ml-25 mr-20 -mb-13 appearance-none border-0 border-b-2 border-gray-700 
                                        bg-transparent px-0 py-2.5 text-lg text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="country" className="block text-lg font-bold leading-6 text-gray-900">
                                    Country
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="country"
                                        name="country"
                                        autoComplete="country-name"
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:max-w-xs sm:text-sm sm:leading-6"
                                    >
                                        <option>India</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>

                            <div className="col-span-full">
                                <label htmlFor="street-address" className="block text-lg font-bold ml-3 mb-5 leading-6 text-gray-900">
                                    Street address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        autoComplete="street-address"
                                        className="relative peer block w-[25rem] ml-5 mb-5 mappearance-none border-0 border-b-2 border-gray-700 
                                        bg-transparent px-0 py-2.5 text-lg text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder=""
                                    />
                                </div>
                            </div>

                            <div className="sm:col-span-2 sm:col-start-1">
                                <label htmlFor="city" className="block text-lg ml-5 -mt-3 -mr-25 font-bold leading-6 text-gray-900 grid gap-5 grid-cols-3">
                                    City
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        autoComplete="address-level2"
                                        className="absolute peer block w-[10rem] -ml-5  appearance-none border-0 border-b-2 border-gray-700 
                                        bg-transparent px-0 py-2.5 text-lg text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder="" />
                                </div>
                            </div>

                            <div className="sm:col-span-2">
                                <label htmlFor="region" className="block text-lg -mb-3 font-bold leading-6 text-gray-900">
                                    State / Province
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        autoComplete="address-level1"
                                        className="absolute peer block w-[10rem] -ml-2 appearance-none border-0 border-b-2 border-gray-700 
                                        bg-transparent px-0 py-2.5 text-lg text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder=""
                                    />
                                </div>
                            </div>
                            <div className="sm:col-span-2">
                                <label htmlFor="postal-code" className="block text-lg -mb-3 font-bold leading-6 text-gray-900">
                                    ZIP / Postal code
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        autoComplete="postal-code"
                                        className="peer block w-[10rem] mb-10 appearance-none border-0 border-b-2 border-gray-700 
                                        bg-transparent px-0 py-2.5 text-lg text-black focus:border-blue-500 focus:outline-none focus:ring-0" placeholder=""
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                </Tilt>
                <div className=" flex items-center justify-end gap-x-6 bg-[#e26959]">
                    <button type="reset" className="cancelbtn">
                        Cancel
                    </button>
                    <button

                        type="submit"
                        className="savebtn">
                        Save 
                    </button> 
                </div>
            </form>
        </>
    )
}
