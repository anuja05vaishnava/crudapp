node{
   stage('SCM Checkout'){
       git (credentialsId: 'github', url: 'https://github.com/anuja05vaishnava/crudapp', branch:'main')
   }
  
   stage('Build Docker Image'){
     bat 'docker build -t anuja05/crud_app1:latest .'
   }
   stage('Push Docker Image'){
    withCredentials([string(credentialsId: '', variable: 'dockerHubPwd')]) {
     bat "docker login -u anuja05 -p 8839242932Aa@"
}
     bat 'docker push anuja05/crud_app1:latest'
   }

}
