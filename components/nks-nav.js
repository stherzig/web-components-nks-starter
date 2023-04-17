//This file will be the web component
//It only needs to run, not be imported by main.js
const template = document.createElement('template');
template.innerHTML = /*html*/`
  <style>

  :root {
  --primary-color: #f60f20;
  --secondary-color: #1b206e;
}
  .btn {
  cursor: pointer;
  display: inline-block;
  background: var(--primary-color);
  color: #fff;
  text-decoration: none;
  padding: 10px 30px;
  margin: 20px 0;
  border: 0;
}

.btn:hover {
  transform: scale(0.98);
}

/* TOGGLE */
.toggle {
  position: fixed;
  top: 0;
  right: 0;
  width: 60px;
  height: 60px;
  background: var(--primary-color) url(images/menu.png);
  background-size: 30px;
  background-position: center;
  background-repeat: no-repeat;
  z-index: 20;
  cursor: pointer;
}

.toggle.active {
  background: var(--primary-color) url(../images/close.png);
  background-size: 25px;
  background-position: center;
  background-repeat: no-repeat;
}

/* NAVIGATION */
.navigation {
  position: fixed;
  top: 0;
  left: 100%;
  width: 100%;
  height: 100%;
  background-color: #fff;
  z-index: 15;
  display: flex;
  justify-content: center;
  align-items: center;
}

.navigation.active {
  left: 0;
}

.navigation ul {
  position: relative;
}

.navigation ul li {
  position: relative;
  list-style: none;
  text-align: center;
}

.navigation ul li a {
  font-size: 2.2rem;
  color: #111;
  text-decoration: none;
  font-weight: 300;
}

.navigation ul li a:hover {
  color: var(--primary-color);
}
    
/* HOMEPAGE */
.home-content {
  position: relative;
  z-index: 10;
  max-width: 600px;
}   

  </style>

  <div class="toggle">x</div>
      <div class="navigation">
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="services.html">Services</a></li>
          <li><a href="work.html">Work</a></li>
          <li><a href="contact.html">Contact</a></li>
        </ul>
  </div>
`;

class NksNav extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    // let div = document.createElement('div');
    // div.textContent = 'Big Bang Theory';
    // shadowRoot.append(div);
    let clone = template.content.cloneNode(true);
    shadowRoot.append(clone);
  }
}

customElements.define('nks-nav', NksNav);

const myToggle = document.querySelector('.toggle')
const myNavigation = document.querySelector('.navigation')


myToggle.addEventListener('click', () => {
  myToggle.classList.toggle('active')
  myNavigation.classList.toggle('active')
})





