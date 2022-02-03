import fetch from 'node-fetch';
import wretch from 'wretch';

export function api(url) {
    return wretch(url)
        .polyfills({ fetch });
}
