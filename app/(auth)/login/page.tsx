'use client';

import { signIn } from 'next-auth/react';
import { redirect } from 'next/navigation';

import { getAuthSession } from '@/lib/nextauth';
import { LoginForm } from '@/components/login-form';
import { Button } from '@/components/ui/button';

const LoginPage = async () => {
  const session = await getAuthSession();

  const onGoogleLogIn = () => {
    signIn('google', { callbackUrl: '/' }).catch(console.error);
  };

  if (session) {
    redirect('/');
  }

  return (
    <div className="z-0 flex h-full items-center">
      <div className="bg-[#313338] rounded-sm p-8 text-center">
        <h1 className="text-[#F2F3F5] font-semibold text-[24px]">
          Welcome back!
        </h1>
        <div className="text-[#9CA1A8] text-[16px]">
          We're so excited to see you again!
        </div>
        <div className="mt-5 text-left">
          <LoginForm />
          <Button
            className="w-full bg-[#5865F2] hover:bg-[#4752C4] text-white"
            variant={'default'}
            onClick={() => {
              onGoogleLogIn();
            }}
          >
            Log in with Google
          </Button>
          <p className="text-sm text-[#9CA1A8]">
            Need an account?{' '}
            <span className="text-[#02A2F3]">Register</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
