import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/img-flottante-banner.webp";

export const Banner = () => {
  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6}>
            <span className="tagline">Bienvenue sur mon portfolio</span>
            <h1>Pierre Comte, Developpeur Front-End</h1>
            <span className="wrap"></span>
            <p></p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Personnage dans l'espace" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
