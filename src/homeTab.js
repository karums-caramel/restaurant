import resto from './resto.jpg';

function createHomeLayout () {
    const mainEl = document.querySelector('main');

    const navBtn = document.querySelector('.one');
    navBtn.classList.add('active');
    
    const welcomeHeader = document.createElement('h3');
    welcomeHeader.textContent = 'Welcome to the location where we supply food!';
    mainEl.appendChild(welcomeHeader);
    
    const article = document.createElement('article');

    console.log(article);

    const restoImg = document.createElement('img');
    restoImg.src = resto;
    article.appendChild(restoImg);
    const introductionPara = document.createElement('p');
    introductionPara.innerHTML = "Our food supply establishment was established a long while ago and continues to provide folks with good quality slop to this day. The institution was created out of love for nutrition and nutrients by the founder and their family. <br>We hope you have a pleasant experience.";
    article.appendChild(introductionPara);

    mainEl.appendChild(article);

}

export {createHomeLayout};