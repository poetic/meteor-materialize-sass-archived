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

