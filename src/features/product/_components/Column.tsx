import { formatPrice } from '@/lib/utils'
import { ColumnDef } from '@tanstack/react-table'
import { Link } from 'react-router-dom'
import { Button } from '../../../components/ui/button'
import { IProduct } from '@/common/type'

export const getColumns = (removeProduct: any): ColumnDef<IProduct>[] => [
    {
        accessorKey: 'name',
        header: () => <span className='font-bold'>Name</span>
    },
    {
        accessorKey: 'price',
        header: () => <span className='font-bold'>Price</span>,
        cell: ({ row }) => {
            const formattedPrice = formatPrice(row.getValue('price') || 0)

            return <div dangerouslySetInnerHTML={{ __html: formattedPrice }} />
        }
    },
    {
        accessorKey: 'imgUrl',
        header: () => <span className='font-bold'>Image</span>,
        cell: ({ row }) => {
            return (
                <div>
                    <img src={row?.getValue('imgUrl')} alt='' />
                </div>
            )
        }
    },
    {
        accessorKey: 'description',
        header: () => <span className='font-bold'>Description</span>
    },
    {
        accessorKey: '',
        header: 'Action',
        cell: ({ row }) => {
            return (
                <>
                    <Link to={`/admin/products/${row?.original.id}/edit`}>Edit</Link>
                    <Button className='m-2' onClick={() => removeProduct(row?.original!)}>
                        Remove
                    </Button>
                </>
            )
        }
    }
]
