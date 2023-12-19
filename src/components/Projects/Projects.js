import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import my from "../../Assets/Projects/my port 2.jpeg";
import invoice from "../../Assets/Projects/invoice.jpeg";
import resume from "../../Assets/Projects/myresume.jpeg";
import ababeel from "../../Assets/Projects/ababeel.jpeg";
import myport from "../../Assets/Projects/my pornt.jpeg";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resume}
              isBlog={false}
              title="React simple Resume"
              description={
                <>
                 <strong className="bold-text">Technology:ReactJs </strong> <br></br><br></br>
                  The Basic Static Webpage with ReactJS is a simple project of Resume.
                 
                </>
              }
              ghLink="https://github.com/Sheikcoder/Resume-ReactJs"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={ababeel}
              isBlog={false}
              title="Ababeel Jamath Charity Donate website"
              description={
                <>
                 <strong className="bold-text">Technology: HTML,Css</strong> <br></br><br></br>
                 The Ababeel Jamath Charity Donate Website is a digital platform aimed at facilitating donations and raising awareness for charitable causes supported by the Ababeel Jamath organization. The website is designed to be user-friendly, informative, and secure, encouraging visitors to contribute to various humanitarian efforts
                 
                </>
              }
              ghLink="https://github.com/Sheikcoder/charity-website"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={myport}
              isBlog={false}
              title="My Portfolio Version 1"
              description={
                <>
                 <strong className="bold-text">Technology: ReactJs</strong> <br></br><br></br>
                 The Frontend Developer Portfolio is a personal website showcasing your skills, projects, and expertise as a frontend developer. Built using ReactJS, JavaScript, and Redux, this portfolio serves as a professional platform to exhibit your work, experience, and technical abilities.
                 
                </>
              }
              ghLink="https://github.com/Sheikcoder/My_Dev_Portfolio"
              demoLink="https://trichysheikabdulla.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={invoice}
              isBlog={false}
              title="Invoice Billing Website"
              description={
                <>
                 <strong className="bold-text">Technology: ReactJs</strong> <br></br><br></br>
                 The Invoice Billing Website for the Covering Shop is a web application developed using ReactJS to streamline the billing process for my relative's shop. This platform will facilitate the creation, management, and tracking of invoices for their business.
                 
                </>
              }
              ghLink="https://github.com/Sheikcoder/Invoice_bill"
              // demoLink=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={my}
              isBlog={false}
              title="My Portfolio Version 2.0"
              description={
                <>
                 <strong className="bold-text">Technology: ReactJs</strong> <br></br><br></br>
                 The Frontend Developer Portfolio is a personal website showcasing your skills, projects, and expertise as a frontend developer. Built using ReactJS, JavaScript, and Redux, this portfolio serves as a professional platform to exhibit your work, experience, and technical abilities.
                 
                </>
              }
              ghLink="https://github.com/Sheikcoder/My_Dev_Portfolio_V2"
              demoLink="https://trichysheikabdulla007.vercel.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
