import React from 'react'
import Head from 'next/head'
import { Box } from '@chakra-ui/react'
import Navbar from '../components/Navbar'
import Footer from './Footer'

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>Real Estate</title>
            </Head>
            <Box maxW="1280px" m="auto">
                <header><Navbar /></header>
                <main>
                    {children}
                </main>
                <footer> <Footer /> </footer>
            </Box>
        </>
    )
}
