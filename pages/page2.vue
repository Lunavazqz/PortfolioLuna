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
        <a class="especialidad" href="index">HOME</a>
        <a class="especialidad" href="page1">COVERS</a>
        <a class="especialidadnow" href="page2">MINI PROJECTS</a>
        <a class="especialidad" href="page3">VIDEO</a>
        <a class="especialidad" href="pag4">CONTACT</a>
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

    <div class="pinContainer" id="pinContainer">
      <div class="container4" id="container4">
        <img
          class="revista1"
          src="/revistatercero-10.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista2"
          id="animate"
          src="/revistatercero-01.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista3"
          src="/revistatercero-02.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista4"
          src="/revistatercero-03.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista5"
          src="/revistatercero-04.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista6"
          src="/revistatercero-05.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista7"
          src="/revistatercero-06.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista8"
          src="/revistatercero-07.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista9"
          src="/revistatercero-08.jpg"
          width="100%"
          height="100%"
          alt=""
        />
        <img
          class="revista10"
          src="/revistatercero-09.jpg"
          width="100%"
          height="100%"
          alt=""
        />
      </div>
    </div>

    <div class="container5" id="container5">
      <img class="lucia1" src="/lucia1.jpg" width="100%" height="100%" alt="" />
      <img class="lucia2" src="/lucia2.jpg" width="100%" height="100%" alt="" />
      <img class="lucia3" src="/lucia3.jpg" width="100%" height="100%" alt="" />
      <img class="lucia4" src="/lucia4.jpg" width="100%" height="100%" alt="" />
    </div>
    <div class="container6" id="container6">
      <img class="rave1" src="/ravefairyM.jpg" width="100%" alt="" />
      <img class="rave2" src="/ravefairyseis.jpg" width="100%" alt="" />
      <img class="rave3" src="/ravefairyL.jpg" width="100%" alt="" />
      <img class="rave4" src="/ravefairy2.mp4" width="100%" alt="" />
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
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 10vh;
  display: flex;

  flex-direction: column;
  background-color: #ebe9e1;
}
.container2 {
  margin: 0 auto;
  min-height: 200vh;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 2rem;
  grid-gap: 1rem;
  background-color: #ebe9e1;
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
.pinContainer {
  margin: 0 auto;
  min-height: 70vh;

  padding: 2rem;
  background-color: #ebe9e1;

  .container4 {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    
    grid-gap: 1rem;
    background-color: #ebe9e1;
  }
}
.container5 {
  margin: 0 auto;
  min-height: 70vh;
  display: grid;

  padding: 2rem;
  grid-gap: 1rem;
  background-color: #ebe9e1;
}
.container6 {
  margin: 0 auto;
  min-height: 70vh;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  padding: 2rem;
  grid-gap: 1rem;
  background-color: #ebe9e1;
  .rave4 {
    grid-area: 2/ 2;
  }
}

.title {
  .parallaxText {
    .layer1 {
      font-family: "1,617";

      font-weight: 300;

      color: whitesmoke;
      letter-spacing: 1px;
    }
    .layer2 {
      font-family: "1,617";
      font-weight: 300;
      color: whitesmoke;
    }

    .layer3 {
      font-family: "1,617";

      font-weight: 300;
      color: whitesmoke;
      letter-spacing: 1px;
    }
  }
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
    .a {
    }
  }
  .especialidadnow {
    text-decoration: none;
    text-decoration-color: unset;
    color: #506088;
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
