
'use client';

import { useEffect } from 'react';
import { redirect } from 'next/navigation';

export default function LoginPage() {
  useEffect(() => {
    // Since authentication is removed, redirect to the admin dashboard.
    redirect('/admin');
  }, []);

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <p>Redirecting to admin dashboard...</p>
    </div>
  );
}
