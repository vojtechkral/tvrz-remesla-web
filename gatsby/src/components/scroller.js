import invariant from 'invariant';

const elements = {};

export const useScrollElement = (name) => {

    return (element) => {
        // FIXME check already existing names
        elements[name] = element;
    };
}

export const scrollToElement = (name) => {
    const element = elements[name];
    invariant(element, `Scroll element '${name}' does not exist!`);

    element.scrollIntoView({
        behavior: 'smooth',
    })
}
