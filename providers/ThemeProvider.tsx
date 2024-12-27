"use client";

import * as React from 'react'
import { ThemeProvider as NextThemesProvider } from 'next-themes';
import {type ThemeProviderProps} from "next-themes/dist/type"


export const ThemeProvider = ({children, ...props}: ThemeProviderProps) =>{
    return <NextThemesProvider {...props}> {children} </NextThemesProvider>
}