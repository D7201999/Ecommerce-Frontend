import {Link} from 'react-router-dom';
export default function Clothes(){
    return(

        <>
        <div class="container">
  <div class="row first">
    <div class="col-3"><img  class='image'src="https://m.media-amazon.com/images/I/61f3p3fGEaL._SY741_.jpg">

    </img>
  </div>
    <div class="col-9"> <h5>Sponsored 
fanideaz
Branded Mens Half Sleeve Cotton Striped Polo T-shirt for Mens || Polo Tshirt for Men || Branded Tshirt for Men
</h5>
    <span>₹850 </span><br></br>
    <p>Save 1% with coupon
FREE Delivery by Amazon</p>
    <button class='cart'>Add to cart</button></div>
    </div>
    <div class='row first'>
    <div class="col-3"><img class='image' src="https://m.media-amazon.com/images/I/51cooN0BvWL._AC_UL320_.jpg">
    </img></div>
    <div class="col-9"><h5>ONE X
Soft Comfortable Printed Full Sleeve Winter Wear Hoodie for</h5>
    <span> ₹649 </span><br></br>
    <p></p>
    <button class='cart'>Add to cart</button></div>
  </div>
  <div class='row first'>
    <div class="col-3"><img class='image' src="https://m.media-amazon.com/images/I/610IIi6wHuL._SY741_.jpg">
    </img></div>
    <div class="col-9"><h5>ILymio Track Pant for Men || Track Pants || Plain Track Pant (Track-06-08) </h5>
    <span>₹499</span><br></br>
    <p>FREE delivery Sat, 13 Jul
Or fastest delivery Tomorrow, 12 Jul
Service: Installation</p>
    <button class='cart'>Add to cart</button></div>
  </div>
  <div class='row first'>
    <div class="col-3"><img class='image' src="https://assets.myntassets.com/h_1440,q_100,w_1080/v1/assets/images/25894630/2023/11/16/6799ff93-a21f-48a8-8e97-eb5a53670c1d1700132528133-THE-BEAR-HOUSE-Men-White-Printed-Hooded-Sweatshirt-628170013-4.jpg">
    </img></div>
    <div class="col-9"><h5>Buy THE BEAR HOUSE Typography Printed Hooded Pure Cotton Pullover Sweatshirt -</h5>
    <span>₹1,099</span><br></br>
    <p>FREE delivery Sat, 13 Jul
Or fastest delivery Tomorrow, 12 Jul
Service: Installation</p>
    <button class='cart'>Add to cart</button></div>
  </div>
  <Link to='/homepage'><button class='submit'>&#8592;back</button></Link>
  
</div>
        </>
    );
}