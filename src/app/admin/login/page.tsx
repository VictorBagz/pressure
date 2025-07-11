
'use client';

import { useActionState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { login, type LoginState } from '../actions';
import { Lock } from 'lucide-react';

function SubmitButton() {
  return (
    <Button type="submit" className="w-full bg-primary hover:bg-primary/90">
      Login
    </Button>
  );
}

export default function LoginPage() {
  const initialState: LoginState = { status: 'idle' };
  const [state, formAction] = useActionState<LoginState, FormData>(login, initialState);

  return (
    <div className="flex items-center justify-center min-h-screen bg-secondary">
      <Card className="w-full max-w-sm shadow-2xl">
        <CardHeader className="text-center">
          <Lock className="mx-auto h-12 w-12 text-primary" />
          <CardTitle className="text-2xl font-bold text-primary mt-4">Admin Access</CardTitle>
          <CardDescription>
            Please enter your password to continue.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form action={formAction} className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" name="password" type="password" required />
            </div>
            {state.status === 'error' && (
              <p className="text-sm font-medium text-destructive">
                {state.message}
              </p>
            )}
            <SubmitButton />
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
