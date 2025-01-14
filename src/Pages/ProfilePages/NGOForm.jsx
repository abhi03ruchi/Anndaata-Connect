import { UserCircleIcon } from '@heroicons/react/24/solid';
import React, { useState, useEffect } from 'react';
import Banner from "../../Components/Banner";
import './Form.css';
import { database } from '../../FirebaseConfig'
import Navbar from '../../Components/Navbar/Navbar';
import Footer from '../../Components/Footer/Footer';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { v4 } from "uuid";
import { imgDB } from "../../FirebaseConfig";
import { useNavigate } from 'react-router-dom';

export default function DonorForm() {
    const [img, setImg] = useState('');
    const [nameOrg, setNameOrg] = useState('');
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [time, setTime] = useState('');
    const [mealno, setMealno] = useState('');
    const [address, setAddress] = useState('');
    const navigate = useNavigate();


    const [id, setId] = useState('')

    const [show, setShow] = useState(false)

    const [val, setVal] = useState([])

    const value = collection(database, "ngoAdmin")


    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value)
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData()
    })

    const handleUpload = async (e) => {
        const imgFile = e.target.files[0];
        const imgRef = ref(imgDB, `Imgs/${v4()}`);

        try {
            await uploadBytes(imgRef, imgFile);
            const imgUrl = await getDownloadURL(imgRef);
            setImg(imgUrl);
        } catch (error) {
            console.error("Error uploading image:", error);
        }
    };

    const handleCreate = async () => {
        await addDoc(value, { nameOrg: nameOrg, name: name, email: email, time: time, mealno: mealno, address: address })
        setName("")
        setNameOrg("")
        setAddress("")
        setEmail("")
        setMealno("")
        setTime("")

        navigate('/ngoList'); // Replace '/next-page' with the path of the next page
    }

    const handleDelete = async (id) => {
        const deleteVal = doc(database, "ngoAdmin", id)
        await deleteDoc(deleteVal)
    }

    const handleEdit = async (id, name1, name2) => {
        setName(name)
        setNameOrg(nameOrg)
        setAddress(address)
        setEmail(email)
        setTime(time)
        setMealno(mealno)

        setId(id)
        setShow(true)
    }

    const handleUpdate = async () => {
        const updateData = doc(database, "ngoAdmin", id)
        await updateDoc(updateData, { nameOrg: nameOrg, name: name, email: email, time: time, mealno: mealno, address: address })
        setShow(false)
        setName("")
        setNameOrg("")
        setAddress("")
        setEmail("")
        setMealno("")
        setTime("")
    }
    return (
        <>
            <Navbar />
            <div className='p-6 pt-20 min-h-fit' >
                <Banner />
                <h2 className="text-4xl text-center mb-3 text-gray-900"
                    style={{ fontFamily: 'Inter' }}
                >Profile</h2>
                <div className='flex flex-wrap m-auto relative justify-center max-w-[75rem] gap-6'>
                    <div className="flex flex-col min-w-72">
                        <label htmlFor="photo" className="text-[15px] text-gray-800 font-semibold">
                            Logo
                        </label>
                        <div className="flex flex-col items-center">
                            <UserCircleIcon className="text-gray-400" aria-hidden="true" />
                            <input type="file"
                                className="rounded-md bg-white px-1.5 py-1.5 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
                                onChange={(e) => handleUpload(e)} />
                        </div>
                    </div>
                    <div className="flex gap-6 relative max-md:flex-wrap max-md:justify-center">
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center max-md:items-center">
                                <label htmlFor="first-name" className="text-[15px] text-gray-800 font-semibold">
                                    Name of Organization
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        name="full-name"
                                        id="full-name"
                                        value={nameOrg}
                                        onChange={(e) => setNameOrg(e.target.value)}
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center max-md:items-center">
                                <label htmlFor="last-name" className="text-[15px] text-gray-800 font-semibold">
                                    Email address of Organization
                                </label>
                                <div>
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

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center max-md:items-center">
                                <label htmlFor="number" className="text-[15px] text-gray-800 font-semibold">
                                    Name of Person
                                </label>
                                <div>
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

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center max-md:items-center">
                                <label htmlFor="Time" className="text-[15px] text-gray-800 font-semibold">
                                    Time
                                </label>
                                <div>
                                    <select
                                        id="Time"
                                        name="Time"
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                        value={time}
                                        onChange={(e) => setTime(e.target.value)}
                                    >
                                        <option>Morning</option>
                                        <option>AfterNoon</option>
                                        <option>Evening</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col w-full">
                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center max-md:items-center">
                                <label htmlFor="street-address" className="text-[15px] text-gray-800 font-semibold">
                                    Street address
                                </label>
                                <div>
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

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center max-md:items-center">
                                <label htmlFor="city" className="text-[15px] text-gray-800 font-semibold">
                                    City
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        name="city"
                                        id="city"
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>

                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center max-md:items-center">
                                <label htmlFor="region" className="text-[15px] text-gray-800 font-semibold">
                                    Number of Meals
                                </label>
                                <div>
                                    <input
                                        type="text"
                                        name="region"
                                        id="region"
                                        value={mealno}
                                        onChange={(e) => setMealno(e.target.value)}
                                        className="text-md p-2 rounded-md min-w-72 border-2 border-solid border-gray-300 focus:border-red-500 active:border-red-500 focus:outline-none active:outline-none outline-none mb-4"
                                    />
                                </div>
                            </div>
                            <div className="flex flex-col items-start gap-2 max-md:flex-wrap max-md:justify-center max-md:items-center">
                                <label htmlFor="postal-code" className="text-[15px] text-gray-800 font-semibold">
                                    ZIP / Postal code
                                </label>
                                <div>
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
                <div className='flex items-center justify-center'>
                    <button type="reset" className="cancelbtn">
                        Cancel
                    </button>
                    {!show ? <button className="savebtn" onClick={handleCreate}>Create</button> :
                        <button onClick={handleUpdate}>Update</button>}
                </div>
            </div>
            <Footer />
        </>
    )
}
