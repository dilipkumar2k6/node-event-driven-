const fs = require('fs');
const EventEmitter = require('events');

class WithLog extends EventEmitter {
  execute(asyncFunction, ...args) {
    console.time('execute');
    this.emit('begin');
    asyncFunction(...args, (err, data) => {
      if (err) {
        return this.emit('error', err);
      }
      this.emit('data', data);
      console.timeEnd('execute');

      this.emit('end')
    });
  }
}

const withLog = new WithLog();
withLog.on('begin', () => {
  console.log('About to execute')
});
withLog.on('end', () => {
  console.log('Done with execute')
});

withLog.on('error', (err) => {
  console.log('Error occurred', err)
});

// This will call multiple times if uncaughtException was thrown multiple times.
process.on('uncaughtException', (err)=>{
  console.log(err);
  // Do cleanup
  process.exit(1);  // exit anyway
});

// this is better
process.once('uncaughtException', (err)=>{
  console.log(err);
  // Do cleanup
  process.exit(1);  // exit anyway
});

// register listener in order
withLog.prependListener('data', data =>{
  console.log('Data ', data.toString());
});

// withLog.removeListener()

withLog.execute(fs.readFile, __filename);