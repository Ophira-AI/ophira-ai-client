'use client';

import RegisterForm from '@/components/auth/RegisterForm';

export default function RegisterPage() {

  
  return (
    <main className="min-h-screen bg-[url('/images/Authbg.png')] bg-cover bg-center flex items-center justify-center">
      <RegisterForm />
    </main>
  );
}