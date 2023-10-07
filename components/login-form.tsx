'use client';

import * as z from 'zod';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Button } from './ui/button';

const formSchema = z.object({
  username: z
    .string()
    .min(1, { message: 'Username must be at least 2 characters.' })
    .max(30),
  password: z
    .string()
    .min(5, { message: 'Password must be at least 5 characters.' })
    .max(25),
});

export const LoginForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: '',
      password: '',
    },
  });

  const onSubmit = (values: z.infer<typeof formSchema>) => {
    try {
      console.log(values);
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <div className="space-y-5 text-[#B5BAC1] mb-2">
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  USERNAME <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input autoComplete="off" {...field} required />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel className="font-bold">
                  PASSWORD <span className="text-red-600">*</span>
                </FormLabel>
                <FormControl>
                  <Input
                    className="focus-visible:ring-transparent"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <a
            href="/"
            className="text-[#02A2F3] text-sm font-semibold mt-0 hover:underline"
          >
            Forgot your password?
          </a>

          <Button
            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white"
            variant={'default'}
            type="submit"
          >
            Log In
          </Button>
        </div>
      </form>
    </Form>
  );
};
