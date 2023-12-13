import { Outlet } from 'react-router-dom'
import { Search } from './search'
import { UserNav } from '@/pages/manager/dashboard/_components/user-nav'
import { MainNav } from './main-nav'

const BaseLayout = () => {
    return (
        <div>
            <header>
                <div className='border-b'>
                    <div className='flex h-16 items-center px-4'>
                        <MainNav className='mx-6' />
                        <div className='ml-auto flex items-center space-x-4'>
                            <Search />
                            <UserNav />
                        </div>
                    </div>
                </div>
            </header>
            <main>
                <Outlet />
            </main>
        </div>
    )
}

export default BaseLayout
