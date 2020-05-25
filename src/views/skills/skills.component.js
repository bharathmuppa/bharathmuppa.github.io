/* eslint-disable class-methods-use-this */
import { LitElement, html, css } from 'lit-element';
import '../shared/skill/skill.js';
import '../shared/skill-meter/skill-meter.js';

export class Skills extends LitElement {
  constructor() {
    super();
    this.webSkills = [
      {
        name: 'HTML5',
        rating: 7,
        category: 'Primary',
        color: 'rgba(208, 25, 106, 0.7)',
      },
      {
        name: 'CSS',
        rating: 7,
        category: 'Primary',
        color: 'rgba(19, 12, 241, 0.7)',
      },
      {
        name: 'JavaScript',
        rating: 8,
        category: 'Primary',
        color: 'rgba(0, 0, 0, 1)',
      },
      {
        name: 'Lit Elements',
        rating: 7,
        category: 'Primary',
        color: 'rgb(234, 12, 162)',
      },
      {
        name: 'Angular',
        rating: 8,
        category: 'Primary',
        color: 'rgba(0, 0, 0, 1)',
      },
      {
        name: 'Node',
        rating: 7,
        category: 'Primary',
        color: 'rgb(63, 160, 99)',
      },
      {
        name: 'Python',
        rating: 6,
        category: 'Primary',
        color: 'rgb(255, 165, 0)',
      },
      {
        name: 'Azure',
        rating: 5,
        category: 'Primary',
        color: 'rgba(19, 12, 241, 1)',
      },
      {
        name: 'Agile',
        rating: 7,
        category: 'Primary',
        color: 'rgba(69, 83, 255,0.7)',
      },
      {
        name: 'paradigms',
        rating: 6,
        category: 'Primary',
        color: 'rgba(255, 0, 0, 0.8)',
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
        text-align: center;
        font-size: 36px;
        font-weight: bolder;
        color: rgb(85, 51, 255);
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
      .web-skills--desktop {
        margin-top: 10vh;
        display: flex;
        flex-flow: row wrap;
        pading: 16px;
        justify-content: start;
      }

      @media only screen and (max-width: 800px) {
        .web-skills--desktop {
          flex-flow: column wrap;
        }
        .skills {
          margin: 1rem 1rem 2rem 1rem;
        }
        .slider-birds2 {
          left: 65%;
        }
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

  getResposniceSkillsElemet(webSkill) {
    if (window.innerWidth < 800) {
      return html` <ec-skill-meter
        .name=${webSkill.name}
        .rating=${webSkill.rating}
        .color=${webSkill.color}
      ></ec-skill-meter>`;
    }
    return html` <ec-skill
      .name=${webSkill.name}
      .rating=${webSkill.rating}
    ></ec-skill>`;
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
        <article class="web-skills--desktop web-skills--mobile">
          ${this.webSkills.map(webSkill => {
            return this.getResposniceSkillsElemet(webSkill);
          })}
        </article>
        <!-- <article class="web-skills--mobile">
          ${this.webSkills.map(webSkill => {
          return html` <ec-skill-meter
            .name=${webSkill.name}
            .rating=${webSkill.rating}
            .color=${webSkill.color}
          ></ec-skill-meter>`;
        })}
        </article> -->
      </div>
    `;
  }
}
