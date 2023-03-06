const chalk = require("chalk");

class ByteWatch {
  constructor(options = {}) {
    this.level = options.level || "info";
  }

  log(message, level = "info") {    
    console.log( this.getColorFn(level)(this.formatMessage(message, level)) )
    return
  }

  isLevelEnabled(level) {
    return (
      ByteWatch.levels.indexOf(level) >= ByteWatch.levels.indexOf(this.level)
    );
  }

  /**
   * @Desc This function sets the colour needed for the log message
   * @param {level} level 
   * @returns function( (message, level) => [string] )
   */
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

  /**
   * @Desc This function formate the log message
   * @param {log message} message 
   * @param {level:string} level 
   * @returns 
   */
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
