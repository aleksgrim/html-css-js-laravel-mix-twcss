let mix = require('laravel-mix')

mix.options({
    processCssUrls: false
});

mix.js('src/js/scripts.js', 'dist/js/scripts.min.js')
