/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';

export class Musings extends LitElement {
  constructor() {
    super();
    this.favBooks = [
      {
        name: 'Secret',
        socialLink: '../src/assets/images/inspirers/secret.jpg',
        link: 'https://www.goodreads.com/book/show/52529.The_Secret',
      },
      {
        name: 'We have no idea',
        socialLink: '../src/assets/images/inspirers/no-idea.jpg',
        link: 'https://www.amazon.com/We-Have-No-Idea-Universe/dp/0735211515',
      },
      {
        name: 'Manu script found in Acra',
        socialLink:
          '../src/assets/images/inspirers/manuscript-found-in-acra.jpg',
        link:
          'https://www.goodreads.com/book/show/16054811-manuscript-found-in-accra',
      },
    ];
    this.inspiredBy = [
      {
        name: 'Leonardo da vinci',
        socialLink: '../src/assets/images/inspirers/leonardo-da-vinci.jpg',
        link: 'https://www.leonardoda-vinci.org/',
      },
      {
        name: 'Nikola Tesla',
        socialLink: '../src/assets/images/inspirers/nikola-tesla.jpg',
        link: 'https://www.biography.com/inventor/nikola-tesla',
      },
      {
        name: 'Robert c Matin',
        socialLink: '../src/assets/images/inspirers/uncle-bob.png',
        link: 'https://twitter.com/unclebobmartin?lang=en',
      },
      {
        name: 'Elon Musk',
        socialLink: '../src/assets/images/inspirers/elon-musk.jpg',
        link: 'https://twitter.com/elonmusk',
      },
    ];
    this.favSeries = [
      {
        name: '',
        socialLink: '../src/assets/images/inspirers/big-bang-theory.jpg',
        link: 'https://www.netflix.com/nl-en/title/70143830',
      },
      {
        name: '',
        socialLink: '../src/assets/images/inspirers/robot.jpg',
        link:
          'https://www.primevideo.com/detail/0ND5POOAYD6A4THTH7C1TD3TYE/ref=atv_dp_share_cu_r',
      },
      {
        name: '',
        socialLink: '../src/assets/images/inspirers/da-vinci.jpg',
        link: 'https://www.starz.com/us/en/series/17021/episodes?season=1',
      },
    ];
  }

  static get properties() {
    return {
      favBooks: {
        type: Array,
      },
      favSeries: {
        type: Array,
      },
      inspiredBy: {
        type: Array,
      },
    };
  }

  static get styles() {
    return css`
      .musings-container {
        padding: 1rem;
      }
      h1 {
        text-align: center;
        font-size: 36px;
        font-weight: bolder;
        margin: 3rem 0 5rem 0;
        color: rgb(85, 51, 255);
      }
      .fav-books,
      .fav-persons,
      .fav-series {
        display: flex;
        flex-flow: row wrap;
        justify-content: center;
        animation: fadeInFromNone 4s ease-out;
      }
      .fav-books__img,
      .fav-persons__img,
      .fav-series__img {
        border-radius: 50%;
        box-shadow: 1px 1px 6px black;
        margin: 0 1rem;
        width: 200px;
        height: 200px;
        cursor: pointer;
        padding: 0.5rem;
        transition: transform 0.2s; /* Animation */
      }
      .fav-books__img:hover,
      .fav-persons__img:hover,
      .fav-series__img:hover {
        box-shadow: 1px 1px 16px black;
        transform: scale(1.2);
      }
      @keyframes fadeInFromNone {
        0% {
          display: none;
          opacity: 0;
        }

        1% {
          display: block;
          opacity: 0;
        }

        100% {
          display: block;
          opacity: 1;
        }
      }

      @media only screen and (min-width: 1300px) {
        .fav-books__img,
        .fav-persons__img,
        .fav-series__img {
          border-radius: 50%;
          box-shadow: 1px 1px 6px black;
          margin: 0 1rem;
          width: 300px;
          height: 300px;
          padding: 0.5rem;
        }
      }
      @media only screen and (max-width: 400px) {
        .fav-books__img,
        .fav-persons__img,
        .fav-series__img {
          width: 60px;
          height: 60px;
          margin: 1rem 0.5rem;
        }
        .fav-books,
        .fav-persons,
        .fav-series {
          margin: 0.5rem 0;
        }
      }
      @media only screen and (min-width: 400px) and (max-width: 800px) {
        .fav-books,
        .fav-persons,
        .fav-series {
          margin: 1rem 0;
        }

        .fav-books__img,
        .fav-persons__img,
        .fav-series__img {
          width: 100px;
          height: 100px;
          margin: 1rem 1rem;
        }
      }
    `;
  }

  openLink(link) {
    window.open(link, '_blank');
  }

  render() {
    return html`<div class="musings-container">
      <h1>My Musings</h1>
      <div class="fav-books">
        ${this.favBooks.map(
          book =>
            html`<img
              src="${book.socialLink}"
              class="fav-books__img"
              @click="${() => this.openLink(book.link)}"
            />`
        )}
      </div>
      <div class="fav-persons">
        ${this.inspiredBy.map(
          book =>
            html`<img
              src="${book.socialLink}"
              class="fav-persons__img"
              @click="${() => this.openLink(book.link)}"
            />`
        )}
      </div>
      <div class="fav-series">
        ${this.favSeries.map(
          book =>
            html`<img
              src="${book.socialLink}"
              class="fav-series__img"
              @click="${() => this.openLink(book.link)}"
            />`
        )}
      </div>
    </div>`;
  }
}
