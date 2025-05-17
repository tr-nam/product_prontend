
import DefautLayout from "@/layout/DefautLayout";
import Albums from '@/pages/albums';
import Users from '@/pages/users';

import AlbumShow from '@/components/views/albumShow';
import UserShow from '@/components/views/userShow';

function App() {

  return (
    <DefautLayout children={<UserShow />} />
  )
}

export default App
