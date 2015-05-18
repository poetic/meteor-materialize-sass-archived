Package.describe({
  name: 'yang2007chun:materialize-scss',
  version: '0.0.4',
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
  ];
  clientFiles = clientFiles.map(function(file){
    return clientDirectory + file;
  });
  api.addFiles(clientFiles, 'client');

  var serverDirectory = 'bower_components/materialize/sass/components/';
  var serverFiles = [
    'date_picker/_default.date.scss',
    'date_picker/_default.scss',
    'date_picker/_default.time.scss',
    '_buttons.scss',
    '_cards.scss',
    '_collapsible.scss',
    '_color.scss',
    '_dropdown.scss',
    '_form.scss',
    '_global.scss',
    '_grid.scss',
    '_icons-material-design.scss',
    '_materialbox.scss',
    '_mixins.scss',
    '_modal.scss',
    '_navbar.scss',
    '_normalize.scss',
    '_prefixer.scss',
    '_preloader.scss',
    '_roboto.scss',
    '_sideNav.scss',
    '_slider.scss',
    '_table_of_contents.scss',
    '_tabs.scss',
    '_toast.scss',
    '_tooltip.scss',
    '_typography.scss',
    '_variables.scss',
    '_waves.scss'
  ];
  serverFiles = serverFiles.map(function(file){
    console.log('file:', file);
    return clientDirectory + file;
  });
  serverFiles.push('bower_components/materialize/sass/materialize.scss');
  api.addFiles(clientFiles, 'server');
});
