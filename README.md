# jsonc-require

[![License][license-badge]][license-url]
[![npm Version][npm-badge]][npm-url]

jsonc for `require`, similar to the one used by VS Code.

- Transparently loads json files with comments.
- Strips trailing commas\*
- Strips UTF-8 BOM.

\* As in VS Code, double commas raises a SyntaxError.

**Note:**

jsonc-require v1.0.1 and above supports the `.jsonc` extension, in addition to `.json` (thanks to @tacc-wbomar)

## Install

```bash
npm install jsonc-require -S
# or
yarn add jsonc-require
```

## Usage

```js
// `require` once the jsonc-require module
require('jsonc-require')

// ...and use it everywhere.
const data = require('./mydata.json')
// const data = require('./mydata.jsonc')
```

Tip: Use `import` instead `require` if you are using ES6 modules.

## TODO

- [x] Test
- [ ] Enhance the Readme

## Support my Work

I'm a full-stack developer with more than 20 year of experience and I try to share most of my work for free and help others, but this takes a significant amount of time and effort so, if you like my work, please consider...

[<img src="https://amarcruz.github.io/images/kofi_blue.png" height="36" title="Support Me on Ko-fi" />][kofi-url]

Of course, feedback, PRs, and stars are also welcome 🙃

Thanks for your support!

## License

The [MIT](LICENSE) License &copy; 2019-2021 Alberto Martínez

[license-badge]: https://img.shields.io/badge/license-MIT-blue.svg?style=flat
[license-url]: https://github.com/aMarCruz/jsonc-require/blob/master/LICENSE
[npm-badge]: https://img.shields.io/npm/v/jsonc-require.svg
[npm-url]: https://www.npmjs.com/package/jsonc-require
[kofi-url]: https://ko-fi.com/C0C7LF7I
