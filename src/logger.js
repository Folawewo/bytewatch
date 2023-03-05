const chalk = require("chalk");

class ByteWatch {
  constructor(options = {}) {
    this.level = options.level || "info";
  }

  log(message, level = "info") {
    if (this.isLevelEnabled(level)) {
      const colorFn = this.getColorFn(level);
      const formattedMessage = this.formatMessage(message, level);
      console.log(colorFn(formattedMessage));
    }
  }

  isLevelEnabled(level) {
    return (
      ByteWatch.levels.indexOf(level) >= ByteWatch.levels.indexOf(this.level)
    );
  }

  getColorFn(level) {
    switch (level) {
      case "error":
        return chalk.red.bold;
      case "warn":
        return chalk.yellow;
      case "info":
        return chalk.green;
      case "debug":
        return chalk.blue;
      default:
        return chalk.white;
    }
  }

  formatMessage(message, level) {
    return `[${level.toUpperCase()}] ${message}`;
  }

  error(message) {
    this.log(message, "error");
  }

  warn(message) {
    this.log(message, "warn");
  }

  info(message) {
    this.log(message, "info");
  }

  debug(message) {
    this.log(message, "debug");
  }
}

ByteWatch.levels = ["error", "warn", "info", "debug"];

module.exports = { ByteWatch };
