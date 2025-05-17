import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams } from "react-router-dom";
import { Link } from 'react-router';

import getAvatarUrl from '@/api/Avatars';
import ButtonShow from '@/components/ui/buttonShow';


const index = () => {
    const {id} = useParams()
    
    const [user, setUser] = useState({});
    const [albums, setAlbums] = useState([]);
    const [loading, setLoading] = useState(true);
    const baseUrl = 'https://jsonplaceholder.typicode.com';

    // Lấy thông tin người dùng
    useEffect(() => {
        setLoading(true);
        axios.get(`${baseUrl}/users/${id}`)
            .then((response) => {
                setUser(response.data);
            })
            .catch((error) => {
                console.error('Lỗi khi gọi API user:', error);
            });
    }, [id]);

    // Lấy danh sách album
    useEffect(() => {
        axios.get(`${baseUrl}/albums?userId=${id}`)
            .then((response) => {
                setAlbums(response.data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Lỗi khi gọi API albums:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="text-center p-4">Đang tải...</div>;
    }

    return (
        <div className="p-0">
            {/* Breadcrumb */}
            <nav className="mb-4">
                <ol className="flex items-center space-x-2 text-gray-500">
                    <li className="flex items-center">
                        <Link to="/users" className="hover:text-blue-500">
                            Users
                        </Link>
                    </li>
                    <li className="text-gray-300">/</li>
                    <li>Show</li>
                </ol>
            </nav>

            {/* Header */}
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                    <Link
                        className="text-gray-600 hover:text-gray-800"
                        to='/users'
                    >
                        <span role="img" aria-label="arrow-left" class="anticon anticon-arrow-left">
                            <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
                        </span>
                    </Link>
                    <h4 className="text-xl font-semibold m-0">Show User</h4>
                </div>
            </div>

            {/* Content */}
            <div className='bg-white rounded-xl p-4'>
                <div className="shadow rounded-xl p-2 border border-gray-300">
                    <div className="flex items-center mb-4">
                        <img
                            src={getAvatarUrl(user.name, 64)}
                            alt={user.name || 'Unknown'}
                            className="w-12 h-12 rounded-full mr-4"
                        />
                        <div>
                            <div className="text-lg font-medium">{user.name || 'Unknown User'}</div>
                            <p className="text-gray-500 m-0">
                                <a href={`mailto:${user.email}`} className="hover:text-blue-500">
                                    {user.email || 'No email'}
                                </a>
                            </p>
                        </div>
                    </div>
                    <hr className="my-4 text-gray-400" />
                    <h4 className="text-lg font-semibold mb-4">Albums</h4>
                    <div className="overflow-x-auto">
                        <table className="w-full min-w-max border-collapse">
                            <thead>
                                <tr className="bg-gray-100">
                                    <th className="p-4 text-left border-b border-b-gray-300">ID</th>
                                    <th className="p-4 text-left border-b border-b-gray-300">Title</th>
                                    <th className="p-4 text-left border-b border-b-gray-300">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {albums.map((album) => (
                                    <tr key={album.id} className="border-b border-b-gray-300 hover:bg-gray-50">
                                        <td className="p-4">{album.id}</td>
                                        <td className="p-4">{album.title}</td>
                                        <td className="p-4">
                                            <a href={`/albums/${album.id}`}>
                                                <ButtonShow link={`/album/${album.id}`}>Show</ButtonShow>
                                            </a>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;