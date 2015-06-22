# INSTALL
```
$ meteor add fourseven:scss
$ meteor add yang2007chun:materialize-scss
$ meteor remove materialize:materialize # if you have materialize installed
```

## SASS
Add the following line to [index.scss](https://github.com/fourseven/meteor-scss#controlling-load-order-since-200-beta_3) file used by fourseven:scss at the TOP of the file:
```
// You can override colors BEFORE materialize.scss:
// $primary-color: blue;

// You can NOT use materialize color mixins since they are not imported yet.
// WRONG! $primary-color: color("materialize-red", "lighten-2");

// @import "your-awesome-color-varialbes.scss"
@import ".meteor/local/build/programs/server/assets/packages/yang2007chun_materialize-scss/bower_components/materialize/sass/materialize.scss";
```

## JAVASCRIPT
Javascript is automatically imported from this package.

# NOTE
- materialize version: 0.96.1
- As mentioned at [bootstrap3-sass](https://github.com/englue/meteor-bootstrap3-sass#to-use). If you see an error saying the above file is not found, try restart your server.
