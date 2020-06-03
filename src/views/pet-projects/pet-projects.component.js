import { LitElement, html, css } from 'lit-element';

export class PetProjects extends LitElement {
  constructor() {
    super();
    this.articles = [
      {
        title: 'Youtube Playlist Synchronizer',
        description:
          'Based on pytube, This youtube synchronizer helps you in synchronizing the playlist to your local computer drive.',
        social_image:
          'https://github.com/entangledcognition/youtube-playlist-syncronizer/blob/master/share.png',
        link:
          'https://entangledcognition.github.io/youtube-playlist-syncronizer/',
      },
      {
        title: 'Smart Home Template',
        description:
          'A simple jquery based html temaplte for Smart home themes',
        social_image:
          'https://github.com/bharathmuppa/HomeAutomation/blob/master/social-image.jpg?raw=true',
        link: 'https://bharathmuppa.github.io/HomeAutomation/',
      },
      {
        title: 'Web Hotels',
        description:
          'Working on project to democratize digitalization process of small and medium business',
        social_image:
          'https://kaicolabs.com/wp-content/uploads/2019/10/coming-soon-neon-sign-coming-soon-badge-in-vector-21133321.jpg',
        link: '',
      },
    ];
  }

  static get properties() {
    return {
      articles: {
        type: Array,
      },
    };
  }

  static get styles() {
    return css`
      .pet-project__conatiner {
        display: flex;
        flex-flow: row wrap;
        padding: 1rem;
      }
      .card {
        box-shadow: 1px 1px 6px rgba(5, 213, 255, 0.3);
        border-radius: 12px;
        width: 300px;
        height: 250px;
        background: #fff;
        margin: 0 0 1rem 2rem;
        cursor: pointer;
      }
      .card--img {
        width: 100%;
        object-fit: unset;
        height: 160px;
      }
      .card--content {
        padding: 2px 16px 16px 16px;
        height: 90px;
        display: flex;
        flex-flow: column;
      }
      .card--title {
        font-size: 16px;
        font-weight: bolder;
      }
      .card--description {
        margin-top: 8px;
        font-size: 12px;
        font-style: italic;
      }
      h1 {
        text-align: center;
        font-size: 36px;
        font-weight: bolder;
        color: rgb(255, 255, 255);
      }
      @media only screen and (max-width: 400px) {
        .pet-project__conatiner {
          display: flex;
          flex-flow: column wrap;
          padding: 1rem;
        }
        .card--img {
          object-fit: cover;
        }
        .card {
          margin: 0 0 2rem 0;
        }
        .card--description {
          display: block;
        }
      }
      @media only screen and (min-width: 400px) and (max-width: 800px) {
        .pet-project__conatiner {
          display: flex;
          flex-flow: row wrap;
          padding: 1rem;
        }
        .card {
          margin: 1rem auto;
          width: 400px;
          height: 250px;
        }
      }
    `;
  }

  goToPage(link) {
    if (!link) {
      return;
    }
    window.open(link, '_blank');
  }

  render() {
    return html`
      <div class="pet-project__conatiner">
        ${this.articles.map(
          item => html`
            <div class="card" @click="${() => this.goToPage(item.link)}">
              <img .src=${item.social_image} class="card--img" />
              <div class="card--content">
                <span class="card--title">${item.title}</span>
                <span class="card--description">${item.description}</span>
              </div>
            </div>
          `
        )}
      </div>
    `;
  }

  firstUpdated() {}
}
