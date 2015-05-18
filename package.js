Package.describe({
  name: 'yang2007chun:materialize-scss',
  version: '0.0.1',
  // Brief, one-line summary of the package.
  summary: 'materialize sass',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/poetic/meteor-materialize-sass',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('1.1.0.2');
  api.use('jquery', 'client');

  var directory = 'bower_components/materialize/';
  var files = [
    'font/material-design-icons/Material-Design-Icons.eot',
    'font/material-design-icons/Material-Design-Icons.svg',
    'font/material-design-icons/Material-Design-Icons.ttf',
    'font/material-design-icons/Material-Design-Icons.woff',
    'font/material-design-icons/Material-Design-Icons.woff2',
    'font/roboto/Roboto-Bold.ttf',
    'font/roboto/Roboto-Bold.woff',
    'font/roboto/Roboto-Bold.woff2',
    'font/roboto/Roboto-Light.ttf',
    'font/roboto/Roboto-Light.woff',
    'font/roboto/Roboto-Light.woff2',
    'font/roboto/Roboto-Medium.ttf',
    'font/roboto/Roboto-Medium.woff',
    'font/roboto/Roboto-Medium.woff2',
    'font/roboto/Roboto-Regular.ttf',
    'font/roboto/Roboto-Regular.woff',
    'font/roboto/Roboto-Regular.woff2',
    'font/roboto/Roboto-Thin.ttf',
    'font/roboto/Roboto-Thin.woff',
    'font/roboto/Roboto-Thin.woff2',
    'bin/materialize.js',
  ];

  files = files.map(function(file){
    return directory + file;
  });

  api.addFiles(files, 'client');
});

Package.onTest(function(api) {
  api.use('tinytest');
  api.use('poetic:materialize-scss');
  api.addFiles('materialize-scss-tests.js');
});
