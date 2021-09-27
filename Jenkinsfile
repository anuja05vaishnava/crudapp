node {
    checkout scm

    docker.withRegistry('https://hub.docker.com/repository/docker/anuja05/crud_app1','github'){
    
       def customImage = docker.buid ("anuja05/crud_app1")

        customImage.push()

}
}
