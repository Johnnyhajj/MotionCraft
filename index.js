function reportConversionWrapper(target) {
    reportConversion(target);
    setTimeout( function() {
      window.location.href = 'https://wa.me/+961 71 835 824';
    }, 1000 );
  }
  // following is just a filler - don't mind it
  function reportConversion(a) {
    return;
  }
  

  document.getElementById('aboutButton').addEventListener('click', function() {
    window.location.href = '#about'; // Change this to your actual About page URL
});
