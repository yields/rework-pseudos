
[![Build Status](https://travis-ci.org/yields/rework-pseudos.png)](https://travis-ci.org/yields/rework-pseudos)


# rework-pseudos

rework pseudo elements support

## Installation

    $ npm install rework-pseudos

## Example

```js
rework(css)
  .use(pseudos())
  .toString();
```

### style.css

```css

/**
 * Comment.
 */

::selection {
  background: #ddd;
}

::progress {
  background: #ddd;
}

.text::selection {
  background: #eee;
}

input::placeholder,
textarea::placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

@media print {
  ::placeholder,
  .text {
    font-weight: bold;
  }
}

```

yields

```css

/**
 * Comment.
 */

::-moz-selection {
  background: #ddd;
}

::selection {
  background: #ddd;
}

::-ms-fill {
  background: #ddd;
}

::-moz-progress-bar {
  background: #ddd;
}

::-webkit-progress-bar {
  background: #ddd;
}

.text::-moz-selection {
  background: #eee;
}

.text::selection {
  background: #eee;
}

input::-moz-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

input:-ms-input-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

input::-webkit-input-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

textarea::-moz-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

textarea:-ms-input-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

textarea::-webkit-input-placeholder {
  font: 200 14px/1.6 'Helvetica Neue';
}

```

### ::selection

```css

::selection {
  color: yellow;
}

```

yields

```css

::selection {
  color: yellow;
}

::-moz-selection {
  color: yellow;
}

```

### ::placeholder

```css

::placeholder {
  color: yellow
}

```

yields

```css
::-webkit-input-placeholder {
  color: yellow;
}

:-ms-input-placeholder {
  color: yellow;
}

::-moz-placeholder {
  color: yellow;
}
```

### ::progress

```css

::progress {
  background: yellow;
}

```

yields

```css

::-webkit-progress-bar {
  background: yellow;
}

::-moz-progress-bar {
  background: yellow;
}

::-ms-fill {
  background: yellow
}

```

[See all pseudo elements](https://github.com/yields/rework-pseudos/blob/master/lib/map.json)

## References

  - [firefox pseudo elements](https://gist.github.com/yields/6648240)
  - [webkit pseudo elements](https://gist.github.com/yields/6648208)
  - [trident pseudo elements](http://dev.bowdenweb.com/css/pseudo/ms-trident-vendor-prefixed-pseudo-elements.html)

## Tests

```bash
$ make test
```

## License

(MIT)
