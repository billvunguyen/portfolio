import { Container, Badge, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Devops Web application">
            <Container mt={75}>
                <Title>
                    Devops Web application - Projet D&apos;académie <Badge>2022</Badge>
                </Title>
                <P>
                    La première étape a consisté à utiliser Scrum comme méthode de gestion de projet. L&apos;objectif est de créer une plate-forme d&apos;hébergement mutualisé dans laquelle les développeurs bénéficieront d&apos;outils pratiques et sécurisés pour développer et de déployer des applications.
                </P>
                <P>
                    Dans ce projet, nous souhaitons pourvoir déployer facilement des serveur dans cette infastructure, et automatiser le déploiement des outils nécessaires sur celle-ci.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plateform</Meta>
                        <span>Web application | DebianOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Application Layer</Meta>
                        <span>Angular - Frontend | Laravel - Backend</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Outils</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImage src={require('/public/images/devops.png')} alt="devops"/>
                            <WorkImage src={require('/public/images/gitlab.png')} alt="devops"/>
                            <WorkImage src={require('/public/images/docker.jpeg')} alt="devops"/>
                            <WorkImage src={require('/public/images/ovh-cloud.jpeg')} alt="devops"/>
                        </SimpleGrid>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work