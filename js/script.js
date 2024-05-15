const carosello = document.getElementById('carosello');

const imgElArray = []

const imgArray = ['https://wallpapers-clan.com/wp-content/uploads/2023/11/metal-gear-solid-snake-red-desktop-wallpaper-preview.jpg', 'https://wallpapers.com/images/featured/metal-gear-solid-irxbl2j6yua9jn3a.jpg', 'https://images4.alphacoders.com/511/51198.jpg'];

let activeIndex = 0
for (let i = 0; i < imgArray.length; i++) {

    const imgElement = document.createElement('img');
    
    if (i == activeIndex) {
        imgElement.classList.add('active');
    }

    imgElement.setAttribute('src', imgArray[i]);
    
    carosello.appendChild(imgElement);

    imgElArray.push(imgElement)
}

const leftButton = document.getElementById('left-button');

const rightButton = document.getElementById('right-button');

rightButton.addEventListener('click', function () {

    imgElArray[activeIndex].classList.remove('active');

    activeIndex++;

    if (activeIndex >= imgElArray.length ) {
        activeIndex = 0
    };
    imgElArray[activeIndex].classList.add('active');
    
});

leftButton.addEventListener('click', function () {

    imgElArray[activeIndex].classList.remove('active');

    activeIndex--;

    if (activeIndex < 0 ) {
        activeIndex = imgElArray.length - 1;
    };

    imgElArray[activeIndex].classList.add('active');
    
});


