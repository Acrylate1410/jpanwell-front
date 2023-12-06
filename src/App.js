import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import {Suspense} from 'react';
import {Home} from './pages/Home';
import { News } from './pages/News';
import { Article } from './pages/Article';
import {NotFound} from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Search } from './pages/Search'
import { Return } from './pages/Return';
import { Payment } from './pages/Payment';
import { DataProtection } from './pages/DataProtection';
import { Delivery } from './pages/Delivery';


function App() {
  return (
    <BrowserRouter>
      <Suspense>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tin-tuc" element={<News />} />
            <Route path="danh-muc-san-pham" element={<Products />} />
            <Route path="san-pham" element={<ProductDetails />} />
            <Route path="lien-he" element={<Contact />} />
            <Route path="ve-chung-toi" element={<About />} />
            <Route path="article" element={<Article/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
/*
<Route path="chinh-sach-doi-tra" element={<Return/>}/>
<Route path="chinh-sach-thanh-toan" element={<Payment/>}/>
<Route path="chinh-sach-bao-mat" element={<DataProtection/>}/>
<Route path="chinh-sach-giao-hang" element={<Delivery/>}/>
*/
export default App;
