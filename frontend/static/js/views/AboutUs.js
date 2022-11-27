import ViewTemplate from "./ViewTemplate.js";

export default class extends ViewTemplate {

  constructor(params) {
    super(params);
    this.setTitle("About Us");
  }

  async getHtml() {
    return `
            <h1>About Us Component works!</h1>
        `;
  }
}

