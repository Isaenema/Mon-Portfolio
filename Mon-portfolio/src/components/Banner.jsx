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
            <p>
              Je prends plaisir à la création d'interfaces intuitives et
              réactives, ainsi je m'efforce constamment d'améliorer l'expérience
              utilisateur à travers des designs innovants et une programmation
              de pointe. Avec une approche créative, je transforme les idées en
              solutions digitales structurées. Mon portfolio reflète mon
              engagement à développer des projets qui répondent aux besoins de
              chacun.
            </p>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div>
              <img src={headerImg} alt="Pierre Comte dans l'espace" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
