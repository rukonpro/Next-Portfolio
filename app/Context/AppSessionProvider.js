"use client"
import { SessionProvider } from 'next-auth/react';

import React from 'react'

function AppSessionProvider({ children }) {
    return (
        <SessionProvider>
            {children}
        </SessionProvider>
    )
}

export default AppSessionProvider
