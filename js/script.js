/* what's ? 클릭시 지구로 동영상 교체 */
document.addEventListener('DOMContentLoaded', function() {
    var sectionLeft = document.getElementById('sectionLeft');
    var mainVideo = document.getElementById('mainVideo');
    var isAlternate = false; 

    sectionLeft.addEventListener('click', function() {
      if (isAlternate) {
        mainVideo.src = './video/main1.mp4' 
        isAlternate = false;
      } else {
        mainVideo.src = './video/main5.mp4'; 
        isAlternate = true;
      }
    });
  });


/* .goSection 클릭시 .subPage 이동 */
document.addEventListener('DOMContentLoaded', function() {
    //var sectionLeft = document.getElementById('sectionLeft');
    var sectionUp = document.getElementById('sectionUp');
    var sectionRight = document.getElementById('sectionRight');
    var sectionDown = document.getElementById('sectionDown');
  
    var sections = [
    //  { section: sectionLeft, element: document.getElementById('Left') },
      { section: sectionUp, element: document.getElementById('Up') },
      { section: sectionRight, element: document.getElementById('Right') },
      { section: sectionDown, element: document.getElementById('Down') }
    ];
  
    sections.forEach(function(item) {
      item.section.addEventListener('click', function() {
        item.element.style.top = '0';
        item.element.style.left = '0';
      });
    });
  });




/*   .goSection 클릭시 #gotoMain 등장 */
document.addEventListener('DOMContentLoaded', function() {
    var goSectionElements = document.getElementsByClassName('goSection');
    var gotoMain = document.getElementById('gotoMain');
  
    Array.from(goSectionElements).forEach(function(element) {
      element.addEventListener('click', function() {
        gotoMain.style.opacity = '1';
      });
    });
  
    gotoMain.addEventListener('click', function() {
      gotoMain.style.opacity = '0';
      location.reload(); 
    });
  });