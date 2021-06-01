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
        <a class="especialidad" href="index">HOME</a>
        <a class="especialidadnow" href="page1">COVERS</a>
        <a class="especialidad" href="page2">MINI PROJECTS</a>
        <a class="especialidad" href="page3">VIDEO</a>
        <a class="especialidad" href="pag4">CONTACT</a>
      </h2>
    </div>

    <div class="container2">
      <span id="animate2"
        ><img src="/p.rosalia.jpg" width="300" height="300" alt=""
      /></span>
    </div>
    <div class="container3">
      <span id="animate3"
        ><img src="/p.llenoa.jpg" width="800" height="800" alt=""
      /></span>
    </div>
    <div class="container4">
      <span id="animate4"
        ><img src="/p.solounpoco.jpg" width="600" height="600" alt=""
      /></span>
    </div>
    <div class="container5">
      <span id="animate5"
        ><img src="/p.6kiss.jpg" width="600" height="600" alt=""
      /></span>
    </div>
    <div class="container6">
      <span id="animate6"
        ><img src="/p.lilbaby.jpg" width="600" height="600" alt=""
      /></span>
    </div>
    <div class="container7">
      <span id="animate7"
        ><img src="/p.coi.jpg" width="600" height="600" alt=""
      /></span>
    </div>
    <div class="container8">
      <span id="animate8"
        ><img src="/p.myke.jpg" width="600" height="600" alt="" />
        
      </span>
    </div>
    <div class="spacer s2"></div>
    <div id="trigger" class="spacer s0"></div>
    <div id="target" class="box2 blue">
      <p>Widen the horizon.</p>
      <a href="#" class="viewsource">view source</a>
    </div>
    <div class="spacer s2"></div>
  </div>
</template>



<script>
export default {
  mounted() {
    const controller = new this.$scrollmagic.Controller();

    var scene = new this.$scrollmagic.Scene({ triggerElement: ".container2" })
      // trigger a TweenMax.to tween
      .setTween("#animate2", 0.5, { scale: 2.5, rotate: 360 })
      .addTo(controller);

    var scene2 = new this.$scrollmagic.Scene({
      triggerElement: ".container3",
      duration: 300,
    })
      // trigger a TweenMax.to tween
      .setPin("#animate3")
      // add indicators (requires plugin)
      //.addIndicators({name: "1 (duration: 300)"})
      //.setTween("#animate2", 0.5, {backgroundColor: "white"})
      .addTo(controller);

    var scene = new this.$scrollmagic.Scene({
      triggerElement: ".container4",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween("#animate4", { scale: 2 }) // the tween durtion can be omitted and defaults to 1
      .addIndicators({ name: "2 (duration: 300)" }) // add indicators (requires plugin)
      .addTo(controller);
  },
};
</script>

<style lang="scss">
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;

  flex-direction: column;
  background-color: #ebe9e1;
}
.container2 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;

  background: #0f0f1b;
}

.container3 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1e2a36;
}

.container4 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1e2a36;
}
.container5 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1e2a36;
}
.container6 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1e2a36;
}
.container7 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1e2a36;
}
.container8 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  background: #1e2a36;
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
