import { FaBasketShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { database } from '../../FirebaseConfig'
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore'
const people = [
    {
        name: 'John Doe',
        mealno: '29 meals',
        role: 'Anndaata Foundation',
        emailId: 'john.doe@example.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
        location: 'New Delhi',
        time: 'Morning'
    },
    {
        name: 'Jane Smith',
        mealno: '19 meals',
        role: 'Save Food NGO',
        emailId: 'jane.smith@example.com',
        imageUrl: 'https://randomuser.me/api/portraits/women/2.jpg',
        location: 'New Delhi',
        time: 'Morning'
    },
    {
        name: 'Alice Johnson',
        mealno: '19 meals',
        role: 'Food for All Foundation',
        emailId: 'alice.johnson@example.com',
        imageUrl: 'https://randomuser.me/api/portraits/women/3.jpg',
        location: 'New Delhi',
        time: 'Morning'
    },
    {
        name: 'Michael Williams',
        mealno: '25 meals',
        role: 'Hunger Relief Team',
        emailId: 'michael.williams@example.com',
        imageUrl: 'https://randomuser.me/api/portraits/men/4.jpg',
        location: 'New Delhi',
        time: 'Morning'
    },
    {
        name: 'Emily Davis',
        mealno: '15 meals',
        role: 'Food Support Network',
        emailId: 'emily.davis@example.com',
        imageUrl: 'https://randomuser.me/api/portraits/women/5.jpg',
        location: 'New Delhi',
        time: 'Morning'
    },
];



const NGOList = () => {
    const [val, setVal] = useState([])

    const value = collection(database, "ngoAdmin")


    useEffect(() => {
        const getData = async () => {
            const dbVal = await getDocs(value)
            setVal(dbVal.docs.map(doc => ({ ...doc.data(), id: doc.id })))
        }
        getData()
    })



    return (
        <>
            <div className="bg-[aliceblue] flex flex-col items-center justify-center">
                <p className="text-center text-lg bg-white rounded-md  m-8 w-[50%] shadow-2xl p-2 border-2 border-dotted border-red-300">
                    Join us in the fight against hunger! Contribute to making a difference by providing nourishment to those in need. Your support can help alleviate hunger and create a positive impact on the community. Explore donation options and take a step towards a world where no one goes hungry.
                </p>
                <input
                    className="justify-center items-center w-[450px] border-2 border-gray-300 bg-white h-10 px-10 pr-16 mb-4 rounded-full text-lg text-center focus:outline-[#e26959]  focus:border-transparent"
                    type="search"
                    placeholder="Search..."
                />

                <div className="  bg-white rounded-2xl shadow-lg  w-[50%]" >
                    <ul role="list" className="p-12 divide-y divide-gray-500">
                        {people.map((person, index) => ( // Add index parameter for unique key
                            <li key={index} className="flex justify-between gap-x-6 py-5">
                                <div className=" flex min-w-0 gap-x-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" height='200px' width='200px' />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                        <div className="flex flex-row items-center justify-start">
                                            <FaBasketShopping />
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.mealno}</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start text-xs leading-5 text-gray-500">
                                            <FaLocationDot />
                                            <div className="">{person.location} </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start text-xs leading-5 text-gray-500">
                                            <FaRegClock />
                                            <div className="">{person.time} </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">{person.role}</p>
                                    <p className="text-xs leading-5 text-gray-500">{person.emailId}</p>
                                    <p className=" flex flex-col mt-1 text-xs leading-5 text-gray-500">
                                        <Link
                                            to={{
                                                pathname: "/delivery",
                                                state: { personData: person }
                                            }}
                                            className="text-[#e26959] hover:text-[orangered]"
                                            onClick={() => console.log("Person Data:", person)} // Add this line for debugging
                                        >
                                            <FaCircleArrowRight className="text-xl" />
                                        </Link>

                                    </p>

                                </div>
                            </li>
                        ))}

                        {val.map((values) => (
                            <li  className="flex justify-between gap-x-6 py-5">
                                <div className=" flex min-w-0 gap-x-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={values.imageUrl} />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{values.name}</p>
                                        <div className="flex flex-row items-center justify-start">
                                            <FaBasketShopping />
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{values.mealno}</p>
                                        </div>
                                        <div className="flex flex-row items-center justify-start text-xs leading-5 text-gray-500">
                                            <FaLocationDot />
                                            <div className="">{values.address} </div>
                                        </div>
                                        <div className="flex flex-row items-center justify-start text-xs leading-5 text-gray-500">
                                            <FaRegClock />
                                            <div className="">{values.time} </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                                    <p className="text-sm leading-6 text-gray-900">{values.nameOrg}</p>
                                    <p className="text-xs leading-5 text-gray-500">{values.email}</p>
                                    <p className=" flex flex-col mt-1 text-xs leading-5 text-gray-500">
                                        <Link to="/delivery" className="text-[#e26959] hover:text-[orangered]">
                                            <FaCircleArrowRight className="text-xl" href="/delivery" />
                                        </Link>
                                    </p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
};

export default NGOList;