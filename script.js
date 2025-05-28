 const track = document.getElementById('carouselTrack');
    let currentIndex = 0;

    function moveSlide(direction) {
      const totalItems = track.children.length;
      const visibleItems = 3;
      const maxIndex = totalItems - visibleItems;

      currentIndex += direction;
      if (currentIndex < 0) currentIndex = 0;
      if (currentIndex > maxIndex) currentIndex = maxIndex;

      const itemWidth = track.children[0].offsetWidth;
      track.style.transform = `translateX(-${currentIndex * itemWidth}px)`;
    }


    /*review section*/
     const swiper = new Swiper('.testimonial-slider', {
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    autoplay: {
      delay: 4000,
      disableOnInteraction: false,
    },
  });

    
