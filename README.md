fortunes-list
=================

This forks of [jimkang](https://github.com/jimkang)'s [fortune-tweetable](https://github.com/jimkang/fortune) that forks of [williamfligor](https://github.com/williamfligor)'s [fortune](https://github.com/williamfligor/fortune) also makes the content of the old `fortune` Unix command available to Node programs, with the following changes:

- All of the fortunes under `fortunes/off` and a few other fortune files that had similar "Truly Tasteless Jokes"-type content. Don't worry – there's probably still plenty of cringeworthy crotchety uncle stuff left in there.

- `convert.js`, which converts the fortunes to JSON has been modified to omit any fortune over 140 characters.

- Added "keys()" to get all fortune topics.

- Added "key" prop to "fortune()" to get all specific topic fortune.

Installation
------------

    npm install fortunes-list

This will run the `postinstall` script from package.json. If you modify the contents of the `fortunes` directory run `npm run-script postinstall` to rebuild the JSON files that the module uses to get fortunes.

Usage
-----

    const fortunes = require('fortunes-list')
    console.log(fortunes.keys())
    console.log(fortunes.fortune())
    console.log(fortunes.fortune('art'))

Tests
-----

    npm test

License
-------

ISC.
