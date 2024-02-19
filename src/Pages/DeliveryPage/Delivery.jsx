import { useLocation } from 'react-router-dom';
import delivery from '../../Components/assets/delivery.jpg';
import { useState, useEffect } from 'react';
import ProfileDataService from './admin';
import { Alert } from 'react-bootstrap';
const Delivery = ({ id, setRecordId }) => {
    const location = useLocation();
    const personData = location.state ? location.state.personData : null;

    console.log("Person Data:", personData); // Debugging statement 
    const [deliveryLocation, setDeliveryLocation] = useState('');
    const [phone, setPhone] = useState('');
    const [time, setTime] = useState('');

    const [message, setMessage] = useState({ error: false, msg: "" });

    const handleSubmit = async (e) => {
        e.preventDefault();
        setMessage("");
        if (!deliveryLocation || !phone || !time) {
            setMessage({ error: true, msg: "All fields are mandatory!" });
            return;
        }
        const newRecord = {
            deliveryLocation,
            phone,
            time,
        };
        console.log(newRecord);

        try {
            if (id !== "") {
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

        setDeliveryLocation("");
        setPhone("");
        setTime("");
    };

    const editHandler = async () => {
        setMessage("");
        try {
            const docSnap = await ProfileDataService.getName(id);
            console.log("the record is :", docSnap.data());
            setDeliveryLocation(docSnap.data().deliveryLocation);
            setPhone(docSnap.data().phone);
            setTime(docSnap.data().time);
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
        <div>
             {message?.msg && (
                <Alert
                    variant={message?.error ? "danger" : "success"}
                    dismissible
                    onClose={() => setMessage("")}
                >
                    {message?.msg}
                </Alert>
            )}
            <div className=" isolate bg-white px-6 py-24 sm:py-32 lg:px-8"
                style={{
                    position: 'relative',
                    marginLeft: '200px',
                    marginRight: '200px',
                    marginTop: '100px',
                    padding: '30px',
                    borderRadius: '10px',
                    boxShadow: '0 5px 10px 0 rgba(0,0,0,0.2)',

                }}>
                <div
                    className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                    aria-hidden="true"
                >
                </div>
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Donate Food</h2>
                </div>
                <img
                    className="mx-auto h-[180px] w-auto"
                    src={delivery}
                    alt="Your Company"
                />
                <form  onSubmit={handleSubmit}  action="#" method="POST" className="mx-auto mt-16 max-w-xl sm:mt-20">
                    <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 text-left">
                        <div>
                            <label htmlFor="first-name" className="block text-sm font-semibold leading-6 text-gray-900">
                                Confirm Food Details
                            </label>
                            <div className="mt-2.5">
                                {personData ? (
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
                                )}
                            </div>
                        </div>
                        {/* <div>
                            <div className="mt-2.5">
                                <input
                                    type="text"
                                    name="last-name"
                                    id="last-name"
                                    autoComplete="family-name"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 "
                                />
                            </div>
                        </div> */}
                        <div className="sm:col-span-2">
                            <label htmlFor="company" className="block text-sm font-semibold leading-6 text-gray-900">
                                PickUp Location
                            </label>
                            <div className="mt-2.5">

                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    value={deliveryLocation}
                                    onChange={(e) => setDeliveryLocation(e.target.value)}
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
                                    type="tel"
                                    name="phone-number"
                                    id="phone-number"
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    autoComplete="tel"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder="+91 1234567890"
                                />
                            </div>
                        </div>
                        <div className="sm:col-span-2">
                            <label htmlFor="email" className="block text-sm font-semibold leading-6 text-gray-900">
                                By when can you donate?
                            </label>
                            <div className="relative mt-2.5">
                                <input
                                    type="time"
                                    name="datetime-local"
                                    id="datetime-local"
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    autoComplete="datetime-local"
                                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    placeholder='Time'
                                />
                            </div>
                        </div>
                    </div>
                    <div className="mt-10 flex flex-row justify-between items-center">
                        <button
                            type="submit"
                            className="block w-full mr-10 rounded-md text-orange-500 border-2 border-orange-500 px-3.5 py-2.5 text-center text-sm font-semibold  shadow-sm hover:bg-orange-500 hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Self Delivery
                        </button>
                        <button
                            type="submit"
                            className="block w-full ml-10 rounded-md bg-orange-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-orange-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                        >
                            Pick Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default Delivery;
