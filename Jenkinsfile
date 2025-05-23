pipeline {
    agent any
    stages {
        stage('Debug Environment') {
            steps {
                sh '''
                    echo "PATH is: $PATH"
                    ls -l /usr/bin/docker || echo "Docker binary not found"
                    /usr/bin/docker --version || echo "Docker version failed"
                    pwd
                    ls -l /var/jenkins_home/workspace/Node-DevOps-Pipeline || echo "Workspace not found"
                '''
            }
        }
        stage('Build Docker Image') {
            steps {
                sh 'export PATH=$PATH:/usr/bin && /usr/bin/docker build -t node-devops-app:latest .'
            }
        }
        stage('Run Docker Container') {
            steps {
                sh 'export PATH=$PATH:/usr/bin && /usr/bin/docker rm -f node-app-container || true'
                sh 'export PATH=$PATH:/usr/bin && /usr/bin/docker run -d -p 3000:3000 --name node-app-container node-devops-app:latest'
            }
        }
    }
}
