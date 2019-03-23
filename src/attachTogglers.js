export default () => {
    const togglers = document.getElementsByClassName('navbar-toggler');
    Array.from(togglers).forEach((toggler) => {
        const targetId = toggler.dataset.target;
        const target = document.getElementById(targetId);
        toggler.addEventListener('click', () => {
            target.classList.toggle('show');
        });
        Array.from(target.getElementsByTagName('a')).forEach((href) => {
            href.addEventListener('click', () => {
                target.classList.remove('show');
            });
        });
    });
};
