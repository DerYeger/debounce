<h1 align="center">@yeger/debounce</h1>

<p align="center">
    A tiny TypeScript library for debouncing functions.
</p>

<p align="center">
  <a href="https://github.com/DerYeger/debounce/actions/workflows/ci.yml">
    <img alt="CI" src="https://img.shields.io/github/workflow/status/DerYeger/debounce/CI?label=ci&logo=github&color=#4DC71F">
  </a>
  <a href="https://www.npmjs.com/package/@yeger/debounce">
    <img alt="NPM" src="https://img.shields.io/npm/v/@yeger/debounce?logo=npm">
  </a>
  <a href="https://codecov.io/gh/DerYeger/debounce">
    <img alt="Coverage" src="https://codecov.io/gh/DerYeger/debounce/branch/master/graph/badge.svg?token=p35W6u2noe">
  </a>
  <a href="https://lgtm.com/projects/g/DerYeger/debounce">
    <img alt="LGTM Grade" src="https://img.shields.io/lgtm/grade/javascript/github/DerYeger/debounce?logo=lgtm">
  </a>
  <a href="https://opensource.org/licenses/MIT">
    <img alt="MIT" src="https://img.shields.io/npm/l/@yeger/debounce?color=%234DC71F">
  </a>
  <a href="https://bundlephobia.com/package/@yeger/debounce">
    <img alt="npm bundle size" src="https://img.shields.io/bundlephobia/minzip/@yeger/debounce">
  </a>
</p>

## Features

- ✨ **Debounce** any callback. Usefull for preventing flickering when using `ResizeObserver`.
- ⏱️ Optional **delays** for callback invocations.
- 🐭 **Tiny**.

## Installation

```bash
# yarn
$ yarn add @yeger/debounce

# npm
$ npm install @yeger/debounce
```

## Usage

```typescript
import { debounce } from '@yeger/debounce'

// Take an existing function
function resize(): void {
  // ...
}

// Debounce it using the library
const debouncedResize = debounce(() => resize())

// And use the debounced function
const resizeObserver = new ResizeObserver(debouncedResize)
```

Optionally, a delay for the invocation of the debounced method can be passed.

```typescript
const debouncedResize = debounce(() => resize(), 200)
```

## Development

```bash
# install dependencies
$ yarn install

# build for production
$ yarn build

# lint project files
$ yarn lint

# run tests
$ yarn test
```

## License

[MIT](./LICENSE) - Copyright &copy; Jan Müller
