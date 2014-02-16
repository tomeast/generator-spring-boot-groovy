'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var chalk = require('chalk');


var SpringBootGroovyGenerator = yeoman.generators.Base.extend({
  init: function () {
    this.pkg = yeoman.file.readJSON(path.join(__dirname, '../package.json'));
    this.on('end', function () {
      if (!this.options['skip-install']) {
      }
    });
  },

  askFor: function () {
    var done = this.async();

    // have Yeoman greet the user
    console.log(this.yeoman);

    // replace it with a short and sweet description of your generator
    console.log(chalk.magenta('Generate a project configured to use Spring Boot + Groovy.'));

    var prompts = [
    {
      name: 'springBootVersion',
      message: 'What version of Spring Boot would you like?',
      default: '1.0.0.RC3'
    },
    {
      name: 'projectName',
      message: 'What is your project name?',
    },
    {
      name: 'dbName',
      message: 'What is your database name?',
    },
    {
      name: 'dbUsername',
      message: 'What is your database username?',
    },
    {
      name: 'dbPassword',
      message: 'What is your database password?',
    }];

    this.prompt(prompts, function (props) {
      this.springBootVersion = props.springBootVersion;
      this.projectName = props.projectName;
      this.dbName = props.dbName;
      this.dbUsername = props.dbUsername;
      this.dbPassword = props.dbPassword;
      done();
    }.bind(this));
  },

  app: function () {
    //this.template('.gitignore', '.gitignore');
    //this.template('start.sh', 'start.sh');
    var srcDir = 'src/main/groovy/' + this.projectName;
    this.mkdir(srcDir);
    this.template('build.gradle', 'build.gradle');
    this.template('Application.groovy', srcDir + '/Application.groovy');
    this.template('ApplicationInitializer.groovy', srcDir + '/ApplicationInitializer.groovy');
    var resourceDir = 'src/main/resources/';
    this.mkdir(resourceDir + 'db/changelog/');
    this.template('application.properties', resourceDir + 'application.properties');
    this.template('db.changelog-master.xml', resourceDir + 'db/changelog/db.changelog-master.xml');
  },

  projectfiles: function () {
    this.copy('.gitignore', '.gitignore');
    this.copy('start.sh', 'start.sh');
  }
});

module.exports = SpringBootGroovyGenerator;
