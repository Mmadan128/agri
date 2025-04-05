
function parallax() {
  const par = document.querySelectorAll(".par");
  let x = 0,
    y = 0;
  window.addEventListener("mousemove", (dets) => {
    x = dets.clientX - window.innerWidth / 2;
    y = dets.clientY - window.innerHeight / 2;
    par.forEach((el) => {
      let speedx = el.dataset.speedx;
      let speedy = el.dataset.speedy;
      el.style.transform = `
            translateX(calc(-50% + ${x * speedx}px)) 
            translateY(calc(-50% + ${y * speedy}px))`;
    });
  });
}
function animation() {
  gsap.from(".bg", {
    duration: 2,
    y: 1000,
  });
  gsap.from(".mt8, .mt9, .mt10, .mt7, .fg7, .fg6, .fg5", {
    duration: 3,
    opacity: 0,
    y: 2000,
    top: `${
      document.querySelector(".mt8, .mt9, .mt10, .mt7, .fg7, .fg6, .fg5")
        .offsetheight / 2
    }px`,
  });
  gsap.from("nav", {
    duration: 1.5,
    delay: 1.5,
    opacity: 0,
    y: -200,
    stagger: 0.5,
  });
  gsap.from(".text h2", {
    opacity: 0,
    y: -100,
    delay: 1.8,
    duration: 1.5,
  });
  gsap.from(".text h1", {
    opacity: 0,
    y: 500,
    delay: 1.8,
    duration: 1.5,
  });
  gsap.from(".mt6, .mt5, .mt4, .mt3, .fg4, .fg3, .fg2", {
    duration: 3.2,
    opacity: 0,
    y: 2500,
    top: `${
      document.querySelector(".mt8, .mt9, .mt10, .mt7, .fg7, .fg6, .fg5")
        .offsetheight / 2
    }px`,
  });
  gsap.from(".mt1, .mt2,.fg1", {
    duration: 3.6,
    opacity: 0,
    y: 3000,
    top: `${
      document.querySelector(".mt8, .mt9, .mt10, .mt7, .fg7, .fg6, .fg5")
        .offsetheight / 2
    }px`,
  });
}
function HorizontalScroll(){
  gsap.to(".page3 h1",{
    transform:"translateX(-50%)",
    duration:1,
    scrollTrigger:{
      trigger:".page3 ",
      scroller:"body",
      start:"bottom 90%",
      end:"top 20%" , 
      scrub:2,
      pin:true
    }
  })
}
function VideoExpand(){
  gsap.to(".page5 video",{
    width:"100%",
    height:"100%",
    scrollTrigger:{
        scroller:"body",
        trigger:".page5 video",
        start:"top 70%",
        end:"top 20%",
        scrub:5
    }
  })
}
function Marques(){
  gsap.from(".mark1",{
    transform:"translateX(-100%)",
    duration:1.5,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:".mark1",
      start:"top 60%",
      end:"top 30%",
    }
  })
  gsap.from(".mark2",{
    transform:"translateX(100%)",
    duration:1.5,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:".mark2",
      start:"top 50%",
      end:"top 30%",
    }
  })
  gsap.from(".mark3",{
    transform:"translateX(-100%)",
    duration:1.5,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:".mark3",
      start:"top 47%",
      end:"top 30%",
    }
  })
  gsap.from(".mark4",{
    transform:"translateX(100%)",
    duration:1.5,
    opacity:0,
    scrollTrigger:{
      scroller:'body',
      trigger:".mark4",
      start:"top 44%",
      end:"top 30%",
    }
  })
}
function Page4Animations(){
  gsap.from(".fis,.sec",{
    opacity:0,
    duration:2,
    y:100,
    scrollTrigger:{
      trigger:".fis,.sec",
      scroller:"body",
      start:"top 80%"
    }
  })
  gsap.from(".details",{
    opacity:0,
    duration:1,
    x:-200,
    scrollTrigger:{
      trigger:".details",
      scroller:"body",
      start:"top 80%",
    }
  })
  gsap.from(".round",{
    opacity:0,
    duration:1,
    x:200,
    scrollTrigger:{
      trigger:".round",
      scroller:"body",
      start:"top 80%",
    }
  })
  gsap.from(".round2",{
    opacity:0,
    duration:1,
    x:-200,
    scrollTrigger:{
      trigger:".round2",
      scroller:"body",
      start:"top 60%",
    }
  })
  gsap.from(".details2",{
    opacity:0,
    duration:1,
    x:200,
    scrollTrigger:{
      trigger:".details2",
      scroller:"body",
      start:"top 50%",
    }
  })
  gsap.from(".details3",{
    opacity:0,
    duration:1,
    x:-200,
    scrollTrigger:{
      trigger:".details3",
      scroller:"body",
      start:"top 70%",
    }
  })
  gsap.from(".round3",{
    opacity:0,
    duration:1,
    x:200,
    scrollTrigger:{
      trigger:".round3",
      scroller:"body",
      start:"top 80%",
    }
  })

}
function AboutusAnimation(){
  gsap.from (".tit",{
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
      trigger:".tit",
      scroller:"body",
      start:'top 100%'
    }
  })
  gsap.from (".tit2",{
    opacity:0,
    y:200,
    duration:1,
    scrollTrigger:{
      trigger:".tit2",
      scroller:"body",
      start:'top 90%',
    }
  })
  gsap.from (".content",{
    opacity:0,
    x:200,
    duration:2,
    scrollTrigger:{
      trigger:".content",
      scroller:"body",
      start:'top 60%',
    }
  })
  gsap.from (".images",{
    opacity:0,
    x:-200,
    duration:2,
    scrollTrigger:{
      trigger:".images",
      scroller:"body",
      start:'top 60%',
    }
  })
  gsap.from (".circle",{
    opacity:0,
    scale:0,
    duration:1,
    scrollTrigger:{
      trigger:".circle",
      scroller:"body",
      start:'top 100%',
    }
  })
}
function ContactAnimations(){
  gsap.from(".page6 h1",{
    y:100,
    opacity:1,
    duration:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".page6 h1",
      start:"top 90%",
    }
  })
  gsap.from(".lef",{
    x:-200,
    opacity:0,
    duration:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".lef",
      start:"top 80%",
    }
  })
  gsap.from(".rig",{
    x:200,
    opacity:0,
    duration:1,
    scrollTrigger:{
      scroller:"body",
      trigger:".rig",
      start:"top 80%",
    }
  })

}
parallax();
animation();
HorizontalScroll();
VideoExpand();
Marques();
Page4Animations();
AboutusAnimation();
ContactAnimations();