import babel from 'rollup-plugin-babel';

export default {
  input: 'src/main.js',
  output: { file: 'dist/index.js', format: 'esm' },
  external: ['react'],
  plugins: [
    babel({ exclude: 'node_modules/**' }), // only transpile our source code
  ],
};
