import { LitElement, html, css } from 'lit-element';

const color1 = css`#53f`;
const color2 = css`#4553ff`;
const color3 = css`#4f40ff`;
const color4 = css`#25ddf5`;

export class Stripes extends LitElement {
  constructor() {
    super();
  }

  static get styles() {
    return css`
      #slanted-bg {
        width: 100%;
        height: 100%;
        overflow: hidden;
        -webkit-transform: skewY(-4deg);
        transform: skewY(-4deg);
        -webkit-transform-origin: 0;
        transform-origin: 0;
        background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #25ddf5 94%);
        top: -5px;
        position: relative;
      }

      div#slanted-bg span {
        position: absolute;
      }

      span:nth-child(1) {
        background: ${color1};
        left: 0;
        height: 190px;
        width: 33%;
        border-radius: 16px;
        z-index: 2;
      }
      span:nth-child(2) {
        left: 30%;
        height: 160px;
        background: ${color2};
        width: 25%;
        border-radius: 16px;
        z-index: 1;
      }
      span:nth-child(3) {
        left: 80%;
        height: 150px;
        background: ${color3};
        width: 0%;
        border-radius: 0;
      }
      span:nth-child(4) {
        height: 69px;
        transform: skew(-4deg);
        width: 200px;
        border-radius: 12px;
        background: linear-gradient(150deg, #53f 15%, #05d5ff 70%, #25ddf5 94%);
        bottom: -48px;
        right: 0;
        border: 10px solid white;
      }
      span:nth-child(5) {
        height: 180px;
        border-radius: 12px;
        transform: skew(4deg);
        bottom: -48px;
        right: 0;
      }
      .bgImg {
        border: 10px solid white;
        width: 130px;
        background-position: right;
        background-image: url('./src/assets/mine.png');
        background-repeat: no-repeat;
      }
      @media only screen and (max-width: 400px) {
        span:nth-child(4) {
          top: 30vh;
          transform: skew(-35deg);
          right: -5vw;
        }
        .bgImg {
          top: 17vh;
        }
      }
      @media only screen and (min-width: 400px) and (max-width: 800px) {
        span:nth-child(4) {
          transform: skew(-35deg);
          top: 15vh;
          right: -5vw;
        }
        .bgImg {
          bottom: auto;
          z-index: 99;
          top: 4vh;
        }
      }
    `;
  }

  render() {
    return html`
      <div id="slanted-bg" aria-hidden="true">
        <span></span>
        <span></span>
        <span></span>
        <span></span>
        <span class="bgImg"></span>
      </div>
    `;
  }
}
