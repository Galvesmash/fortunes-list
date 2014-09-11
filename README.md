fortune-tweetable
=================

This fork of [williamfligor](https://github.com/williamfligor)'s [fortune](https://github.com/williamfligor/fortune) also makes the content of the old `fortune` Unix command available to Node programs, with the following changes:

- All of the fortunes under `fortunes/off` and a few other fortune files that had similar "Truly Tasteless Jokes"-type content. Don't worry – there's probably still plenty of cringeworthy crotchety uncle stuff left in there.

- `convert.js`, which converts the fortunes to JSON has been modified to omit any fortune over 140 characters.

Installation
------------

    npm install fortune-tweetable

This will run the `postinstall` script from package.json. If you modify the contents of the `fortunes` directory run `npm run-script postinstall` to rebuild the JSON files that the module uses to get fortunes.

Usage
-----

    var fortuneSource = require('fortune-tweetable');
    console.log(fortuneSource.fortune());

Tests
-----

    npm test

License
-------

ISC.
