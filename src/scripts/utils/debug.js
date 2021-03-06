/* eslint-disable no-console */
/**
 * Console utils
 * @module utils/console
 */

/**
 * Decorate a message
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const decorateMsg = (msg, decorator = '📐') => `${decorator} ${msg}`;

/**
 * Log a decorated message to the console
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const message = (method, ...messages) => {
  if (!!console && !!console[method]) {
    messages.forEach((msg) => {
      console[method](decorateMsg(msg));
    });
  }
};

/**
 * Error wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const error = (...messages) => message('error', ...messages);

/**
 * Info wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const info = (...messages) => message('info', ...messages);

/**
 * Log wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const log = (...messages) => message('log', ...messages);

/**
 * Warn wrapper
 * @param {string} msg - The message to log.
 * @param {string} decorator - Console message decorator.
 */
const warn = (...messages) => message('warn', ...messages);

const debug = (mode, ...messages) => {
  if (process.env.NODE_ENV === 'production') { return null; }

  switch (mode) {
    case 'error':
      error(...messages);
      break;
    case 'info':
      info(...messages);
      break;
    case 'warn':
      warn(...messages);
      break;
    default:
      log(...messages);
      break;
  }

  return true;
};

export default debug;
