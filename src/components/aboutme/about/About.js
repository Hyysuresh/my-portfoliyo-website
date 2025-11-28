import React from "react";
import { Container } from "react-bootstrap";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import Slide from "react-reveal/Slide";
import Fade from "react-reveal/Fade";
const About = () => {
  return (
    <div>
      <Container>
        {/* <Slide left > */}
        <Row className="mt-5">
          <Col md={5}>
            {/* <GreetingLottie animationPath="/lottie/coding.json" /> */}

            <Slide left>
              <lottie-player
                src="https://assets5.lottiefiles.com/packages/lf20_iv4dsx3q.json"
                background="transparent"
                speed="1"
                style={{ width: "100%", height: "90%" }}
                loop
                autoplay
              ></lottie-player>
            </Slide>
          </Col>

          <Col md={7}>
            <Fade duration={3000}>
              <p className="home-about-body">
                My name is <b className="purple"> SURESH GHASAL </b> 
                  and I am a <b className="purple">Computer Science and Devops </b> 
                    student at <b className="purple">Maharshi Dayanand Saraswati University </b>
                      in Ajmer,Rajasthan, India.
                <br />
                <br />
                        I am Devops Engineer such as &nbsp;
                  <b className="purple">
                    {" "}
                    linux, Git, Github, Docker, jenkins, Gitlab, Terrafrom, Ansible, kubernetes, Argocd, grafana, prometheus, Jira And Agentic Ai .{" "}
                  </b>
                <br />
                <br />
                Whenever possible, I apply my passion for automating deployments,
                building cloud-native infrastructure, and &nbsp;
                  <b className="purple">
                    {" "}
                    implementing modern DevOps workflows.
                  </b>
                <br />
                <br />In my free time, I explore new DevOps tools, 
                      experiment with automation, and work on cloud-native projects. and  &nbsp;
                  <b className="purple">Learning new  tools and Most of Agentic Ai. </b>
              </p>
            </Fade>
          </Col>
        </Row>
        {/* </Slide> */}
      </Container>
    </div>
  );
};

export default About;
