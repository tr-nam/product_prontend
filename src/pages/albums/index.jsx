import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Pagination from '@/components/ui/pagination';
import ButtonShow from '@/components/ui/buttonShow';
import getAvatarUrl from '@/api/Avatars';

const index = () => {

  const [data, setData] = useState([]);
  const [userData, setUserData] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(20);
  const [total, setTotal] = useState(0);
  const totalPage = Math.ceil(total / limit);

  const url = 'https://jsonplaceholder.typicode.com';
  useEffect(() => {
    axios.get(`${url}/albums`)
      .then((response) => {

        const start = (page - 1) * limit;
        const paginated = response.data.slice(start, start + limit);

        setData(paginated);
        setTotal(response.data.length);
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API:', error);
      });

    axios.get(`${url}/users`)
      .then((response) => {
        setUserData(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API:', error);
      });
  }, [page, limit]);
  return (
    <>
      <div className="m-1 bg-white rounded-lg overflow-auto p-2">
        <table className="min-w-full table-auto border-collapse">
          <thead className="bg-gray-100">
            <tr>
              <th className="px-4 py-2 text-start">ID</th>
              <th className="px-4 py-2 text-start">Title</th>
              <th className="px-4 py-2 text-start">User</th>
              <th className="px-4 py-2 text-start">Actions</th>
            </tr>
          </thead>
          <tbody>
            {data && data.length > 0 ? (
              data.map((item, index) => (
                <tr key={item.id || index} className="hover:bg-gray-50">
                  <td className="p-5">{item.id}</td>
                  <td className="p-5">{item.title}</td>
                  <td className="p-5 flex items-center gap-2">
                    <span>
                      <img src={getAvatarUrl(userData[item.userId]?.name, 32)} alt="avtar" />
                    </span>
                    {userData[item.userId]?.name}
                  </td>
                  <td className="p-5">
                    <ButtonShow link={`/album/${item.id}`}>Show</ButtonShow>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="text-center py-4 text-gray-500">No data available</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
      <Pagination page={page} totalPage={totalPage} limit={limit} setLimit={setLimit} setPage={setPage} />
    </>
  )
}

export default index