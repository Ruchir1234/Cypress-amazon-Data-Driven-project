pipeline {
    agent any

        parameters {
        string(name: 'SPEC', defaultValue: 'cypress/integration/**', description: 'cypress test files')
        choice(name: 'BROWSER', choices: ['chrome'], description: 'Pick the web browser')
    }

    stages {
        stage('Cypress Test Suite') {
                    steps {
                        sh "npm i"
                        npm run "cy:chrome"
                    }
            
        }
    }

       post {
        always {
           publishHTML([allowMissing: false, alwaysLinkToLastBuild: false, keepAll: true, reportDir: 'cypress/report', reportFiles: 'index.html', reportName: 'Amazon Cypress HTML Report', reportTitles: ''])
        }
    }
}