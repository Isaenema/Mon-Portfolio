import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/Contact-img.webp";

export const Contact = () => {
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <img src={contactImg} alt="Contact Us" />
          </Col>
          <Col size={12} md={6}>
            <a href="mailto: piere.is.comte@gmail.com">
              <h2>Contactez-moi</h2>
            </a>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
