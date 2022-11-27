import ViewTemplate from "./ViewTemplate.js";

export default class extends ViewTemplate {

  constructor(params) {
    super(params);
    this.setTitle("Schedule");
  }

  async getHtml() {
    return `
            <h1>Schedule Component works!</h1>
        `;
  }
}

