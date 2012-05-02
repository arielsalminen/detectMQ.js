# detectMQ.js v0.01
### Simple way to detect in JavaScript if a Media Query is being used or not

There's no good way right now to detect in JavaScript which media query is being used currently. This is my personal work-in-progress based on the post on Jeremy Keith's site http://adactio.com/journal/5429/ to make the detection a bit easier and make it also work when the browser window is resized.

Current detection works at least on Safari, Chrome, Firefox, Opera and Opera Mobile.

### Problems:

Operan and Firefox seem to return PropertyValue with quotes and webkit without, so I'm currently stripping out all quotes from the string.