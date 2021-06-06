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
      <div class="contact">CONTACT</div>

      <video
        class="fondo"
        src="/fondodepantalla.mp4"
        width="100%"
        autoplay
        loop
      ></video>
      <!--<h3 class="mosca">Luna Vázquez</h3>-->


      <div class="modal_tweet">
      <div class="modal_overlay"></div>
      <div class="modal_holder">
        <div class="modal_header">
          <div class="close_buttom">
            <span class="fa fa-close"></span>
          </div>
        </div>

        
      </div>
    </div>

    </div>
    
  </div>
</template>



<script>
export default {
  mounted() {
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
                .addTo(controller);
    var controller = new this.$scrollmagic.Controller();
    var revealElements = document.getElementsByClassName("especialidad");
    for (var i = 0; i < revealElements.length; i++) {
      // create a scene for each element
      new this.$scrollmagic.Scene({
        triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
        offset: 50, // start a little later
        triggerHook: 0.9,
      })
        .setClassToggle(revealElements[i], "visible") // add class toggle
        .addIndicators({ name: "especialidad " + (i + 1) }) // add indicators (requires plugin)
        .addTo(controller);
    }*/
window.addEventListener('load', () => {
   
    initModalEvents();
    
    
});
    const initModalEvents = () => {
      const toggle = document.querySelector(".contact");
      const modalTweet = document.querySelector(".modal_tweet");
      const closeButtom = document.querySelector(".close_buttom");
      const overlay = document.querySelector(".modal_overlay");
      //abrir
      toggle.addEventListener("click", () => {
        modalTweet.classList.add("opened");
        document.body.style.overflow = "";
      });
      //cerrar
      closeButtom.addEventListener("click", () => {
        modalTweet.classList.remove("opened");
        document.body.style.overflow = "";
      });

      overlay.addEventListener("click", () => {
        modalTweet.classList.remove("opened");
        document.body.style.overflow = "";
      });

      modalFormEvents();
    };
  },
};
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
  padding: 2rem;
  justify-content: flex-start;
  font-style: none;
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  color: #238f68;
  animation: lightSpeedInLeft; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
}

.contact {
  
 
  font-family: "1,617";
  font-weight: bold;
  display: flex;
  
  justify-content: flex-end;
  font-style: none;
  position: absolute;
  padding-left: 30rem;
  text-decoration: none;
  font-weight: 300;
  font-size: 20px;
  color: #238f68;
  animation: lightSpeedInRight; /* referring directly to the animation's @keyframe declaration */
  animation-duration: 2s; /* don't forget to set a duration! */
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
    color: #238F68; 
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
  position: fixed;
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
