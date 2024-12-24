function createMenuLayout () {
    const mainEl = document.querySelector('main');

    const navBtn = document.querySelector('.two');
    navBtn.classList.add('active');

    const menuHeader = document.createElement('h3');
    menuHeader.textContent = "Take a good look at our menu, there's many delicacies to choose from!";
    mainEl.appendChild(menuHeader);

    const article = document.createElement('article');
    mainEl.appendChild(article);

    const menuList = document.createElement('ul');
    article.appendChild(menuList);

    const mains = document.createElement('li');
    mains.textContent = 'Mains';
    menuList.appendChild(mains);
    const mainsList = document.createElement('dl');
    mains.appendChild(mainsList);
    const burger = document.createElement('dt');
    burger.textContent = 'Burger - 5';
    mainsList.appendChild(burger);
    const burgerDesc = document.createElement('dd');
    burgerDesc.textContent = 'Our classic burger filled with ingredients such as meat. Or cheese.'
    mainsList.appendChild(burgerDesc);
    const potatoes = document.createElement('dt');
    potatoes.textContent = 'Potatoes - 4';
    mainsList.appendChild(potatoes);
    const potatoesDesc = document.createElement('dd');
    potatoesDesc.textContent = 'Several boiled potatoes. Organic.';
    mainsList.appendChild(potatoesDesc);

    const sides = document.createElement('li');
    sides.textContent = 'Sides';
    menuList.appendChild(sides);
    const sidesList = document.createElement('dl');
    sides.appendChild(sidesList);
    const fries = document.createElement('dt');
    fries.textContent = 'Fries - 3';
    sidesList.appendChild(fries);
    const friesDesc = document.createElement('dd');
    friesDesc.textContent = 'Comparable to the potatoes, but fried. In oil.'
    sidesList.appendChild(friesDesc);
    menuList.appendChild(sides);

    const drinks = document.createElement('li');
    drinks.textContent = 'Drinks';
    menuList.appendChild(drinks);
    const drinksList = document.createElement('dl');
    drinks.appendChild(drinksList);
    const coke = document.createElement('dt');
    coke.textContent = 'Coke - 1.5';
    drinksList.appendChild(coke);
    const cokeDesc = document.createElement('dd');
    cokeDesc.textContent = 'You know.';
    drinksList.appendChild(cokeDesc);
    const schlorp = document.createElement('dt');
    schlorp.textContent = 'Schlorp - 4';
    drinksList.appendChild(schlorp);
    const schlorpDesc = document.createElement('dd');
    schlorpDesc.textContent = 'Delicious. Don\'t complain about the texture.';
    drinksList.appendChild(schlorpDesc);

    menuList.appendChild(drinks);
}

export {createMenuLayout};