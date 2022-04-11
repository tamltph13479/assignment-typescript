import { useEffect, useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navigate, useNavigate } from 'react-router-dom'
import WebsiteLayout from './pages/layouts/WebsiteLayout'
import "bootstrap/dist/css/bootstrap.min.css"
import { ProductType } from './types/Product'
import { add, list, read, remove, SearchProductByName, update } from './api/products'
import ProductsDetail from './pages/ProductsDetail'
import HomePage from './pages/HomePage'
import Products from './pages/Products'
import AdminLayout from './pages/admin/AdminLayout'
import Dashboard from './pages/admin/Dashboard'
import ProductManager from './pages/admin/products/ProductManager'
import ProducAdd from './pages/admin/products/ProducAdd'
import 'react-slideshow-image/dist/styles.css'
import { PostType } from './types/Post'

import { ToastContainer, toast } from 'react-toastify';
import "react-toastify/dist/ReactToastify.min.css"
import ProductEdit from './pages/admin/products/ProducEdit'


import Signup from './pages/singup'
import Signin from './pages/singin'
import { BannerType } from './types/banner'

import { addbanner, listbanner, removebanner, updatebanner } from './api/banner'
import BannerAdmin from './pages/admin/banner'
import { CategoryType } from './types/category'
import { addCategory, listCategory, readCategoryID, removeCategory, updateCategory } from './api/category'
import CategoryAdmin from './pages/admin/category/index'
import CategoryAdd from './pages/admin/category/add'
import CategoryEdit from './pages/admin/category/edit'
import PostAdmin from './pages/admin/post'
import { addPost, listPost, removePost, updatePost } from './api/post'
import PostAdd from './pages/admin/post/add'
import PostEdit from './pages/admin/post/edit'
import UserAdmin from './pages/admin/user'
import { UserType } from './types/user'
import { addusers, listusers, removeusers, updateusers } from './api/user'
import UserAdd from './pages/admin/user/add'
import UserEdit from './pages/admin/user/edit'
import Blog from './components/Blog'
import BlogDetail from './pages/BlogDeatail'
import PrivateRouter from './components/PrivateRouter'
import SearchPase from './pages/SearchPase'
import BannerAdd from './pages/admin/banner/add'
import BannerEdit from './pages/admin/banner/edit'
import { signup } from './api/auth'
import ProducID from './pages/producID'
import CartPage from './pages/Cartpase'
import { addToCart, decreaseItemInCart, increaseItemInCart, removeItemInCart } from './utils/cart'
function App() {
  const [isLoading, setIsLoading] = useState(false)
  const [products, setProducts] = useState<ProductType[]>([])
  const [posts, setPost] = useState<PostType[]>([])
  const [banners, setbanner] = useState<BannerType[]>([])
  const [category, setcategory] = useState<CategoryType[]>([])
  const [users, setusers] = useState<UserType[]>([])
  const [searchProduct, setsearchProduct] = useState<ProductType[]>([]);
  const [cart, setCart] = useState<ProductType[]>([]);
  useEffect(() => {
    const getProducts = async () => {
      const { data } = await list();
      console.log(data);
      setProducts(data);
    }
    getProducts();


    // users

    const getusers = async () => {
      const { data } = await listusers();
      console.log(data);
      setusers(data);
    }
    getusers();

    const getPost = async () => {
      const { data } = await listPost();
      setPost(data);
      // console.log(data)
    }
    getPost()
    // banner
    const getbanner = async () => {
      const { data } = await listbanner();
      setbanner(data);
      // console.log(data)
    }
    getbanner()
    // category
    const getCategory = async () => {
      const { data } = await listCategory();
      setcategory(data);
      // console.log(data)
    }
    getCategory()



  }, []);
  // xoa sp
  const onHanderRemove = async (id: number | string) => {
    try {
      const { data } = await remove(id);
      if (data) {
        toast.success("xoa thanh cong");
        setProducts(products.filter(item => item._id !== id))
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }

  }

  // them
  const onHandleAdd = async (product: ProductType) => {
    try {
      const { data } = await add(product);
      if (data) {
        toast.success("Them thanh cong");
        setProducts([...products, data]);
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  //cap nhat
  const onHandleUpdate = async (product: ProductType) => {
    try {
      const { data } = await update(product);
      if (data) {
        toast.success("Sua thanh cong");
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // xoa banner
  const removebaner = async (id: number | string) => {
    try {
      const { data } = await removebanner(id);
      if (data) {
        toast.success("xoa thanh cong");
        setbanner(banners.filter(item => item._id !== id))
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }

  }
  // them banner
  const onHaAdd = async (banner: BannerType) => {
    try {
      const { data } = await addbanner(banner);
      if (data) {
        toast.success("Them thanh cong");
        setbanner([...banners, data]);
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // // cap nhap baner
  const onHUpdate = async (banner: BannerType) => {
    try {
      const { data } = await updatebanner(banner);
      if (data) {
        toast.success("Sua thanh cong");
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // them danh muc
  const onHandlAdd = async (categor: CategoryType) => {
    try {
      const { data } = await addCategory(categor);
      if (data) {
        toast.success("Them thanh cong");
        setcategory([...category, data]);

      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // cap nhap nhanh muc
  const onHandlUpdate = async (categor: CategoryType) => {
    try {
      const { data } = await updateCategory(categor);
      if (data) {
        toast.success("Sua thanh cong");


      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // xoa danh muc
  const onHandrRemove = async (id: number | string) => {
    try {
      const { data } = await removeCategory(id);
      if (data) {
        toast.success("xoa thanh cong");
        setcategory(category.filter(item => item._id !== id))
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }

  }
  // them bai viet
  const onHanlAdd = async (post: PostType) => {
    try {
      const { data } = await addPost(post);
      if (data) {
        toast.success("Them thanh cong");
        setPost([...posts, data]);
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // cap nhap bai viet
  const onHanlUpdate = async (posts: PostType) => {
    try {
      const { data } = await updatePost(posts);
      if (data) {
        toast.success("Sua thanh cong");
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // xoa bai viét
  const onHandRemove = async (id: number | string) => {
    try {
      const { data } = await removePost(id);
      if (data) {
        toast.success("xoa thanh cong");
        setPost(posts.filter(item => item._id !== id))
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }

  }
  // them tai khoan
  const onHanAdd = async (user: UserType) => {
    try {
      const { data } = await signup(user);
      if (data) {
        toast.success("Them thanh cong");
        setusers([...users, data]);
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // cap nhap tai khoan
  const onHanUpdate = async (user: UserType) => {
    try {
      const { data } = await updateusers(user);
      if (data) {
        toast.success("Sua thanh cong");
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }
  }
  // xoa tai khoan
  const onHanRemove = async (id: number | string) => {
    try {
      const { data } = await removeusers(id);
      if (data) {
        toast.success("xoa thanh cong");
        setusers(users.filter(item => item._id !== id))
      }
    } catch (error: {}) {
      toast.error(error.response.data)

    }

  }
  const onhandleSearch = async (keyword: string) => {
    const { data } = await SearchProductByName(keyword)
    setsearchProduct(data)

  }



  const onHandleAddToCart = async (id: number) => {
    const { data } = await read(id)
    addToCart({ ...data, quantity: 1 }, function () {
      toast.success(`Thêm ${data.name} vào giỏ hàng thành công!`)
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  const onHandleIncreaseItemInCart = (id: number) => {
    increaseItemInCart(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  const onHandleDecreaseItemInCart = (id: number) => {
    decreaseItemInCart(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }

  const onHandleRemoveCart = (id: number) => {
    removeItemInCart(id, () => {
      setCart(JSON.parse(localStorage.getItem('cart') as string))
    })
  }
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<WebsiteLayout searchProduct={onhandleSearch} />}>
          <Route index element={<HomePage products={products} posts={posts} categorys={category} banners={banners} onAddToCart={onHandleAddToCart} />} />
          <Route path="products">
            <Route index element={<Products products={products} />} />
            <Route path="/products/:id" element={< ProductsDetail />} />
          </Route>
          <Route path="productID">
            <Route path="/productID/:id" element={< ProducID categorys={category} />} />
          </Route>

          <Route path="blog">
            <Route index element={<Blog posts={posts} />} />
            <Route path="/blog/:id" element={< BlogDetail />} />
          </Route>
          <Route path="cart" element={<CartPage onRemoveCart={onHandleRemoveCart} onDecreaseItemInCart={onHandleDecreaseItemInCart} onIncreaseItemInCart={onHandleIncreaseItemInCart} />} />
          <Route path="search">
            <Route index element={<SearchPase products={searchProduct} />} />
          </Route>

        </Route>
        <Route path="/signup" element={<Signup />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="admin" element={<PrivateRouter><AdminLayout /></PrivateRouter>}>
          <Route index element={<Dashboard />} />
          <Route path="products" >
            <Route index element={<ProductManager products={products} onRemove={onHanderRemove} />} />
            <Route path="add" element={<ProducAdd onAdd={onHandleAdd} categorys={category} />} />
            <Route path=":id/edit" element={<ProductEdit onUpdate={onHandleUpdate} categorys={category} />} />
          </Route>
          <Route path="banner" >
            <Route index element={<BannerAdmin banners={banners} onRemove={removebaner} />} />
            <Route path="add" element={<BannerAdd onAdd={onHaAdd} />} />
            <Route path=":id/edit" element={<BannerEdit onUpdate={onHUpdate} />} />
          </Route>
          <Route path="category" >
            <Route index element={<CategoryAdmin categorys={category} onRemove={onHandrRemove} />} />
            <Route path="add" element={<CategoryAdd onAdd={onHandlAdd} />} />
            <Route path=":id/edit" element={<CategoryEdit onUpdate={onHandlUpdate} />} />
          </Route>
          <Route path="post" >
            <Route index element={<PostAdmin posts={posts} onRemove={onHandRemove} />} />

            <Route path="add" element={<PostAdd onAdd={onHanlAdd} />} />
            <Route path=":id/edit" element={<PostEdit onUpdate={onHanlUpdate} />} />
          </Route>
          <Route path="user" >
            <Route index element={<UserAdmin users={users} onRemove={onHanRemove} />} />
            <Route path="add" element={<UserAdd onAdd={onHanAdd} />} />
            <Route path=":id/edit" element={<UserEdit onUpdate={onHanUpdate} />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer />
    </div >
  )
}

export default App


function setCart(arg0: any) {
  throw new Error('Function not implemented.')
}

