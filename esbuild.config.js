import esbuild from 'esbuild';
import babel from 'esbuild-plugin-babel';

esbuild
    .build({
        entryPoints: ['./index.js'],
        bundle: true,
	minify: true,
        outfile: './main.js',
        plugins: [babel()]
    })
    .catch(() => process.exit(1));
