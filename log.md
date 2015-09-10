- Fixd bug:
- Changed fonts location
```
bower_components/materialize/sass/components/_variables.scss:40
$roboto-font-path: "/packages/poetic_materialize-scss/bower_components/materialize/font/roboto/";
$icons-font-path: "/packages/poetic_materialize-scss/bower_components/materialize/font/material-design-icons/";
```

- Change date picker bug: obscure month and year
```
bower_components/materialize/sass/components/date_picker/_default.scss
.picker__select--year.browser-default {
  width: 26%
}

.picker__select--month.browser-default {
  width: 42%
}
```
