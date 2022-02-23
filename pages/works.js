import { Container, Heading, SimpleGrid } from '@chakra-ui/react'
import Section from '../components/section'
import { WorkGridItem } from '../components/grid-item'
import Layout from '../components/layouts/article'

import thumbShopping from '../public/images/shopping.png'
import thumbPlateformeWeb from '../public/images/pageConnexion.png'
import thumbDevops from '../public/images/devops.jpeg'
import thumbAndroid from '../public/images/android.png'
import thumbCloud from '../public/images/cloud.jpeg'
import thumbTimeManage from '../public/images/time4.png'

const Works = () => {
    return (
        <Layout>
            <Container
            marginTop={75}>
                <Heading as="h3" fontSize={20} mb={4}>
                    Works
                </Heading>

                <SimpleGrid columns={[1,1,2]} gap={6}>
                    <Section>
                        <WorkGridItem id="cloud" title="Cloud et Sécurité" thumbnail={thumbCloud}>
                            Notre missions est déploiement, configuration et administration d&apos;une application web, front et back office
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="devops" title="Devops Web application" thumbnail={thumbDevops}>
                            Notre missions est déploiement, configuration et administration d&apos;une application web, front et back office
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="shopping" title="Application de shopping" thumbnail={thumbShopping}>
                            Dans ce projet, on crée une application mobile, qui vous permet de faire les courses facile et rapide en ligne.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="time_manager" title="Gestion du temps de travail" thumbnail={thumbTimeManage}>
                            Une outils vous permet gérer les temps de travail d&apos;employé, simple, clair et agréable.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="web_restaurant" title="Web de commander en ligne" thumbnail={thumbPlateformeWeb}>
                            Une plateforme web qui vise à proposer aux artisans des métiers de bouche une grande facilité de commmande et de paiement.
                        </WorkGridItem>
                    </Section>
                    <Section>
                        <WorkGridItem id="bibliotheque_android" title="La bibliothèque sur Android" thumbnail={thumbAndroid}>
                            Une bibliothèque pour récupérer signaux des périphériques bluetooth pour localiser les outils.
                        </WorkGridItem>
                    </Section>
                </SimpleGrid>
            </Container>    
        </Layout>
    )
}

export default Works