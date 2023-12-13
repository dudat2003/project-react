import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card'
import { Form, FormControl, FormField, FormItem, FormMessage } from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { useToast } from '@/components/ui/use-toast'
import { useAuthMutation } from '@/hooks/useAuthMutation'
import { Label } from '@radix-ui/react-label'

const SignupPage = () => {
    const { toast } = useToast()
    const { form, onSubmit } = useAuthMutation({
        action: 'SIGN_UP',
        onSuccess: () => {
            toast({
                description: 'Create account successfully',
                variant: 'success'
            })
            form.reset()
        }
    })
    return (
        <div className='flex justify-center items-center my-4 '>
            <Card>
                <CardHeader className='space-y-1'>
                    <CardTitle className='text-2xl'>Create an account</CardTitle>
                    <CardDescription>Enter your infomation below to create your account</CardDescription>
                </CardHeader>
                <CardContent className='grid gap-4'>
                    <Form {...form}>
                        <form onSubmit={form.handleSubmit(onSubmit)}>
                            <div className='grid gap-2'>
                                <Label htmlFor='email'>Email</Label>
                                <FormField
                                    name='email'
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type='email' {...field} placeholder='m@example.com' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>
                            <div className='grid gap-2'>
                                <Label htmlFor='password'>Password</Label>
                                <FormField
                                    name='password'
                                    control={form.control}
                                    render={({ field }) => (
                                        <FormItem>
                                            <FormControl>
                                                <Input type='password' {...field} placeholder='password' />
                                            </FormControl>
                                            <FormMessage />
                                        </FormItem>
                                    )}
                                ></FormField>
                            </div>
                            <div className='mt-4'>
                                <CardFooter>
                                    <Button type='submit' className='w-full'>
                                        Create account
                                    </Button>
                                </CardFooter>
                            </div>
                        </form>
                    </Form>
                </CardContent>
            </Card>
        </div>
    )
}

export default SignupPage
