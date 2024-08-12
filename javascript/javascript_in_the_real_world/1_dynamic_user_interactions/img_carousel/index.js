const imageLinks = {
    img0: 'https://images.pexels.com/photos/1108099/pexels-photo-1108099.jpeg',
    img1: 'https://www.petfinder.com/static/d27b29766905bcf1a9a3765feb55b671/1c2a1/teddybear-dog-breeds.jpg',
    img2: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTkFl7Ixmr8-4GNyCwc6Vw1JxxFdUGZYPyGPQ&s',
    img3: 'https://www.shutterstock.com/image-photo/happy-puppy-welsh-corgi-14-600nw-2270841247.jpg',
    img4: 'https://hips.hearstapps.com/hmg-prod/images/small-fluffy-dog-breeds-maltipoo-66300ad363389.jpg?crop=0.668xw:1.00xh;0.151xw,0&resize=640:*'
};

const imagesArray = [];
let currentImg = 0

const highlight = function () {
    const navBtns = document.querySelectorAll('.nav_btn');
    for (btn of navBtns) {
        btn.setAttribute('class','nav_btn');
    }
    navBtns[currentImg].setAttribute('class', 'nav_btn current_nav');
}

const addImgToArray = function () {
    for (img of Object.keys(imageLinks)) {
        imagesArray.push(imageLinks[img]);
    }
}

const showImageContainer = function () {
    const imgContainer = document.querySelector('.img_container');
    while (imgContainer.hasChildNodes()) {
        imgContainer.firstChild.remove();
    }
    for (imgLink of imagesArray) {
        const newImg = document.createElement('img');
        newImg.setAttribute('src',imgLink);
        imgContainer.appendChild(newImg);
    }
}

const nextImg = function () {
    let firstImg = imagesArray.shift();
    imagesArray.push(firstImg);
    if (currentImg < 4) {
        currentImg++;
    } else {
        currentImg = 0;
    }
    showImageContainer();
    highlight();
}

const prevImg = function () {
    let lastImg = imagesArray.pop();
    imagesArray.unshift(lastImg);
    if (currentImg > 0) {
        currentImg--;
    } else {
        currentImg = 4;
    }
    showImageContainer();
    highlight();
}

const btnInteraction = function () {
    const backBtn = document.querySelector('.left_img button');
    const nextBtn = document.querySelector('.right_img button');

    backBtn.addEventListener('click', prevImg);
    nextBtn.addEventListener('click', nextImg);
}

const quickNav = function () {
    const navContainer = document.querySelector('.circle_nav');
    for (let i = 0; i < imagesArray.length; i++) {
        const imgCont = document.querySelector('.img_container');
        let navBtn = document.createElement('button');
        navBtn.setAttribute('class', 'nav_btn');
        navBtn.addEventListener('click', () => {
            while (imgCont.hasChildNodes()) {
                imgCont.firstChild.remove();
            }
            imagesArray.splice(0);
            addImgToArray();
            let front = imagesArray.splice(i).reverse();
            for (frontItem of front) {
                imagesArray.unshift(frontItem);
            }
            currentImg = i;
            showImageContainer();
            highlight();
        });
        navContainer.appendChild(navBtn);
    }
}

addImgToArray();

showImageContainer();

btnInteraction();

quickNav();

highlight();
