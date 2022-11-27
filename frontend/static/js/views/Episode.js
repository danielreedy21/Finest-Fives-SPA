import ViewTemplate from "./ViewTemplate.js";

export default class extends ViewTemplate {

  constructor(params) {
    super(params);
    this.setTitle("Episode");
  }

  async getHtml() {
    return `
            <h1>Episode Component works!</h1>
        `;
  }
}

