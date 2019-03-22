export default () => {
    const togglers = document.getElementsByClassName('navbar-toggler');
    Array.from(togglers).forEach((toggler) => toggler.addEventListener('click', () => {
        const targetId = toggler.dataset.target;
        const target = document.getElementById(targetId);
        target.classList.toggle('show');
    }));
};
