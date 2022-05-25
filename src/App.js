
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import AllMeetupsPage from './pages/AllMeetups';
import FavoritesPage from './pages/Favorites';
import NewMeetupsPage from './pages/NewMeetups';
import Layout from './components/layout/Layout';


function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path='/' element={<AllMeetupsPage />} />
          <Route path='/newMeetups' element={<NewMeetupsPage />} />
          <Route path='/favorites' element={<FavoritesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
}

export default App;
