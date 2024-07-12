function Carousel(){
    return(
        <>


<div class="container">
  <h2>Carousel Example</h2>  
  <div id="myCarousel" class="carousel slide" data-ride="carousel">

    <ol class="carousel-indicators">
      <li data-target="#myCarousel" data-slide-to="0" class="active"></li>
      <li data-target="#myCarousel" data-slide-to="1"></li>
      <li data-target="#myCarousel" data-slide-to="2"></li>
    </ol>

    
    <div class="carousel-inner">
      <div class="item active">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTcuB4K0-svzELQ_cmNMM69mSY7KpUDDLDIDg&s" alt="Los Angeles" />
      </div>

      <div class="item">
        <img src="https://media.istockphoto.com/id/1492815833/photo/vintage-theatrical-clothes-in-dressing-room.webp?b=1&s=170667a&w=0&k=20&c=6OaU5Jg6raBaS_o8HNaDJsncdmlWixh5JumZhQkkySg=" alt="Chicago" />
      </div>
    
      <div class="item">
        <img src="https://media.istockphoto.com/id/1492815833/photo/vintage-theatrical-clothes-in-dressing-room.webp?b=1&s=170667a&w=0&k=20&c=6OaU5Jg6raBaS_o8HNaDJsncdmlWixh5JumZhQkkySg=" alt="New york" />
      </div>
    </div>

    
    <a class="left carousel-control" href="#myCarousel" data-slide="prev">
      <span class="glyphicon glyphicon-chevron-left"></span>
      <span class="sr-only">Previous</span>
    </a>
    <a class="right carousel-control" href="#myCarousel" data-slide="next">
      <span class="glyphicon glyphicon-chevron-right"></span>
      <span class="sr-only">Next</span>
    </a>
  </div>
</div>



        </>
    );
}
export default Carousel;