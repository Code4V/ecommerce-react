import { Routes, Route } from 'react-router-dom';
import Home from './components/Home';
import NotFound from './components/404';
import ProductList from './components/ProductList';

const Routing = () => {
    return (
        <>
        <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path="/products" element={<ProductList />}></Route>
            <Route path='*' element={<NotFound />}></Route>
        </Routes>
        </>
    )
}

export default Routing;