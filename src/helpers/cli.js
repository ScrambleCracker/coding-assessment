import * as readline from 'node:readline/promises';
import { stdin as input, stdout as output } from 'process';

export const rl = readline.createInterface({
    input,
    output,
    terminal: false,
});
