# ByteWatch

ByteWatch is a lightweight logger package for Node.js applications. It provides four levels of logging: error, warn, info, and debug, and allows you to set the log level at runtime. It also supports coloring for different log levels, making it easy to visually distinguish between different types of log messages.

## Installation

```
npm install bytewatch
```

## Usage

To use the logger, create an instance of **`ByteWatch`** and call one of its logging methods (
  **`error`**, **`warn`**, **`info`**, **`debug`**) with a message string. The logger will output the message to the console with the appropriate log level and color.

```javascript
const { ByteWatch } = require('bytewatch');

const logger = new ByteWatch({ level: 'info' });

logger.error('An error occurred');
logger.warn('This is a warning');
logger.info('Some information');
logger.debug('Debugging message');
```

You can also set the log **`level`** at runtime by changing the level property of the **`ByteWatch`** instance.

```javascript
logger.level = 'debug';
```

By default, the logger will only output messages at or above the set log level. For example, if the log level is set to `info`, the logger will output messages with the `info` and `error` levels, but not messages with the `warn` or `debug` levels.

## API

### `ByteWatch(options)`

Creates a new instance of the logger with the specified options.

Options

* **`level`** (string): The log level to use. Defaults to `info`.

### `ByteWatch#error(message)`

Logs an error message.

### `ByteWatch#warn(message)`

Logs a warning message.

### `ByteWatch#info(message)`

Logs an informational message.

### `ByteWatch#debug(message)`

Logs a debug message.

### `ByteWatch#isLevelEnabled(level)`

Returns true if the specified log level is enabled for the logger, false otherwise.

### `ByteWatch#getColorFn(level)`

Returns a color function for the specified log level.

### `ByteWatch#formatMessage(message, level)`

Formats the log message with the specified log level.

### `ByteWatch.levels`

An array of supported log levels: ```'error', 'warn', 'info', 'debug'```

## Testing

The package includes a set of Jest tests to ensure that the logger functions correctly. To run the tests, use the following command:

```bash
npm test
```

## License

ByteWatch is licensed under the MIT License. See the LICENSE file for details.