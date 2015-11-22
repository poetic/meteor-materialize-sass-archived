# THIS REPO IS ARCHIVED
New repo: https://github.com/poetic/meteor-materialize-scss

# CHANGE LOG

- 2015-10-01 update package for METEOR@1.2 (*Breaking*)
  - fourseven:scss is updated to 3.3.3_1
  - scss.json is not used anymore.
  - index.scss is not autoupdated anymore, you need to manullay update index.scss.

- 2015-06-26 upgrade to [0.97.0](https://github.com/Dogfalo/materialize/tree/v0.97.0#changelog)
  -  Icon Change (*Breaking*):

    ```<i class="mdi-content-add"></i>``` is still supported.

    However you should use ```<i class="material-icons">add</i>``` instead as
    metioned in the materialize [doc](http://materializecss.com/icons.html).

# INSTALL
```
$ meteor add fourseven:scss
$ meteor add poetic:materialize-scss
$ meteor remove materialize:materialize # if you have materialize installed
```

# SASS
Add the following line to your last-loaded scss file (E.G. main.scss):
```
// If you want to override materialize sass variables you can uncomment the following:
@import "{poetic:materialize-scss}/bower_components/materialize/sass/components/_color.scss";
//$primary-color: color("blue", "lighten-2");

// import main scss file
@import "{poetic:materialize-scss}/bower_components/materialize/sass/materialize.scss";
```

# ICONS
Icons are automatically imported from this package.

You do NOT have to add an additional head element mentioned at http://materializecss.com/icons.html.

Read more about the MaterialIcons at https://google.github.io/material-design-icons/

# JAVASCRIPT
Javascript is automatically imported from this package.

# VERSIONS
- 1.1.x -> materialize version: 0.96.x
- 1.2.x -> materialize version: 0.97.x
- 1.3.x -> materialize version: 0.97.x, meteor version: 1.2.x
