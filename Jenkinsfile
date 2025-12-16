@Library('SharedLib') _
pipeline{
    agent {label 'mukesh'}
    environment{
        DOCKER_IMAGE_NAME = 'hyysuresh/my-portfolio'
        DOCKER_IMAGE_TAG = "${BUILD_NUMBER}"
    }
    
    stages {
        stage('Cleanup Workspace'){
            steps {
                script {
                    cleanWs()
                }
            }
        }
        stage('clone code') {
            steps{
                git branch: 'main',
                credentialsId: 'gitHubCreds',
                url: 'https://github.com/Hyysuresh/my-portfoliyo-website.git'
            }
        }
        stage('docker build') {
            steps{
                script {
                    docker_build(
                       imageName: env.DOCKER_IMAGE_NAME,
                       imageTag: env.DOCKER_IMAGE_TAG,
                       dockerfile: 'Dockerfile',
                       context: '.'
                    )
                }
            }
        }
        stage('dockerhub push') {
            steps {
                withCredentials([usernamePassword(
                credentialsId:'dockerHubCreds',
                usernameVariable: 'dockerHubUser',
                passwordVariable: 'dockerHubPass'
                )]){
                    sh "docker login -u ${env.dockerHubUser}'\n' -p ${env.dockerHubPass}"
                    sh "docker image tag my-portfolio ${env.dockerHubUser}/my-portfolio"
                    sh "docker push ${env.dockerHubUser}/my-portfolio"
                }
            }
        }
        stage('deploy') {
            steps {
                sh 'docker run -d -p 3000:3000 my-portfolio'
            }
        }
        stage('code checked with trivy') {
            steps {
                sh 'trivy fs /home/ubuntu/workspace/mycicd -o scan.html'
            }
        }
    }
post {
        success {
            script {
               emailext from: 'sghasal5@gmail.com',
                        to: 'hyyghasalsaab@gmail.com',
                        subject: 'My Portfolio wesite has been update and deployed',
                        body: "your appliction successfull deploy"
               
            }
        }
        failure {
            script {
                emailext from: 'sghasal5@gmail.com',
                to: 'hyyghasalsaab@gmail.com',
                subject: 'your portfolio wesite has been failed',
                body: 'o no your appliction is failed please check code'
            }
        }
    }
}
