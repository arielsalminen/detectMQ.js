# detectMQ.js
### Simple way to detect in JavaScript if a Media Query is being used or not

There isn't a good way right now to detect in JavaScript which Media Query is being used currently without duplicating the breakpoints. This is a work-in-progress based on the post and the ideas on [Jeremy Keith's site](http://adactio.com/journal/5429/) to make the detection a bit easier and to make it also work when the browser window is resized.

### Features
 * 245 bytes minified and gzipped
 * Trigger on pageload and window resize
 * Custom threshold time before triggering

## How it works

#### CSS
First you specify in CSS a hidden `:after` pseudo element for `body` and change the content of that inside every Media Query. You could think of these as the "titles" of your Media Queries. You can have as many of them as you'd like + you can use your own names as long as you don't include any spaces in the name.

    body:after {
      content: "narrow";
      display: none;
    }
    @media screen and (min-width: 40em) {
      body:after {
        content: "normal";
      }
    }
    @media screen and (min-width: 70em) {
      body:after {
        content: "wide";
      }
    }

#### JavaScript
You have to first specify setting you'd like to use and after that include the JavaScript plugin. Inside the `callback` option you use the same "titles" which you used in CSS. `live` and `threshold` settings are optional and you can see the defaults below:

    <script>
      var detect_mq = {
        live: true, // Boolean: Trigger on window resize, true or false
        threshold: 200, // Integer: Threshold time after window resize, in milliseconds
        callback: function () {

          var element = document.getElementById("which");

          // If narrow layout
          if (dmq_size == "narrow") {
            element.innerHTML = dmq_size;
          }

          // If normal layout
          if (dmq_size == "normal") {
            element.innerHTML = dmq_size;
          }

          // If wide layout
          if (dmq_size == "wide") {
            element.innerHTML = dmq_size;
          }

        }
      };
    </script>
    <script src="detectMQ.js"></script>

## Demo:
For a demo go to [http://viljamis.com/detectmq/](http://viljamis.com/detectmq/)

### Browser support:
 * Explorer 9+
 * Explorer 9 mobile
 * Safari 5
 * iOS 5 Safari
 * Chrome 18
 * Firefox 3.6+
 * Opera 11
 * Opera Mini 7
 * Opera Mobile 10.1
 * Mozilla Mobile (Fennec) 4.0

### Problems:
Doesn't work on IE6-8, iOS 4.3.2, older Android devices and on Symbian 3 Webkit, but if you anyway use mobile first approach that shouldn't be a big problem.

Opera and Firefox seem to return PropertyValue with quotes and webkit without, so I'm currently stripping out all quotes from the string. Might cause some problems.

## Changelog
* `v 0.2` - Fixes threshold option and adds list of tested browsers
* `v 0.1` - Initial Release

## License
Licensed under the MIT license.

Copyright (c) 2011-2012 Viljami Salminen, [http://viljamis.com/](http://viljamis.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
