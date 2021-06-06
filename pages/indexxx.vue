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
      

      <div class="modal_tweet">
        <div class="modal_overlay"></div>
        <div class="modal_holder">
            <div class="modal_header">
                <div class="close_buttom">
                    <span class="fa fa-close"></span>

                </div>

            </div>

            <div class="modal_body">
                <form class="new_form" name="new_modal">
                    <div class="tweet">
                        <div class="tweet_user">
                           

                        </div>
                        <div class="tweet_body">
                            <textarea class="algo" placeholder="Escribe algo..." name="tweet"></textarea>

                        </div>
                        <div class="tweet_footer">
                            <button type="submit" class="btn">Tweet</button>

                        </div>

                    </div>
                </form>

            </div>


        </div></div>
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
}
.container2 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  background: #0f0f1b;
}
.fondo {
  z-index: -2;
}
.luna {
  position: absolute;
  z-index: 2;
  font-family: "1,617";
  font-weight: bold;
  display: flex;
  
  margin-left: 5rem ;
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

.contact {
  font-family: "1,617";
  font-weight: bold;
 
 font-style: none;
    text-decoration: none;
  background-color: transparent;
  
  border: 2px solid #91a9e7;
  border-radius:10px ;
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
      text-shadow: 3px 2px 6px rgba(76,249,163,0.95);}

}
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
    transition: color 250ms ease;
    font-style: none;
    text-decoration: none;
    color: #238f68;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
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
      text-shadow: 3px 2px 6px rgba(76,249,163,0.95);

      a {
        color: #91a9e7;
        font-style: none;
        text-decoration: none;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
      }
    }
  }
  .especialidadnow {
    text-decoration: none;
    text-decoration-color: unset;
    color: #506088;
  }
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

.modal_tweet {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: 1fr 600px 1fr;
  grid-template-rows: 2rem auto 1fr;
  visibility: hidden;

  .modal_overlay {
    grid-area: 1 / 1 / -1 / -1;
    background-color: rgba(91, 112, 131, 0.4);
  }
  .modal_holder {
    grid-area: 2 / 2 / span 1 / span 1;
    background-color: rgb(23, 30, 37);
    border-radius: 1rem;
    .modal_header {
      .close_buttom {
        padding-top: 0.4rem;
        padding-left: 1rem;
      }
    }
    .modal_body {
      .new_form {
        .tweet {
          .tweet_user {
            display: flex;
            flex-direction: row;
            padding-left: 1rem;
            padding-bottom: 0.5rem;
          }
          .tweet_body {
            padding-right: 00.6rem;
            padding-left: 0.6rem;
            .algo {
              display: flex;
              flex-wrap: wrap;
              padding-left: 0.6rem;
              background: transparent;
              background-color: transparent;
              color: aliceblue;
              width: 100%;
              text-shadow: none;
            }
          }
          .tweet_footer {
            padding-left: 0.6rem;
            padding-top: 1rem;
            padding-bottom: 1rem;
          }
        }
      }
    }
  }

  &.opened {
    visibility: visible;
  }
}
</style>
