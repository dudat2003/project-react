import Add from '@/features/product/_components/Add'
import Edit from '@/features/product/_components/Edit'
import List from '@/features/product/_components/List'
import AdminLayout from '@/layouts/admin/AdminLayout'
import BaseLayout from '@/layouts/base/BaseLayout'

import HomePage from '@/pages/HomePage'
import ProductsPage from '@/pages/Product/ProductsPage'
import ProductDetailPage from '@/pages/DetailPage/ProductDetail'
import LoginPage from '@/pages/auth/Login'
import SignupPage from '@/pages/auth/Register'
import ManageDashboardPage from '@/pages/manager/dashboard/Dashboard'
import ManagerProductPage from '@/pages/manager/product'
import { Route, Routes } from 'react-router-dom'

const Routers = () => {
    return (
        <Routes>
            <Route path='/' element={<BaseLayout />}>
                <Route index element={<HomePage />} />
                <Route path='products' element={<ProductsPage />} />
                <Route path='products/:id' element={<ProductDetailPage />} />
                <Route path='register' element={<SignupPage />} />
                <Route path='login' element={<LoginPage />} />
            </Route>
            <Route path='admin' element={<AdminLayout />}>
                <Route index element={<ManageDashboardPage />} />
                <Route path='products' element={<ManagerProductPage />}>
                    <Route index element={<List />} />
                    <Route path='add' element={<Add />} />
                    <Route path=':id/edit' element={<Edit />} />
                </Route>
            </Route>
        </Routes>
    )
}

export default Routers
