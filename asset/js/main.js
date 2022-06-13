const swiper = new Swiper('.swiper-containe', {
    // Optional parameters
    slidesPerView: 1,
    direction: 'horizontal',
    loop: false,
    spaceBetween: 0,
  });
  
  const swiper5 = new Swiper('#cards__tablet', {
    // Optional parameters
    slidesPerView: 3,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 50,
  });
  
  const swiper1 = new Swiper('.swiper-container1', {
      slidesPerView: 2.3,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 16,
  });

  const swiper6 = new Swiper('.swiper-container6', {
      slidesPerView: 3.4,
    direction: 'horizontal',
    loop: true,
    spaceBetween: 0,
  });
  
  const swiper2 = new Swiper('#client__slider', {
    slidesPerView: 3.3,
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    spaceBetween: 16,
  });
  
  const swiper3 = new Swiper('.swiper-container3', {
    slidesPerView: 2.3,
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    spaceBetween: 16,
  });
  
  const swiper7 = new Swiper('.swiper-container7', {
    slidesPerView: 1,
    direction: 'horizontal',
    spaceBetween: 0,
    centeredSlides:false,
  });

  
  const swiperPart = new Swiper('#partner__sliderta', {
    slidesPerView: 3.2,
    direction: 'horizontal',
    loop: true,
    freeMode: true,
    spaceBetween: 0,
  });
 
  function myWay(){
    document.getElementById('second__card1').style.cssText = 'display:block;';
 };

    function firstC(){
      document.getElementById('second__card1').style.cssText = 'display:none;';
   };

   function scale(){
    document.getElementById('diplom__img').style.cssText = 'display:block;';
    document.getElementById('diplom__close').style.cssText = 'display:block;'; 
 };

 //---------------------------Closings of tablet or Dekstop diplom

  function closeM(){
    document.getElementById('diplom__img').style.cssText = 'transform:scale(1);';
    document.getElementById('diplom__close').style.cssText = 'display:none;';
  };

  

  function closeM1(){
    document.getElementById('xxl__diplom').style.cssText = 'transform:scale(1);';
    document.getElementById('xx__close').style.cssText = 'display:none;';
  };


  function closeM2(){
    document.getElementById('thank__diplom').style.cssText = 'transform:scale(1);';
    document.getElementById('thank__close').style.cssText = 'display:none;';
  };


  function closeM3(){
    document.getElementById('telas__diplom').style.cssText = 'transform:scale(1);';
    document.getElementById('tellas__close').style.cssText = 'display:none;';
  };

  function closeM4(){
    document.getElementById('diplo__diplom').style.cssText = 'transform:scale(1);';
    document.getElementById('dip__close').style.cssText = 'display:none;';
  };
//--------------------------------Opening OF MOBILE DIPLOMS
  function simone(){
    document.getElementById('diplom__img1').style.cssText = 'display:block;';
  };
  
  function thanks(){
    document.getElementById('thank__img1').style.cssText = 'display:block;';
  };

  function tellas(){
    document.getElementById('telas__img1').style.cssText = 'display:block;';
  }  ;

  function thank2(){
    document.getElementById('diplo__img1').style.cssText = 'display:block;';
  }  ;
  
  function diplos(){
    document.getElementById('diplom__img1').style.cssText = 'display:block;';
  };
  //-------------------------Dekstop-Tablet listners click diplome openers
//  
//  function thanks2D(){
//    document.getElementById('diplom__img').style.cssText = 'display:block;';
//    document.getElementById('diplom__close').style.cssText = 'display:block;';
//  };
//  
//  function xxlD(){
//    document.getElementById('xxl__img').style.cssText = 'display:block;';
//    document.getElementById('xx__close').style.cssText = 'display:block;';
//  };
//
//  function thankD(){
//    document.getElementById('thank__img').style.cssText = 'display:block;';
//    document.getElementById('thank__close').style.cssText = 'display:block;';
//  }  ;
//
//  function tellasD(){
//    document.getElementById('telas__img').style.cssText = 'display:block;';
//    document.getElementById('tellas__close').style.cssText = 'display:block;';
//  }  ;
//  
//  function diplosD(){
//    document.getElementById('diplo__img').style.cssText = 'display:block;';
//    document.getElementById('dip__close').style.cssText = 'display:block;';
//  };
  //-------------------------Dekstop-Tablet listners click Pictures

 var specifiedElement = document.getElementById('thank2__diplom');
 document.addEventListener('click', function(event) {
     var isClickInside = specifiedElement.contains(event.target);
     if (isClickInside) {
      document.getElementById('diplom__img').style.cssText = 'display:block;';
      document.getElementById('diplom__close').style.cssText = 'display:block;';
      
     }
     else {
       document.getElementById('diplom__img').style.cssText = 'display:none;';
      document.getElementById('diplom__close').style.cssText = 'display:none;';
     }
 });


   var specifiedElementXxl = document.getElementById('xxl__diplom');
   document.addEventListener('click', function(event) {
       var isClickInside = specifiedElementXxl.contains(event.target);
       if (isClickInside) {
        document.getElementById('xxl__img').style.cssText = 'display:block;';
        document.getElementById('xx__close').style.cssText = 'display:block;';
        
       }
       else {
         document.getElementById('xxl__img').style.cssText = 'display:none;';
        document.getElementById('xx__close').style.cssText = 'display:none;';
       }
   });


   var specifiedElementThn = document.getElementById('thank__diplom');
   document.addEventListener('click', function(event) {
       var isClickInside = specifiedElementThn.contains(event.target);
       if (isClickInside) {
        document.getElementById('thank__img').style.cssText = 'display:block;';
        document.getElementById('thank__close').style.cssText = 'display:block;';
        
       }
       else {
         document.getElementById('thank__img').style.cssText = 'display:none;';
        document.getElementById('thank__close').style.cssText = 'display:none;';
       }
   });


   var specifiedElementTls = document.getElementById('telas__diplom');
   document.addEventListener('click', function(event) {
       var isClickInside = specifiedElementTls.contains(event.target);
       if (isClickInside) {
        document.getElementById('telas__img').style.cssText = 'display:block;';
        document.getElementById('tellas__close').style.cssText = 'display:block;';
        
       }
       else {
         document.getElementById('telas__img').style.cssText = 'display:none;';
        document.getElementById('tellas__close').style.cssText = 'display:none;';
       }
   });

   var specifiedElementDip = document.getElementById('diplo__diplom');
   document.addEventListener('click', function(event) {
       var isClickInside = specifiedElementDip.contains(event.target);
       if (isClickInside) {
        document.getElementById('diplo__img').style.cssText = 'display:block;';
        document.getElementById('dip__close').style.cssText = 'display:block;';
        
       }
       else {
         document.getElementById('diplo__img').style.cssText = 'display:none;';
        document.getElementById('dip__close').style.cssText = 'display:none;';
       }
   });
//
//
 //   var Gree = document.getElementById('dekstop__item__1');
 //   document.addEventListener('click', function(event) {
 //       var isClickInside = Gree.contains(event.target);
 //       if (isClickInside) {
 //        document.getElementById('second__card').style.cssText = 'display:block;';
 //       }
 //       else {
 //         document.getElementById('second__card').style.cssText = 'display:none;';
 //       }
 //   });
//
//
 //  
//
 //   var specifiedElement7 = document.getElementById('first__one');
 //   document.addEventListener('click', function(event) {
 //       var isClickInside = specifiedElement7.contains(event.target);
 //       if (isClickInside) {
 //        document.getElementById('second__card').style.cssText = 'display:block;';
 //       }
 //       else {
 //         document.getElementById('second__card').style.cssText = 'display:none;';
 //        
 //       }
 //   });
//
 //   var specifiedElementMgree = document.getElementById('mobile__slide__item');
 //   document.addEventListener('click', function(event) {
 //       var isClickInside = specifiedElementMgree.contains(event.target);
 //       if (isClickInside) {
 //        document.getElementById('second__card').style.cssText = 'display:block;';
 //       }
 //       else {
 //         document.getElementById('second__card').style.cssText = 'display:none;';
 //       }
 //   });
//
 // //  //-----------------------Mobile part listeners
//
    var xxl = document.getElementById('dmob__img1');
    document.addEventListener('click', function(event) {
        var isClickInside = xxl.contains(event.target);
        if (isClickInside) {
         document.getElementById('xxl__img1').style.cssText = 'display:block;';
         document.getElementById('mobileclose').style.cssText = 'display:block;';
        }
        else {
          document.getElementById('xxl__img1').style.cssText = 'display:none;';
          document.getElementById('mobileclose').style.cssText = 'display:none;';
        }
    });

    var thank = document.getElementById('dmob__img2');
    document.addEventListener('click', function(event) {
        var isClickInside = thank.contains(event.target);
        if (isClickInside) {
         document.getElementById('diplom__img1').style.cssText = 'display:block;';
         document.getElementById('mobileclose').style.cssText = 'display:block;';
        }
        else {
          document.getElementById('diplom__img1').style.cssText = 'display:none;';
          document.getElementById('mobileclose').style.cssText = 'display:none;';
        }
    });

    var thank2s = document.getElementById('dmob__img3');
    document.addEventListener('click', function(event) {
        var isClickInside = thank2s.contains(event.target);
        if (isClickInside) {
         document.getElementById('thank__img1').style.cssText = 'display:block;';
         document.getElementById('mobileclose').style.cssText = 'display:block;';
        }
        else {
          document.getElementById('thank__img1').style.cssText = 'display:none;';
          document.getElementById('mobileclose').style.cssText = 'display:none;';
        }
    });

    var diplom = document.getElementById('dmob__img4');
    document.addEventListener('click', function(event) {
        var isClickInside = diplom.contains(event.target);
        if (isClickInside) {
         document.getElementById('diplo__img1').style.cssText = 'display:block;';
         document.getElementById('mobileclose').style.cssText = 'display:block;';
        }
        else {
          document.getElementById('diplo__img1').style.cssText = 'display:none;';
          document.getElementById('mobileclose').style.cssText = 'display:none;';
        }
    });
    
    var tellasM = document.getElementById('dmob__img5');
    document.addEventListener('click', function(event) {
        var isClickInside = tellasM.contains(event.target);
        if (isClickInside) {
         document.getElementById('telas__img1').style.cssText = 'display:block;';
         document.getElementById('mobileclose').style.cssText = 'display:block;';
        }
        else {
          document.getElementById('telas__img1').style.cssText = 'display:none;';
          document.getElementById('mobileclose').style.cssText = 'display:none;';
        }
    });

    //-------------------------Mobile card Show
//    var dshows = document.getElementById('second__card');
//    document.addEventListener('click', function(event) {
//        var isClickInside = dshows.contains(event.target);
//        if (isClickInside) {
//         document.getElementById('second__card').style.cssText = 'display:block;';
//         
//        }
//        else {
//          document.getElementById('second__card').style.cssText = 'display:none;';
//          
//        }
//    });
//      //----------------------------Tablet card Show
//    var dshow2 = document.getElementById('first__one');
//    document.addEventListener('click', function(event) {
//        var isClickInside = dshow2.contains(event.target);
//        if (isClickInside) {
//         document.getElementById('second__card').style.cssText = 'display:block;';
//         
//        }
//        else {
//          document.getElementById('second__card').style.cssText = 'display:none;';
//          
//        }
//    });
//      /////////////////////// Dekstop card show
//    var dshow3 = document.getElementById('dekstop__item__1');
//    document.addEventListener('click', function(event) {
//        var isClickInside = dshow3.contains(event.target);
//        if (isClickInside) {
//         document.getElementById('second__card').style.cssText = 'display:block;';
//         
//        }
//        else {
//          document.getElementById('second__card').style.cssText = 'display:none;';
//          
//        }
//    });
//
//
document.getElementById("dekstop__item__1").onclick = function () {
  location.href = "geo.html";
};

document.getElementById("first__one").onclick = function () {
  location.href = "geo.html";
};

document.getElementById("mobile__slide__item").onclick = function () {
  location.href = "geo.html";
};