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
          <a class="especialidadnow" href="">HOME</a>
          <a class="especialidad" href="page1">COVERS</a>
          <a class="especialidad" href="page2">MINI PROJECTS</a>
          <a class="especialidad" href="page3">VIDEO</a>
          <a class="especialidad" href="pag4">CONTACT</a>
        </h2>
        
        
         <video class="v"src="v.guille.mp4" autoplay muted loop width="1200" height="1200"></video> -->
    </div>

        
       
        
    

       
   

  </div>
</template>



<script>

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
  min-height: 1vh;
  display: flex;
  
  
  flex-direction: column;
  
  
  
  
}
.container2 {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  
  background: #0F0F1B
  
}


.title {
  
        

  }
  

.apartados{
   font-family:
  'Erotique Text';
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
 
}
.video{
    display: flex;
  justify-content: center;
  align-items:center;

    .v{
    margin: 0 auto;
     display: flex;
  justify-content: center;
  align-items:center;
   
  
 
    }

  
  
  

}

.links {
  padding-top: 15px;
}
</style>
