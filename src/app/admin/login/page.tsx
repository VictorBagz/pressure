
'use client';

import { useActionState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { login, type LoginState } from '../actions';
import { Lock } from 'lucide-react';

export default function LoginPage() {
  const [state, formAction] = useActionState<LoginState, FormData>(login, { status: 'idle' });

  return (
    <div className="flex min-h-screen items-center justify-center bg-secondary">
      <Card className="w-full max-w-sm shadow-2xl">
        <CardHeader className="text-center">
            <Lock className="mx-auto h-10 w-10 text-primary" />
          <CardTitle className="text-2xl font-bold text-primary">Admin Access</CardTitle>
          <CardDescription>Please enter the password to view the dashboard.</CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            {state.status === 'error' && (
              <p className="text-sm font-medium text-destructive">{state.message}</p>
            )}
            <Button type="submit" className="w-full">
              Log In
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
