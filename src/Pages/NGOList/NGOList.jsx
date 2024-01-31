import { FaBasketShopping } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaRegClock } from "react-icons/fa";
import { FaCircleArrowRight } from "react-icons/fa6";
import { Link } from "react-router-dom";
const people = [
    {
        name: 'Ngo Person Name',
        email: '19 meals',
        role: 'NGO Name',
        imageUrl:
            'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'New Delhi ',
        time: 'Morning'
    },
    {
        name: 'Michael Foster',
        email: '19 meals',
        role: 'Co-Founder / CTO',
        imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'New Delhi ',
        time: 'Morning'
    },
    {
        name: 'Dries Vincent',
        email: '19 meals',
        role: 'Business Relations',
        imageUrl:
            'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'New Delhi ',
        time: 'Morning'
    },
    {
        name: 'Lindsay Walton',
        email: '19 meals',
        role: 'Front-end Developer',
        imageUrl:
            'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'New Delhi ',
        time: 'Morning'
    },
    {
        name: 'Courtney Henry',
        email: '19 meals',
        role: 'Designer',
        imageUrl:
            'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'New Delhi ',
        time: 'Morning'
    },
    {
        name: 'Tom Cook',
        email: '19 meals',
        role: 'Director of Product',
        imageUrl:
            'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        location: 'New Delhi ',
        time: 'Morning'
    },
]

export default function NGOList() {
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
                        // onChange={(e) => setQuery(e.target.value.toLowerCase())}
                    />

                <div className="  bg-white rounded-2xl shadow-lg  w-[50%]" >

                    <ul role="list" className="p-12 divide-y divide-gray-500">
                        {people.map((person) => (
                            <li key={person.email} className="flex justify-between gap-x-6 py-5">
                                <div className=" flex min-w-0 gap-x-4">
                                    <img className="h-12 w-12 flex-none rounded-full bg-gray-50" src={person.imageUrl} alt="" />
                                    <div className="min-w-0 flex-auto">
                                        <p className="text-sm font-semibold leading-6 text-gray-900">{person.name}</p>
                                        <div className="flex flex-row items-center justify-start">
                                            <FaBasketShopping />
                                            <p className="mt-1 truncate text-xs leading-5 text-gray-500">{person.email}</p>
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
                                    <p className=" flex flex-col mt-1 text-xs leading-5 text-gray-500"
                                    >
                                        <Link to="/" className="text-[#e26959] hover:text-[orangered]"
                                        >    <FaCircleArrowRight className="text-xl" /> </Link>
                                    </p>

                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    )
}
