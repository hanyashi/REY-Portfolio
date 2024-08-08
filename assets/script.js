let domReady = (cb) => {
    document.readyState === 'interactive' || document.readyState === 'complete'
      ? cb()
      : document.addEventListener('DOMContentLoaded', cb);
  };
  
  domReady(() => {
    document.body.style.visibility = 'visible';
  });

  document.getElementsByClassName("name-anim").addEventListener("click", setAnimation)

  function setAnimation() {
    document.getElementsByClassName("name-anim").style.class = "animate__headShake";
  }

  