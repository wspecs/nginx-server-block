<!-- prettier-ignore-start -->
# nginx-server-block

Create nginx server block

![npm](https://img.shields.io/npm/v/nginx-server-block.svg) ![license](https://img.shields.io/npm/l/nginx-server-block.svg) ![github-issues](https://img.shields.io/github/issues/wspecs/nginx-server-block.svg)

![nodei.co](https://nodei.co/npm/nginx-server-block.png?downloads=true&downloadRank=true&stars=true)

![travis-status](https://img.shields.io/travis/wspecs/nginx-server-block.svg)
![stars](https://img.shields.io/github/stars/wspecs/nginx-server-block.svg)
![forks](https://img.shields.io/github/forks/wspecs/nginx-server-block.svg)

![forks](https://img.shields.io/github/forks/wspecs/nginx-server-block.svg)

![](https://david-dm.org/wspecs/nginx-server-block/status.svg)
![](https://david-dm.org/wspecs/nginx-server-block/dev-status.svg)

## Features

- Create nginx server block

This utility will create an server block for NGINX on a Ubuntu server.

## Usage

```bash
nginx-serve-block create example.com contact@gmail.com.com
```

## Install

`npm install --save nginx-server-block`

Or as binary

``npm install --g nginx-server-block`

## Scripts

 - **npm run build** : `rm -rf dist && tsc && npm run readme`
 - **npm run readme** : `node ./node_modules/.bin/node-readme`
 - **npm run test** : `mocha ./dist/test/*.js`

## Dependencies

User needs to install

- NGXIN
- Certbot

Package | Version | Dev
--- |:---:|:---:
[commander](https://www.npmjs.com/package/commander) | ^2.19.0 | ✖
[great-logs](https://www.npmjs.com/package/great-logs) | 0.0.4 | ✖
[prompts](https://www.npmjs.com/package/prompts) | ^2.0.1 | ✖
[shelljs](https://www.npmjs.com/package/shelljs) | ^0.8.3 | ✖
[@types/chai](https://www.npmjs.com/package/@types/chai) | ^4.1.3 | ✔
[@types/mocha](https://www.npmjs.com/package/@types/mocha) | ^5.2.0 | ✔
[@types/node](https://www.npmjs.com/package/@types/node) | ^10.0.2 | ✔
[chai](https://www.npmjs.com/package/chai) | ^4.1.2 | ✔
[mocha](https://www.npmjs.com/package/mocha) | ^5.1.1 | ✔
[node-readme](https://www.npmjs.com/package/node-readme) | ^0.1.9 | ✔


## Contributing

Please check the [Contributing Guidelines](contributing.md) for more details. Thanks!

## Author

[Wendly Saintil](https://twitter.com/wendlysaintil)

## License

[MIT](LICENSE)
<!-- prettier-ignore-end -->
