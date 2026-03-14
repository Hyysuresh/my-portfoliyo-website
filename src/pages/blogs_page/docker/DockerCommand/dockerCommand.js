import React, { useState } from "react";
import "./dockerCommand.css";

const dockerCommands = [
  {
    category: "Images",
    commands: [
      {
        name: "docker pull",
        description: "Download image from Docker Hub",
        example: "docker pull nginx"
      },
      {
        name: "docker images",
        description: "List all docker images",
        example: "docker images"
      },
      {
        name: "docker rmi image_id",
        description: "Remove docker image",
        example: "docker rmi nginx"
      },
      {
        name: "docker rmi -f image_id",
        description: "Force remove docker image",
        example: "docker rmi -f nginx"
      },
      {
        name: "docker rmi $(docker images -aq)",
        description: "Remove all docker images",
        example: "docker rmi $(docker images -aq)"
      },
      {
        name: "docker build",
        description: "Build a docker image from a Dockerfile",
        example: "docker build -t myimage ."
      },
      {
        name: "docker tag",
        description: "Tag a docker image",
        example: "docker tag myimage username/myimage:tag"
      },
      {
        name: "docker push",
        description: "Push a docker image to Docker Hub",
        example: "docker push username/myimage:tag"
      },
      {
        name: "docker pull username/myimage:tag",
        description: "Pull a docker image from Docker Hub",
        example: "docker pull username/myimage:tag"
      },
      {
        name: "docker history image_id",
        description: "Show history of a docker image",
        example: "docker history nginx"
      },
      {
        name: "docker inspect image_id",
        description: "Show detailed information about a docker image",
        example: "docker inspect nginx"
      },
      {
        name: "docker save",
        description: "Save a docker image to a tar file",
        example: "docker save -o myimage.tar nginx"
      },
      {
        name: "docker load",
        description: "Load a docker image from a tar file",
        example: "docker load -i myimage.tar"
      },
      {
        name: "docker images --filter",
        description: "Filter docker images",
        example: "docker images --filter=reference='*nginx*'"
      },
      {
        name: "docker images --format",
        description: "Format the output of docker images",
        example: "docker images --format '{{.Repository}}:{{.Tag}}'"
      },
      {
        name: "docker images --no-trunc",
        description: "Show full image IDs",
        example: "docker images --no-trunc"
      },
      {
        name: "docker images --quiet",
        description: "Show only image IDs",
        example: "docker images --quiet"
      }
    ]
  },

  {
    category: "Containers",
    commands: [
      {
        name: "docker run",
        description: "Run a container",
        example: "docker run -p 80:80 nginx"
      },
      {
        name: "docker run -d",
        description: "Run a container in  background",
        example: "docker run -d -p 80:80 nginx"
      },
      {
        name:"docker run --name name",
        description: "Run a container with a name",
        example: "docker run --name mynginx -d -p 80:80 nginx"
      },
      {
        name: "docker run -v",
        description: "Run a container with a volume",
        example: "docker run -v /host/path:/container/path  nginx"
      },
      {
        name: "docker run --network",
        description: "Run a container with a specific network",
        example: "docker run --network mynetwork nginx"
      },
      {
        name: "docker run -e",
        description: "Run a container with environment variables",
        example: "docker run -e ENV_VAR=value nginx"
      },
      {
        name: "docker run -it",
        description: "Run a container in interactive mode",
        example: "docker run -it nginx /bin/bash"
      },
      {
        name: "docker run --rm",
        description: "Run a container and remove it after it exits",
        example: "docker run --rm nginx"
      },
      {
        name: "docker run -p 80:8080",
        description: "Run a container and map port 80 on the host to port 8080 in the container",
        example: "docker run -p 80:8080 nginx"
      },
      {
        name: "docker run --name mynginx -d -p 80:8080 --network mynetwork -v /host/path:/container/path -e ENV_VAR=value nginx",
        description: "Run a container with multiple options",
        example: "docker run --name mynginx -d -p 80:8080 --network mynetwork -v /host/path:/container/path -e ENV_VAR=value nginx"
      },
      {
        name: "docker ps",
        description: "List running containers",
        example: "docker ps"
      },
      {
        name: "docker ps -a",
        description: "List all containers",
        example: "docker ps -a"
      },
      {
        name: "docker logs container_id",
        description: "View container logs",
        example: "docker logs container_id"
      },
      {
        name: "docker inspect container_id",
        description: "Show detailed information about a container",
        example: "docker inspect container_id"
      },
      {
        name: "docker logs -f container_id",
        description: "Follow container logs",
        example: "docker logs -f container_id"
      },

      {
        name: "docker exec -it container_id sh",
        description: "Execute a command in a running container",
        example: "docker exec -it container_id sh"
      },
      {
        name: "docker start container_id",
        description: "Start a stopped container",
        example: "docker start container_id"
      },

      {
        name: "docker stop container_id",
        description: "Stop container",
        example: "docker stop container_id"
      },
      {
        name: "docker rm",
        description: "Remove container",
        example: "docker rm container_id"
      },
      {
        name: "docker rm -f container_id",
        description: "Force remove container",
        example: "docker rm -f container_id"
      },
      {
        name: "docker rm $(docker ps -aq)",
        description: "Remove all containers",
        example: "docker rm $(docker ps -aq)"
      },
      {
        name: "docker stop $(docker ps -aq)",
        description: "Stop all containers",
        example: "docker stop $(docker ps -aq)"
      }
    ]
  },

  {
    category: " Docker Systems Commands",
    commands: [
      {
        name: "docker system prune",
        description: "Remove all unused data (containers, images, networks, volumes)",
        example: "docker system prune"
      },
      {
        name: "docker system df",
        description: "Show docker disk usage",
        example: "docker system df"
      },
      {
        name: "docker system info",
        description: "Show docker system information",
        example: "docker system info"
      },
      {
        name: "docker system events",
        description: "Show docker system events",
        example: "docker system events"
      },
      {
        name: "docker system version",
        description: "Show docker version",
        example: "docker system version"    
      },
      {
        name: "docker system top",
        description: "Show docker system processes",
        example: "docker system top"
      },
      {
        name: "docker system df -v",
        description: "Show docker disk usage with details",
        example: "docker system df -v"
      },
      {
        name: "docker system prune -a",
        description: "Remove all unused data (containers, images, networks, volumes) including unused images",
        example: "docker system prune -a"
      }
    ]
  },
  {
    category: "Volumes",
    commands: [
      {
        name: "docker volume create",
        description: "Create volume",
        example: "docker volume create myvolume"
      },
      {
        name: "docker volume ls",
        description: "List volumes",
        example: "docker volume ls"
      },
      {
        name: "docker volume inspect",
        description: "show detailed information about a volume",
        example: "docker volume inspect myvolume"
      },
      {
        name: "docker volume rm",
        description: "Remove volume",
        example: "docker volume rm myvolume"
      },
      {
        name: "docker volume rm -f myvolume",
        description: "Force remove volume",
        example: "docker volume rm -f myvolume"
      },
      {
        name: "docker volume rm $(docker volume ls -q)",
        description: "Remove all volumes",
        example: "docker volume rm $(docker volume ls -q)" 
      },
      {
        name: "docker volume prune",
        description: "Remove all unused volumes",
        example: "docker volume prune"
      }
    ]
  },
  {
    category: "Networks",
    commands: [
      {
        name: "docker network create",
        description: "Create network",
        example: "docker network create mynetwork"
      },
      {
        name: "docker network ls",
        description: "List networks",
        example: "docker network ls"
      },
      {
        name: "docker network inspect",
        description: "show detailed information about a network",
        example: "docker network inspect mynetwork"
      },
      {
        name: "docker network rm",
        description: "Remove network",
        example: "docker network rm mynetwork"
      },
      {
        name: "docker network rm -f mynetwork",
        description: "Force remove network",
        example: "docker network rm -f mynetwork"
      },
      {
        name: "docker network rm $(docker network ls -q)",
        description: "Remove all networks",
        example: "docker network rm $(docker network ls -q)"
      },
      {
        name: "docker network prune",
        description: "Remove all unused networks",
        example: "docker network prune"
      },
      {
        name: "docker network connect",
        description: "Connect a container to a network",
        example: "docker network connect mynetwork container_id"
      },
      {
        name: "docker network disconnect",
        description: "Disconnect a container from a network",
        example: "docker network disconnect mynetwork container_id"
      }
    ]
  },
  {
    category: " Docker Compose Commands",
    commands: [
      {
        name: "docker-compose up",
        description: "Start services defined in docker-compose.yml",
        example: "docker-compose up"
      },
      {
        name: "docker-compose down",
        description: "Stop and remove containers, networks, volumes defined in docker-compose.yml",
        example: "docker-compose down"
      },
      {
        name: "docker-compose build",
        description: "Build or rebuild services defined in docker-compose.yml",
        example: "docker-compose build"
      },
      {
        name: "docker-compose logs",
        description: "View output from containers defined in docker-compose.yml",
        example: "docker-compose logs"
      },
      {
        name: "docker-compose ps",
        description: "List containers defined in docker-compose.yml",
      },
      {
        name: "docker-compose exec",
        description: "Execute a command in a running container defined in docker-compose.yml",
      },
      {
        name: "docker-compose up -d ",
        description: "Start services in detached mode",
        example: "docker-compose up -d"
      },
      {
        name: "docker-compose up --build",
        description: "Start services and build images before starting",
        example: "docker-compose up --build"
      },
      {
        name: "docker-compose down --volumes",
        description: "Stop and remove containers, networks, volumes defined in docker-compose.yml",
      },
      {
        name: "docker-compose down --rmi all",
        description: "Stop and remove containers, networks, images defined in docker-compose.yml",
      },
      {
        name: "docker-compose down --remove-orphans",
        description: "Stop and remove containers, networks defined in docker-compose.yml and remove containers for services not defined in docker-compose.yml",
      },
      {
        name: "docker-compose logs -f",
        description: "Follow log output from containers defined in docker-compose.yml",
        example: "docker-compose logs -f"

      },
      {
        name: "docker-compose build --pull",
        description: "Build images defined in docker-compose.yml and pull newer versions of base images",
        example: "docker-compose build --pull"
      },
      {
        name: "docker-compose build --no-cache",
        description: "Build images defined in docker-compose.yml without using cache",
        example: "docker-compose build --no-cache"
      }
    ]
  },
  {
    category: " Docker Registry Commands",
    commands: [
      {
        name: "docker login",
        description: "Login to a docker registry",
        example: "docker login"
      },
      {
        name: "docker logout",
        description: "Logout from a docker registry",
        example: "docker logout"
       },
       {
        name: "docker push",
        description: "Push an image to a docker registry",
        example: "docker push username/image_name"
       },
       {
        name: "docker login server",
        description: "Login to a specific docker registry server",
        example: "docker login myregistry.com"
       },
       {
        name: "docker logout server",
        description: "Logout from a specific docker registry server",
        example: "docker logout myregistry.com"
       },
       {
        name: "docker search image_name",
        description: "Search for an image in docker registry",
        example: "docker search nginx"
       }
    ]
  },
  {
    category: " Dockerfile instructions",
    commands: [
        {
            name: "FROM",
            description: "Specify the base image for the Docker image",
            example: "FROM nginx:latest"

        },
        {
            name: "WORKDIR",
            description: "Set the working directory for the Docker image",
            example: "WORKDIR /app"
        },
        {
            name: "COPY",
            description: "Copy files from the host machine to the Docker image",
            example: "COPY . /app"
        },
        {
            name: "RUN",
            description: "Run a command in the Docker image during build",
            example: "RUN apt-get update && apt-get install -y curl"
        },
        {
            name: "EXPOSE",
            description: "Specify the port that the container will listen on at runtime",
            example: "EXPOSE 80"
        },
        {
            name: "CMD",
            description: "Specify the command to run when the container starts",
            example: "CMD [\"nginx\", \"-g\", \"daemon off;\"]"
        },
        {
            name: "ENV",
            description: "Set environment variables in the Docker image",
            example: "ENV ENV_VAR=value"
        },
        {
            name: "VOLUME",
            description: "Create a mount point for a volume in the Docker image",
            example: "VOLUME /data"
        },
        {
            name: "ENTRYPOINT",
            description: "Specify the command to run when the container starts and make it non-overridable",
            example: "ENTRYPOINT [\"nginx\", \"-g\", \"daemon off;\"]"
        },
        {
            name: "ARG",
            description: "Define a build-time variable that can be passed to the Docker build command",
            example: "ARG VERSION=latest"
        },
        {
            name: "LABEL",
            description: "Add metadata to the Docker image in the form of key-value pairs",
            example: "LABEL maintainer=\"John Doe\" version=\"1.0\""
        },
        {
            name: "HEALTHCHECK",
            description: "Specify a command to check the health of the container at runtime",
            example: "HEALTHCHECK CMD curl --fail http://localhost/ || exit 1"
        }
    ]
  },
  {
    category: " Docker Scout Commands",
    commands: [
        {
            name: "docker scout",
            description: "Docker Scout is a tool that provides insights and recommendations for optimizing Docker images and containers. It helps identify potential issues, security vulnerabilities, and performance bottlenecks in your Docker environment.",
            example: "docker scout"
        },
        {
            name: "docker scout check",
            description: "Check a Docker image for potential issues and get recommendations for optimization",
            example: "docker scout check myimage"

        },
        {
            name: "docker scout compare",
            description: "Compare two Docker images and get insights on differences and potential optimizations",
            example: "docker scout compare myimage:latest myimage:previous"
        },
        {
            name: "docker scout quickview",
            description: "Get a quick overview of a Docker image's contents, including layers, size, and potential issues",
            example: "docker scout quickview myimage"
        },
        {
            name: "docker scout recommned",
            description: "Get recommendations for optimizing a Docker image based on best practices and security guidelines",
            example: "docker scout recommend myimage"
        }
    ]
  }
];

function DockerCommands() {

  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const copyCommand = (text,e) => {

    navigator.clipboard.writeText(text);

    for(let i=0;i<20;i++){

        const heart=document.createElement("div");

        heart.innerHTML="💖";

        heart.style.position="fixed";

        heart.style.left=e.clientX + (Math.random()*60-30)+"px";

        heart.style.top=e.clientY + (Math.random()*60-30)+"px";

        heart.style.fontSize="18px";

        heart.style.pointerEvents="none";

        heart.style.zIndex="9999";

        heart.style.transition="all 1.2s ease";

        document.body.appendChild(heart);

          setTimeout(()=>{

            heart.style.transform="translateY(-120px) scale(1.5)";
            heart.style.opacity="0";

          },10);

          setTimeout(()=>{
            heart.remove();
          },1200);
    }

  };

  const categories = ["All", ...dockerCommands.map(c => c.category)];

  return (
    <div className="docker-page">

      <h1>Docker Commands Guide</h1>

      {/* Search */}
      <input
        type="text"
        placeholder="Search docker command..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      {/* Filter */}
      <div>
        {categories.map((cat, index) => (
          <button key={index} onClick={() => setFilter(cat)}>
            {cat}
          </button>
        ))}
      </div>

      {/* Commands */}
      {dockerCommands
        .filter(section => filter === "All" || section.category === filter)
        .map((section, index) => (

        <div key={index}>

          <h2>{section.category}</h2>

          {section.commands
            .filter(cmd =>
              cmd.name.toLowerCase().includes(search.toLowerCase())
            )
            .map((cmd, i) => (

            <div key={i}>

              <h3>{cmd.name}</h3>
              <p>{cmd.description}</p>

              <div>
                <code>{cmd.example}</code>

                <button onClick={(e)=>copyCommand(cmd.example,e)}>
                Copy
                </button>

              </div>

            </div>

          ))}

        </div>

      ))}

    </div>
  );
}

export default DockerCommands;