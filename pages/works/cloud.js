import { Container, Badge, Link, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Cloud et Sécurité">
            <Container mt={75}>
                <Title>
                Cloud et Sécurité - Projet D&apos;académie <Badge>2022</Badge>
                </Title>
                <P>
                Notre mission dans ce projet est approprier l&apos;infra, et corriger-la. Réaliser les pentest.
Ensuite, à la partie déploiement, nous lancons le processus automatique via Gitlab, faire le packaging et le shipping d&apos;application grâce à Docker, de plus Portainer nous permet gérer les docker apps. Enfin, nous faisons monitoring avec Nexus Lifecycle pour garantir l&apos;application qui marche bien.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plateform</Meta>
                        <span>Web Application | CentOS</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Application Layer</Meta>
                        <span>React - Frontend</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Outils</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImage src={require('/public/images/gitlab.png')} alt="tool"/>
                            <WorkImage src={require('/public/images/docker.jpeg')} alt="tool"/>
                            <WorkImage src={require('/public/images/metasploit.jpeg')} alt="tool"/>
                            <WorkImage src={require('/public/images/nexus.png')} alt="tool"/>
                        </SimpleGrid>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work