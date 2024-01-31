import React, { useEffect, useState } from "react";
import ProfileDataService from "./admin";
import './adminList.css';

const AdminList = ({ getRecordId }) => {

    const options = {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
    };

    const curr_date = new Date().toLocaleDateString(undefined, options);

    const [user, setUser] = useState([]);
    useEffect(() => {
        getUser();
    }, []);

    const getUser = async () => {
        const data = await ProfileDataService.getNames();
        console.log(data.docs);
        setUser(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };

    const deleteHandler = async (id) => {
        await ProfileDataService.deleteName(id);
        getUser();
    };
    return (
        <>
            <div className="boxhead">

                <div className="format">
                <div className="caption">
                    <h2 className="date text-md">{curr_date}</h2>
                    <h1 className="text-4xl">Admin DashBoard</h1>
                </div>

                <button className="adminbtn" onClick={getUser}>
                    Refresh List
                </button>


                {/* <pre>{JSON.stringify(books, undefined, 2)}</pre>} */}

                <table className="">
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>UserName</th>
                            <th>PhoneNo</th>
                            <th>Email</th>
                            <th>Address</th>
                            <th>Action</th>
                        </tr>
                        {user.map((doc, index) => {
                            return (

                                <tr key={doc.id}>
                                    <td>{index + 1}</td>
                                    <td>{doc.name}</td>
                                    <td>{doc.phone}</td>
                                    <td>{doc.email}</td>
                                    <td>{doc.address}</td>
                                    <td className="cellAction">
                                        <button
                                            variant="secondary"
                                            className="viewButton"
                                            onClick={(e) => getRecordId(doc.id)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            variant="danger"
                                            className="deleteButton"
                                            onClick={(e) => deleteHandler(doc.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>

            </div>


            </div>
        </>
    );
};

export default AdminList;