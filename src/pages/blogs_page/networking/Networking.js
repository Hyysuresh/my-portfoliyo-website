import React from "react";
import "./networking.css";
import networkImg from "/app/src/images/networking1.png";
import networkImg2 from "/app/src/images/networking2.png";

function Networking() {
  return (
    <div className="networking-page">

      <div className="networking-container">
        <h1 className="networking-title">Networking for DevOps</h1>

        <section className="network-section">
          <h2>What is Networking?</h2>
          <p>
            Computer networking is interconnection of multiple computing devices(nodes)
            that communicate with each other using networking protocols to transfer data 
            and share resources. 
          </p>
        </section>

        <section className="network-section">
          <h2>Why Networking is Important in DevOps</h2>
          <p> 
             Networking is important in Devops because Applications, containers, servers
                and cloud services communicate with each other network and understanding 
                networking helps Devops engineers to configure infrastructure, trubleshoot 
                connectivity issues and secure and reliable deployment of applications.
          </p>

          <div className="image-container">
          <img src={networkImg} alt="network diagram" className="network-img"/>
          </div>

          <ul>
            <li>Communication between microservices</li>
            <li>Docker container networking</li>
            <li>Kubernetes pod communication</li>
            <li>Cloud networking in AWS (VPC, Subnets)</li>
            <li>Load balancing and service discovery</li>
          </ul>
        </section>

        <section className="network-section">
            <h2> OSI model </h2>
            <p>
                The OSI model (Open Systems Interconnection) is a conceptual framework that
                describes how data travels from one device to another device in a network 
                through 7 defferent layers. Each layer a specific function such as data 
                transmission, routing management and application communication. 
                Understanding the OSI model helps DevOps engineers to troubleshoot network issues,
                optimize performance and design scalable and secure network architectures for 
                applications and services.
            </p>

            <div className="image-container1">
            <img src={networkImg2} alt="network osi model" className="network-osi-model"/>
            </div>

            <ul>
                <li>(Physical Layer):  Transmits raw bitstreams over a physical medium (e.g., cables, switches)</li>
                <li>
                    (Data Link Layer):  Manages node-to-node data transfer, error detection,
                                         and physical addressing (MAC addresses).
                </li>
                <li>
                    (Network Layer):  Handles logical addressing and routing,
                                     determining the best path for data (e.g., IP addresses, routers).

                </li>
                <li>
                    (Transport): Responsible for end-to-end communication,
                                flow control, segmentation, and error correction (e.g., TCP, UDP).
                </li>
                <li>
                    (Session Layer): Manages sessions (connections) between applications,
                                    establishing, maintaining, and terminating connections
                </li>
                <li>
                    (Presentation Layer): Handles data formatting, encryption,
                                            and compression to ensure the application layer can read the data.
                </li>
                <li>(Application Layer): Provides network services directly to applications (e.g., HTTP, FTP, SMTP).</li>
            </ul>
        </section>
        <section className="network-section">
          <h2>Key Networking Topics</h2>
          <ul>
            <li>IP Address</li>
            <li>DNS</li>
            <li>TCP vs UDP</li>
            <li>Ports</li>
            <li>Load Balancing</li>
          </ul>
        </section>

      </div>

    </div>
  );
}

export default Networking;