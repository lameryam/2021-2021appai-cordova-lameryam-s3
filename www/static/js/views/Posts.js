import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Posts");
    }

    async getHtml() {
        return `
<div class="div2 text-right element">
<h3>Enyoy our best</h3>
            <h1>Recipes</h1>
            <p></p>
            </div>
           <div class="container-fluid">
    <h1 class="mt-5">We have enough to choose from </h1>
<p class="subtitle">Green and clean</p>
<button type="button" class="btn btn-success">Main courses</button>
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2">

<div class="col-5">
<div class="card card-block card-1">
<div class="card-body">
        <h5 class="card-title text-white">Radish Salad</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>
</div>
</div>
<div class="col-5">
<div class="card card-block card-2">
<div class="card-body">
        <h5 class="card-title text-white">Caramel pancakes</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>
</div>
</div>
<div class="col-5">
<div class="card card-block card-3">
<div class="card-body">
        <h5 class="card-title text-white">Spinage Tofu Salad</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>
</div>
</div>
<div class="col-5">
<div class="card card-block card-4">
<div class="card-body">
        <h5 class="card-title text-white">Pumpkin soup</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>
<div class="col-5">
<div class="card card-block card-5">
<div class="card-body">
        <h5 class="card-title text-white">Bio burger</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>

<div class="col-5">
<div class="card card-block card-6">
<div class="card-body">
        <h5 class="card-title text-white">Union toast with garlic</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>
<div class="col-5">
<div class="card card-block card-7">
<div class="card-body">
        <h5 class="card-title text-white">olive pizza</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>
<div class="col-5">
<div class="card card-block card-8">
<div class="card-body">
        <h5 class="card-title text-white">chicken wrap</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>
<div class="col-5">
<div class="card card-block card-9">
<div class="card-body">
        <h5 class="card-title text-white">Dragon fruit bowl</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>

</div>
</div>

</div>
</div>
</div>
<button type="button" class="btn btn-warning">Drinks</button>
    <div class="scrolling-wrapper row flex-row flex-nowrap mt-4 pb-4 pt-2 drinks">

<div class="col-2">
<div class="card card-block1 card-11">
<div class="card-body">
        <h5 class="card-title text-white">matcha thea</h5>
        <p class="card-text text-white"></p>
        </div>
</div>
</div>
<div class="col-2">
<div class="card card-block1 card-12">
<div class="card-body">
        <h5 class="card-title text-white">Coconut Shake</h5>
        <p class="card-text text-white"></p>
        </div>
</div>
</div>
<div class="col-2">
<div class="card card-block1 card-13">
<div class="card-body">
        <h5 class="card-title text-white">Brocoli Smootie</h5>
        <p class="card-text text-white"></p>
        </div>
</div>
</div>
<div class="col-2">
<div class="card card-block1 card-14">
<div class="card-body">
        <h5 class="card-title text-white">ice TEA cocktail</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>
<div class="col-2">
<div class="card card-block1 card-15">
<div class="card-body">
        <h5 class="card-title text-white">Strawberry Smootie</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>

<div class="col-2">
<div class="card card-block1 card-16">
<div class="card-body">
        <h5 class="card-title text-white">Peach cocktail</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>
<div class="col-2">
<div class="card card-block1 card-17">
<div class="card-body">
        <h5 class="card-title text-white">Mint citrus cocktail</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>
<div class="col-2">
<div class="card card-block1 card-18">
<div class="card-body">
        <h5 class="card-title text-white">chicken wrap</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>
        </div>

</div>
</div>
<div class="col-2">
<div class="card card-block1 card-19">
<div class="card-body">
        <h5 class="card-title text-white">Dragon fruit bowl</h5>
        <p class="card-text text-white">With supporting text below as a natural lead-in to additional content.</p>

</div>
</div>

</div>
</div>
</div>







<button type="button" class="btn btn-danger">Desserts</button>
<!-- memo input  -->
<div class="memo">
<h3>Send us a message for recipes youd like us to add</h3>
  <!-- Name input 
  <div class="form-outline mb-4">
    <input type="text" id="username" class="form-control" />
    <label class="form-label" for="form4Example1">Name</label>
  </div>-->

  <!-- Email input 
  <div class="form-outline mb-4">
    <input type="email" id="email" class="form-control" />
    <label class="form-label" for="form4Example2">Email address</label>
  </div>-->

  <!-- Message input -->
  <div class="form-outline mb-4">
    <textarea class="form-control" id="text" rows="4"></textarea>
    <label class="form-label" for="form4Example3">Message</label>
  </div>

   <!-- Submit button -->
  
  <input type="submit"  class="btn btn-success btn-block mb-4" onclick="test()">
  
</div>



        `;
    }
}