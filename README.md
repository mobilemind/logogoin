# LoGoGoIn
LoGoGoIn is a bookmarklet for Mobile Safari. Add the bookmark and use it to
automatically open the GoGo login web page, invoke it again to complete the log-in.

## Install
### Desktop Browser
Visit the [LoGoGoIn page] and follow the instructions there, or use the Mobile Safari
instructions below.

### Mobile Safari
Tap the link below, bookmark the new page and follow the instructions on the page to turn
the new bookmark into a bookmarklet (a bookmark that begins with `javascript:`).

+ **Mobile Safari setup link** -- [Setup LoGoGoIn]

## Use
When viewing a web page in Mobile Safari, simply activate the LoGoGoIn bookmarklet
(tap it on bookmark bar or use the Bookmarks menu). Tap it again to complete the log-in.

## Requirements
* Mobile Safari 6.x or higher
* 1Password iOS app 4.1.x or higher

## License
MIT License - <http://www.opensource.org/licenses/mit-license.php>

## Source Code Notes
The source code is provided in `src/` and a `javascript:` bookmark URL version is in
`web/`. Simply change the placeholder values of 'user' and 'password' in the `src/`.

## Build
If `node` is not installed go get it from [nodejs.org][nodejs]. Clone this repository.
Change to the `logogoin` directory and install `grunt` and `js2uri` into the project.
Edit the placeholder values of 'user' and 'password' in `src/logogoin.js`. Finally,
invoke`grunt`. The LoGoGoIn [Gruntfile.js] uses [uglify-js] to minify the code and
[js2uri] to turn it into a `javascript:` bookmark URL.
```bash
git clone https://github.com/mobilemind/logogoin.git
cd logogoin
npm install
edit src/logogoin.js
grunt
```

The lines above install [grunt] and [js2uri]. After doing that you can update them in the
project directory using `npm update` at any time or just invoke `grunt` to rebuild
LoGoGoIn.

## Version Notes
Version 0.0.1: May 9, 2013 - Initial code

Version 0.0.2: May 9, 2013 - Initial commit

Version 0.0.3: May 9, 2013 - Corrections to ReadMe, bump version

<!-- reference links -->
[nodejs]: http://nodejs.org/
[npm]: https://npmjs.org/
[grunt]: http://gruntjs.com/
[Gruntfile.js]: https://github.com/mobilemind/logogoin/blob/master/Gruntfile.js
[uglify-js]: https://npmjs.org/package/uglify-js
[js2uri]: https://npmjs.org/package/js2uri
[LoGoGoIn page]: http://mobilemind.github.com/logogoin/
[Setup LoGoGoIn]: http://mmind.me/_?
