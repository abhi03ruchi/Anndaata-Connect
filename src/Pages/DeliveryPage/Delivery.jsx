import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom';
import delivery from '../../Components/assets/delivery.jpg'
import { database } from '../../FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
import { useNavigate } from 'react-router-dom';

function Delivery() {

    const location = useLocation();
    const personData = location.state ? location.state.personData : null;

    console.log("Person Data:", personData); // Debugging statement 
    
    const [deliveryLocation, setdeliveryLocation] = useState('')
    const [phone, setphone] = useState('')
    const [time, settime] = useState('')
    const [id, setId] = useState('')
    const navigate = useNavigate();
    

    const [show, setShow] = useState(false)

    const [val, setVal] = useState([])


    const value = collection(database, "deliveryInfo")


    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value)
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData()
    })

    const handleCreate = async () => {
        await addDoc(value, { deliveryLocation: deliveryLocation, phone: phone, time: time })
        setdeliveryLocation("")
        setphone("")
        settime("")

         // After the item is created, navigate to the next page
         navigate('/'); // Replace '/next-page' with the path of the next page
    }

    const handleUpdate = async () => {
        const updateData = doc(database, "deliveryInfo", id)
        await updateDoc(updateData, { deliveryLocation: deliveryLocation, phone: phone })
        setShow(false)
        setdeliveryLocation("")
        setphone("")
        settime("")
    }

    return (
        <div>
            <div className="isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
                style={{
                    position: 'relative',
                    marginLeft: '200px',
                    marginRight: '200px',
                    marginTop: '100px',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 10px 0 rgba(0,0,0,0.2)',
                }}>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Donate Food</h2>
                </div>
                <img
                    className="mx-auto h-[180px] w-auto"
                    src={delivery}
                    alt="Your Company"
                />
                <div className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-left">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Confirm Food Details
                            </label>
                            <div className="mt-2.5">
                            {/* {personData ? (
                                <>
                                    <h2>Name: {personData.name}</h2>
                                    <p>Meal Number: {personData.mealno}</p>
                                    <p>Email: {personData.emailId}</p>
                                    <p>Role: {personData.role}</p>
                                    <p>Location: {personData.location}</p>
                                    <p>Time: {personData.time}</p>
                                </>
                            ) : (
                                <div>No data available</div>
                            )} */}
                        </div>
                        </div>

                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                PickUp Location
                            </label>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    value={deliveryLocation} onChange={(e) => setdeliveryLocation(e.target.value)}
                                    autoComplete="organization"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder='Azad Hind Fauj Marg, Dwarka Sector-3, Dwarka, Delhi, 110078'
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 text-gray-900">
                                Contact Information
                            </label>
                            <div className="mt-2.5">
                                <input
                                    name="phone-number"
                                    id="phone-number"
                                    type="tel"
                                    value={phone} onChange={(e) => setphone(e.target.value)}
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="+91 1234567890"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="datetime-local" className="block text-sm font-semibold leading-6 text-gray-900">
                                By when can you donate?
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    type="text"
                                    name="datetime-local"
                                    id="datetime-local"
                                    value={time} onChange={(e) => settime(e.target.value)}
                                    autoComplete="datetime-local"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder='Time'
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2 mt-10 ">
                            {!show ?
                                <button
                                    className="block w-full  rounded-md text-orange-500 border-2 border-orange-500  py-2.5 text-center text-sm font-semibold  shadow-sm hover:bg-orange-500 hover:text-white"
                                    onClick={handleCreate}>
                                    Create
                                </button>
                                
                                :
                                <button onClick={handleUpdate}>Update</button>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Delivery;
