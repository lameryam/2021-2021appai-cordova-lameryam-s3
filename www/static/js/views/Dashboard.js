import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
<div class=" div2 text-right element ">
            <h1>Meryam Lamtalssi</h1>
            <p>contact info :0638786849</p>
            <p>email:Riffood@info.com</p>
           
            <p>
                <a href="/posts" data-link>View recent recipes</a>.
            </p>
            <div>
            <article>
            <h2>About the app</h2>
            <p><span>A recipe app that offers our virtual guests to enjoy the pleasure to cook themselves by following our recipes and for those who aren't as hands on can order via our virtual restaurant to get it delivered to their home and still enjoy our beautiful recipes </span><span>
</div>
            </div>
        `;
    }
}