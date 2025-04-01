function upBalloons() {
    window.addEventListener("scroll", function () {
        let scrollY = window.scrollY;
      
        document.querySelectorAll("img.balloons").forEach((balloon, index) => {
          balloon.style.transform = `translateY(-${scrollY * 0.5}px)`;
        });
    });
}

upBalloons();