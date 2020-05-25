import { LitElement, html, css } from 'lit-element';
import '../pet-projects/pet-projects.js';

export class Articles extends LitElement {
  constructor() {
    super();
    this.articles = [];
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
      .articles {
        width: 100%;
        min-height: 80vh;
        padding: 1rem;
        transform: skewY(2deg);
        transform-origin: 0px center;
        top: -5px;
        position: relative;
        overflow: hidden;
        background: linear-gradient(
          150deg,
          rgb(85, 51, 255) 15%,
          rgb(5, 213, 255) 70%,
          rgb(37, 221, 245) 94%
        );
      }
      .articles-conatiner {
        display: flex;
        flex-flow: row wrap;
        padding: 1rem;
        margin-top:2rem;
      }
      .projects-container{
        transform: skewY(-2deg);
        display: block;
      }
      .card {
        width: 300px;
        height: 250px;
        box-shadow: 1px 1px 6px #fff;
        border-radius: 6px;
        margin-left: 2rem;
        background: #fff;
        transform: skewY(-2deg);
      }
      .card--img {
        width: 100%;
        height: 160px;
        object-fit: scale-down;
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
        font-size: 12px;
        font-style: italic;
      }
      h1 {
        text-align: center;
        color: #fff;
        font-size: 38px;
        transform: skewY(-2deg);
      }
      @media only screen and (max-width: 400px) {
        .articles-conatiner {
          flex-flow: column wrap;
          padding: 1rem;
        }
        .card{
          margin: 0 0 2rem 0;
        }
      }
      @media only screen and (min-width: 400px)  and (max-width: 800px) {
        .articles-conatiner {
          flex-flow: column wrap;
          padding: 1rem;
        }
        .card{
          width: 200px;
          height: 250px;
          margin: 0 0 1rem 1rem;
        }
      }
    `;
  }

  render() {
    return html`
      <div class="articles">
        <h1>Pet Projects & Articles </h1>
        <ec-pet-projects class="projects-container"></ec-pet-projects>
        <div class="articles-conatiner">
          ${this.articles.map(
            item => html`
              <div class="card">
                <img .src=${item.social_image} class="card--img" />
                <div class="card--content">
                  <span class="card--title">${item.title}</span>
                  <span class="card--description">${item.description}</span>
                </div>
              </div>
            `
          )}
        </div>
       
      </div>
    `;
  }

  firstUpdated() {
    fetch('https://dev.to/api/articles?username=bharathmuppa')
      .then(r => r.json())
      .then(r => {
        this.articles = r;
        console.log(this.articles);
      });
  }
}
