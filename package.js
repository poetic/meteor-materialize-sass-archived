Package.describe({
  name: 'ayang2007chun:materialize-scss',
  version: '0.0.2',
  // Brief, one-line summary of the package.
  summary: 'materialize sass',
  // URL to the Git repository containing the source code for this package.
  git: 'https://github.com/poetic/meteor-materialize-sass',
  // By default, Meteor will default to using README.md for documentation.
  // To avoid submitting documentation, set this field to null.
  documentation: 'README.md'
});

Package.onUse(function(api) {
  api.versionsFrom('METEOR@1.0');
  api.use('jquery', 'client');

  var clientDirectory = 'bower_components/materialize/';
  var clientFiles = [
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
  clientFiles = clientFiles.map(function(file){
    return clientDirectory + file;
  });
  api.addFiles(clientFiles, 'client');

  var serverDirectory = 'bower_components/materialize/sass/components/';
  var serverFiles = [
    'date_picker/_default.date.scss*',
    'date_picker/_default.scss*',
    'date_picker/_default.time.scss*',
    '_buttons.scss*',
    '_cards.scss',
    '_collapsible.scss',
    '_color.scss',
    '_dropdown.scss',
    '_form.scss',
    '_global.scss',
    '_grid.scss',
    '_icons-material-design.scss*',
    '_materialbox.scss',
    '_mixins.scss',
    '_modal.scss',
    '_navbar.scss',
    '_normalize.scss',
    '_prefixer.scss*',
    '_preloader.scss',
    '_roboto.scss',
    '_sideNav.scss',
    '_slider.scss',
    '_table_of_contents.scss',
    '_tabs.scss*',
    '_toast.scss',
    '_tooltip.scss',
    '_typography.scss*',
    '_variables.scss',
    '_waves.scss'
  ];
  serverFiles = serverFiles.map(function(file){
    return clientDirectory + file;
  });
  serverFiles.push('bower_components/materialize/sass/materialize.scss');
  api.addFiles(clientFiles, 'client');
});
