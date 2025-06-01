// config.js



const common = {
    require: ['features/step_definitions/**/*.js', 'features/support/**/*.js'],
    publishQuiet: true
  };
  


module.exports = {
    baseUrl: 'https://ecommerce-playground.lambdatest.io',
    localUrl: 'http://localhost:3000',
    credentials: {
      email: 'adarshguptaworks@gmail.com',
      password: 'password'
    },
    timeout: 5000,
    default: {
        ...common,
        format: ['progress', 'html:reports/cucumber-report.html'],
        parallel: 2
      },

      lt: {
        user: process.env.LT_USERNAME , 
        key: process.env.LT_ACCESS_KEY ,
        gridUrl: 'hub.lambdatest.com/wd/hub',
        capabilities: {
          browserName: 'Chrome',
          browserVersion: 'latest',
          'LT:Options': {
            platformName: 'Windows 10',
            build: 'Cucumber BDD Tests',
            name: 'Login Functionality Test',
            selenium_version: '4.0.0',
          }
        }
      }
     };
  