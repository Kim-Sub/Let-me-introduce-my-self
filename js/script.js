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


/* .goSection 클릭시 .subPage top:0; left:0 으로 이동 */
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
        item.element.style.scale = '1';
      });
    });
  });




/*   .goSection 클릭시 #gotoMain 등장 + 새로고침 */
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


/* 브라우저 새로고침시 videoSources 무작위 교체 */
document.addEventListener('DOMContentLoaded', function() {
    var mainVideo = document.getElementById('mainVideo');
    
    var videoSources = [
      "./video/main1.mp4",
      "./video/main2.mp4",
      "./video/main3.mp4",
      "./video/main4.mp4"
    ];
    var initialVideoPlayed = localStorage.getItem('initialVideoPlayed');
    
    if (!initialVideoPlayed) {
      mainVideo.src = "./video/main1.mp4";
      localStorage.setItem('initialVideoPlayed', true);
    } else {
      var randomIndex = Math.floor(Math.random() * (videoSources.length));
      var randomSource = videoSources[randomIndex];
      mainVideo.src = randomSource;
    }
  });


/* #sectionRight 클릭시 #Right>ul>li opacity + clipPath 변경 */ 
document.querySelector('#sectionRight').addEventListener('click', function() {
  var listItems = document.querySelectorAll('#Right > ul > li');
  var delay = 0;
  var interval = 3000 / listItems.length;
  
  for (var i = 0; i < listItems.length; i++) {
    setTimeout(function(item) {
      item.style.opacity = '1';
      item.style.clipPath = 'polygon(0 0, 100% 0, 100% 100%, 0 100%)';
    }, delay, listItems[i]);
    
    delay += interval;
  }
});


/* #idCard 클릭시 scale(1)으로 변경 */
// 원래 위치 ( top: 50%; left: 50%; transform: scale(1) translateX(-50%) translateY(-50%); )
var idCard = document.getElementById('idCard');

idCard.addEventListener('click', function() {
  idCard.style.top = '50%';
  idCard.style.left = '50%';
  idCard.style.transform = 'scale(1) translateX(-50%) translateY(-50%)';
});