# INSTALL
```
$ meteor add fourseven:scss
$ meteor add yang2007chun:materialize-scss
```
Add the following line to [index.scss](https://github.com/fourseven/meteor-scss#controlling-load-order-since-200-beta_3) file used by fourseven:scss at the TOP of the file:
```
// If you want to override colors, you can import color variables before materialize.scss
// @import "your-awesome-color-varialbes.scss"
@import ".meteor/local/build/programs/server/assets/packages/yang2007chun_materialize-scss/bower_components/materialize/sass/materialize.scss";
```

# NOTE
As mentioned at [bootstrap3-sass](https://github.com/englue/meteor-bootstrap3-sass#to-use). If you see an error saying the above file is not found, try restart ther server.

# DEV LOG
- Fixd bug:
```
// bower_components/materialize/sass/components/_icons-material-design.scss:780
// https://github.com/Dogfalo/materialize/issues/1079
@each $mdi-icon-name, $mdi-icon-value in $mdi-list-icons {
  .#{$mdi-prefix}#{$mdi-icon-name}:before {
    content: "\""+ $mdi-icon-value +"\"";
  }
}
```
- Changed fonts location
```
bower_components/materialize/sass/components/_variables.scss:40
$roboto-font-path: "/packages/yang2007chun_materialize-scss/bower_components/materialize/font/roboto/";
$icons-font-path: "/packages/yang2007chun_materialize-scss/bower_components/materialize/font/material-design-icons/";
```
