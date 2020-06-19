import React from 'react';
import PropTypes from 'prop-types';
import styles from './ProductCard.module.scss';

const ProductCard = ({ product }) => {
  return (
    <div className={styles.wrapper}>
      <a className={product.price > 15000 ? styles.linkRed : styles.linkGreen}>
        <span className={styles.title}>{product.name}</span>
      </a>
      <div className={styles.price}>
        {product.price}
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  //
};

ProductCard.defaultProps = {
  //
};

export default ProductCard;
