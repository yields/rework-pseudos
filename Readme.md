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
