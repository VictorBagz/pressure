
'use server';

import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export interface LoginState {
  status: 'idle' | 'error';
  message?: string;
}

export async function login(prevState: LoginState, formData: FormData): Promise<LoginState> {
  const password = formData.get('password');

  if (password === process.env.ADMIN_PASSWORD) {
    const cookieStore = cookies();
    cookieStore.set('auth-token', process.env.ADMIN_AUTH_TOKEN as string, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      maxAge: 60 * 60 * 24 * 7, // One week
      path: '/',
    });
    redirect('/admin');
  } else {
    return {
      status: 'error',
      message: 'Invalid password. Please try again.',
    };
  }
}

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete('auth-token');
  redirect('/admin/login');
}
