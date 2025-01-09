import { UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';
import Banner from "../../Components/Banner";
import Footer from "../../Components/Footer/Footer";
import './Form.css';
import { database } from '../../FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { imgDB } from "../../FirebaseConfig";
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function DonorForm() {
    const [img, setImg] = useState('');
    const [nameOrg, setNameOrg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState('');
    const [mealno, setMealno] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();
    // const [img, setImg] = useState('');
    const [id, setId] = useState('')
    const [show, setShow] = useState(false)
    const [val, setVal] = useState([]);
    const value = collection(database, "ngoAdmin");

    const [errors, setErrors] = useState({});

    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value);
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })));
        };
        getData();
    }, []);

    const validateForm = () => {
        const newErrors = {};

        if (!nameOrg) newErrors.nameOrg = 'Organization name is required';

        if (!name) newErrors.name = 'Name is required';

        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!email || !emailPattern.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }

        if (isNaN(mealno) || mealno <= 0) {
            newErrors.mealno = 'Number of meals must be a positive number';
        }

        if (!address) newErrors.address = 'Address is required';

        setErrors(newErrors);

        return Object.keys(newErrors).length === 0;
    };
    const handleImageChange = (e) => {
        const file = e.target.files[0]; // Get the selected file
        if (file) {
            const imageUrl = URL.createObjectURL(file); // Create a temporary URL for the file
            setImg(imageUrl); // Update the img state with the URL
        }
    };
    const handleCreate = async () => {
        if (validateForm()) {
            try {
                await addDoc(value, { nameOrg, name, email, time, mealno, address });

                setName('');
                setNameOrg('');
                setAddress('');
                setEmail('');
                setMealno('');
                setTime('');

                toast.success("Data successfully submitted!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                navigate('/ngoList');
            } catch (error) {
                toast.error("Failed to submit data. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };

    const handleUpdate = async () => {
        if (validateForm()) {
            try {
                const updateData = doc(database, "ngoAdmin", id);
                await updateDoc(updateData, { nameOrg, name, email, time, mealno, address });

                toast.success("Data successfully updated!", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });

                setShow(false);
                setName('');
                setNameOrg('');
                setAddress('');
                setEmail('');
                setMealno('');
                setTime('');
            } catch (error) {
                toast.error("Failed to update data. Please try again.", {
                    position: "top-right",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            }
        }
    };

    return (
        <>
            <Banner />
            <div className='p-[60px] bg-gradient-to-r from-indigo-100 via-pink-100 to-teal-100 relative'>
                <h2 className="text-4xl text-center leading-7 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent mb-6" style={{ fontFamily: 'Inter' }}>
                    Profile
                </h2>

                <div className="mx-auto p-6 bg-white bg-opacity-50 rounded-lg shadow-lg max-w-4xl">
                    <div className="border-b border-gray-900/10 pb-12">
                        <div className="text-left mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            {/* <div className="col-span-full text-center">
                                <label htmlFor="photo" className="block text-lg font-medium leading-6 text-gray-900">
                                    Logo
                                </label>
                                <div className="mt-2 flex justify-center items-center gap-x-3">
                                    {img ? (
                                        <img src={img} alt="Image Preview" className="h-[75px] w-[75px] rounded-full" />
                                    ) : (
                                        <UserCircleIcon className="h-[75px] w-[75px] text-gray-300" aria-hidden="true" />
                                    )}
                                    <input
                                        type="file"
                                        className="hidden"
                                        id="photo"
                                    />
                                    <label
                                        htmlFor="photo"
                                        className="cursor-pointer rounded-md bg-gray-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-orange-700 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    >
                                        Choose File
                                    </label>
                                </div>
                            </div> */}
                            <div className="col-span-full text-center">
                                <label htmlFor="photo" className="block text-lg font-medium leading-6 text-gray-900">
                                    Logo
                                </label>
                                <div className="mt-2 flex justify-center items-center gap-x-3">
                                    {img ? (
                                        <img src={img} alt="Image Preview" className="h-[75px] w-[75px] rounded-full" />
                                    ) : (
                                        <UserCircleIcon className="h-[75px] w-[75px] text-gray-300" aria-hidden="true" />
                                    )}
                                    <input
                                        type="file"
                                        className="hidden"
                                        id="photo"
                                        onChange={handleImageChange} // Add onChange handler
                                    />
                                    <label
                                        htmlFor="photo"
                                        className="cursor-pointer rounded-md bg-gray-600 text-white px-4 py-2 text-sm font-semibold shadow-sm hover:bg-orange-700 focus:ring-2 focus:ring-indigo-600 focus:ring-inset"
                                    >
                                        Choose File
                                    </label>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="text-left border-b border-gray-900/10">
                        <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                            <div className="sm:col-span-3">
                                <label htmlFor="nameOrg" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name of Organization
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="nameOrg"
                                        value={nameOrg}
                                        onChange={(e) => setNameOrg(e.target.value)}
                                        placeholder="Enter Organization Name"
                                        className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />

                                    {errors.nameOrg && <p className="text-red-500 text-sm">{errors.nameOrg}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">
                                    Email address of Organization
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        type="email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        placeholder="Enter Email Address"
                                        className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />

                                    {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">
                                    Name of Person
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                        placeholder="Enter Person's Name"
                                        className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />

                                    {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="time" className="block text-sm font-medium leading-6 text-gray-900">
                                    Time
                                </label>
                                <div className="mt-2">
                                    <select
                                        id="time"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                        className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    >
                                        <option>Morning</option>
                                        <option>Afternoon</option>
                                        <option>Evening</option>
                                    </select>

                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="mealno" className="block text-sm font-medium leading-6 text-gray-900">
                                    Number of Meals
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="mealno"
                                        value={mealno}
                                        onChange={(e) => setMealno(e.target.value)}
                                        placeholder="Enter Number of Meals"
                                        className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />

                                    {errors.mealno && <p className="text-red-500 text-sm">{errors.mealno}</p>}
                                </div>
                            </div>

                            <div className="sm:col-span-3">
                                <label htmlFor="address" className="block text-sm font-medium leading-6 text-gray-900">
                                    Address
                                </label>
                                <div className="mt-2">
                                    <input
                                        type="text"
                                        id="address"
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                        placeholder="Enter Address"
                                        className="block w-full rounded-md border-0 py-1.5 pl-4 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />

                                    {errors.address && <p className="text-red-500 text-sm">{errors.address}</p>}
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-center items-center mt-8">
                        <button
                            type="reset"
                            onClick={() => navigate('/services')}
                            className="cancelbtn rounded-full bg-red-500 text-white py-2 px-6 text-lg font-semibold shadow-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-indigo-600"
                        >
                            Cancel
                        </button>
                        <button
                            onClick={!show ? handleCreate : handleUpdate}
                            className="savebtn rounded-full bg-green-600 text-white py-2 px-6 text-lg font-semibold shadow-md hover:bg-green-700 focus:outline-none focus:ring-2 focus:ring-indigo-600 ml-4"
                        >
                            {!show ? 'Create' : 'Update'}
                        </button>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
