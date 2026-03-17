const logger = {

  info: (messageText) => {
    console.log(`[INFO]: ${messageText}`);
  },

  error: (messageText) => {
    console.error(`[ERROR]: ${messageText}`);
  },

  warn: (messageText) => {
    console.warn(`[WARNING]: ${messageText}`);
  }

};

export default logger;