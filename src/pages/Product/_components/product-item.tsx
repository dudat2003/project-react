import { cn } from '@/lib/utils'
import {
    ContextMenu,
    ContextMenuContent,
    ContextMenuItem,
    ContextMenuSeparator,
    ContextMenuTrigger
} from '@/components/ui/context-menu'
import { IProduct } from '@/common/type'
import { useProductQuery } from '@/hooks/useProductQuery'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

interface ProductItemProps extends React.HTMLAttributes<HTMLDivElement> {
    product: IProduct
    aspectRatio?: 'portrait' | 'square'
    width?: number
    height?: number
}
export function ProductItem({
    product,
    aspectRatio = 'portrait',
    width,
    height,
    className,
    ...props
}: ProductItemProps) {
    const { data, isLoading, isError } = useProductQuery()
    const [products, setProduct] = useState<IProduct[]>()
    useEffect(() => {
        if (data) {
            setProduct(data)
        }
    }, [data])
    return (
        <div className={cn('space-y-3', className)} {...props}>
            <ContextMenu>
                <ContextMenuTrigger>
                    <div className='overflow-hidden rounded-md'>
                        <img
                            src={product.imgUrl}
                            alt={product.name}
                            width={width}
                            height={height}
                            className={cn(
                                'h-auto w-auto object-cover transition-all hover:scale-105',
                                aspectRatio === 'portrait' ? 'aspect-[3/4]' : 'aspect-square'
                            )}
                        />
                    </div>
                </ContextMenuTrigger>
                <ContextMenuContent className='w-40'>
                    <ContextMenuItem>
                        <Link to={'/products/' + product.id}>See Detail</Link>
                    </ContextMenuItem>
                    <ContextMenuItem>Add to cart</ContextMenuItem>
                    <ContextMenuSeparator />
                    <ContextMenuItem>Like</ContextMenuItem>
                    <ContextMenuItem>Share</ContextMenuItem>
                </ContextMenuContent>
            </ContextMenu>
            <div className='space-y-1 text-sm'>
                <h3 className='font-medium leading-none'>{product.name}</h3>
                <p className='text-xs text-muted-foreground'>{product.price}</p>
            </div>
        </div>
    )
}
