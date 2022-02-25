import {
    Button,
    Container,
    Box,
    Heading,
    useColorModeValue,
    Link,
    List,
    ListItem,
    Icon,
} from '@chakra-ui/react'
import Image from 'next/image'
import Section from '../components/section'
import Paragraph from '../components/paragraph'
import NextLink from 'next/link'
import { ChevronRightIcon } from '@chakra-ui/icons'
import Layout from '../components/layouts/article'
import { BioSection, BioYear } from '../components/bio'
import { IoLogoLinkedin } from 'react-icons/io5'
import { IoMdMail } from 'react-icons/io'
import { FaPhoneAlt } from 'react-icons/fa'
import { MdPlace } from 'react-icons/md'


const Page = () => {
    const avatar = require(`/public/images/IMG_9081.jpg`)
    const thumbnailHeader = require(`/public/images/IMG_0273.JPG`)
    return(
        <Layout>
            <Container marginTop={75}>
                <Image
                    className="grid-item-thumbnail"
                    src={thumbnailHeader}
                    alt="Thumbnail Header"
                />
                <Box borderRadius="lg"
                bg={useColorModeValue('whiteAlpha.500','whiteAlpha.200')}
                p={3}
                mb={6}
                mt={15}
                align="center"
                >
                    Bonjour, je suis étudiant en 4ème année chez EPITECH 
                </Box>

                <Box display={{md:'flex'}}>
                    <Box flexGrow={1}>
                        <Heading as="h2" variant="page-title">
                            Nguyen Phuong Huy VU
                        </Heading>
                        <p>DevOps / Développeur web / Développeur d&apos;application</p>
                    </Box>
                    <Box 
                        flexShrink={0}
                        mt={{ base: 4, md: 0 }}
                        ml={{ md: 6 }}
                        align="center"
                        >
                            <Image
                                className="grid-item-avatar"
                                objectFit="cover"
                                width={125} height={125}
                                src={avatar}
                                alt="Profile Image"
                            />

                    </Box>
                </Box>

                <Section delay={0.1}>
                    <Heading as="h3" variant="section-title">
                        À propos de moi
                    </Heading>
                    <Paragraph> Actuellement en BAC +4 au sein du programme MsC Pro d&apos;EPITECH. Je souhaite m&apos;orienter vers la spécialité Cloud Computing pour donner suite à ma première expertise de DevOps et le Système. Pour cela, je cherche à intégrer une entreprise 3 jours par semaine en rythme alterné afin de contribuer avec mes premières solides compétences et développer de nouvelle expertises. En plus, je suis ouvert à toute proposition.{''}
                    </Paragraph>
                    <Box align="center" my={4}>
                        <NextLink href="/works">
                            <Button rightIcon={<ChevronRightIcon/>} colorScheme="pink">
                                My portfolio
                            </Button>
                        </NextLink>
                    </Box>
                </Section>

            <Section delay={0.2}>
                <BioSection>
                    <BioYear>2017 - 2020</BioYear>
                    Obtenu le licence de SCIENCES, TECHNOLOGIES, SANTE, mention INFORMATIQUE à l&apos;université Claude Bernard Lyon 1
                </BioSection>
                <BioSection>
                    <BioYear>2021</BioYear>
                    Étudié à EPITECH
                </BioSection>
                <BioSection>
                    <BioYear>2023 (Prévue)</BioYear>
                    Obtenu le Msc Pro mention Architecte système réseaux et sécurité à EPITECH
                </BioSection>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Loisir
                </Heading>
                <Paragraph>
                    Voyage, Musique, Piano, Conception et Photographe
                </Paragraph>
            </Section>

            <Section delay={0.3}>
                <Heading as="h3" variant="section-title">
                    Contact
                </Heading>
                <List>
                    <ListItem>
                        <Link href="https://www.linkedin.com/in/phuong-huy-vu-nguyen-2a931219b/" target="_blank">
                            <Button
                            variant="ghost"
                            colorScheme="purple"
                            leftIcon={<Icon as={IoLogoLinkedin}/>}
                            >
                                @Linkedin
                            </Button>
                        </Link>
                    </ListItem>
                    <ListItem>
                            <Button
                            variant="ghost"
                            colorScheme="purple"
                            leftIcon={<Icon as={IoMdMail}/>}
                            >
                                <a href = "mailto: billvunguyen@gmail.com">billvunguyen@gmail.com</a>
                            </Button>
                    </ListItem>
                    <ListItem>
                            <Button
                            variant="ghost"
                            colorScheme="purple"
                            leftIcon={<Icon as={FaPhoneAlt}/>}
                            >
                                (+33) 06 67 77 89 62
                            </Button>
                    </ListItem>
                    <ListItem>
                            <Button
                            variant="ghost"
                            colorScheme="purple"
                            leftIcon={<Icon as={MdPlace}/>}
                            >
                                Rhône-Alpes, France
                            </Button>
                    </ListItem>
                </List>
            </Section>
            </Container>
        </Layout>
    )
}

export default Page


