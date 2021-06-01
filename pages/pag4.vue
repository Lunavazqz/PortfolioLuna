<template>
  <div>
    <div class="container">

        <div class="title">
          <!-- <div class="parallaxText" id="parallaxText">
            <h1 class="layer1" style="z-index: 0; left: 300px; visibility: inherit; opacity: 0.050000000000000044; transform: matrix(3, 0, 0, 3, 0, 0);">PORTFOLIO</h1>
            <h1 class="layer2" style="z-index: 0; left: 150px; visibility: inherit; opacity: 0.30000000000000004; transform: matrix(2, 0, 0, 2, 0, 0);">PORTFOLIO</h1>
            <h1 class="layer3">PORTFOLIO<a href="#" class="viewsource"></a></h1>
          </div> -->
        </div>
        

        <h2 class="apartados">
          <a class="especialidad" href="page1">COVERS</a>
          <a class="especialidad" href="page2">CAMPAIGNS</a>
          <a class="especialidad" href="page3">DRAWINGS</a>
          <a class="especialidad" href="page4">VIDEO</a>
        </h2>

        <h3 class="mosca">PORTFOLIO</h3>
         <video src="v.guille.mp4" autoplay muted loop width="1200" height="1200"></video>
    </div>

  </div>
</template>



<script>

</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  
  
  flex-direction: column;
  background-color: #0F0F1B
}
.container2 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  
  background: #0F0F1B
  
}


.title {
  .parallaxText{
    .layer1{
      font-family:
      '1,617';
      
      font-weight: 300;
     
      color: whitesmoke;
      letter-spacing: 1px;

    }
    .layer2{
      font-family:
      '1,617';
      font-weight: 300;
      color: whitesmoke;
     

    }
    
    .layer3{
      font-family:
      '1,617';
      
      font-weight: 300;
      color: whitesmoke;
      letter-spacing: 1px;

    }
        

  }
  
}
.apartados{
   font-family:
  '1,617';
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: none;
  text-decoration: none;
  font-weight: 300;
  font-size: 16px;
  color: #91A9E7;
  width: 100%;
  padding-left: 9rem;
   padding-right: 9rem;
   padding-top: 2.5rem;
  .especialidad{
    text-decoration: none;
    text-decoration-color: unset;
    color: #91A9E7;
    .a{
      
    }
  }

}
.mosca{
  text-decoration: none;
  text-decoration-color: unset;
  font-family:'Pilowlava';
  font-size: 40px;
  display: flex;
  justify-content: start;
  padding-left: 3rem;
  color: whitesmoke;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #2b2b2c;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
