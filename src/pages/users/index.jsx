import React, { useState, useEffect } from 'react';
import axios from 'axios';
import getAvatarUrl from '@/api/Avatars';
import ButtonShow from '@/components/ui/buttonShow';

const index = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setUsers(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
        setLoading(false);
      }
    };
    fetchUsers();
  }, []);

  if (loading) {
    return <div className="text-center p-4">Đang tải...</div>;
  }

  return (
    <div className="p-0">
      {/* Header */}
      <div className="mb-4">
        <h4 className="text-xl font-semibold m-0">Users</h4>
      </div>

      {/* Table */}
      <div className="overflow-x-auto p-2 bg-white rounded-lg">
        <table className="w-full min-w-max border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 text-left border-b border-b-gray-300">ID</th>
              <th className="p-2 text-left border-b border-b-gray-300">Avatar</th>
              <th className="p-2 text-left border-b border-b-gray-300">Name</th>
              <th className="p-2 text-left border-b border-b-gray-300">Email</th>
              <th className="p-2 text-left border-b border-b-gray-300">Phone</th>
              <th className="p-2 text-left border-b border-b-gray-300">Website</th>
              <th className="p-2 text-left border-b border-b-gray-300">Actions</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.id} className="hover:bg-gray-50">
                <td className="p-5">{user.id}</td>
                <td className="p-5">
                  <img
                    src={getAvatarUrl(user.name, 52)}
                    alt={user.name}
                    className="w-8 h-8 rounded-full"
                  />
                </td>
                <td className="p-5">{user.name}</td>
                <td className="p-5">
                  <a href={`mailto:${user.email}`} className="text-blue-500 hover:underline">
                    {user.email}
                  </a>
                </td>
                <td className="p-5">
                  <a href={`tel:${user.phone}`} className="text-blue-500 hover:underline">
                    {user.phone}
                  </a>
                </td>
                <td className="p-5">
                  <a href={`https://${user.website}`} target="_blank" className="text-blue-500 hover:underline">
                    {user.website}
                  </a>
                </td>
                <td className="p-5">
                  <a href={`/users/${user.id}`}>
                    <ButtonShow>Show</ButtonShow>
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;