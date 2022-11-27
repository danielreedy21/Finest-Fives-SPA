import ViewTemplate from "./ViewTemplate.js";

export default class extends ViewTemplate {

  constructor(params) {
    super(params);
    this.setTitle("Finest Fives");
  }

  async getHtml() {
    return `
            <h1>Home Component works!</h1>
        `;
  }
}
