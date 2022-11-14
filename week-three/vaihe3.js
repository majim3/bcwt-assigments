'use strict';
const search = document.querySelector('#haku');
const button = document.querySelector('#nappi');
button.addEventListener('click', function paina() {
  const osoite = 'https://api.tvmaze.com/search/shows?q=' + search.value;

  fetch(osoite).then(res => res.json()).then(data => {

    const body = document.querySelector('body');
    const osio = document.createElement('section');

    for (let i = 0; i < data.length; i++) {

      const yksi = data[i].show;
      const article = document.createElement('article');
      const kuvaS = document.createElement('img');
      const figure = document.createElement('figure');
      const figcaption = document.createElement('figcaption');
      const linkki = document.createElement('a');
      const otsikko = document.createElement('h2');


      if (yksi.image == null) {
        kuvaS.src = 'eikuva.png';
        figure.append(kuvaS);
      } else if (yksi.image.medium) {
        kuvaS.src = yksi.image.medium;
        figure.append(kuvaS);
      }

      if (yksi.summary == null) {
        let text = ('we dont have summary');
        figcaption.append(text);

      } else if (yksi.summary) {
        let text = yksi.summary.replace(/(<([^>]+)>)/gi, '');
        figcaption.append(text);
      }

      const teksti = document.createElement('p');
      let genrelista = 'Genres: ';
      const eigenre = ('we dont have genres');
      if (yksi.genres != null && yksi.genres.length > 0) {
        for (let j = 0; j < yksi.genres.length; j++) {
          genrelista += yksi.genres[j] + ', ' ;

        }
      } else {
        genrelista = eigenre;
      }

      teksti.append(genrelista)
      figure.appendChild(teksti);
      osio.appendChild(article);
      article.appendChild(figure);
      linkki.append(yksi.name);
      linkki.href = yksi.url;
      otsikko.append(linkki);
      figure.append(otsikko);
      figure.append(figcaption);

    }
    body.append(osio);
    nappi.addEventListener('click', function() {
      body.removeChild(osio);

    });
    body.append(osio);
  });

});






