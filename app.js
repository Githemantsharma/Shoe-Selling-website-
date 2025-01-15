// gsap.to(".page1 h1",{
//   transform:"translateX(-100%)",
//   fontWeight:"100",
//   scrollTrigger:{
//       trigger:".page1",
//       scroller:"body",
//       // markers:true,
//       start:"top 0",
//       end:"top -200%",
//       scrub:2,
//       pin:true
//   }
// })



// ----------------------loader --------------------
var t1 = gsap.timeline();


function time(){
    var a =0;
    setInterval(function(){
        a= a + Math.floor( Math.random()*15);
            if(a<100){
                document.querySelector(".loader h1").innerHTML=a+"%";
            }else{
                a=100;
                document.querySelector(".loader h1").innerHTML=a+"%";
            }
        console.log(a);
    },150)
}


t1.to(".loader h1",{
    delay:0.5,
    duration:1,
    onStart:time()
});
t1.to(".loader",{
    top:"-100vh",
    delay:0.5,
    duration:2,

});

// ----------------------------------------
Shery.mouseFollower();
Shery.makeMagnet(".magnet");
Shery.hoverWithMediaCircle(".hvr",{videos:["./0.mp4", "./1.mp4"]});

gsap.to(".f-card",{
    scrollTrigger:{
        trigger:".featuredimages",
        start:"top top",
        end:"bottom bottom",
        endTrigger:".last",
        scrub:1,
        pin:true
    },
    y:"-300%",
    ease:Power1
});



// let sections = document.querySelectorAll(".f-card");

// Shery.imageEffect(".images", {
//     style: 4,
//     config:{onMouse :{value:1}},
//     slideStyle: (setScroll) => {
//         sections.forEach(function(section,index){
//             ScrollTrigger.create({
//                 trigger:section,
//                 start:"top top",
//                 scrub:1,
//                 onUpdate:function(prog){
//                     setScroll(prog.progress+index);
//                 },
//             });
//         });
//     },
//   });
const wrapper = document.querySelector(".sliderWrapper");
const menuItems = document.querySelectorAll(".menuItem");

const products = [
  {
    id: 1,
    title: "Air Force",
    price: 9998,
    colors: [
      {
        code: "black",
        img: "./img/air.png",
      },
      {
        code: "darkblue",
        img: "./img/air2.png",
      },
    ],
  },
  {
    id: 2,
    title: "Air Jordan",
    price: 11990,
    colors: [
      {
        code: "lightgray",
        img: "./img/jordan.png",
      },
      {
        code: "green",
        img: "./img/jordan2.png",
      },
      {
        code: "black",
        img: "./img/jordan7.png",
      },
    ],
  },
  {
    id: 3,
    title: "Blazer",
    price: 10990,
    colors: [
      {
        code: "lightgray",
        img: "./img/blazer.png",
      },
      {
        code: "green",
        img: "./img/blazer2.png",
      },
    ],
  },
  {
    id: 4,
    title: "Crater",
    price: 12990,
    colors: [
      {
        code: "black",
        img: "./img/crater.png",
      },
      {
        code: "lightgray",
        img: "./img/crater2.png",
      },
    ],
  },
  {
    id: 5,
    title: "Hippie",
    price: 8499,
    colors: [
      {
        code: "gray",
        img: "./img/hippie.png",
      },
      {
        code: "black",
        img: "./img/hippie2.png",
      },
    ],
  },
];
// Initialize the variable choosenProduct
let choosenProduct = products[0];
// Initialize the variable choosenProduct
const currentProductImg = document.querySelector(".productImg");
const currentProductTitle = document.querySelector(".productTitle");
const currentProductPrice = document.querySelector(".productPrice");
const currentProductColors = document.querySelectorAll(".color");
const currentProductSizes = document.querySelectorAll(".size");

menuItems.forEach((item, index) => {
  item.addEventListener("click", () => {
    //change the current slide
    wrapper.style.transform = `translateX(${-100 * index}vw)`;

    //change the choosen product
    choosenProduct = products[index];

    //change texts of currentProduct
    currentProductTitle.textContent = choosenProduct.title;
    currentProductPrice.textContent = "₹" + choosenProduct.price;
    currentProductImg.src = choosenProduct.colors[0].img;

    //assing new colors
    currentProductColors.forEach((color, index) => {
      color.style.backgroundColor = choosenProduct.colors[index].code;
    });
  });
});

currentProductColors.forEach((color, index) => {
  color.addEventListener("click", () => {
    currentProductImg.src = choosenProduct.colors[index].img;
  });
});

currentProductSizes.forEach((size, index) => {
  size.addEventListener("click", () => {
    currentProductSizes.forEach((size) => {
      size.style.backgroundColor = "white";
      size.style.color = "black";
    });
    size.style.backgroundColor = "black";
    size.style.color = "white";
  });
});

const productButton = document.querySelector(".productButton");
const payment = document.querySelector(".payment");
const close = document.querySelector(".close");

productButton.addEventListener("click", () => {
  payment.style.display = "flex";
});

close.addEventListener("click", () => {
  payment.style.display = "none";
});

// limit offer
let limit = document.querySelector(".limit");

limit.addEventListener('click',function(){
  alert("No offer for you!!!!");
})

