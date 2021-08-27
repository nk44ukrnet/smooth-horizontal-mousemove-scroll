//smooth mousemove scroll
const furniture = document.querySelector('.container');
//if(furniture) {
    const furnitureItems = document.querySelector('.inner');
    const furnitureColumn = document.querySelectorAll('.item');

    const speed = furniture.dataset.speed;

    let positionX = 0;
    let coordXprocent = 0;

    function setMouseGalleryStyle() {
        let furnitureItemsWidth = 0;
        furnitureColumn.forEach(element=>{
            furnitureItemsWidth += element.offsetWidth;
        });

        const furnitureDifferent = furnitureItemsWidth - furniture.offsetWidth;
        const distX = Math.floor(coordXprocent - positionX);

        positionX = positionX + (distX * speed);
        let position = furnitureDifferent / 200 * positionX;

        furnitureItems.style.cssText = `transform: translateX(${-position}px)`;

        if(Math.abs(distX) > 0) {
            requestAnimationFrame(setMouseGalleryStyle);
        } else {
            furniture.classList.remove('_init');
        }
    }

furniture.addEventListener('mousemove', function (e) {
    //console.log('move');
    const furnitureWidth = furniture.offsetWidth;

    let coordX = e.pageX - furnitureWidth / 2;

    coordXprocent = coordX / furnitureWidth * 200

    //requestAnimationFrame(setMouseGalleryStyle)
    if(!furniture.classList.contains('_init')) {
        requestAnimationFrame(setMouseGalleryStyle);
        furniture.classList.add('_init')
    }
});

//}