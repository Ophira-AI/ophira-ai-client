// app/login/page.tsx
'use client';

import LoginForm from '@/components/auth/LoginForm';

export default function LoginPage() {
  return (
    <main className="min-h-screen bg-[url('/images/Authbg.png')] bg-cover bg-center flex items-center justify-center">
        <LoginForm />
    </main>
  );
}
