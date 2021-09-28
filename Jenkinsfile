node{
   stage('SCM Checkout'){
       git (credentialsId: 'github', url: 'https://github.com/anuja05vaishnava/crudapp', branch:'main')
   }
  
   stage('Build Docker Image'){
     bat 'docker build -t anuja05/crud_app1:latest .'
   }
   stage('Push Docker Image'){
    withCredentials([usernamePassword(credentialsId: 'dockerhub', passwordVariable: 'pwd', usernameVariable: 'username')]) {
     bat "docker login -u ${username} -p ${pwd}"

    
    }
     bat 'docker push anuja05/crud_app1:latest'
   }

stage('Run Container on Dev Server'){
     sshagent(['dev-server']) {
       bat "ssh -o StrictHostKeyChecking=no ec2-user@ec2-18-219-72-45.us-east-2.compute.amazonaws.com 'docker run -p 8080:8080 anuja05/crud_app1:latest'"
    }
   }


}
