import { Container, Badge, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Web de commander en ligne">
            <Container mt={75}>
                <Title>
                Web de commander en ligne - Stage<Badge>2020</Badge>
                </Title>
                <P>
                Nous tenons à proposer aux artisans des métiers de bouche sur toute la France un service de consommation qui facilite la façon d’achat chez les clients. En effet, les clients peuvent commande en ligne leurs repas et les récupérer sur place sans faire la queue.
Dans un monde de plus en plus connecté, notre ciblie à remettre les artisans au coeur de la démarche en mettant en place à leurs boutiques un services de commande en ligne afin de toucher leurs clients et d’en attirer de nouveaux.
En outre, nous fournons aussi une système commander les repas pour les staffs qui facilite la façon de service chez les clients.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plateform</Meta>
                        <span>Application web</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Application Layer</Meta>
                        <span>Angular - Frontend</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Outils</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImage src={require('/public/images/angular.png')} alt="android_studio"/>
                        </SimpleGrid>
                    </ListItem>
                    <ListItem mt={2.5}>
                        <Meta>Image</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImage src={require('/public/images/pageInscription.png')} alt="android_studio"/>
                            <WorkImage src={require('/public/images/pagePaiement1.png')} alt="android_studio"/>
                            <WorkImage src={require('/public/images/pageProduit1.png')} alt="android_studio"/>
                            <WorkImage src={require('/public/images/PageRestaurant.png')} alt="android_studio"/>

                        </SimpleGrid>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work