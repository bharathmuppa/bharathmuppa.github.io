import { LitElement, html, css } from 'lit-element';
import * as d3 from 'd3';
import {skillStyle} from './skill.styles.js';



export class Skill extends LitElement {
  static get properties() {
    return {
      name: {
        type: String,
      },
      rating: {
        type: String,
      },
    };
  }

  static get styles() {
    return skillStyle;
  }

  constructor() {
    super();
    this.name = '';
    this.rating = '';
  }

  render() {
    return html` <span id="rating"></span> `;
  }

  async connectedCallback() {
    super.connectedCallback();
    const chart = await this.radialProgress('#rating',this.name);
    chart.update(Math.random(),this.name);
    setTimeout(() => {
      chart.update(this.rating,this.name);
    }, 2000);
  }

  async radialProgress(selector,name) {
    await this.updateComplete;
    name = name.split(" ").join("-").toLowerCase();
    const parent = d3.select(this.shadowRoot.querySelector(selector));
    const size = parent.node().getBoundingClientRect();
    const svg = parent
      .append('svg')
      .attr('width', size.width)
      .attr('height', size.height);
    const outerRadius = Math.min(size.width, size.height) * 0.45;
    const thickness = 10;
    let value = 0;

    const mainArc = d3
      .arc()
      .startAngle(0)
      .endAngle(Math.PI * 2)
      .innerRadius(outerRadius - thickness)
      .outerRadius(outerRadius);

    svg
      .append('path')
      .attr('class', 'progress-bar-bg')
      .attr('transform', `translate(${size.width / 2},${size.height / 2})`)
      .attr('d', mainArc());

    const mainArcPath = svg
      .append('path')
      .attr('class', `progress-bar ${ name}-bar`)
      .attr('transform', `translate(${size.width / 2},${size.height / 2})`);

    svg
      .append('circle')
      .attr('class', `progress-bar ${ name}-bar`)
      .attr(
        'transform',
        `translate(${size.width / 2},${
          size.height / 2 - outerRadius + thickness / 2
        })`
      )
      .attr('width', thickness)
      .attr('height', thickness)
      .attr('r', thickness / 2);

    const end = svg
      .append('circle')
      .attr('class', `progress-bar ${ name}-bar`)
      .attr(
        'transform',
        `translate(${size.width / 2},${
          size.height / 2 - outerRadius + thickness / 2
        })`
      )
      .attr('width', thickness)
      .attr('height', thickness)
      .attr('r', thickness / 2);

    const percentLabel = svg
      .append('text')
      .attr('class', `progress-label ${ name}-label`)
      .attr('transform', `translate(${size.width / 2},${size.height / 2})`)
      .text(name);
    return {
      update (progressPercent, textToDisplay) {
        const startValue = value;
        const startAngle = (Math.PI * startValue) / 50;
        const angleDiff = (Math.PI * (progressPercent * 10)) / 50 - startAngle;
        const startAngleDeg = (startAngle / Math.PI) * 180;
        const angleDiffDeg = (angleDiff / Math.PI) * 180;
        const transitionDuration = 1500;
        mainArcPath
          .transition()
          .duration(transitionDuration)
          .attrTween('d',  ()=> {
            return (t) => {
              mainArc.endAngle(startAngle + angleDiff * t);
              return mainArc();
            };
          });
        end
          .transition()
          .duration(transitionDuration)
          .attrTween('transform',  ()=> {
            return (t)=> {
              return (
                `translate(${size.width / 2},${size.height / 2})` +
                `rotate(${startAngleDeg + angleDiffDeg * t})` +
                `translate(0,-${outerRadius - thickness / 2})`
              );
            };
          });
        percentLabel
          .transition()
          .duration(transitionDuration)
          .tween('bla',  ()=> {
            return  ()=> {
              percentLabel.text(
                textToDisplay
              );
            };
          });
        value = progressPercent * 10;
      },
    };
  }
}
