import { UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect, useCallback } from 'react';
import Navbar from '../../Components/Navbar/Navbar'
import Footer from '../../Components/Footer/Footer'
import ProfileDataService from "../adminPage/admin";
import { Alert } from 'react-bootstrap';
import Banner from "../../Components/Banner";
import './Form.css';
import { useNavigate } from 'react-router-dom';
export default function DonorForm({ id, setRecordId }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const navigate = useNavigate();
    const [message, setMessage] = useState({ error: false, msg: "" })

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

    const editHandler = useCallback( async () => {
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
    }, [id]);

    useEffect(() => {
        console.log("The id here is : ", id);
        if (id !== undefined && id !== "") {
            editHandler();
        }
    }, [id, editHandler]);


    return (
        <>
            <Navbar />
            {message?.msg && (
                <Alert
                    variant={message?.error ? "danger" : "success"}
                    dismissible
                    onClose={() => setMessage("")}
                >
                    {message?.msg}
                </Alert>
            )}

            <form onSubmit={handleSubmit} className="p-6 pt-20 min-h-screen" >
                <Banner />
                <h2 className="text-3xl"
                    style={{ fontFamily: 'Inter' }}
                >Profile</h2>
                <div className="flex flex-wrap m-auto relative justify-center max-w-[75rem] gap-6">
                    <div className="flex flex-col min-w-72">
                        <label htmlFor="photo" className="text-[15px] text-gray-800 font-semibold">
                            Photo
                        </label>
                        <div className="flex flex-col items-center">
                            <UserCircleIcon className="text-gray-400" aria-hidden="true" />
                            <button
                                type="button"
                                className="border-2 max-w-fit py-1.5 px-3  border-solid border-red-500 text-red-500 hover:bg-red-500 hover:text-red-50"
                            >
                                Change
                            </button>
                        </div>
                    </div>
                    <div className="flex gap-6 relative max-md:flex-wrap max-md:justify-center">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center">
                                <label htmlFor="first-name" className="text-[15px] text-gray-800 font-semibold">
                                    Name
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        name="first-name"
                                        id="first-name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center">
                                <label htmlFor="last-name" className="text-[15px] text-gray-800 font-semibold">
                                    Email address
                                </label>
                                <div className="">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center">
                                <label htmlFor="number" className="text-[15px] text-gray-800 font-semibold">
                                    Phone Number
                                </label>
                                <div className="">
                                    <input
                                        id="number"
                                        name="number"
                                        type="number"
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center">
                                <label htmlFor="country" className="text-[15px] text-gray-800 font-semibold">
                                    Country
                                </label>
                                <div className="">
                                    <select
                                        id="country"
                                        name="country"
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    >
                                        <option>India</option>
                                        <option>Canada</option>
                                        <option>Mexico</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center">
                                <label htmlFor="street-address" className="text-[15px] text-gray-800 font-semibold">
                                    Street address
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        name="street-address"
                                        id="street-address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center">
                                <label htmlFor="city" className="text-[15px] text-gray-800 font-semibold">
                                    City
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center">
                                <label htmlFor="region" className="text-[15px] text-gray-800 font-semibold">
                                    State / Province
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center">
                                <label htmlFor="postal-code" className="text-[15px] text-gray-800 font-semibold">
                                    ZIP / Postal code
                                </label>
                                <div className="">
                                    <input
                                        type="text"
                                        name="postal-code"
                                        id="postal-code"
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="">
                    <button type="reset" className="cancelbtn">
                        Cancel
                    </button>
                    <button
                        type="submit"
                        className="savebtn"
                    >
                        Save
                    </button>
                </div>
            </form>
            <Footer />
        </>
    )
}
