<template>
  <div>
    <head>
      <link
        rel="stylesheet"
        href="https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css"
      />
    </head>

    <div class="container">
      <h2 class="apartados">
        <a class="especialidad" href="indexxx">HOME</a>
        <a class="especialidad" href="pag2">COVERS</a>
        <a class="especialidad" href="pag3">MINI PROJECTS</a>
        <a class="especialidad" href="pag4">VIDEO</a>
        <a class="especialidadnow" href="">CONTACT</a>
      </h2>
      <div class="h2">READY TO MAKE SOMETHING COOL?</div>
      
     </div>
     <div class="container2">
       <div id="correo" class="spacer s0"></div>
       <div id="animate1" class="box2">
	    <p class="h3">lunavazquez2508@gmail.com</p>
       <p class="h3">@lunavvv.zip</p>
      </div>
      
     </div>

  </div>
  
</template>



<script>
export default {
  mounted() {
    var controller = new this.$scrollmagic.Controller();
    var scene = new this.$scrollmagic.Scene({
							triggerElement: "#correo"
						})
						.setTween("#animate1", 0.4, {backgroundColor: "#238F68", scale: 2}) // trigger a TweenMax.to tween
					
						.addTo(controller);
   /* var revealElements = document.getElementsByClassName(".h3");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new this.$scrollmagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
								triggerHook: 0.9,
							})
							.setClassToggle(revealElements[i], "visible ") // add class toggle
							
							.addTo(controller);}*/
  },
};

</script>

<style lang="scss">
/*.body{
    background:src="v.guille.mp4"; no-repeat center center fixed; 
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;

}*/
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  background-color: #8DC8B2;
}
.container2 {
  margin: 0 auto;
  min-height: 50vh;
  width: 100%;
  
  flex-direction: column;
  background-color: #8DC8B2;
}

.h2{
  font-family: "Pixel12x10";
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: none;
  text-decoration: none;
  font-weight: 300;
  font-size: 150px;
  width: 100%;
  padding-left: 9rem;
  padding-right: 9rem;
  padding-top: 2.5rem;
  text-decoration: none;
    text-decoration-color: unset;
     color: #238F68;
     animation: slideInLeft ; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */


}
.h3{
font-family: "1,617";
  font-weight: bold;
  
  font-style: none;
  text-decoration: none;
  
  font-size: 18px;
  padding-left: 10rem;
  
  text-decoration: none;
    text-decoration-color: unset;
   
}
.box2{
  width: 50%;
  padding-left: 10rem;
}

.apartados {
  font-family: "1,617";
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: none;
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  width: 100%;
  padding-left: 9rem;
  padding-right: 9rem;
  padding-top: 2.5rem;
  text-decoration: none;
    text-decoration-color: unset;
     color: #238F68; 
     

  .especialidad {
    transition: color 250ms ease;
    font-style: none;
                    text-decoration: none;
                    color: #238F68; 
    //color: #91a9e7;
    &.active {
                  color: #91a9e7;
                  position: static;
                  width: auto;
                  height: auto;
                  margin: 0;
                  overflow: visible;
                  clip: auto;
                  font-style: none;
                  text-decoration: none;
                }

      &:hover {
                    color: #91a9e7;
                    font-style: none;
                    text-decoration: none;

      a {
                        color: #91a9e7;
                        font-style: none;
  text-decoration: none;
                    }
                }
     
                
  }
  .especialidadnow {
    text-decoration: none;
    text-decoration-color: unset;
     color: #91a9e7;

    //color: #506088;
   
  }
}

.links {
  padding-top: 15px;
}
</style>
