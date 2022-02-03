import fs from 'fs';
import path from 'path';

const ENCODING = 'utf-8';

export function readInput(
    {
        dir,
        file = 'input',
        mapper = (data) => data,
        transformer = (input) => input.split('\n')
    }
) {
    const input = fs.readFileSync(path.join(dir, file), ENCODING);

    return transformer(input).map(mapper);
}

export const dirname = path.dirname;
