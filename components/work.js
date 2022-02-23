import NextLink from 'next/link'
import {Heading, Box, Link, Badge } from '@chakra-ui/react'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Image from 'next/image'

export const Title = ({ children }) => (
    <Box>
        <NextLink href="/works">
            <Link>Works</Link>
        </NextLink>
            <span>
                {' '}
                <ChevronRightIcon />
                {' '}
            </span>
        <Heading display='inline-block' as="h3" fontSize={20} mb={4}>
            {children}
        </Heading>
    </Box>
)

export const WorkImage = ({ src, alt}) => (
    <Image width={1600} height={1000} borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const WorkImageVertical = ({ src, alt}) => (
    <Image width={900} height={1600} borderRadius="lg" w="full" src={src} alt={alt} mb={4} />
)

export const Meta = ({ children }) => (
    <Badge colorScheme="purple" mr={2}>
        {children}
    </Badge>
)