import { Outlet } from 'react-router-dom'
import { Menubar, MenubarMenu, MenubarTrigger } from '@/components/ui/menubar'
import { Link } from 'react-router-dom'
import { UserNav } from '@/pages/manager/dashboard/_components/user-nav'
const AdminLayout = () => {
    return (
        <>
            <div className='flex justify-between items-center'>
                <div className='menu-bar pe-2'>
                    <Menubar>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <Link to={`/admin`}>Dashboard</Link>
                            </MenubarTrigger>
                        </MenubarMenu>
                        <MenubarMenu>
                            <MenubarTrigger>
                                <Link to={`/admin/products`}>Manage</Link>
                            </MenubarTrigger>
                        </MenubarMenu>
                    </Menubar>
                </div>

                <div className='profile'>
                    <UserNav />
                </div>
            </div>
            <br />
            <hr />
            <main>
                <Outlet />
            </main>
        </>
    )
}

export default AdminLayout
