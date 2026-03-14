import React from "react";
import "./docker.css";
import dockerImg from "../../../../images/docker1.png";
import dockerImg2 from "../../../../images/docker2.png";
import dockerImg3 from "../../../../images/docker3.webp";
import dockerImg4 from "../../../../images/docker4.png";
function Docker() {
  return (
    <div className="docker-page">

      <div className="docker-container">
        <h1 className="docker-title"> DOCKER </h1>

        <section className="docker-section">
          <h2>History of Docker?</h2>
          <p>
            Docker was created by Solomon Hykes and introduced in 2013 while he was working at the company dotCloud.

            Docker was first presented at the PyCon conference in 2013. Initially, it used Linux Containers (LXC) as its core technology.

            The main goal of Docker was simple:

            “Build once, run anywhere.”

            Docker made it possible to package applications with their dependencies and run them consistently on any system.

            In 2014, Docker Inc. was founded to further develop and promote the Docker platform. Docker quickly gained popularity in the software development community due to its ease of use and ability to simplify application deployment.

            Over the years, Docker has evolved and expanded its features, becoming a fundamental tool in the DevOps ecosystem. It has played a significant role in the adoption of containerization and microservices architecture in modern software development.
          </p>
        </section>

        <section className="docker-section">
          <h2>What is Docker</h2>
            <p> 
                Docker is an OS‑level virtualization (or containerization) platform, which allows applications to share the host OS kernel instead of running a separate guest OS like in traditional virtualization. This design makes Docker containers lightweight, fast, and portable, while keeping them isolated from one another.
            </p>
            <ul>
                <li>Written in the Go programming language.</li>
                <li>Supports Windows, macOS, and Linux installations (Docker Engine runs natively on Linux).</li>
                <li>Solves the “works on my machine” problem by ensuring code runs identically across environments.</li>
                <li>Unlike VMware (hardware‑level virtualization), Docker operates at the OS level.</li>
            </ul>
        </section>

        <section className="docker-section">
            <h2> Why need Docker </h2>
            <p>
                In the past, code run devloper sides but faild to run in production environment bacause environment were different.
                Docker solve this problem this by ensuring the application runs exactly the same way in development, testing and production ,ragardless of underly server.
            </p>
        </section>

        <section className="docker-section">
            <h2> What is Difference in Docker And Virtual Machines</h2>
                <p>
                    Imagine you need to ship a house to another country. If you move the entire house, it becomes heavy,
                    expensive, and slow. This is how Virtual Machines (VMs) work. They carry the entire operating system
                    along with the application.
                    Docker is like moving into a furnished apartment. You bring only your personal items, because the building
                    already provides electricity, plumbing, and other basic infrastructure. Similarly,
                    Docker wraps your application in a container, which is a lightweight package
                    that includes everything needed to run the application, while sharing the heavy parts of
                    the operating system with the host computer.
                </p>
          <div className="image-container">
          <img src={dockerImg} alt=" differece docker and VMs " className="docker-img"/>
          </div>
        </section>

        <section className="docker-section">
            <h2> Docker key Consept</h2>
            <h3> Container </h3>
            <p>
                A Container is a lightweight, standalone package of software that includes code, runtime,
                system tools, libraties and settings needed to run on application.
                Containers are isolated from each other and the host system, ensuring consistency across different environments.
            </p>
            <h3> Image </h3>
            <p>
                A blueprint and template for creating Docker containers. An image is Read-Only. 
                a container is an instance of an image that can be run, stopped, and deleted.
                Images are built using a Dockerfile, which contains instructions for assembling the image.
            </p>
            <h3>Docker Engine </h3>
            <p>
                The core software install on the host machine that build and run Docker containers.
                 It provides the runtime environment for containers and manages container lifecycle.
            </p>
            <h3>Docker Daemon </h3>
            <p>
                A background process that runs on the host machine and manages Docker containers,
                images, networks and storage volumes.

            </p>
            <h3>Docker CLI </h3>
            <p>
                A command-line interface that allows users to interact with the Docker Daemon and manage Docker resources.
            </p>
            <h3> REST API </h3>
            <p>
                Specifies interfaces that programs and the CLI use to communicate with the daemon.
            </p>
        </section>

        <section className="docker-section">
            <h2> Docker Networking  </h2>
            <p>
                Docker networking is the system that allows Docker containers to communicate with each other,
                with the Docker host, and with the outside world. It's a powerful feature that enables you to build complex,
                multi-container applications that are isolated yet interconnected.
                When you create a container, Docker gives it its own isolated network environment.
                This means each container has its own IP address and network interfaces. By default,
                containers running on the same host can communicate with each other without needing to expose ports to the host machine, 
                creating a secure virtual network.
            </p>
            <p>
                just like computer need wifi talk to each other, conainers need Docker Newworking by dafault, containers are isolated.
                Networking allows them to talk to each other and the outside world(like internet or other services).

            </p>
            <div className="image-container">
                <img src={dockerImg3} alt=" docker networking " className="docker-img"/>
            </div>
            <h3> Types of Docker Networking  </h3>
            <h4> Bridge </h4>
            <p>
                A private internal network on the host machine. Containers on the same bridge can talk to each other. 
            </p>
            <h4> Host </h4>
            <p>
                Containers share the exact same network ip/port as the physical host machine. 
            </p>
            <h4> Overlay </h4>
            <p>
                Allows containers running on different Docker hosts to communicate securely over a network. 
            </p>
            <h4> Macvlan </h4>
            <p>
                Assigns a unique MAC address to each container, allowing it to appear as a physical device on the network. 
            </p>
            <h4> Port Mapping </h4>
            <p>
                Punching a holes in the firewall to let traffic into the container.
            </p>
            <div className="image-container">
                <img src={dockerImg4} alt=" docker networking " className="docker-img"/>
            </div>

        </section>
        <section className="docker-section">
            <h2> Docker Volumes  </h2>
            <p>
                Docker Volumes are persistent data stores for containers,
                created and managed by Docker, They provide a reliable and efficient way to ensure data persistence when working with containers.
                Docker volumes are file systems that are mounted on Docker containers to preserve the data generated by the container.
            </p>
            <h3> Why this Matters in Devops </h3>
            <p>
                database! if you run a database in a container and delete the container to upgrade it, you will lose all your custemer data
                unless you use Docker Volumes to persist the data outside the container.

            </p>
            <div className="image-container">
                <img src={dockerImg2} alt=" docker volumes " className="docker-img"/>
            </div>
           </section>

           <section className="docker-section">
                <h2> Docker Compose </h2>
                <p>
                    Docker Compose is an orchestration tool for defining and running multi-container Docker applications.
                    Imagine you have a complex application with separate components a web server, a backend API,
                    a database, and a caching layer. Each component runs in its own isolated container.
                    The challenge isn't just running these containers individually, but making them work together as a single,
                    cohesive application.
                </p>
            </section>
      </div>
    </div>
  );
}

export default Docker;