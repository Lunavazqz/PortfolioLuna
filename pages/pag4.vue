
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

        <a class="especialidad" href="/">HOME</a>
       
        <a class="especialidad" href="pag2">COVERS</a>
        <a class="especialidad" href="pag3">MINI PROJECTS</a>
        <a class="especialidadnow" href="">VIDEO</a>
        <a class="especialidad" href="pag5">CONTACT</a>
       
      </h2>
      <!--<div class="video" id="video">VIDEO</div>-->
      <div class="animate1"><video src="/juancho.mp4" loop width="100%" autoplay ></video></div>
      

      
    </div>
  </div>
</template>



<script>
export default {
  mounted() {
  
}}


// wait for document ready
		// build scene
		
	;
// build scenes
/*	var revealElements = document.getElementsByClassName("hola");
		for (var i=0; i<revealElements.length; i++) { // create a scene for each element
			new ScrollMagic.Scene({
								triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
								offset: 50,												 // start a little later
								triggerHook: 0.9,
							})
							.setClassToggle(revealElements[i], "visible") // add class toggle
							.addIndicators({name: "hola " + (i+1) }) // add indicators (requires plugin)
							.addTo(controller);
		}*/
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
  //background-color: #ebe9e1;
  background-color: #3E3F46;
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
}

.video{

  font-family: 'Pixel12x10';
  font-size: 200px;
  display: flex;
  justify-content: flex-start;
  color: rgba(255, 255, 255, 1);
  padding-top:5rem ;
   padding-left:2rem ;
   position: absolute;
   animation: backOutLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 3s; /* don't forget to set a duration! */
}

.covers{
  font-family: 'Pixel12x10';
  font-size: 200px;
  display: flex;
  justify-content: center;
  
}

.apartados {
  font-family: "Erotique Text";
  font-weight: bold;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  font-style: none;
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  color: #91a9e7;
  width: 100%;
  padding-left: 9rem;
  padding-right: 9rem;
  padding-top: 2.5rem;
  .especialidad {
    text-decoration: none;
    text-decoration-color: unset;
    color: #91a9e7;
    
  }
  .especialidadnow {
    text-decoration: none;
    text-decoration-color: unset;
    color: #506088;
  }
}

.animate1{
  padding: 1rem;
}
.mosca {
  text-decoration: none;
  text-decoration-color: unset;
  font-family: "Pilowlava";
  font-size: 40px;
  display: flex;
  justify-content: start;
  padding-left: 3rem;
  color: #91a9e7;
  .es {
    transform: rotate(-90deg);
    transform: rotate(-90deg);
    transform: rotate(-90deg);
    transform: rotate(-90deg);
    filter: progid:DXImageTransform.Microsoft.BasicImage(rotation=3);
    height: 20px;
    width: 25px;
  }
  .inline-block {
    display: -moz-inline-stack;
    display: inline-block;
    zoom: 1;
    *display: inline;
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
