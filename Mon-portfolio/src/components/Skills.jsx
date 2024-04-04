import meter1 from "../assets/img/ProgressSoixante.webp";
import meter2 from "../assets/img/ProgressSoixanteDix.webp";
import meter3 from "../assets/img/ProgressQuatreVingt.webp";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Mes compétences</h2>
              <p>
                Les outils et languages que j'ai appris à maitriser à travers le
                temps.
              </p>
              <Carousel
                responsive={responsive}
                infinite={true}
                className="skill-slider"
              >
                <div className="item">
                  <img src={meter3} alt="Barre de progression univers à 80%" />
                  <h5>HTML</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Barre de progression univers à 80%" />
                  <h5>CSS/SASS</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Barre de progression univers à 60%" />
                  <h5>JavaScript</h5>
                </div>
                <div className="item">
                  <img src={meter3} alt="Barre de progression univers à 80%" />
                  <h5>React</h5>
                </div>
                <div className="item">
                  <img src={meter1} alt="Barre de progression univers à 60%" />
                  <h5>Redux</h5>
                </div>
                <div className="item">
                  <img src={meter2} alt="Barre de progression univers à 70%" />
                  <h5>Logo/Background design</h5>
                </div>
              </Carousel>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
