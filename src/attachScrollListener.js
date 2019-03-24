const OFFSET = 25;

const getTop = (target) => {
    let element = target;
    let result = 0;
    while (element.offsetParent) {
        result += element.offsetTop;
        element = element.offsetParent;
    }
    return result;
};

export default () => window.addEventListener('load', () => {
    const navbar = document.getElementById('mainNav');
    const title = document.getElementById('title');
    const getMaxScroll = () => Math.max(getTop(title) - navbar.offsetHeight * 1.5, 0);

    if (window.scrollY <= getMaxScroll()) {
        navbar.classList.remove('navbar-shrink');
    }

    document.addEventListener('scroll', () => {
        if (window.scrollY > getMaxScroll()) {
            navbar.classList.add('navbar-shrink');
        } else {
            navbar.classList.remove('navbar-shrink');
        }

        Array.from(document.getElementsByClassName('nav-link')).forEach((navlink) => navlink.classList.remove('active'));
        Array.from(document.getElementsByTagName('section')).forEach((section) => {
            const top = getTop(section) - OFFSET;
            const bottom = top + section.offsetHeight;
            if (window.scrollY > top && window.scrollY < bottom) {
                const navlink = document.querySelector(`.nav-link[href="#${section.id}"]`);
                navlink.classList.add('active');
            }
        });
    });
});
