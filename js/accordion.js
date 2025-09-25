const accordion = document.getElementById('accordion');
const screenWidth = window.screen.width;

function accController(event) {
  const clickedBtn = event.target.closest('.accordion_btn');
  const desktopImage = document.getElementById('desktop_img');
  if (clickedBtn) {
    clickedBtn.classList.toggle('active');
    const accContent = clickedBtn.nextElementSibling;
    const contentImage = accContent.querySelector('.accordion_img');
    const accContentList = document.querySelectorAll('.accordion_content');

    if (screenWidth > 768) {
      for (let i = 0; i < accContentList.length; i++) {
        if (accContentList[i].isEqualNode(accContent)) {
          desktopImage.src = contentImage.src;
          continue;
        }
        accContentList[i].style.display = 'none';
      }
    }

    if (accContent.style.display === 'block') {
      accContent.classList.add('close');
      accContent.addEventListener('animationend', function () {
        this.style.display = 'none';
        this.removeEventListener('animationend', arguments.callee);
      });
    } else {
      accContent.style.display = 'block';
      accContent.style.maxHeight = '1000px';
      accContent.classList.remove('close');
    }
  }
}

accordion.addEventListener('click', (event) => accController(event));
if (screenWidth > 768) {
  accordion.addEventListener('mouseover', (event) => accController(event));
  accordion.addEventListener('mouseout', (event) => {
    accController(event);
    const desktopImage = document.getElementById('desktop_img');
    desktopImage.src = './assets/images/accordion/placeholder.png';
  });
}

// const navAccBtnGroup = document.getElementsByClassName('navigation_accordion_btn');
// for (let i = 0; i < navAccBtnGroup.length; i++) {
//   navAccBtnGroup[i].addEventListener('click', function () {
//     this.classList.toggle('active');

//     const accContent = this.nextElementSibling;

//     if (accContent.style.display === 'block') {
//       accContent.classList.add('close');
//       accContent.addEventListener('animationend', function () {
//         this.style.display = 'none';
//       });
//     } else {
//       accContent.style.display = 'block';
//       accContent.style.maxHeight = '1000px';
//       accContent.classList.remove('close');
//     }
//   });
// }
