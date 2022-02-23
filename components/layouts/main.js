import Head from 'next/head'
import Navbar from '../navbar'
import { Box, Container } from '@chakra-ui/react'
import favicon from '/public/favicon.ico'

const Main = ({ children, router }) => {
    return (
        <Box as="main" pb={8}>
            <Head>
                <meta charSet="utf-8" />
                <meta name="description" content="Bill's honmpage"/>
                <link rel="apple-touch-icon" href="/public/apple-touch-icon.png"/>
                <link rel="shortcut icon" href={favicon.src} type="image/x-icon" />
                <meta name="viewport" content="width=device-width, initial-scale=1"/>
                <title>Phuong Huy VU NGUYEN - Homepage</title>
            </Head>

            <Navbar path={router.asPath}/>

            <Container maxW="container.md" pt={14}>
                {children}
            </Container>
        </Box>
    )
}

export default Main