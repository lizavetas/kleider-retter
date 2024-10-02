import {Button, Container, Typography} from '@mui/material';
import {ButtonsContainer, Heading, HeroImageStyled, Image, Description} from './HeroImageStyled';
import heroImg from '../../assets/hero.jpg';

function HeroImage() {
    return (
        <HeroImageStyled>
            <Image src={heroImg} alt="Hero"/>
            <Container maxWidth="lg">
                <Heading>
                    <Typography variant="h3" component="h3" color="secondary" gutterBottom>
                            Gemeinsam helfen -
                            <Typography variant="h3" component="span" color="primary">Deine</Typography>
                            &nbsp;Kleiderspende,
                            <Typography variant="h3" component="span" color="primary"> Deine</Typography>
                            &nbsp;Entscheidung.
                        </Typography>
                    <Description variant="body1" gutterBottom>
                        Mit deiner Kleiderspende und gezielter Auswahl des Zielortes stellen wir sicher, dass Hilfe
                        schnell und
                        wirkungsvoll dort ankommt, wo sie am dringendsten benötigt wird.
                    </Description>
                    <ButtonsContainer>
                        <Button variant="contained" color="primary">
                            Kleidung abgeben
                        </Button>
                        <Button variant="contained" color="primary">
                            Kleidung abholen lassen
                        </Button>
                    </ButtonsContainer>
                </Heading>
            </Container>
        </HeroImageStyled>
    );
};

export default HeroImage;
