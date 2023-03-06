const { ByteWatch, levels } = require('../src/index');

describe('ByteWatch', () => {
  let logger;

  beforeEach(() => {
    logger = new ByteWatch({ level: levels.info });
  });

  test('should log messages with the correct level', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();
    logger.error('Error message');
    logger.warn('Warn message');
    logger.info('Info message');
    logger.debug('Debug message');
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy).toHaveBeenNthCalledWith(1, expect.stringMatching(/\[ERROR\] Error message/));
    expect(logSpy).toHaveBeenNthCalledWith(2, expect.stringMatching(/\[WARN\] Warn message/));
    logSpy.mockRestore();
  });

  test('should not log messages with a lower level than the logger level', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();
    logger.warn('Warn message');
    logger.debug('Debug message');
    expect(logSpy).toHaveBeenCalledTimes(2);
    expect(logSpy).toHaveBeenNthCalledWith(1, expect.stringMatching(/\[WARN\] Warn message/));
    logSpy.mockRestore();
  });

  test('should format messages with the correct level', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();
    logger.info('Info message');
    expect(logSpy).toHaveBeenCalledTimes(1);
    expect(logSpy).toHaveBeenNthCalledWith(1, expect.stringMatching(/\[INFO\] Info message/));
    logSpy.mockRestore();
  });

  test('should use colors for different log levels', () => {
    const logSpy = jest.spyOn(console, 'log').mockImplementation();
    logger.error('Error message');
    logger.warn('Warn message');
    logger.info('Info message');
    logger.debug('Debug message');
    expect(logSpy).toHaveBeenCalledTimes(4);
    expect(logSpy.mock.calls[0][0]).toContain('Error message');
    expect(logSpy.mock.calls[1][0]).toContain('Warn message');
    expect(logSpy.mock.calls[2][0]).toContain('Info message');
    expect(logSpy.mock.calls[3][0]).toContain('Debug message');
    logSpy.mockRestore();
  });
});