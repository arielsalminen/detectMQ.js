# detectMQ.js v0.1
### Simple way to detect in JavaScript if a Media Query is being used or not

There doesn't seem to be a good way right now to detect in JavaScript which media query is being used currently without duplicating the breakpoints. This is my personal work-in-progress based on the post and the ideas on Jeremy Keith's site http://adactio.com/journal/5429/ to make the detection a bit easier and to make it also work when the browser window is resized.

Current detection works at least on Explorer 9, Explorer 9 mobile, Safari 5.1, iOS 5 Safari, Chrome 18, Firefox 6, Opera 11.6 and Opera Mobile 10.1.

#### Demo:
For demo go to [http://viljamis.com/detectmq/](http://viljamis.com/detectmq/)

#### Features:
 * Only 272 bytes minified and gzipped
 * Trigger events on pageload and on window resize
 * Custom threshold time before events trigger

### Problems:
Opera and Firefox seem to return PropertyValue with quotes and webkit without, so I'm currently stripping out all quotes from the string. Might cause some problems.

Doesn't work on iOS 4.3 and on older Android devices, but if you anyway use mobile first approach that shouldn't be a problem.



License
======

Licensed under the MIT license.

Copyright (c) 2011-2012 Viljami Salminen, [http://viljamis.com/](http://viljamis.com/)

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.



Changelog
======

v0.10 (2012-05-04) - Initial Release
