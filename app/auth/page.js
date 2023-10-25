"use client";

import { useState, useEffect } from 'react';
import { createClientComponentClient } from "@supabase/auth-helpers-nextjs"
import { Auth } from '@supabase/auth-ui-react';
import { ThemeSupa } from '@supabase/auth-ui-shared';
import Link from 'next/link';

export default function AuthPage() {
    const [redirectTo, setRedirectTo] = useState('');
    const supabase = createClientComponentClient();

    useEffect(() => {
        // This effect will only run on the client-side.
        setRedirectTo(`${window.location.origin}/auth/callback`);
    }, []);

    return (
    <>
        <div id="AuthPage" className="w-full min-h-screen bg-white">
            {/* ... other components ... */}
            <div className="max-w-[400px] mx-auto px-2">
                <Auth
                    onlyThirdPartyProviders
                    redirectTo={redirectTo}
                    supabaseClient={supabase}
                    providers={['google']}
                    appearance={{theme: ThemeSupa}}
                />
            </div>
        </div>
    </>
    )
}
  