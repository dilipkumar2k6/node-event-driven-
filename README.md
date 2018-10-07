# EventEmitter
1. EventEmitter is a module in `node.js` which facilitates communications between `objects` and `node.
2. EventEmitter is core of `node` asynchronous event driven architecture.
3. Many nodejs modules inherited from EventEmitter.

Following are concepts.
1. Emitter object emits named event that cause listener to be called.
2. I.e. emitter object emits event and register listeners
3. Emitting events is a signal that some condition has occurred.
4. Listener functions are always called every time emitter object emit events for this registered listener.
5. Benefits of using event compare to callback is, with event we can have multiple listeners for same event.

```
const EventEmitter = require('events');

class Logger extends EventEmitter {

}

const logger = new Logger();

logger.emit('event');

logger.on('event', listenerFunction);
```