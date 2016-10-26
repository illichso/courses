import fs from 'fs';
import cheerio from 'cheerio';
import colors from 'colors';

fs.readFile('src/index.html', 'utf8', (err, markup) => {
  if (err) {
    return console.log(err);
  }

  const $ = cheerio.load(markup);

  //since a separate spreadsheet is only utililzed for the productiion buid, need to dynamically
  $('head').prepend('<link rel="stylesheet" href="styles.css">');

  const error = err => {
    if (err) {
      return console.log(err);
    }
    console.log('index.html written to /dist'.green);
  };

  fs.writeFile('dist/index.html', $.html(), 'utf8', error);
});
