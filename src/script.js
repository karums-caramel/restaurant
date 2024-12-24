import './styles.css';
import { createHomeLayout } from './homeTab';
import { createMenuLayout } from './menuTab';
import { createAboutLayout } from './aboutTab';

createHomeLayout();

document.querySelectorAll('.nav-btn').forEach((btn) => {
    btn.addEventListener('click', (e) => {
        clearMain();
        switch (e.target.textContent) {
            case 'Home':
                createHomeLayout();
                break;
            
            case 'Menu':
                createMenuLayout();
                break;

            case 'About':
                createAboutLayout();
                break;
        }
    })
})

function clearMain() {
    document.querySelector('main').innerHTML = '';
    document.querySelectorAll('.nav-btn').forEach((btn) => {
        btn.classList.contains('active') ? btn.classList.toggle('active') : true;
    })
}