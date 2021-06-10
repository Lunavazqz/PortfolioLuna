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
        <a class="especialidadnow" href="">COVERS</a>
        <a class="especialidad" href="pag3">MINI PROJECTS</a>
        <a class="especialidad" href="pag4">VIDEO</a>
        <a class="especialidad" href="pag5">CONTACT</a>
        
      </h2>

      <div class="covers1" id="covers1">COVERS</div>

      
     

      <div class="container2">
        <div></div><div></div><div class="animate3"  ><img class="tres" src="/p.rosalia-min.jpg" width="100%" height="" alt=""/></div>
        <div id="animate4"  ><img class="cuatro" src="/p.solounpoco-min.jpg" width="100%" height="" alt=""/></div><div></div>
        <div id="animate5"  ><img class="cinco" src="/p.29-min.jpg" width="100%" height="" alt=""/></div><div></div>
        <div id="animate6"  ><img class="seis" src="/p.6kiss-min.jpg" width="100%" height="" alt=""/></div><div></div>
         <div id="animate7"  ><img class="siete" src="/p.29ad-min.jpg" width="100%" height="" alt=""/></div><div></div><div></div>
        <div id="animate8"  ><img class="ocho" src="/p.llenoa-min.jpg" width="100%" height="" alt=""/></div><div></div><div></div>
        <div id="animate9"  ><img class="nueve" src="/p.leaf-min.jpg" width="100%" height="" alt=""/></div><div></div>
        <div id="animate10"  ><img class="diez" src="/p.lilbaby-min.jpg" width="100%" height="" alt=""/></div><div></div><div></div>
        <div id="animate11"  ><img class="once" src="/p.magie-min.png" width="100%" height="" alt=""/></div>
        <div id="animate12"  ><img class="docee" src="/p.coi-min.jpg" width="100%" height="" alt=""/></div><div></div><div></div><div></div><div></div>
        <div id="animate13"  ><img class="trece" src="/hadi.JPG" width="100%" height="" alt=""/></div>-->
      </div>
      
      
      
      
    </div>
  </div>
</template>



<script>
export default {
  mounted() {
    var controller = new this.$scrollmagic.Controller();
    // wait for document ready
    // build scene
    var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate3",
      duration: 500,
    })
      .setPin("#animate3")
      
      .addTo(controller);


      
      var scene = new this.$scrollmagic.Scene({triggerElement: "#covers1"})
						.setPin("#covers1")
						
						.addTo(controller);

      //zoom1

     var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate3",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".tres", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);

      var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate4",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".cuatro", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);



      var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate5",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".cinco", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);


       var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate6",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".seis", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);

       var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate7",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".siete", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);

      var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate8",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".ocho", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);

      var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate9",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".nueve", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1

      .addTo(controller);


      var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate10",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".diez", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1

      .addTo(controller);

      var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate11",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".once", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);

      var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate12",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".docee", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);

       var scene = new this.$scrollmagic.Scene({
      triggerElement: "#animate13",
      duration: 600,
    })
      // animate color and top border in relation to scroll position
      .setTween(".trece", { scale: 1.25 }) // the tween durtion can be omitted and defaults to 1
      
      .addTo(controller);


     


  },
};
var revealElements = document.getElementsByClassName("animate4");
for (var i = 0; i < revealElements.length; i++) {
  // create a scene for each element
  new this.$scrollmagic.Scene({
    triggerElement: revealElements[i], // y value not modified, so we can use element as trigger as well
    offset: 50, // start a little later
    triggerHook: 0.9,
  })
    .setClassToggle(revealElements[i], "visible") // add class toggle
    .addIndicators({ name: "animate4" + (i + 1) }) // add indicators (requires plugin)
    .addTo(controller);
};





// wait for document ready
		// build scene
		
	
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
  min-height: 10vh;
  display: flex;

  flex-direction: column;
  background-color: #18181F;
}
.covers1{
  font-family: 'Pixel12x10';
  font-size: 200px;
  display: flex;
  justify-content: flex-start;
  color: rgba(255, 255, 255, 1);
  
  
}
.container2 {
 
  margin: 0 auto;
  width:100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  
  padding-left: 3.3rem;
  padding-right: 3.3rem;
  grid-gap: 2rem;
  z-index: 2;
  
  


    
    .animate3{
      background-color:#846949;
      margin-bottom:4rem;
      animation: fadeInRight; /* referring directly to the animation's @keyframe declaration */
    animation-duration: 2s; /* don't forget to set a duration! */
      
        .tres{
            grid-area: 3 / 2;
           
        }
    }

    #animate4{
         grid-area: 4 / 3 ;
         z-index:2;
        .cuatro{
       
        }
          
    #animate5{
          grid-area: 5 / 1 ;
         padding-top:5rem;
        .cinco{
             margin-top:5rem;
        }
    }
     #animate6{
         grid-area: 4 / 3 ;
        .seis{
        
        }
    }
     #animate7{
        grid-area: 5 / 1 ;
        .siete{
            
        }
    }
     #animate8{
       grid-area: 6 / 3 ;
        .ocho{
            
        }
    }
     #animate9{
         grid-area: 6 / 3 ;
         z-index:2;
        .nueve{
            
        }
    }
     #animate10{
        grid-area: 6 / 3 ;
        .diez{
          
        }
    }
    #animate11{
         grid-area: 6 / 3 ;
        .once{
           
        }
    }
    #animate12{

      background-color: #000;
         grid-area: 6 / 3 ;
        .once{
           
        }
    }


}




}



.title {
  
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

 


.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #2b2b2c;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
};


</style>
