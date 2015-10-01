- Fixd bug:
- Changed fonts location
```
bower_components/materialize/sass/components/_variables.scss:40
$roboto-font-path: "/packages/poetic_materialize-scss/bower_components/materialize/font/roboto/";
$icons-font-path: "/packages/poetic_materialize-scss/bower_components/materialize/font/material-design-icons/";
```

- Change date picker bug: obscure month and year
```
bower_components/materialize/sass/components/date_picker/_default.date.scss
.picker__select--month.browser-default {
  display: inline;
  background-color: #FFFFFF;
  width: 40%; // 42%
}
.picker__select--year.browser-default {
  display: inline;
  background-color: #FFFFFF;
  width: 25%; // 26%
}
```

- Change bower_components/materialize/sass/materialize.scss

```
@import "components/prefixer";
@import "{poetic:materialize-scss}/bower_components/materialize/sass/components/prefixer";
```
