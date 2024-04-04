import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/thumbnail-Kasa.webp";
import projImg2 from "../assets/img/thumbnail-SophieBluel.webp";
import projImg3 from "../assets/img/optimisationSEO.webp";
import projImg4 from "../assets/img/thumbnail-Booki.webp";
import projImg5 from "../assets/img/thumbnail-Argentbank.webp";
import projImg6 from "../assets/img/thumbnail-Ohmyfood.webp";

export const Projects = () => {
  const projects = [
    {
      title: "Agence immobilière React",
      description: "Design & Developpement",
      imgUrl: projImg1,
      url: "https://github.com/Isaenema/Projet-8-Kasa-Application-React",
    },
    {
      title: "Portfolio d'architecte",
      description: "Developpement de fonctionnalitées d'éditions",
      imgUrl: projImg2,
      url: "https://github.com/Isaenema/Projet-6-portfolio-Sophibluel",
    },
    {
      title: "Portfolio Photographe",
      description: "Optimisation & SEO",
      imgUrl: projImg3,
      url: "https://isaenema.github.io/Projet-9-SEO-NinaCarducci/",
    },
    {
      title: "Site de booking",
      description: "Design & Developpement",
      imgUrl: projImg4,
      url: "https://isaenema.github.io/booki-starter-code-master/",
    },
    {
      title: "Application bancaire",
      description: "React & Redux",
      imgUrl: projImg5,
      url: "https://github.com/Isaenema/Projet-11-vite-main",
    },
    {
      title: "Restaurant gastronomique",
      description: "Design & Animations",
      imgUrl: projImg6,
      url: "https://isaenema.github.io/Projet-4/index.html",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <h2>Mes projets</h2>
            <p>
              Un échantillon de mes derniers projets réaliser avec HTML, CSS,
              SASS, javascript, React et Redux.
            </p>
            <Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              ></Nav>
              <Row>
                {projects.map((project, index) => {
                  return <ProjectCard key={index} {...project} />;
                })}
              </Row>
            </Container>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
