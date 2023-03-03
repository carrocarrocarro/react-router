import { BrowserRouter, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Home from './pages/Home';
import Vans from './pages/Vans/Vans';
import VanDetail from './pages/Vans/VanDetail';
import Layout from './components/Layout';
import Income from './pages/Host/Income';
import Reviews from './pages/Host/Reviews';
import Dashboard from './pages/Host/Dashboard';
import HostVans from './pages/Host/HostVans';
import './app.css';
import HostLayout from './components/HostLayout';
import HostVanDetail from './pages/Host/HostVanDetail';
import HostVanPhotos from './pages/Host/HostVanPhotos';
import HostVanPricing from './pages/Host/HostVanPricing';
import HostVanInfo from './pages/Host/HostVanInfo';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}> {/* <Route path="/" element={<Layout />}> and <Route index element={<Home />} /> would also work*/}
          <Route path="/" element={<Home />}/>{/* / */}
          <Route path="about" element={<About />}/>
          <Route path="vans" element={<Vans />}/>
          <Route path="vans/:id" element={<VanDetail />} />
          <Route path="host" element={<HostLayout />} > {/* Nested route */}
            <Route index element={<Dashboard />}/>
            <Route path="income" element={<Income />} />
            <Route path="reviews" element={<Reviews />} />
            <Route path="vans" element={<HostVans />} />
            <Route path="vans/:id" element={<HostVanDetail />} >
              <Route index element={<HostVanInfo />}/>
              <Route path="pricing" element={<HostVanPricing />}/>
              <Route path="photos" element={<HostVanPhotos />} />
            </Route>  
          </Route>
        </Route>
      </Routes>
    </BrowserRouter>

    /* Absolute path: example.com/about – Contains the domainname of the website  */
    /* Relative path: about – A link the points to afile location on the page where the link is located */

    /* Nest routes when
      -You want to keep displaying some UI on the page but also want to display more.
      - When there is a shared user interface  
      - When you want to avoid repetition in your code.
    */
  );
}

export default App;
