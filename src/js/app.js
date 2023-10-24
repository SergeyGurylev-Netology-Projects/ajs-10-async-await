import read from './reader.js';
import json from './parser.js';
import GameSaving from './gamesaving.js';

(async () => {
  try {
    const data = await read();
    const value = await json(data);
    const result = new GameSaving(value);
    console.log(result);
  } catch (e) {
    console.log(e);
  }
})();
