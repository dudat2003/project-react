import { Overview } from './_components/overview'

import { Button } from '@/components/ui/button'
import { CalendarDateRangePicker } from './_components/date-range-picker'

const ManageDashboardPage = () => {
    return (
        <>
            <div className='flex items-center justify-between space-y-2'>
                <h2 className='text-3xl font-bold tracking-tight'>Dashboard</h2>
                <div className='flex items-center space-x-2'>
                    <CalendarDateRangePicker />
                    <Button>Download</Button>
                </div>
            </div>
            <Overview />
        </>
    )
}

export default ManageDashboardPage
