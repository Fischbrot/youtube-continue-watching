function checkPopup() {
    const element = document.querySelector(".yt-confirm-dialog-renderer");
  
    if(element) {
      console.log("RESUMED YOUTUBE!")
      document.querySelector(".yt-confirm-dialog-renderer a.yt-button-renderer").click();
    }
  
  }
  
  setInterval(checkPopup, 10)
  
  console.log("INITIALISED YOUTUBE-CONTINUE-WATCHING")