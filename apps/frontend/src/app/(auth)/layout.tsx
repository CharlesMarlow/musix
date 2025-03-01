import Image from 'next/image';

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <main className='flex min-h-screen w-full font-sans'>
      {/* Left side - Form */}
      <div className='flex flex-1 items-center justify-center px-6'>
        {children}
      </div>

      {/* Right side - Image */}
      <div className='sticky top-0 flex h-screen w-1/2 max-lg:hidden'>
        <Image
          src={'/icons/women-connection.jpg'}
          alt='register'
          width={500}
          height={500}
          className='w-full h-full object-cover'
        />
      </div>
    </main>
  );
}
