gsap.from(".first h5", {
  opacity: 0,
  y: 100,
  duration: 1,
  delay: 0.5,
  ease: "power5.inOut",
});

gsap.from(".first h1", {
  opacity: 0,
  y: 150,
  duration: 1.2,
  delay: 0.5,
  ease: "power5.inOut",
});

gsap.from(".first button", {
  opacity: 0,
  y: 150,
  duration: 1.4,
  delay: 0.5,
  ease: "power5.inOut",
});

gsap.from(".second h5", {
  opacity: 0,
  y: 150,
  duration: 1,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".second .h5",
    scoller: "body",
    start: "top 100%",
  },
});

gsap.from(".second h1", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".second h1",
    start: "top 100%",
  },
});
gsap.from(".second button", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".second button",
    start: "top 100%",
  },
});

gsap.from(".third h5", {
  opacity: 0,
  y: 150,
  duration: 1,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".third .h5",
    scoller: "body",
    start: "top 100%",
  },
});

gsap.from(".third h1", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".third h1",
    start: "top 100%",
  },
});
gsap.from(".third button", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".third button",
    start: "top 100%",
  },
});

gsap.from(".fourth h5", {
  opacity: 0,
  y: 150,
  duration: 1,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".fourth .h5",
    scoller: "body",
    start: "top 100%",
  },
});

gsap.from(".fourth h1", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".fourth h1",
    start: "top 100%",
  },
});
gsap.from(".fourth button ", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".fourth button",
    start: "top 100%",
  },
});

gsap.from(".fifth h5", {
  opacity: 0,
  y: 150,
  duration: 1,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".fifth .h5",
    scoller: "body",
    start: "top 100%",
  },
});

gsap.from(".fifth h1", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".fifth h1",
    start: "top 100%",
  },
});
gsap.from(".fifth button ", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".fifth button",
    start: "top 100%",
  },
});

gsap.from(".sixth h5", {
  opacity: 0,
  y: 150,
  duration: 1,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".sixth .h5",
    scoller: "body",
    start: "top 100%",
  },
});

gsap.from(".sixth h1", {
  opacity: 0,
  y: 100,
  duration: 1.2,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".sixth h1",
    start: "top 100%",
  },
});
gsap.from(".sixth button ", {
  opacity: 0,
  y: 100,
  duration: 1.4,
  ease: "power5.inOut",
  scrollTrigger: {
    trigger: ".sixth button",
    start: "top 100%",
  },
});


var menu = document.querySelector(".nav-3 i");
      var cross = document.querySelector("#fullpage i");
      var tl = gsap.timeline();
      tl.to("#fullpage", {
        right: 0,
      });
      tl.to("#fullpage h4", {
        right: 0,
        duration: 0.6,
      });
      tl.from("#fullpage h4", {
        x: 150,
        duration: 0.7,
        stagger: 0.28,
        opacity: 0,
      });

      tl.pause();
      menu.addEventListener("click", () => {
        tl.play();
      });
      cross.addEventListener("click", () => {
        tl.reverse();
      });
      gsap.from("#nav h2", {
        opacity: 0,
        duration: 5,
        bottom: 100
      });