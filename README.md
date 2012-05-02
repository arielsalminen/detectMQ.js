# detectMQ.js v0.01
### Simple way to detect in JavaScript if a Media Query is being used or not

There doesn't seem to be a good way right now to detect in JavaScript which media query is being used currently without duplicating the breakpoints. This is my personal work-in-progress based on the post and the ideas on Jeremy Keith's site http://adactio.com/journal/5429/ to make the detection a bit easier and to make it also work when the browser window is resized.

Current detection works at least on Explorer 9, Safari, Chrome, Firefox, Opera and Opera Mobile, but you really shouldn't use this yet as this is right now just a proof of concept with some _ugly_ JavaScript code inside. More better stuff will come here later, just wait...

### Problems:

Opera and Firefox seem to return PropertyValue with quotes and webkit without, so I'm currently stripping out all quotes from the string. Might cause some problems.