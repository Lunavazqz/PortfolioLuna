<template>

  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </head>
    <div class="container">

        <div class="title">
          <!-- <div class="parallaxText" id="parallaxText">
            <h1 class="layer1" style="z-index: 0; left: 300px; visibility: inherit; opacity: 0.050000000000000044; transform: matrix(3, 0, 0, 3, 0, 0);">PORTFOLIO</h1>
            <h1 class="layer2" style="z-index: 0; left: 150px; visibility: inherit; opacity: 0.30000000000000004; transform: matrix(2, 0, 0, 2, 0, 0);">PORTFOLIO</h1>
            <h1 class="layer3">PORTFOLIO<a href="#" class="viewsource"></a></h1>
          </div> -->
        </div>
        

        <h2 class="apartados">
          <a class="especialidadnow" href="">HOME</a>
          <a class="especialidad" href="page1">COVERS</a>
          <a class="especialidad" href="page2">MINI PROJECTS</a>
          <a class="especialidad" href="page3">VIDEO</a>
          <a class="especialidad" href="pag4">CONTACT</a>
        </h2>

        <h3 class="mosca">Luna Vázquez</h3>
    </div>

  </div>
</template>



<script>
export default {
  mounted(){

    /*const controller = new this.$scrollmagic.Controller({vertical: false});

    var tween = new TimelineMax()
          .add([
            TweenMax.fromTo("#parallaxText .layer1", 1, {scale: 3, autoAlpha: 0.05, left: 300}, {left: -350, ease: Linear.easeNone}),
            TweenMax.fromTo("#parallaxText .layer2", 1, {scale: 2, autoAlpha: 0.3, left: 150}, {left: -175, ease: Linear.easeNone})
          ]);

        // build scene
        var scene = new ScrollMagic.Scene({triggerElement: "#trigger2", duration: $(window).width()})
                .setTween(tween)
                .addIndicators() // add indicators (requires plugin)
                .addTo(controller);*/
  }
}
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  
  
  flex-direction: column;
  background-color: #EBE9E1
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
  'Otto Attac Type';
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: none;
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
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
  .especialidadnow{
    text-decoration: none;
    text-decoration-color: unset;
    color: #506088;


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
  color: #91A9E7;
  .es{
    transform: rotate(-90deg); 
    transform: rotate(-90deg);
    transform: rotate(-90deg);
    transform: rotate(-90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
    height:20px;
    width:25px;
}
.inline-block{
    display:-moz-inline-stack;
    display:inline-block;
    zoom:1;
    *display:inline; 
}
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
