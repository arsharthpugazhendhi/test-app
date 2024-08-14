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
                         branches: [[name: "*/MAVIC-TSE-SDK-12.0.1/UAT-STABLE"]],
                         userRemoteConfigs: [[url: 'https://github.com/Tata-Consumer-Products-Limited/Tcpl-Mavictse-Devops.git',
                                              credentialsId: 'pegasus-token']]])
            }
        }
