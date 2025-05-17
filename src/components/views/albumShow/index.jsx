import React, { useEffect, useState } from 'react';
import axios from 'axios';
import getAvatarUrl from '@/api/Avatars';


const AlbumShow = ({ albumId = 1, userId = 1 }) => {
  const [photos, setPhotos] = useState([]);
  const [album, setAlbum] = useState({});
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const url = 'https://jsonplaceholder.typicode.com';

  // Lấy dữ liệu ảnh theo albumId
  useEffect(() => {
    setLoading(true);
    axios
      .get(`${url}/photos?albumId=${albumId}`)
      .then((response) => {
        setPhotos(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API photos:', error);
      })
      .finally(() => setLoading(false));
  }, [albumId]);

  // Lấy dữ liệu album theo albumId
  useEffect(() => {
    axios
      .get(`${url}/albums/${albumId}`)
      .then((response) => {
        setAlbum(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API album:', error);
      });
  }, [albumId]);

  // Lấy dữ liệu người dùng theo userId
  useEffect(() => {
    axios
      .get(`${url}/users/${userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        console.error('Lỗi khi gọi API user:', error);
      });
  }, [userId]);

  if (loading) {
    return <div className="text-center p-4">Đang tải...</div>;
  }

  return (
    <div className="p-0">
      {/* Breadcrumb */}
      <nav className="mb-4">
        <ol className="flex items-center space-x-2 text-gray-500">
          <li className="flex items-center">
            <a href="/albums" className="hover:text-blue-500">
              Albums
            </a>
          </li>
          <li className="text-gray-300">/</li>
          <li>Show</li>
        </ol>
      </nav>

      {/* Header */}
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center space-x-2">
          <button
            className="text-gray-600 hover:text-gray-800"
            onClick={()=>{}}
          >
            <span role="img" aria-label="arrow-left" class="anticon anticon-arrow-left">
              <svg viewBox="64 64 896 896" focusable="false" data-icon="arrow-left" width="1em" height="1em" fill="currentColor" aria-hidden="true"><path d="M872 474H286.9l350.2-304c5.6-4.9 2.2-14-5.2-14h-88.5c-3.9 0-7.6 1.4-10.5 3.9L155 487.8a31.96 31.96 0 000 48.3L535.1 866c1.5 1.3 3.3 2 5.2 2h91.5c7.4 0 10.8-9.2 5.2-14L286.9 550H872c4.4 0 8-3.6 8-8v-60c0-4.4-3.6-8-8-8z"></path></svg>
            </span>
          </button>
          <h4 className="text-xl font-semibold m-0">Show Album</h4>
        </div>
      </div>

      {/* Content */}
      <div className="bg-white shadow rounded-lg p-4">
        <div className="flex items-center mb-4">
          <img
            src={getAvatarUrl(user.name, 52)}
            alt={user.name || 'Unknown'}
            className="w-12 h-12 rounded-full mr-4"
          />
          <div>
            <a
              href={`/users/${user.id}`}
              className="text-lg font-medium hover:text-blue-500"
            >
              {user.name || 'Unknown User'}
            </a>
            <p className="text-gray-500 m-0">
              <a href={`mailto:${user.email}`} className="hover:text-blue-500">
                {user.email || 'No email'}
              </a>
            </p>
          </div>
        </div>
        <hr className="my-4" />
        <h4 className="text-lg font-semibold mb-4">{album.title || 'No title'}</h4>
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {photos.map((photo) => (
            <div key={photo.id} className="relative group">
              <img
                src={photo.url}
                alt={photo.title}
                className="w-full h-auto rounded"
                style={{ width: '150px' }}
              />
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity rounded">
                <span className="text-white ml-2">Preview</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default AlbumShow;