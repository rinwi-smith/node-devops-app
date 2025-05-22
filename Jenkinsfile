pipeline {
    agent any
    stages {
        stage('Build Docker Image') {
            steps {
                sh 'docker build -t node-devops-app:latest .'
            }
        }
        stage('Test') {
            steps {
                sh 'docker run --rm node-devops-app:latest npm test'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'docker rm -f node-app-container || true'
                sh 'docker run -d -p 3000:3000 --name node-app-container node-devops-app:latest'
            }
        }
    }
}
