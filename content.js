function checkPopup() {
    const element = document.querySelector(".yt-confirm-dialog-renderer");
  
    if(element) {
      console.log("RESUMED YOUTUBE!")
      let child = document.querySelector(".yt-confirm-dialog-renderer a.yt-button-renderer")
      child.click();
      element.removeChild(child)
    }
  
  }
  
  setInterval(checkPopup, 10)
  
  console.log("INITIALISED YOUTUBE-CONTINUE-WATCHING")