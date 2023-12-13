import { useProductMutation } from '@/hooks/useProductMutation'
import { useProductQuery } from '@/hooks/useProductQuery'
import { DataTable } from './DataTable'
import { getColumns } from './Column'
import { useToast } from '../../../components/ui/use-toast'
import { Link } from 'react-router-dom'
import { PlusCircledIcon } from '@radix-ui/react-icons'
import { Button } from '@/components/ui/button'

const List = () => {
    const { toast } = useToast()
    const { data, isLoading, isError } = useProductQuery()
    const { onRemove } = useProductMutation({
        action: 'DELETE',
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Product has been remove!!'
            })
        }
    })
    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    const columns = getColumns(onRemove)

    return (
        <>
            <div className='flex items-center justify-between'>
                <h2>Product Manager</h2>
                <Link to='/admin/products/add'>
                    <Button>
                        <PlusCircledIcon className='mr-2 h-4 w-4' />
                        Add New Product
                    </Button>
                </Link>
            </div>
            <DataTable columns={columns} data={data} />
        </>
    )
}

export default List
