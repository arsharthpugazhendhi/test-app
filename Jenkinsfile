pipeline {
    agent { label 'MOBILEAPPNODE8' }

    environment {
        ANDROID_HOME = '/home/appuser/android-sdk'
        PATH = "$ANDROID_HOME/cmdline-tools/latest/cmdline-tools/bin:$ANDROID_HOME/platform-tools:$PATH"
    }

    stages {
        stage('Checkout') {
            steps {
                checkout([$class: 'GitSCM',
                         branches: [[name: "*/main"]],
                         userRemoteConfigs: [[url: 'https://github.com/arsharthpugazhendhi/test-app.git',
                                              credentialsId: 'pegasus-token']]])
            }
        }
