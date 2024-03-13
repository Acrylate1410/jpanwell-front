import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import {Suspense, lazy} from 'react';
/*
import {Home} from './pages/Home';
import { News } from './pages/News';
import { Article } from './pages/Article';
import {NotFound} from './pages/NotFound';
import { ProductDetails } from './pages/ProductDetails';
import { Products } from './pages/Products';
import { Contact } from './pages/Contact'
import { About } from './pages/About'
import { Search } from './pages/Search'
*/
const Home = lazy(() => import('./pages/Home'));
const News = lazy(() => import('./pages/News'));
const Article = lazy(() => import('./pages/Article'));
const NotFound = lazy(() => import('./pages/NotFound'));
const ProductDetails = lazy(() => import('./pages/ProductDetails'));
const Products = lazy(() => import('./pages/Products'));
const Contact = lazy(() => import('./pages/Contact'));
const About = lazy(() => import('./pages/About'));
const Search = lazy(() => import('./pages/Search'));

function App() {
  return (
    <BrowserRouter>
      <Suspense fallback={<></>}>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="tin-tuc" element={<News />} />
            <Route path="danh-muc-san-pham" element={<Products />} />
            <Route path="san-pham" element={<ProductDetails />} />
            <Route path="lien-he" element={<Contact />} />
            <Route path="ve-chung-toi" element={<About />} />
            <Route path="bai-viet" element={<Article/>}/>
            <Route path="search" element={<Search/>}/>
            <Route path="*" element={<NotFound/>} />
          </Route>
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}
export default App;
