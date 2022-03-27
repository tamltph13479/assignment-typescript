import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductType } from './types/Product'
import { create, list, remove } from './api/products'
import ProductsDetail from './pages/ProductsDetail'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import AdminLayout from './pages/layouts/AdminLayout'
import Dashboard from './pages/Dashboard'
import ProductManager from './pages/ProductManager'
import ProducAdd from './pages/ProducAdd'



function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      setProducts(data);
    }
    getProducts()
  }, []);
  const onHanderRemove = (id: number) => {
    remove(id);
    setProducts(products.filter(item => item.id !== id));
  }
  const onHandleAdd = async (product: ProductType) => {
    const { data } = await create(product);
    setProducts([...products, data])
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout />}>
          <Route index element={<HomePage products={products} />} />
          <Route path="products">
            <Route index element={<Products products={products} />} />
            <Route path="/products/:id" element={< ProductsDetail />} />
          </Route>
        </Route>
        <Route path="admin" element={<AdminLayout />}>
          <Route index element={<Dashboard />} />
          <Route path="products" >
            <Route index element={<ProductManager products={products} onRemove={onHanderRemove} />} />
            <Route path="add" element={<ProducAdd onAdd={onHandleAdd} />} />
          </Route>
        </Route>



      </Routes>

    </div >
  )
}

export default App
