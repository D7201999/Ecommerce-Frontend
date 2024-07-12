import {Link} from 'react-router-dom';
export default function Electronics(){
    return(

        <>
        <div class="container">
  <div class="row first">
    <div class="col-3"><img  class='image'src="https://m.media-amazon.com/images/I/71v2jVh6nIL._AC_UY218_.jpg">

    </img>
  </div>
    <div class="col-9"> <h5>Apple iPhone 15 (128 GB) - Pink</h5>
    <span>₹70,999 </span><br></br>
    <p>FREE delivery Sat, 13 Jul
Or fastest delivery Tomorrow, 12 Jul
Service: Installation</p>
    <button class='cart'>Add to cart</button></div>
    </div>
    <div class='row first'>
    <div class="col-3"><img class='image' src="https://m.media-amazon.com/images/I/71VW8LmqqPL._AC_UY218_.jpg">
    </img></div>
    <div class="col-9"><h5>Sponsored Ad - Redmi Note 13 5G (Arctic White, 6GB RAM, 128GB Storage) </h5>
    <span>₹70,999 </span><br></br>
    <p>FREE delivery Sat, 13 Jul
Or fastest delivery Tomorrow, 12 Jul
Service: Installation</p>
    <button class='cart'>Add to cart</button></div>
  </div>
  <div class='row first'>
    <div class="col-3"><img class='image' src="https://m.media-amazon.com/images/I/71d1ytcCntL._AC_UY218_.jpg">
    </img></div>
    <div class="col-9"><h5>Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI Triple Camera
Redmi 13C (Stardust Black, 6GB RAM, 128GB Storage) | Powered by 4G MediaTek Helio G85 | 90Hz Display | 50MP AI </h5>
    <span>₹8,499</span><br></br>
    <p>FREE delivery Sat, 13 Jul
Or fastest delivery Tomorrow, 12 Jul
Service: Installation</p>
    <button class='cart'>Add to cart</button></div>
  </div>
  <div class='row first'>
    <div class="col-3"><img class='image' src="https://m.media-amazon.com/images/I/51Zjp5fq1EL._AC_UY218_.jpg">
    </img></div>
    <div class="col-9"><h5>POCO C65 (Pastel Blue 6GB RAM 128GB Storage)</h5>
    <span>₹7,498</span><br></br>
    <p>FREE delivery Sat, 13 Jul
Or fastest delivery Tomorrow, 12 Jul
Service: Installation</p>
    <button class='cart' >Add to cart</button></div>
  </div>
  <Link to='/homepage'><button class='submit'>&#8592;back</button></Link>
  
</div>
        </>
    );
}