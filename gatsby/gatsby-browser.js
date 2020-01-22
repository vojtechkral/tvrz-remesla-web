export const onClientEntry = () => {
    // IntersectionObserver polyfill for IE 11
    if (!('IntersectionObserver' in window)) {
        import('intersection-observer');
    }
}
