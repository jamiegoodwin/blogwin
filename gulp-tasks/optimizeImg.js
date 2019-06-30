var gulp = require('gulp'),
    /** Images */
    imagemin = require('gulp-imagemin'),
    imageminMozjpeg = require('imagemin-mozjpeg'),
    imageResize = require('gulp-image-resize'),
    paths = require("../package.json").paths,
    rename = require('gulp-rename'),
    changeCase = require('change-case');

module.exports = function optimizeImg() {
    const sizes = [
        { width: 320, quality: 85, suffix: 'small' },
        { width: 480, quality: 85, suffix: 'medium' },
        { width: 800, quality: 85, suffix: 'large' },
    ];
    
    let stream;

    sizes.forEach((size) => {
        stream = gulp
            // source for images to optimize
            .src([paths.img.src + '*', paths.img.src + '**/*'])
            // resize image
            .pipe(imageResize({ width: size.width }))
            // lowercase filenames
            .pipe(
                rename((path) => {
                    path.basename = changeCase.lowerCase(path.basename)
                    path.extname = changeCase.lowerCase(path.extname)
                }),
            )
            // reduce image quality based on the size
            .pipe(
                imagemin(
                    [
                        imageminMozjpeg({
                            quality: size.quality,
                        }),
                    ],
                    {
                        verbose: true,
                    },
                ),
            )
            // output optimized images to a destination folder
            .pipe(gulp.dest(paths.img.dest + size.suffix));
    });

    return stream;
};