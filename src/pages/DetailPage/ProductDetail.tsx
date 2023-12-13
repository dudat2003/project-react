import { Button } from '@/components/ui/button'
import { useProductQuery } from '@/hooks/useProductQuery'
import { BsCartPlusFill } from 'react-icons/bs'

import { useParams } from 'react-router-dom'

type Props = {}
const ProductDetailPage = (props: Props) => {
    const { id } = useParams()
    const { data } = useProductQuery(id)
    return (
        <>
            <section className='border-e-2'>
                <div className='  grid grid-cols-2 p-5'>
                    <div className='rounded-lg mx-5 overflow-hidden'>
                        <img
                            className='object-cover w-full h-full  hover:scale-[1.1] transition-transform ease-in-out duration-500'
                            src={data?.imgUrl}
                            alt={data?.name}
                        />
                    </div>
                    <div className='flex items-center'>
                        <div className='text-center grid grid-rows-5 gap-y-6 '>
                            <div className='text-5xl font-bold'>{data?.price}</div>
                            <h2 className='name text-2xl'>{data?.name}</h2>
                            <p className='description'>{data?.description}</p>
                            <a href='#' className='button'>
                                <Button variant='outline'>
                                    <BsCartPlusFill className='mx-1' /> Add to Cart
                                </Button>
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default ProductDetailPage
