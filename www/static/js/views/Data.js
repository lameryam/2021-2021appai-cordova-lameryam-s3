import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Data");
    }

    async getHtml() {
        return `
<div class="div2  element text-right">
            <h1>Collected Data</h1>
            <p>Your personlised information</p>
            </div>
        `;
    }
}