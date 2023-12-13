import { useProductMutation } from '@/hooks/useProductMutation'
import { Button } from '../../../components/ui/button'
import { Form, FormControl, FormField, FormItem, FormLabel } from '../../../components/ui/form'
import { Input } from '../../../components/ui/input'
import { useToast } from '../../../components/ui/use-toast'

const Add = () => {
    const { toast } = useToast()
    const { form, onSubmit } = useProductMutation({
        action: 'ADD',
        onSuccess: () => {
            toast({
                variant: 'success',
                title: 'Add Product successfully!!'
            })
            form.reset()
        }
    })
    return (
        <div className='border p-6'>
            <h2 className='text-xl font-bold'>Add new product</h2>
            <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-4'>
                    <FormField
                        control={form.control}
                        name='name'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Name</FormLabel>
                                <FormControl>
                                    <Input placeholder='Name' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        control={form.control}
                        name='price'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Price</FormLabel>
                                <FormControl>
                                    <Input placeholder='Price' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        control={form.control}
                        name='imgUrl'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Image url</FormLabel>
                                <FormControl>
                                    <Input placeholder='Image url' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <FormField
                        control={form.control}
                        name='description'
                        render={({ field }) => (
                            <FormItem>
                                <FormLabel className='font-bold'>Description</FormLabel>
                                <FormControl>
                                    <Input placeholder='Description' {...field} />
                                </FormControl>
                            </FormItem>
                        )}
                    ></FormField>
                    <Button type='submit'>Submit</Button>
                </form>
            </Form>
        </div>
    )
}

export default Add
