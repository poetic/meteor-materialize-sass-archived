# Install
```
$ meteor add fourseven:scss
$ meteor add yang2007chun:materialize-scss
```
Add the following line to [index.scss](https://github.com/fourseven/meteor-scss#controlling-load-order-since-200-beta_3) file used by fourseven:scss at the TOP of the file:
```
@import "./packages/materialize-scss/bower_components/materialize/sass/materialize.scss";
```
