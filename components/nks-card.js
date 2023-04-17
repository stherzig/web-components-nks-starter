//This file will be the web component
//It only needs to run, not be imported by main.js



const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>
  :host {
      color: #fff;  
    }
  .card {
    background: limegreen;
    border: 4px solid hotpink;
    }
    h3 {
      color: red;
      font-size: 32px;
    }
    
    

  </style>

  <div class="card">
    <slot name="title">Card-Title</slot>
    <slot name="description">Card Description</slot>
  </div>
`;

class NksCard extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'closed' });
    // let div = document.createElement('div');
    // div.textContent = 'Big Bang Theory';
    // shadowRoot.append(div);
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}


customElements.define('nks-card', NksCard);


