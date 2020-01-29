import React, {useState} from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import Img from 'gatsby-image';
import Carousel, {ModalGateway, Modal} from 'react-images';

import style from './Craft.module.scss';

const ViewComponent = ({data}) => (
    <Img
        fluid={data.fluid}
    />
)

const Craft = ({name, children, images, alternate}) => {
    const [galleryIndex, setGalleryIndex] = useState(null);
    return (
        <div className={classnames(style.main, {[style.alternate]: alternate})}>
            <div className={style.description}>
                <h3 className={style.title}>{name}</h3>
                {children}
            </div>
            <div className={style.images}>
                {images.map(({childImageSharp}, i) => (
                    <div onClick={() => setGalleryIndex(i)}>
                        <Img
                            key={childImageSharp.name}
                            fluid={childImageSharp.fluid}
                            className={style.image}
                        />
                    </div>
                ))}
            </div>
            <ModalGateway>
                {(galleryIndex !== null) && (
                    <Modal onClose={() => setGalleryIndex(null)}>
                        <Carousel
                            currentIndex={galleryIndex}
                            components={{View: ViewComponent}}
                            views={images.map(({childImageSharp}) => childImageSharp)}
                        />
                    </Modal>
                )}
            </ModalGateway>
        </div>
    );
};

Craft.propTypes = {
    name: PropTypes.string.isRequired,
    alternate: PropTypes.bool,
    children: PropTypes.node,
};

Craft.defaultProps = {
    alternate: false,
}

export default Craft;
