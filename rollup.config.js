import svelte from 'rollup-plugin-svelte';
import resolve from 'rollup-plugin-node-resolve';
    
const pkg = require('./package.json');
    
export default {
        input: 'src/Modal.svelte',
        output: [
            {
               file: pkg.main,
               format: 'cjs',
               exports: 'default'
            },
            {
              file: pkg.module,
              format: 'es',
              exports: 'default'
            },
          ],
        plugins: [
            svelte(),
            resolve(),
        ],
        external: ['svelte']
};