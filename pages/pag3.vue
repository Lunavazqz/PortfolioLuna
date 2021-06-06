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
        <a class="especialidadnow" href="">MINI PROJECTS</a>
        <a class="especialidad" href="pag4">VIDEO</a>
        <a class="especialidad" href="pag5">CONTACT</a>
      </h2>

      <h3 class="mosca"></h3>
    </div>
    <div class="spacer s1"></div>

    <div class="container2">
      <img class="jon1" src="/JON1.png" width="100%" height="100%" alt="" />
      <!-- <img class="jon1" src="/JON.png" width="100%" height="100%" alt="">-->
      <img class="jon2" src="/JON2.png" width="100%" height="100%" alt="" />
      <img class="jon3" src="/JON3.png" width="100%" height="100%" alt="" />
      <img class="jon4" src="/JON4.png" width="100%" height="100%" alt="" />
      <img class="jon5" src="/JON5.png" width="100%" height="100%" alt="" />
      <img class="jon6" src="/JON6.png" width="100%" height="100%" alt="" />
    </div>
    <div class="container3" id="container3">
      <img
        class="bimba1"
        id="animate1"
        src="/bolso1.jpg"
        width="100%"
        height="100%"
        alt=""
      />
      <img class="bimba2" src="/bolso2.jpg" width="100%" height="100%" alt="" />
      <img class="bimba3" src="/bolso3.jpg" width="100%" height="100%" alt="" />
    </div>

      <div class="flechita">>>></div>
      <div class="container4" id="container4">
        <img
          class="revista"
          src="/revistatercero-10.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          id="animate"
          src="/revistatercero-01.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          src="/revistatercero-02.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          src="/revistatercero-03.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          src="/revistatercero-04.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          src="/revistatercero-05.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          src="/revistatercero-06.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          src="/revistatercero-07.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          src="/revistatercero-08.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista"
          src="/revistatercero-09.jpg"
          width="100%"
          height="100%"
          alt=""
        />
      </div>
     <div class="flechita2">>>></div>

    <div class="container5" id="container5">
      <img class="lucia" src="/lucia1.jpg" width="100%" height="100%" alt="" />
      <img class="lucia" src="/lucia2.jpg" width="100%" height="100%" alt="" />
      <img class="lucia" src="/lucia3.jpg" width="100%" height="100%" alt="" />
      <img class="lucia" src="/lucia4.jpg" width="100%" height="100%" alt="" />
    </div>
    <div class="container6" id="container6">
      <video class="rave4" src="/videohadas.mp4" autoplay loop width="100%" alt=""></video>
      <img class="rave1" src="/ravefairyM.jpg" width="100%" alt="" />
       <img class="rave3" src="/ravefairyL.jpg" width="100%" alt="" />
      <img class="rave2" src="/ravefairyseis.jpg" width="100%" alt="" />
     
      
    </div>
    
    
  </div>
</template>



<script>
/*$(function () { // wait for document ready
		// init
		var controller = new ScrollMagic.Controller();

		// define movement of panels
		var wipeAnimation = new TimelineMax()
			// animate to second panel
			.to("#slideContainer", 0.5, {z: -150})		// move back in 3D space
			.to("#slideContainer", 1,   {x: "-25%"})	// move in to first panel
			.to("#slideContainer", 0.5, {z: 0})				// move back to origin in 3D space
			// animate to third panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-50%"})
			.to("#slideContainer", 0.5, {z: 0})
			// animate to forth panel
			.to("#slideContainer", 0.5, {z: -150, delay: 1})
			.to("#slideContainer", 1,   {x: "-75%"})
			.to("#slideContainer", 0.5, {z: 0});

		// create scene to pin and link animation
		new ScrollMagic.Scene({
				triggerElement: "#pinContainer",
				triggerHook: "onLeave",
				duration: "500%"
			})
			.setPin("#pinContainer")
			.setTween(wipeAnimation)
			.addIndicators() // add indicators (requires plugin)
			.addTo(controller);
	});*/
 export default {
  mounted() {
    var controller = new this.$scrollmagic.Controller();
  var scene = new this.$scrollmagic.Scene({triggerElement: ".flechita", duration: 340})
						.setPin(".flechita")
						
						.addTo(controller);
     
  var scene = new this.$scrollmagic.Scene({triggerElement: ".flechita2", duration: 640})
						.setPin(".flechita2")
						
						.addTo(controller);
  }
 };
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 10vh;
  display: flex;

  flex-direction: column;
  background-color: #E9E6DB;
}
.flechita{
   color: #238F68; 
   font-family: "Pixel12x10";
  font-size: 70px;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  margin-left: 90%;
  text-shadow: 3px 2px 6px rgba(40,40,40,0.95);
  
}
.flechita2{
   color: #91a9e7; 
   font-family: "Pixel12x10";
  font-size: 70px;
  position: absolute;
  display: flex;
  justify-content: flex-end;
  margin-left: 90%;
  text-shadow: 3px 2px 6px rgba(40,40,40,0.95);
  
}
.container2 {
  margin: 0 auto;
  min-height: 200vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
  grid-gap: 1rem;
  background-color: #E9E6DB;
  .jon1 {
    grid-area: 1 / 1;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
    display: inline-block;
    margin: 0 0.5rem;

    animation: pulse; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }
  .jon2 {
    grid-area: 1 / 2;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
    position: relative;
     animation: pulse; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }
}

.container3 {
  margin: 0 auto;
  min-height: 70vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  grid-gap: 1rem;
  background-color: #ebe9e1;

}
.container4 {
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  
  width: 100%;
  height: 100%;
  
  
  border-radius: 0.25rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
 
  
  line-height: 1.3;
  overflow: auto;
  

    .revista {
      display: flex;
      flex-direction: row;
     width: 600px;
      
     
      .container p:not(:last-child) {
      margin-bottom: 1rem;
    }
      /* Tamaño del scroll */
      .container::-webkit-scrollbar {
        width: 13px;
      }

      /* Estilos barra (thumb) de scroll */
      .container::-webkit-scrollbar-thumb {
        background: #238F68;
        border-radius: 4px;
      }

      .container::-webkit-scrollbar-thumb:active {
        background-color: #238F68;
      }

      .container::-webkit-scrollbar-thumb:hover {
        background: #238F68;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
      }

      /* Estilos track de scroll */
      .container::-webkit-scrollbar-track {
        background: #238F68;
        border-radius: 4px;
      }

      .container::-webkit-scrollbar-track:hover,
      .container::-webkit-scrollbar-track:active {
        background: #238F68;
      }
    
  }
}
.container5 {
  margin: 0 auto;
  display: flex;
  flex-direction: row;

  
  width: 100%;
  height: 100%;
  
  
  border-radius: 0.25rem;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.2);
 
  
  line-height: 1.3;
  overflow: auto;
  

    .lucia {
      display: flex;
      flex-direction: row;
     width: 1000px;
      
     
      .container p:not(:last-child) {
      margin-bottom: 1rem;
    }
      /* Tamaño del scroll */
      .container::-webkit-scrollbar {
        width: 13px;
      }

      /* Estilos barra (thumb) de scroll */
      .container::-webkit-scrollbar-thumb {
        background: #ccc;
        border-radius: 4px;
        color: #238F68;
      }

      .container::-webkit-scrollbar-thumb:active {
        background-color: #999999;
        color: #238F68;
      }

      .container::-webkit-scrollbar-thumb:hover {
        background: #b3b3b3;
        box-shadow: 0 0 2px 1px rgba(0, 0, 0, 0.2);
        color: #238F68;
      }

      /* Estilos track de scroll */
      .container::-webkit-scrollbar-track {
        background: #e1e1e1;
        border-radius: 4px;
        color: #238F68;
      }

      .container::-webkit-scrollbar-track:hover,
      .container::-webkit-scrollbar-track:active {
        background: #d4d4d4;
        color: #238F68;
      }
    
  }
}
.container6 {
  margin: 0 auto;
  min-height: 70vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
  grid-gap: 1rem;
    background-color: #ebe9e1;
  
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
#pinContainer {
  width: 100%;
  height: 100%;
  overflow: hidden;
  -webkit-perspective: 1000;
  perspective: 1000;
}
#slideContainer {
  width: 400%; /* to contain 4 panels, each with 100% of window width */
  height: 100%;
}
.panel {
  height: 100%;
  width: 25%; /* relative to parent -> 25% of 400% = 100% of window width */
  float: left;
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
