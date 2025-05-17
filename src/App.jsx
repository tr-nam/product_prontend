import { BrowserRouter, Routes, Route } from "react-router";


import DefautLayout from "@/layout/DefautLayout";
import Albums from '@/pages/albums';
import Users from '@/pages/users';

import AlbumShow from '@/components/views/albumShow';
import UserShow from '@/components/views/userShow';

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefautLayout children={<Albums />} />} />
        <Route path="/albums" element={<DefautLayout children={<Albums />} />} />
        <Route path="/users" element={<DefautLayout children={<Users />} />} />
        <Route path="/album/:id" element={<DefautLayout children={<AlbumShow />} />} />
        <Route path="/user/:id" element={<DefautLayout children={<UserShow />} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
