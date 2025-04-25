import { LitElement, css, html } from 'lit'
import litLogo from './assets/lit.svg'
import viteLogo from '/vite.svg'

/**
 * An example element.
 *
 * @slot - This element has a slot
 * @csspart button - The button
 */
export class MyElement extends LitElement {
  static get properties() {
    return {
      /**
       * Copy for the read the docs hint.
       */
      docsHint: { type: String },

      /**
       * The number of times the button has been clicked.
       */
      count: { type: Number },
    }
  }

  constructor() {
    super()
    this.docsHint = 'Click on the Vite and Lit logos to learn more'
    this.count = 0
  }

  render() {
    return html`
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src=${viteLogo} class="logo" alt="Vite logo" />
        </a>
        <a href="https://lit.dev" target="_blank">
          <img src=${litLogo} class="logo lit" alt="Lit logo" />
        </a>
      </div>
      <slot></slot>
      <div class="card">
        <button @click=${this._onClick} part="button">
          count is ${this.count}
        </button>
      </div>
      <p class="read-the-docs">${this.docsHint}</p>
    `
  }

  _onClick() {
    this.count++
  }

  static get styles() {
    return css`
      :host {
        max-width: 1280px;
        margin: 0 auto;
        padding: 2rem;
        text-align: center;
      }

      .logo {
        height: 6em;
        padding: 1.5em;
        will-change: filter;
        transition: filter 300ms;
      }
      .logo:hover {
        filter: drop-shadow(0 0 2em #646cffaa);
      }
      .logo.lit:hover {
        filter: drop-shadow(0 0 2em #325cffaa);
      }

      .card {
        padding: 2em;
      }

      .read-the-docs {
        color: #888;
      }

      a {
        font-weight: 500;
        color: #646cff;
        text-decoration: inherit;
      }
      a:hover {
        color: #535bf2;
      }

      ::slotted(h1) {
        font-size: 3.2em;
        line-height: 1.1;
      }

      button {
        border-radius: 0px;
        border: 1px solid transparent;
        padding: 0.6em 1.2em;
        font-size: 1em;
        font-weight: 500;
        font-family: inherit;
        background-color: #1a1a1a;
        cursor: pointer;
        transition: border-color 0.25s;
      }
      button:hover {
        border-color: #646cff;
      }
      button:focus,
      button:focus-visible {
        outline: 4px auto -webkit-focus-ring-color;
      }

      @media (prefers-color-scheme: light) {
        a:hover {
          color: #747bff;
        }
        button {
          background-color: #f9f9f9;
        }
      }
    `
  }
}

window.customElements.define('my-element', MyElement)

class SiaButton extends LitElement {
  static styles = css`
    button {
      padding: 8px 24px;
      background-color: #002569;
      color: white;
      font-size: 16px;
      line-height: 1.5em;
      border: none;
      border-radius: 0px;
      cursor: pointer;
    }
    button:hover {
      background-color: #001a47;
    }
  `;

  render() {
    return html`<button><slot></slot></button>`;
  }
}

class SiaTable extends LitElement {
  static styles = css`
    table {
      width: 100%;
      border-collapse: collapse;
    }

    th, td {
      border: 1px solid #CFCFCF ;
    }

    th {
      background-color: #002569;
      color: #FFFFFF;
      font-family: 'Proxima Nova', sans-serif;
      font-weight: 700;
      font-size: 16px;
      line-height: 1.5em;
      padding: 8px 8px;
      width: 160px;
      height: 32px;
      text-align: left;
    }

    td {
      background-color: #FFFFFF;
      color: #121212;
      font-family: 'Proxima Nova', sans-serif;
      font-weight: 400;
      font-size: 16px;
      line-height: 1.5em;
      padding: 4px;
      width: 160px;
      height: 32px;
      text-align: left;
    }

    th + th,
    td + td {
      padding-left: 8px;
    }
  `;

  render() {
    return html`
      <table>
        <thead>
          <tr>
            ${Array(6).fill().map(() => html`<th>Header</th>`)}
          </tr>
        </thead>
        <tbody>
          ${Array(10).fill().map(() => html`
            <tr>
              ${Array(6).fill().map(() => html`<td>Cell</td>`)}
            </tr>
          `)}
        </tbody>
      </table>
    `;
  }
}

class SiaTextInput extends LitElement {
  static styles = css`
    .form-md {
      width: 100%;
      text-align: center;
      margin: 32px auto;
    }

    .form-md .form-group {
      margin-left: auto;
      margin-right: auto;
      max-width: 320px;
    }

    .form-group {
      margin-bottom: 16px;
      position: relative;
    }

    input {
      position: relative;
      display: block;
      width: 100%;
      border: 1px solid #002569;
      border-radius: 0px;
      background-color: transparent;
      margin: 0 auto;
      padding: 6px 4px 4px 14px;
      height: 40px;
      outline: none !important;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      transition: all 0.2s ease-in-out;
    }

    label {
      position: absolute;
      top: 20px;
      left: 12px;
      text-align: left;
      display: inline-block;
      padding: 0 4px;
      height: 14px;
      line-height: 14px;
      font-size: 14px;
      font-weight: 400;
      background: #fff;
      color: #002569;
      margin: 0 auto;
      cursor: text;
      transition: all 0.15s ease-in-out;
    }

    input:hover,
    input:focus {
      border: 1px solid #001a47;
    }

    input:valid + label,
    input:focus + label {
      top: 2px;
      color: #001a47;
      font-weight: bold;
      font-size: 10px;
    }

    .gl-form-asterisk {
      background-color: inherit;
      color: #e32b2b;
      padding: 0;
      padding-left: 3px;
    }

    .gl-form-asterisk:after {
      content: '*';
    }
  `;

  render() {
    return html`
      <form class="form-md">
        <div class="form-group">
          <input id="form_name1" class="form-control" type="text" required />
          <label for="form_name1">
            Name<span class="gl-form-asterisk"></span>
          </label>
        </div>

        <div class="form-group">
          <input id="form_name2" class="form-control" type="text" required />
          <label for="form_name2">
            Email<span class="gl-form-asterisk"></span>
          </label>
        </div>
      </form>
    `;
  }
}

class SiaDropdown extends LitElement {
  static styles = css`
    .form-md {
      width: 100%;
      text-align: center;
      margin: 32px auto;
    }

    .form-md .form-group {
      margin-left: auto;
      margin-right: auto;
      max-width: 320px;
    }

    .form-group {
      margin-bottom: 16px;
      position: relative;
    }

    select {
      position: relative;
      display: block;
      width: 100%;
      border: 1px solid #002569;
      border-radius: 0px;
      background-color: transparent;
      margin: 0 auto;
      padding: 6px 4px 4px 14px;
      height: 56px;
      outline: none !important;
      font-size: 16px;
      color: rgba(0, 0, 0, 0.85);
      appearance: none;
      background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg xmlns%3D%22http%3A//www.w3.org/2000/svg%22 viewBox%3D%220 0 4 5%22%3E%3Cpath fill%3D%22%23000%22 d%3D%22M2 0L0 2h4z%22/%3E%3C/svg%3E');
      background-repeat: no-repeat;
      background-position: right 10px center;
      background-size: 10px;
      transition: border-color 0.2s ease-in-out;
    }

    label {
      position: absolute;
      top: 20px;
      left: 12px;
      text-align: left;
      display: inline-block;
      padding: 0 4px;
      height: 14px;
      line-height: 14px;
      font-size: 14px;
      font-weight: 400;
      background: #fff;
      color: #002569;
      margin: 0 auto;
      cursor: text;
      transition: all 0.15s ease-in-out;
    }

    select:hover,
    select:focus {
      border: 1px solid #001a47;
    }

    select:valid + label,
    select:focus + label {
      top: 2px;
      color: #001a47;
      font-weight: bold;
      font-size: 10px;
    }

    .gl-form-asterisk {
      background-color: inherit;
      color: #e32b2b;
      padding: 0;
      padding-left: 3px;
    }

    .gl-form-asterisk:after {
      content: '*';
    }
  `;

  render() {
    return html`
      <form class="form-md">
        <div class="form-group">
          <select id="form_dropdown1" class="form-control" required>
            <option value="" disabled selected hidden></option>
            <option value="1">Option 1</option>
            <option value="2">Option 2</option>
            <option value="3">Option 3</option>
          </select>
          <label for="form_dropdown1">
            Select an Option<span class="gl-form-asterisk"></span>
          </label>
        </div>
      </form>
    `;
  }
}

class SiaRadio extends LitElement {
  static styles = css`
    label {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    input[type="radio"] {
      width:24px;
      height: 24px;
      border-radius: 40%;
      border: 1px solid #002569;
      appearance: none;
      outline: none;
      cursor: pointer;
      background-color: white;
      transition: background-color 0.3s, border-color 0.3s;
    }

    input[type="radio"]:checked {
      background-color: #002569;
    }
  `;

  render() {
    return html`
      <label>
        <input type="radio" name="group" />
        <slot></slot>
      </label>
    `;
  }
}

class SiaCheckbox extends LitElement {
  static styles = css`
    label {
      display: flex;
      align-items: center;
      gap: 8px;
    }

    input[type="checkbox"] {
      width: 24px;
      height: 24px;
      border-radius: 2px;
      border: 1px solid #002569;
      appearance: none;
      outline: none;
      cursor: pointer;
      background-color: white;
      transition: background-color 0.3s, border-color 0.3s;
    }

    input[type="checkbox"]:checked {
      background-color: #002569;
    }
  `;

  render() {
    return html`
      <label>
        <input type="checkbox" />
        <slot></slot>
      </label>
    `;
  }
}

class SiaAccordion extends LitElement {
  static styles = css`
    .accordion {
      border: 1px solid #002569;
      border-radius: 0px;
      margin-bottom: 8px;
    }

    .accordion-header {
      background-color: #002569;
      color: white;
      padding: 16px;
      font-size: 16px;
      font-weight: 700;
      cursor: pointer;
    }

    .accordion-content {
      padding: 16px;
      font-size: 14px;
      color: #121212;
      display: none;
    }

    .accordion.open .accordion-content {
      display: block;
    }
  `;

  constructor() {
    super();
    this.open = false;
  }

  toggleAccordion() {
    this.open = !this.open;
    this.requestUpdate();
  }

  render() {
    return html`
      <div class="accordion ${this.open ? 'open' : ''}">
        <div class="accordion-header" @click="${this.toggleAccordion}">
          <slot name="header"></slot>
        </div>
        <div class="accordion-content">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

class SiaCard extends LitElement {
  static styles = css`
    .card {
      border: 1px solid #ddd;
      border-radius: 0px;
      box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
      padding: 16px;
      background-color: white;
      margin-bottom: 8px;
    }

    .card-header {
      font-size: 16px;
      font-weight: 700;
      color: #002569;
      margin-bottom: 8px;
    }

    .card-content {
      font-size: 14px;
      color: #121212;
    }
  `;

  render() {
    return html`
      <div class="card">
        <div class="card-header">
          <slot name="header"></slot>
        </div>
        <div class="card-content">
          <slot name="content"></slot>
        </div>
      </div>
    `;
  }
}

class SiaChip extends LitElement {
  static styles = css`
    .chip {
      display: inline-flex;
      align-items: center;
      padding: 4px 16px;
      border-radius: 16px;
      font-size: 14px;
      font-weight: 500;
      margin: 4px;
      cursor: pointer;
      transition: background-color 0.3s;
    }

    .chip.warning {
      background-color: #FFC9CC;
      color: #121212;
    }

    .chip.success {
      background-color: #05B410;
      color: white;
    }

    .chip.default {
      background-color: #002569;
      color: white;
    }

    .chip:hover {
      opacity: 0.9;
    }

    .chip .close {
      margin-left: 8px;
      font-size: 12px;
      cursor: pointer;
    }
  `;

  render() {
    return html`
      <div class="chip ${this.getAttribute('class')}">
        <slot></slot>
        <span class="close" @click="${() => this.dispatchEvent(new Event('close'))}">x</span>
      </div>
    `;
  }
}

customElements.define('sia-accordion', SiaAccordion);
customElements.define('sia-card', SiaCard);
customElements.define('sia-chip', SiaChip);
customElements.define('sia-button', SiaButton);
customElements.define('sia-table', SiaTable);
customElements.define('sia-textinput', SiaTextInput);
customElements.define('sia-dropdown', SiaDropdown);
customElements.define('sia-radio', SiaRadio);
customElements.define('sia-checkbox', SiaCheckbox);
