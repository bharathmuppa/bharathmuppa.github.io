import { html, fixture, expect } from '@open-wc/testing';

import '../src/ec-home.js';

describe('EcHome', () => {
  let element;
  beforeEach(async () => {
    element = await fixture(html`
      <ec-home></ec-home>
    `);
  });

  it('renders a h1', () => {
    const h1 = element.shadowRoot.querySelector('h1');
    expect(h1).to.exist;
    expect(h1.textContent).to.equal('My app');
  });

  it('passes the a11y audit', async () => {
    await expect(element).shadowDom.to.be.accessible();
  });
});
