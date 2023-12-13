import { IProduct } from '@/common/type'
import React, { useEffect, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Pencil } from 'lucide-react'
import { SubmitHandler } from 'react-hook-form'
import { Form, FormControl, FormField, FormItem } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useProductMutation } from '@/hooks/useProductMutation'
import { useToast } from '@/components/ui/use-toast'

type PriceFormProps = {
    data: IProduct
}

type FormControlType = {
    price: number
}

const PriceForm = ({ data }: PriceFormProps) => {
    const { toast } = useToast()
    const [productEditStatus, setProductEditStatus] = useState(false)
    const { form, onSubmit } = useProductMutation({
        action: 'UPDATE',
        onSuccess: () => {
            setProductEditStatus(false)
            toast({
                variant: 'success',
                title: 'Price has been save!!'
            })
        }
    })
    useEffect(() => {
        if (data && form) {
            form.reset({
                name: data.name || '',
                price: data.price || 0,
                imgUrl: data.imgUrl || '',
                description: data.description || ''
            })
        }
    }, [data, form])

    const onHandleSubmit: SubmitHandler<FormControlType> = (values) => {
        onSubmit({ ...data, ...values })
    }
    return (
        <div className='mt-6 border bg-slate-100 rounded-md p-4 m-4'>
            <div className='font-medium flex items-center justify-between'>
                Gía sản phẩm
                <Button variant='ghost' onClick={() => setProductEditStatus(!productEditStatus)}>
                    {productEditStatus ? (
                        <>Cancel</>
                    ) : (
                        <>
                            <Pencil className='h-4 w-4 mr-2' />
                            Edit
                        </>
                    )}
                </Button>
            </div>
            {!productEditStatus && <p className='text-sm mt-2'>{data?.price}</p>}
            {productEditStatus && (
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onHandleSubmit)} className='flex flex-col gap-y-8'>
                        <FormField
                            control={form.control}
                            name='price'
                            render={({ field }) => (
                                <FormItem>
                                    <FormControl>
                                        <Input {...field} placeholder='Price' />
                                    </FormControl>
                                </FormItem>
                            )}
                        />
                        <div className='flex items-center gap-x-2'>
                            <Button type='submit'>Save</Button>
                        </div>
                    </form>
                </Form>
            )}
        </div>
    )
}

export default PriceForm
