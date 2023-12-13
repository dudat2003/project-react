import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area'
import { Separator } from '@/components/ui/separator'
import { Tabs, TabsContent } from '@/components/ui/tabs'
import { ProductItem } from './_components/product-item'
import { useProductQuery } from '@/hooks/useProductQuery'
import { IProduct } from '@/common/type'

const ProductsPage = () => {
    const { data, isLoading, isError } = useProductQuery()

    if (isLoading) return <div>Loading...</div>
    if (isError) return <div>Error...</div>

    return (
        <>
            <div className='hidden md:block'>
                <div className='border-t'>
                    <div className='bg-background'>
                        <div className='border'>
                            <div className='col-span-3 lg:col-span-4 lg:border-l'>
                                <div className='h-full px-4 py-6 lg:px-8'>
                                    <Tabs defaultValue='music' className='h-full space-y-6'>
                                        <TabsContent value='music' className='border-none p-0 outline-none'>
                                            <div className='flex items-center justify-between'>
                                                <div className='space-y-1'>
                                                    <h2 className='text-2xl font-semibold tracking-tight'>
                                                        Recently Released
                                                    </h2>
                                                </div>
                                            </div>
                                            <Separator className='my-4' />
                                            <div className='relative'>
                                                <ScrollArea>
                                                    <div className='flex space-x-4 pb-4'>
                                                        {data?.map((data: IProduct) => (
                                                            <ProductItem
                                                                key={data.id}
                                                                product={data}
                                                                className='w-[250px]'
                                                                aspectRatio='portrait'
                                                                width={200}
                                                                height={300}
                                                            />
                                                        ))}
                                                    </div>
                                                    <ScrollBar orientation='horizontal' />
                                                </ScrollArea>
                                            </div>
                                            <Separator className='my-4' />

                                            <div className='mt-6 space-y-1'>
                                                <h2 className='text-2xl font-semibold tracking-tight'>
                                                    Recomment For You
                                                </h2>
                                            </div>
                                            <Separator className='my-4' />
                                            <div className='relative'>
                                                <ScrollArea>
                                                    <div className='flex space-x-4 pb-4'>
                                                        {data &&
                                                            data.map((data: IProduct) => (
                                                                <ProductItem
                                                                    key={data.name}
                                                                    product={data}
                                                                    className='w-[150px]'
                                                                    aspectRatio='square'
                                                                    width={150}
                                                                    height={150}
                                                                />
                                                            ))}
                                                    </div>
                                                    <ScrollBar orientation='horizontal' />
                                                </ScrollArea>
                                            </div>
                                        </TabsContent>
                                    </Tabs>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default ProductsPage
