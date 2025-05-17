'use client';

import Footer from '@/components/Footer';
import { ReactNode } from 'react';

export default function AuthStepWrapper({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-[url('/images/Authbg.png')] bg-cover bg-center flex items-center justify-center px-4 sm:px-6 md:px-8">
      <div className="flex flex-col items-center justify-center w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl">
        <div className="w-11/12 p-6 sm:p-8 text-white ">
          {children}
        </div>
        <div className="mt-20 sm:mt-8 w-full">
          <Footer />
        </div>
      </div>
    </main>
  );
}
