import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a
                target="_blank"
                href="https://www.linkedin.com/in/pierre-comte-b977402bb/"
              >
                <img src={navIcon1} alt="icon LinkedIn" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};
