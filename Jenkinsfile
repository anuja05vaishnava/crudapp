node{
   stage('SCM Checkout'){
       git (credentialsId: 'github', url: 'https://github.com/anuja05vaishnava/crudapp', branch:'main')
   }
  
   stage('Build Docker Image'){
     sh 'docker build -t anuja05/crud_app1:latest .'
   }
   stage('Push Docker Image'){
    withCredentials([string(credentialsId: '', variable: 'dockerHubPwd')]) {
     sh "docker login -u anuja05 -p ${dockerHubPwd}"
}
     sh 'docker push anuja05/crud_app1:latest'
   }

}
