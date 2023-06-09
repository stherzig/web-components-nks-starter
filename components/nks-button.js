class NksButton extends HTMLElement {
  constructor() {
    super();
    const word = this.getAttribute("word");
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = /*html*/`
    <style>
    button { 
      display: inline-block;
      padding: 10px 6px;
      background-color: #FAFBFC;
      border: 1px solid rgba(27, 31, 35, 0.15);
      border-radius: 6px;
      box-shadow: rgba(27, 31, 35, 0.04) 0 1px 0, rgba(255, 255, 255, 0.25) 0 1px 0 inset;
      box-sizing: border-box;
      color: #24292E;
      cursor: pointer;
      display: inline-block;
    }
    
    button:hover { 
      background-color: #eaeef2;
    }
    .box {
      padding: 3rem;
      background-color: gold;
    }
    </style>
    <div class="box">
    <button>${word}</button>
    </div>
    
  

    `   
  }

  connectedCallback() {
    this.shadowRoot.querySelector("button").addEventListener("click", (event) => {
      alert(this.getAttribute("alert"))
    })
  }

  disconnectCallback() {
    alert("I have been removed")
  }
}


customElements.define('nks-button', NksButton);
document.querySelector("#target").remove();


