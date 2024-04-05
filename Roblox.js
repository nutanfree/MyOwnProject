AFRAME.registerComponent("roblox-rotation-reader", {
    schema: {
      speedOfRotation: { type: "number", default: 0 },
      speedOfAscent: { type: "number", default: 0 }
    },
    init: function () {
      window.addEventListener("keydown", (e) => {
  
        //get the data from the attributes
        this.data.speedOfRotation = this.el.getAttribute("rotation");      
        this.data.speedOfAscent = this.el.getAttribute("position");
  
        var robloxRotation = this.data.speedOfRotation;      
        var robloxPosition = this.data.speedOfAscent;
  
        //control the attributes with the Arrow Keys
        if (e.key === "ArrowRight") {
          if (robloxPosition.x < 10) {
            robloxPosition.x += 0.5;
            this.el.setAttribute("position", robloxPosition);
          }
        }
        if (e.key === "ArrowLeft") {
          if (robloxPosition.x > -10) {
            robloxPosition.x -= 0.5;
            this.el.setAttribute("position", robloxPosition);
          }
        }
        if (e.key === "ArrowUp") {
          if (robloxPosition.y < 2) {
            robloxPosition.y += 0.5;
            this.el.setAttribute("position", robloxPosition);
          }
        }
        if (e.key === "ArrowDown") {
          if (robloxPosition.y > -2) {
            robloxPosition.y -= 0.5;
            this.el.setAttribute("position", robloxPosition);
          }
        }
      });
    }
  });
  