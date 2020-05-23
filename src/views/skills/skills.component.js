import { LitElement, html, css } from 'lit-element';
import '../shared/skill/skill.js';

export class Skills extends LitElement {
  constructor() {
    super();
    this.webSkills = [
      {
        name: 'HTML5',
        rating: 7,
        category: 'Primary',
      },
      {
        name: 'CSS',
        rating: 7,
        category: 'Primary',
      },
      {
        name: 'JavaScript',
        rating: 8,
        category: 'Primary',
      },
      {
        name: 'Lit Elements',
        rating: 7,
        category: 'Primary',
      },
      {
        name: 'Angular',
        rating: 8,
        category: 'Primary',
      },
      {
        name: 'Node',
        rating: 7,
        category: 'Primary',
      },
      {
        name: 'Python',
        rating: 6,
        category: 'Primary',
      },
      {
        name: 'Azure',
        rating: 5,
        category: 'Primary',
      },
      {
        name: 'Agile',
        rating: 7,
        category: 'Primary',
      },
      {
        name: 'paradigms',
        rating: 6,
        category: 'Primary',
      },
    ];
  }

  static get styles() {
    return css`
      .skills {
        position: relative;
        margin: 0 5rem;
        box-sizing: border-box;
      }

      h1 {
        text-align:center;
        font-size: 36px;
        font-weight: bolder;
        color: rgb(85, 51, 255) ;
      }
     
      .slider-birds2 {
        position: absolute;
        left: 53%;
        top: 24px;
      }

      .slider-birds2 {
        -webkit-animation: fadeInRight 500ms ease-in-out 1200ms both;
        animation: fadeInRight 500ms ease-in-out 1200ms both;
      }
      .web-skills {
        margin-top: 10vh;
        display: flex;
        flex-flow: row wrap;
        pading: 16px;
        justify-content: start;
      }
    `;
  }

  static get properties() {
    return {
      webSkills: {
        type: Array,
      },
      serverSideSkills: {
        type: Array,
      },
      databaseSkills: {
        type: Array,
      },
    };
  }

  render() {
    return html`
      <div class="skills">
        <h1>Skills</h1>
        <img
          src="./src/assets/images/hanging/birds2.png"
          class="slider-birds2"
          alt="slider image"
        />
        <article class="web-skills">
          ${this.webSkills.map(webSkill => {
            return html` <ec-skill
              .name=${webSkill.name}
              .rating=${webSkill.rating}
            ></ec-skill>`;
          })}
        </article>
      </div>
    `;
  }
}
