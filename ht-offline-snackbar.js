import { LitElement, html, css } from "lit-element";

class HTOfflineSnackbar extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        padding: 12px;
        background-color: #323232;
        color: #f1f1f1;
        box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        text-align: center;
        will-change: transform;
        transform: translate3d(0, 100%, 0);
        transition-property: visibility, transform;
        transition-duration: 0.2s;
        visibility: hidden;
      }
      :host(.opened) {
        visibility: visible;
        -webkit-transform: translate3d(0, 0, 0);
        transform: translate3d(0, 0, 0);
      }
      @media (min-width: 460px) {
        :host {
          width: 320px;
          margin: auto;
        }
      }
    `;
  }

  render() {
    return html`
    <slot></slot>
  `;
  }
}

window.customElements.define("ht-offline-snackbar", HTOfflineSnackbar);
