import Link from 'next/link'
import Image from 'next/image'
import { Text, useColorModeValue } from '@chakra-ui/react'
import styled from '@emotion/styled'

const LogoBox = styled.span`
    font-weight: bold;
    font-size: 18px;
    display: inline-flex;
    align-items: center;
    height: 30px;
    line-height: 20px;
    padding: 10px;

    &:hover img {
        transform: rotate(25deg)
    }
`

const Logo = () => {
     const mikoLogo = require(`/public/images/mikologo${useColorModeValue('', '')}.png`)

    return (
        <Link href="/">
            <a>
                <LogoBox>
                    <Image src={mikoLogo} width={50} height={50} alt="logo"/>
                    <Text color={useColorModeValue('gray.800', 'whiteAlpha.900')}
                            fontFamily='M PLUS Rounded 1c'
                            fontWeight="bold"
                            ml={1}>
                                Nguyen Phuong Huy VU
                    </Text>
                </LogoBox>
            </a>
        </Link> 
    )
}

export default Logo