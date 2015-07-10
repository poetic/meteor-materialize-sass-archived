# RENAMED
Please use the new package at https://atmospherejs.com/poetic/materialize-scss

# CHANGE LOG
- 2015-06-26 upgrade to [0.97.0](https://github.com/Dogfalo/materialize/tree/v0.97.0#changelog)
  -  Icon Change (*Breaking*):

    ```<i class="mdi-content-add"></i>``` is still supported.

    However you should use ```<i class="material-icons">add</i>``` instead as
    metioned in the materialize [doc](http://materializecss.com/icons.html).

# INSTALL
```
$ meteor add fourseven:scss
$ meteor add yang2007chun:materialize-scss
$ meteor remove materialize:materialize # if you have materialize installed
```

# SASS
Add the following line to [index.scss](https://github.com/fourseven/meteor-scss#controlling-load-order-since-200-beta_3) file used by fourseven:scss at the TOP of the file:
```
// You can override colors BEFORE materialize.scss:
// $primary-color: blue;

// You can NOT use materialize color mixins since they are not imported yet.
// WRONG! $primary-color: color("materialize-red", "lighten-2");

// @import "your-awesome-color-varialbes.scss"
@import ".meteor/local/build/programs/server/assets/packages/yang2007chun_materialize-scss/bower_components/materialize/sass/materialize.scss";
```

# ICONS
Icons are automatically imported from this package.

You do NOT have to add an additional head element mentioned at http://materializecss.com/icons.html.

Read more about the MaterialIcons at https://google.github.io/material-design-icons/

# JAVASCRIPT
Javascript is automatically imported from this package.

# NOTE
- As mentioned at [bootstrap3-sass](https://github.com/englue/meteor-bootstrap3-sass#to-use). If you see an error saying the above file is not found, try restart your server.
- If you update and miss the icons font, you should run ```meteor reset``` to get a fresh build.

# VERSIONS
- 1.1.x -> materialize version: 0.96.x
- 1.2.x -> materialize version: 0.97.x
