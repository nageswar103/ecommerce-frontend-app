pipeline {
    agent any

    stages {
        stage('Checkout Code') {
            steps {
                 git branch: 'main', 
                     credentialsId: 'githubcrd', 
                     url: 'https://github.com/nageswar103/ecommerce-frontend-app.git'
            }
        }

        stage('Docker Build') {
            steps {
                script {
                    sh 'docker build -t venkathub/frontend-app:latest .'
                }
            }
        }

        stage('Docker Login & Push') {
            steps {
                script {
                    withCredentials([usernamePassword(credentialsId: 'dockercrd', usernameVariable: 'DOCKER_USERNAME', passwordVariable: 'DOCKER_PASSWORD')]) {
                    sh 'echo "$DOCKER_PASSWORD" | docker login -u "$DOCKER_USERNAME" --password-stdin'
                    sh 'docker push venkathub/frontend-app:latest'
                    }
                }
            }
        }
    }

    
}

