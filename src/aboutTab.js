function createAboutLayout () {
    const mainEl = document.querySelector('main');

    const aboutBtn = document.querySelector('.three');
    aboutBtn.classList.add('active');

    const aboutHeader = document.createElement('h3');
    aboutHeader.textContent = 'About our firm';
    mainEl.appendChild(aboutHeader);
    const aboutPara = document.createElement('p');
    aboutPara.innerHTML = 'Location:<br>34 Roosevelt avenue<br>Memphis, Tennessee';
    mainEl.appendChild(aboutPara);
}

export {createAboutLayout};