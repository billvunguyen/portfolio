import { Container, Badge, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Gestion du temps de travail">
            <Container mt={75}>
                <Title>
                Gestion du temps de travail - Projet D&apos;académie <Badge>2021</Badge>
                </Title>
                <p>
                    Dans ce projet, nous tenons à fournir aux manager une outils de gestion de temps d&apos;employées avec les spécifications suivantes :
                    <p style={{marginLeft:"25px"}}>- Authentification, planification, temps de travail, gestion des employés avec une charte graphique.</p>
                    <p style={{marginLeft:"25px"}}>- Les employés veulent pouvoir contacter leurs supérieurs et inversement, pouvoir prendre des jours de congé et les inscrire dans leur emploi du temps.</p>
                    <p style={{marginLeft:"25px"}}>- Le manager veut pouvoir faire la même chose que les employés mais avec des fonctionnalités supplémentaires comme pouvoir accepter des jours de congé et gérer leurs jours de congé, voir le profil des employés sous leur direction.</p>
                    <p style={{marginLeft:"25px"}}>- Et enfin de pouvoir créer, modifier ou supprimer un profil d&apos;un employé.</p>
                </p>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plateform</Meta>
                        <span>Application sur Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Application Layer</Meta>
                        <span>VueJS - Frontend | Phoenix/Elixir - Backend</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Outils</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImage src={require('/public/images/docker.jpeg')} alt="tool"/>
                            <WorkImage src={require('/public/images/vuejs.jpeg')} alt="tool"/>
                            <WorkImage src={require('/public/images/elixir.jpeg')} alt="tool"/>
                        </SimpleGrid>
                    </ListItem>
                    <ListItem mt={2.5}>
                        <Meta>Image</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImage src={require('/public/images/time1.png')} alt="time"/>
                            <WorkImage src={require('/public/images/time2.png')} alt="time"/>
                            <WorkImage src={require('/public/images/time3.png')} alt="time"/>
                            <WorkImage src={require('/public/images/time4.png')} alt="time"/>

                        </SimpleGrid>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work