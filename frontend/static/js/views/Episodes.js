import ViewTemplate from "./ViewTemplate.js";

export default class extends ViewTemplate {

  constructor(params) {
    super(params);
    this.setTitle("Episodes");
  }

  async getHtml() {
    return `
            <h1>Episodes Component works!</h1>
        `;
  }
}

