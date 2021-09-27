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

}
