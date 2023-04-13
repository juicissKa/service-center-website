(function () {
    var qualities = document.querySelectorAll('.quality');
  
    var observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (typeof getCurrentAnimationPreference === 'function' && !getCurrentAnimationPreference()) {
          return;
        }
  
        if (entry.isIntersecting) {
          entry.target.classList.add('quality-animation');
        }
      });
    });
    
    qualities.forEach(quality => observer.observe(quality));
  })();