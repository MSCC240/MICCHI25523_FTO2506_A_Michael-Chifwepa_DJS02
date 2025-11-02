/**
 * PodcastPreview Web Component
 *
 * Represents a reusable, self-contained podcast preview card.
 * Uses Shadow DOM for style and structure encapsulation.
 */
export class PodcastPreview extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" }); // Encapsulation
  }

  static get observedAttributes() {
    return ["cover", "title", "genres", "seasons", "updated"];
  }

  attributeChangedCallback() {
    this.render();
  }

  connectedCallback() {
    this.render();
  }

  render() {
    const cover = this.getAttribute("cover") || "";
    const title = this.getAttribute("title") || "";
    const genres = this.getAttribute("genres") || "";
    const seasons = this.getAttribute("seasons") || "";
    const updated = this.getAttribute("updated") || "";

    this.shadowRoot.innerHTML = `
      <style>
        :host {
          display: block;
          background: #fff;
          border-radius: 12px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
          overflow: hidden;
          transition: transform 0.2s ease;
          cursor: pointer;
        }
        :host(:hover) {
          transform: scale(1.02);
        }
        .card {
          display: flex;
          flex-direction: column;
          align-items: center;
          padding: 1rem;
        }
        img {
          width: 100%;
          height: 180px;
          object-fit: cover;
          border-radius: 8px;
        }
        h3 {
          margin: 0.5rem 0 0.25rem;
          font-size: 1.1rem;
          text-align: center;
        }
        p {
          margin: 0.25rem 0;
          font-size: 0.9rem;
          color: #555;
          text-align: center;
        }
      </style>

      <div class="card">
        <img src="${cover}" alt="${title} cover" />
        <h3>${title}</h3>
        <p><strong>Genres:</strong> ${genres}</p>
        <p><strong>Seasons:</strong> ${seasons}</p>
        <p><strong>Updated:</strong> ${new Date(updated).toLocaleDateString()}</p>
      </div>
    `;

    // Handle click
    this.shadowRoot.querySelector(".card").onclick = () => {
      this.dispatchEvent(new CustomEvent("podcastSelected", { bubbles: true }));
    };
  }
}

// Register component
customElements.define("podcast-preview", PodcastPreview);
