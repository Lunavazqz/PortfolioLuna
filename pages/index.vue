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
        
        <a class="especialidad" href="pag2">COVERS</a>
        <a class="especialidad" href="pag3">MINI PROJECTS</a>
        <a class="especialidad" href="pag4">VIDEO</a>
       
      </h2>

      <div class="luna">Luna Vázquez</div>
       <a class="contact" href="pag5">CONTACT</a>

      <video
        class="fondo"
        src="/fondodepantalla.mp4"
        width="100%"
        autoplay
        loop
      ></video>

     
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
  position: relative;
  display: inline-block;
  text-align: center;

  flex-direction: column;
  .apartados {
    font-family: "Pixel12x10";
    font-size: 100px;
    display: flex;
    justify-content: flex-start;
    color: rgba(255, 255, 255, 1);
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    font-style: none;
    text-decoration: none;

    color: #91a9e7;
    width: 100%;

    position: absolute;
    animation: bounceInUp; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2.5s; /* don't forget to set a duration! */

    .especialidad {
      font-family: "Pixel12x10";
      font-size: 100px;
      display: flex;
      justify-content: flex-start;
      color: rgba(255, 255, 255, 1);
      flex-direction: column;
      color: #91a9e7;
      font-style: none;
      text-decoration: none;
      justify-content: space-between;
      align-items: center;
      text-decoration: none;
      transition: color 250ms ease;
      color: #238f68;

      //color: #91a9e7;
      margin: 4rem;
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
        text-shadow: 3px 2px 6px rgba(76, 249, 163, 0.95);
      }
    }
    .especialidadnow {
      text-decoration: none;
      text-decoration-color: unset;
      color: #506088;
    }
  }
  .contact {
    font-family: "1,617";
    font-weight: bold;

    font-style: none;
    text-decoration: none;
    background-color: transparent;

    border: 2px solid #91a9e7;
    border-radius: 10px;
    position: absolute;
    padding-left: 80%;
    padding-top: 0.5rem;
    padding-bottom: 0.5rem;
    padding-right: 0.5rem;
    margin-left: 4rem;
    margin-top: 1rem;
    font-weight: 300;
    font-size: 20px;
    color: #238f68;
    animation: lightSpeedInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
    &:hover {
      color: #91a9e7;
      font-style: none;
      text-decoration: none;
      text-shadow: 3px 2px 6px rgba(76, 249, 163, 0.95);
    }
  }
  .luna {
    position: absolute;
    z-index: 2;
    font-family: "1,617";
    font-weight: bold;
    display: flex;

    margin-left: 5rem;
    justify-content: flex-start;
    font-style: none;
    text-decoration: none;
    font-weight: 300;
    font-size: 20px;
    color: #238f68;
    margin-top: 2rem;
    animation: lightSpeedInLeft; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
  }
}
.container2 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
}
.fondo {
  z-index: -2;
}



.links {
  padding-top: 15px;
}

@media screen and (max-width: 760px) {
  html,
  body {
    .apartados{
       font-size: 30px;
       .especialidad {
      font-size: 30px;
    }
    }
    
  }
}
</style>
