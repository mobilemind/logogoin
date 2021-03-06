# LoGoGoIn

[![Current Tag][tag-image]][tag-url] [![Build Status][build-image]][build-url]
<!-- [![Dependency Status][dep-image]][dep-url] [![devDependency Status][devDep-image]][devDep-url] -->

LoGoGoIn is a bookmarklet for Mobile Safari. Use it to access to the GoGo login web page,
invoke it again to automate log-in.

## Install
### Desktop Browser
Visit the [LoGoGoIn page] and follow the instructions there, or use the Mobile Safari
instructions below.

### Mobile Safari
Tap the link below, bookmark the new page and follow the instructions on the page to turn
the new bookmark into a bookmarklet (a bookmark that begins with `javascript:`).

+ **Mobile Safari setup link** -- [Setup LoGoGoIn]

## Use
When viewing a web page in Mobile Safari, simply activate the LoGoGoIn bookmarklet (tap it
on bookmark bar or use the Bookmarks menu). Tap it again to complete the log-in. The
LoGoGoin bookmarklet will prompt for user and password if they are not set.

## Requirements
* Mobile Safari 6.x or higher
* GoGo Internet Inflight Service

## License
MIT License - <http://opensource.org/licenses/mit-license.php>

## Source Code Notes
The source code is provided in `src/` and a `javascript:` bookmark URL version is in
`web/logogoin.js.url`. Assign values to `u` (username) and optionally `p` (password) in
the file `src/logogoin.js`.

## Build
If `node` is not installed go get it from [nodejs.org][nodejs]. Clone this repository.
Change to the `logogoin` directory and install `grunt` and `js2uri` into the project.
Edit the values of the vars `u` and optionally `p` in `src/logogoin.js` to your username
and your password (optional). Finally, invoke`grunt`. The LoGoGoIn [Gruntfile.js] uses
[uglify-js] to minify the code and [js2uri] to turn it into a `javascript:` bookmark URL.

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

Version 0.0.17: no functional changes; update dependencies, remove david-dm.org badges; bump version

Version 0.0.13: no functional changes; tons of changes to CI & badging and README

Version 0.0.12: not sure what happened to this build

Version 0.0.11: January 16, 2015 Update package.json to use latest uglify

Version 0.0.10: May 9, 2014 Update package.json to use latest jshint and uglify (re-committed 06-01-14)

Version 0.0.9: December 27, 2013 - Update to grunt-contrib-jshint 0.8.x

Version 0.0.8: December 12, 2013 - Integrate Travis CI <https://travis-ci.org> into build

Version 0.0.7: May 25, 2013 - Simplify inits & comparisons for tighter code; update package.json & README

Version 0.0.6: May 15, 2013 - Remove test code accidentally left in v0.0.5; update everything & bump version

Version 0.0.5: May 10, 2013 - Runtime prompt for user & password if not set; bump version

Version 0.0.4: May 10, 2013 - Corrections to ReadMe & License; bump version

Version 0.0.3: May 9, 2013 - Corrections to ReadMe, bump version

Version 0.0.2: May 9, 2013 - Initial commit

Version 0.0.1: May 9, 2013 - Initial code


<!-- reference URLs -->

[tag-image]: https://img.shields.io/github/tag/mobilemind/logogoin.svg

[tag-url]: https://github.com/mobilemind/logogoin/tags

[build-image]: https://secure.travis-ci.org/mobilemind/logogoin.svg?branch=master

[build-url]: https://travis-ci.org/mobilemind/logogoin

[npm-image]: https://img.shields.io/npm/v/logogoin.svg

[npm-url]: https://www.npmjs.com/package/logogoin

<!-- 
[dep-image]: https://img.shields.io/david/dep/mobilemind/logogoin.svg?branch=master

[dep-url]: https://david-dm.org/mobilemind/logogoin

[devDep-image]: https://img.shields.io/david/dev/mobilemind/logogoin.svg?branch=master

[devDep-url]: https://david-dm.org/mobilemind/logogoin#info=devDependencies?branch=master
-->

[nodejs]: http://nodejs.org/

[npm]: https://npmjs.org/

[grunt]: http://gruntjs.com/

[Gruntfile.js]: https://github.com/mobilemind/logogoin/blob/master/Gruntfile.js

[uglify-js]: https://npmjs.org/package/uglify-js

[js2uri]: https://npmjs.org/package/js2uri

[LoGoGoIn page]: https://github.com/mobilemind/logogoin

[Setup LoGoGoIn]: http://mmind.me/_?javascript:var%20u,p,d=document;/%5Ehttps:%5C/%5C/airborne%5C.gogoinflight%5C.com%5C/gbp%5C/signInsignUp.*/.test(location.href)?(d.getElementById('returningRadio').checked=!0,d.getElementById('loginEmail').value=u?u:window.prompt('Username/email:',''),d.getElementById('loginPassword').value=p?p:window.prompt('Password:',''),d.getElementsByName('_eventId_next')%5B1%5D.click()):location.href='https://airborne.gogoinflight.com/gbp/signInsignUp.do?login=true';void'0.0.13'
