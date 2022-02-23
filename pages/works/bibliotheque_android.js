import { Container, Badge, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { Title, WorkImage, Meta } from "../../components/work"
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="La bibliothèque sur Android">
            <Container mt={75}>
                <Title>
                La bibliothèque sur Android - Stage <Badge>2020</Badge>
                </Title>
                <P>
                   Dans mon période de stage, une partie de la projet de gestion les structures. Mon mission est le développement une bibliothèque d&apos;évaluation les force du signal des devices bluetooth pour gérer et localiser les outils, en plus il fait une lecture automatisée et une reconnaissance de l&apos;objet. En cas au tunnel, il stocke les données en mémoire et seront transmis au serveur lorsque le réseau le permettra
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plateform</Meta>
                        <span>Application sur Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Application Layer</Meta>
                        <span>La bibliothèque</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Outils</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImage src={require('/public/images/androidstudio.png')} alt="android_studio"/>
                        </SimpleGrid>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work