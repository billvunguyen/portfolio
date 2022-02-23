import { Container, Badge, List, ListItem, SimpleGrid } from "@chakra-ui/react";
import { Title, WorkImage, Meta, WorkImageVertical } from "../../components/work"
import P from "../../components/paragraph"
import Layout from '../../components/layouts/article'


const Work = () => {
    return (
        <Layout title="Application de shopping">
            <Container mt={75}>
                <Title>
                Application de shopping - Projet D&apos;académie <Badge>2021</Badge>
                </Title>
                <P>
                Dans ce projet, nous créons une application mobile, vous fournit de faire des achats, trouver tous ce que vous voulez sur notre plateform. Vous pouvez partager les articles avec vos amis très simple et rapide par code QR. En plus fournissons des méthodes de paiement agréable, Paypal et Cart Blue etc.
                </P>
                <List ml={4} my={4}>
                    <ListItem>
                        <Meta>Plateform</Meta>
                        <span>Application sur Android</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Application Layer</Meta>
                        <span>Java - Application | GoogleFirebase - Backend</span>
                    </ListItem>
                    <ListItem>
                        <Meta>Outils</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImage src={require('/public/images/androidstudio.png')} alt="tool"/>
                            <WorkImage src={require('/public/images/firebase.jpeg')} alt="tool"/>
                        </SimpleGrid>
                    </ListItem>
                    <ListItem mt={2.5}>
                        <Meta>Image</Meta>
                        <SimpleGrid mt={2} columns={[1,2,2]} gap={6}>
                            <WorkImageVertical src={require('/public/images/shopping1.png')} alt="shopping"/>
                            <WorkImageVertical src={require('/public/images/shopping2.png')} alt="shopping"/>
                            <WorkImageVertical src={require('/public/images/shopping3.png')} alt="shopping"/>
                            <WorkImageVertical src={require('/public/images/shopping4.png')} alt="shopping"/>
                            <WorkImageVertical src={require('/public/images/shopping5.png')} alt="shopping"/>
                            <WorkImageVertical src={require('/public/images/shopping6.png')} alt="shopping"/>
                        </SimpleGrid>
                    </ListItem>
                </List>
            </Container>
        </Layout>
    )
}

export default Work