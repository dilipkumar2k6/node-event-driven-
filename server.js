const EventEmitter = require('events');

class Server extends EventEmitter {
  constructor(client) {
    super();
    client.on('command', (command, args) => {
      switch (command) {
        case 'help':
        case 'ls':
        case 'add':
        case 'delete':
          this[command](args);
          break;
        default:
          console.log('response', 'Uknown commands...')
      }
    })
  }

  help() {
    this.emit('response', `Available commands
    add task
    ls
    delete :id
    `);
  }

  add(args) {
    this.emit('response', args.join(' '))
  }

  ls(args) {
    this.emit('response', args.join(' '))
  }

  delete(args) {
    this.emit('response', args.join(' '))
  }
}

module.exports = (client) => new Server(client);