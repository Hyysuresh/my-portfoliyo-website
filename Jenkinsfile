pipeline {
    agent any
    
    stages {
        stage("git clone") {
            steps {
                git branch: 'main',
                   credentialsId: "gitHubCreds",
                   url: 'https://github.com/Hyysuresh/my-portfoliyo-website.git'
            } 
        }
        stage("build") {
            steps {
                sh "docker build -t my-portfolio ."
                echo "---------build is sussecfully---------"
            }
        }
        stage("test") {
            steps {
                echo "test is sussecfully"
            }
        }
        stage("push to DockerHub") {
            steps {
               withCredentials([usernamePassword(
                 credentialsId:"dockerHubCreds",
                 usernameVariable:"dockerHubUser",
                 passwordVariable:"dockerHubPass"
               )]){
                 sh "docker login -u ${env.dockerHubUser}'\n' -p ${env.dockerHubPass}"
                 sh "docker image tag my-portfolio ${env.dockerHubUser}/my-portfolio"
                 sh "docker push ${env.dockerHubUser}/my-portfolio"
               }
            }
        }
        stage("deploy") {
            steps {
                sh "docker run -d -p 3000:3000 my-portfolio"
            }
        }
    }
}
