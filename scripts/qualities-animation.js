(function () {
    var qualities = document.querySelectorAll('.quality');
    var prices = document.querySelectorAll('.price-table');
    var titles = document.querySelectorAll('.title')
  
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
    prices.forEach(price => observer.observe(price));
    titles.forEach(title => observer.observe(title));
  })();