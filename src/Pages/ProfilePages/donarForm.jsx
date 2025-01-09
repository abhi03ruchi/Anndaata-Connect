import { PhotoIcon, UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';
import ProfileDataService from "../adminPage/admin";
import { Alert } from 'react-bootstrap';
import Banner from "../../Components/Banner";
import Footer from '../../Components/Footer/Footer';
import './Form.css';
import { useNavigate } from 'react-router-dom';
import FlashMessage from 'react-flash-message'; // Import FlashMessage
import { ToastContainer, toast } from 'react-toastify'; // Import ToastContainer and toast
import 'react-toastify/dist/ReactToastify.css'; // Import ToastContainer styles

export default function DonorForm({ id, setRecordId }) {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [phone, setPhone] = useState('');
    const [donationType, setDonationType] = useState('Food'); // Donation type state
    const navigate = useNavigate();
    const [message, setMessage] = useState({ error: false, msg: "" });

    // Add state for error messages for each field
    const [fieldErrors, setFieldErrors] = useState({
        name: "",
        email: "",
        phone: "",
        address: ""
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        setFieldErrors({}); // Reset errors

        // Validation checks for all fields
        let isValid = true;
        let errors = {};

        if (name === "") {
            isValid = false;
            errors.name = "Name is required!";
        }
        if (email === "") {
            isValid = false;
            errors.email = "Email is required!";
        } else if (!/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(email)) {
            isValid = false;
            errors.email = "Please enter a valid email!";
        }
        if (phone === "") {
            isValid = false;
            errors.phone = "Phone number is required!";
        } else if (!/^\+?[1-9]\d{1,14}$/.test(phone)) {
            isValid = false;
            errors.phone = "Please enter a valid phone number!";
        }
        if (address === "") {
            isValid = false;
            errors.address = "Address is required!";
        }

        setFieldErrors(errors);

        if (!isValid) return;

        const newRecord = {
            name,
            email,
            address,
            phone,
            donationType // Include donation type in the record
        };

        try {
            if (id !== undefined && id !== "") {
                await ProfileDataService.updateBook(id, newRecord);
                setRecordId("");
                setMessage({ error: false, msg: "Updated successfully!" });
                toast.success("Donor information updated successfully!"); // Success notification
            } else {
                await ProfileDataService.addName(newRecord);
                setMessage({ error: false, msg: "New Donor added successfully!" });
                toast.success("New donor added successfully!"); // Success notification
            }
            setName("");
            setEmail("");
            setAddress("");
            setPhone("");
            setDonationType("Food"); // Reset donation type after submission

            // Navigate to the next page only after success
            navigate('/ngoList');
        } catch (err) {
            setMessage({ error: true, msg: err.message });
            toast.error("Failed to save donor information!"); // Error notification
        }
    };

    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await ProfileDataService.getName(id);
            console.log("The record is :", docSnap.data());
            setName(docSnap.data().name);
            setEmail(docSnap.data().email);
            setAddress(docSnap.data().address);
            setPhone(docSnap.data().phone);
            setDonationType(docSnap.data().donationType || 'Food'); // Set donation type if it exists
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

    const handleCancel = () => {
        navigate(-1);
    };

    return (
        <>
            {message?.msg && !fieldErrors.name && !fieldErrors.email && !fieldErrors.phone && !fieldErrors.address && (
                <FlashMessage duration={5000}>
                    <Alert
                        variant={message?.error ? "danger" : "success"}
                        dismissible
                        onClose={() => setMessage("")}
                    >
                        {message?.msg}
                    </Alert>
                </FlashMessage>
            )}

            <ToastContainer /> {/* Add ToastContainer to your component */}

            <Banner />
            {/* <div className='p-[60px] bg-gradient-to-r from-indigo-100 via-pink-100 to-teal-100 relative'> */}
            <div className='p-[60px] bg-gradient-to-r from-indigo-100 via-pink-100 to-teal-100 relative bg-cover bg-center' style={{ backgroundImage: "url('/image.png')" }}>
                
                <form onSubmit={handleSubmit} className=''>
                    <h2 className="text-4xl text-center leading-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6" style={{ fontFamily: 'Inter' }}>
                        Profile
                    </h2>
                    <h6 className="text-md text-center leading-5 bg-gradient-to-l from-orange-500 via-purple-500 to-pink-500 bg-clip-text mb-6" style={{ fontFamily: 'Inter' }}>
                        "Donating food is not just about sharing what we have, it's about nourishing lives, spreading kindness, and giving hope where it's needed most."
                    </h6>
                    <div className='box'>
                        <div className="mx-auto p-6 bg-white bg-opacity-75 rounded-lg shadow-lg max-w-4xl">
                            <div className="border-b border-gray-900/10 pb-12">
                                <div className=" text-left mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="col-span-full flex justify-center items-center">
                                        <label htmlFor="photo" className="block text-lg font-medium leading-6 text-gray-900">
                                            Photo
                                        </label>
                                        <div className="mt-2 flex items-center gap-x-3">
                                            <UserCircleIcon className="h-[75px] w-[75px] text-gray-300" aria-hidden="true" />
                                            <button
                                                type="button"
                                                className="rounded-full bg-peach-500 px-4 py-2 text-lg font-semibold text-white shadow-sm ring-1 ring-inset ring-peach-300 hover:bg-peach-400 focus:ring-2 focus:ring-peach-600 focus:ring-offset-2"
                                            >
                                                Change
                                            </button>

                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="text-left border-b border-gray-900/10">
                                <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                                    <div className="sm:col-span-3">
                                        <label htmlFor="first-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Name
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="first-name"
                                                id="first-name"
                                                placeholder='Enter the Name '
                                                value={name}
                                                onChange={(e) => setName(e.target.value)}
                                                autoComplete="given-name"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {fieldErrors.name && (
                                                <FlashMessage duration={5000}>
                                                    <p className="text-sm text-red-500">{fieldErrors.name}</p>
                                                </FlashMessage>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="last-name" className="block text-sm font-medium leading-6 text-gray-900">
                                            Email address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="email"
                                                name="email"
                                                type="email"
                                                placeholder='Ex- xyz@gmail.com'
                                                value={email}
                                                onChange={(e) => setEmail(e.target.value)}
                                                autoComplete="email"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {fieldErrors.email && (
                                                <FlashMessage duration={5000}>
                                                    <p className="text-sm text-red-500">{fieldErrors.email}</p>
                                                </FlashMessage>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="number" className="block text-sm font-medium leading-6 text-gray-900">
                                            Phone Number
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                id="number"
                                                name="number"
                                                type="number"
                                                placeholder='+1 234 xxx x098 '
                                                value={phone}
                                                onChange={(e) => setPhone(e.target.value)}
                                                autoComplete="number"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {fieldErrors.phone && (
                                                <FlashMessage duration={5000}>
                                                    <p className="text-sm text-red-500">{fieldErrors.phone}</p>
                                                </FlashMessage>
                                            )}
                                        </div>
                                    </div>

                                    <div className="sm:col-span-3">
                                        <label htmlFor="donation-type" className="block text-sm font-medium leading-6 text-gray-900">
                                            Donation Type
                                        </label>
                                        <div className="mt-2">
                                            <select
                                                id="donation-type"
                                                name="donation-type"
                                                value={donationType}
                                                onChange={(e) => setDonationType(e.target.value)}
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            >
                                                <option value="Food">Food</option>
                                                <option value="Money">Money</option>
                                            </select>
                                        </div>
                                    </div>

                                    <div className="col-span-full">
                                        <label htmlFor="street-address" className="block text-sm font-medium leading-6 text-gray-900">
                                            Street address
                                        </label>
                                        <div className="mt-2">
                                            <input
                                                type="text"
                                                name="street-address"
                                                id="street-address"
                                                placeholder="Enter your street address"
                                                value={address}
                                                onChange={(e) => setAddress(e.target.value)}
                                                autoComplete="street-address"
                                                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                            />
                                            {fieldErrors.address && (
                                                <FlashMessage duration={5000}>
                                                    <p className="text-sm text-red-500">{fieldErrors.address}</p>
                                                </FlashMessage>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className=" flex items-center justify-center gap-x-6 mt-10">
                                <button type="button" className="cancelbtn rounded-full px-8 py-3 text-sm font-semibold text-white bg-red-600 hover:bg-red-700 focus:ring-2 focus:ring-black-600 focus:ring-offset-2" onClick={handleCancel}>
                                    Cancel
                                </button>
                                <button
                                    type="submit"
                                    className="savebtn rounded-full px-8 py-3 text-sm font-semibold text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-black-600 focus:ring-offset-2">
                                    Save
                                </button>
                            </div>
                        </div>
                    </div>
                </form>
            </div>
            <Footer />
        </>
    );
}
