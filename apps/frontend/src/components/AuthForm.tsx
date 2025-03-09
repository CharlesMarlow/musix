'use client';

import { useState } from 'react';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Loader2 } from 'lucide-react';
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import { Button } from '@/components/ui/button';
import { Form } from '@/components/ui/form';
import CustomInput from './CustomInput';
import { authFormSchema } from '@/lib/utils';
// import { signUp, signIn } from '@/lib/actions/user.actions';

const AuthForm = ({ type }: { type: string }) => {
  const tCommon = useTranslations('common');
  const tForm = useTranslations('form');
  const router = useRouter();
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);

  const formSchema = authFormSchema(type);

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: '',
      password: '',
      firstName: '',
      lastName: '',
      dateOfBirth: '',
    },
  });

  const onSubmit = async (data: z.infer<typeof formSchema>) => {
    setIsLoading(true);
    try {
      const userData = {
        firstName: data.firstName!,
        lastName: data.lastName!,
        dateOfBirth: data.dateOfBirth!,
        email: data.email,
        password: data.password,
      };
      if (type === 'sign-up') {
        // const newUser = await signUp(userData);
        // setUser(newUser);
      }
      if (type === 'sign-in') {
        // const response = await await signIn({
        //   email: data.email,
        //   password: data.password,
        // });
        // if (response) router.push('/');
      }
    } catch (error) {
      console.error('Error from submit: ', error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className='flex min-h-screen w-full max-w-[480px] mx-auto flex-col justify-center gap-5 py-10 md:gap-8'>
      <header className='flex flex-col gap-5 md:gap-8'>
        <Link href='/' className='cursor-pointer flex items-center gap-1'>
          <Image
            src='/icons/logo.png'
            width={148}
            height={148}
            alt='Musix logo'
          />
          <h1 className='text-6xl font-ibm-plex-serif font-bold text-indigo-700'>
            {tCommon('appName')}
          </h1>
        </Link>
        <div className='flex flex-col gap-1 md:gap-3'>
          <h1 className='text-24 lg:text-26 font-semibold text-gray-900'>
            {type === 'sign-in' ? 'Sign In' : 'Sign Up'}
            <p className='text-16 font-normal text-gray-600'>
              {tForm('register.title')}
            </p>
          </h1>
        </div>
      </header>
      <>
        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-8'>
            {type === 'sign-up' && (
              <>
                <div className='flex gap-4'>
                  <div className='flex-1'>
                    <CustomInput
                      control={form.control}
                      name={'firstName'}
                      label={tForm('register.firstName')}
                      placeholder={tForm('register.firstNamePlaceholder')}
                    />
                  </div>
                  <div className='flex-1'>
                    <CustomInput
                      control={form.control}
                      name={'lastName'}
                      label={tForm('register.lastName')}
                      placeholder={tForm('register.lastNamePlaceholder')}
                    />
                  </div>
                </div>
                <div className='flex gap-4'></div>
                <div className='flex gap-4'>
                  <div className='flex-1'>
                    <CustomInput
                      control={form.control}
                      name={'dateOfBirth'}
                      label={tForm('register.dateOfBirth')}
                      placeholder={tForm('register.dateOfBirthPlaceholder')}
                    />
                  </div>
                </div>
              </>
            )}
            <CustomInput
              control={form.control}
              name={'email'}
              label={tForm('register.email')}
              placeholder={tForm('register.emailPlaceholder')}
            />
            <CustomInput
              control={form.control}
              name={'password'}
              label={tForm('register.password')}
              placeholder={tForm('register.passwordPlaceholder')}
            />

            <div className='flex flex-col gap-4'>
              <Button
                className='text-xl rounded-md border bg-blue-500 font-semibold text-white hover:bg-indigo-700 pt-1.5 px-2'
                type='submit'
                disabled={isLoading}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={20} className='animate-spin' /> &nbsp;
                    {tCommon('loading')}
                  </>
                ) : type === 'sign-in' ? (
                  tForm('register.signIn')
                ) : (
                  tForm('register.signUp')
                )}
              </Button>
            </div>
          </form>

          {/* Footer */}
          <footer className='flex justify-center gap-1'>
            <p className='text-14 font-normal text-gray-600'>
              {type === 'sign-in'
                ? tForm('register.noAccount')
                : tForm('register.haveAccount')}
            </p>
            <Link
              href={type === 'sign-in' ? '/sign-up' : '/sign-in'}
              className='text-14 cursor-pointer font-medium text-bankGradient'
            >
              {type === 'sign-in' ? 'Sign Up' : 'Sign In'}
            </Link>
          </footer>
        </Form>
      </>
    </section>
  );
};

export default AuthForm;
