window.onload = function () {
    const heading = document.querySelector("h1");
  
    if (sessionStorage.getItem("visited")) {
      // Not the first time
      const p1 = Math.floor(Math.random() * 6) + 1;
      const p2 = Math.floor(Math.random() * 6) + 1;
      if(p1>p2)
      heading.textContent = "Player 1 wins !!";
      else if(p2>p1)
      heading.textContent = "Player 2 wins !!";
      else
      heading.textContent = "Match is tied, do again !!";

      document.querySelector(".img1").setAttribute("src","./dice"+p1+".png")
      document.querySelector(".img2").setAttribute("src","./dice"+p2+".png")

    } else {
      // First time
      sessionStorage.setItem("visited", true);
    }
  };
  