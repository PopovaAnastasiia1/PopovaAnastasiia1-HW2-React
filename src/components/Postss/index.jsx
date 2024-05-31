import PropTypes from "prop-types";
import styles from "./Post.module.scss";
import StarSvg from "../StarSvg";
import classNames from "classnames";
import Button from "../Button";
import FirstModal from "../Modal/FirstModal";
import { useState } from "react";

const Post = ({
  name = "",
  price = "",
  image = "",
  color = "",
  article = "",
  id,
  handleFavourite = () => {},
  handleClick = () => {},
  isFavourite = false,
}) => {
  const [isOpenFirst, setIsOpenFirst] = useState(false);

  return (
    <div className={styles.post}>
      <img className={styles.image} src={image} alt={name} />
      <div className={styles.text}>
        <p className={styles.article}>{article}</p>
        <h1 className={styles.name}>{name}</h1>
        <h2 className={styles.price}>Price:{price}UAH</h2>
        <p className={styles.color}>Color:{color}</p>
        <Button
          openModal={() => {
            setIsOpenFirst(true);
          }}
          nameBtn="Add to cart"
        />
        <div
          className={classNames(styles.svgWrapper, {
            [styles.active]: isFavourite,
            
          })}
          onClick={() => {
            handleFavourite(id);
          }}
        >
          <StarSvg />
        </div>
      </div>
      <div className={styles.modal}>
        {isOpenFirst && (
          <FirstModal
            header="Add to cart!"
            close={() => {
              setIsOpenFirst(false);
            }}
            image={image}
            content="Do you want to add a product to the cart?"
            firstText="NO, CANCEL"
            secondaryText="YES,ADD"
            firstClick={() => {
              setIsOpenFirst(false);
            }}
            secondaryClick={() => {
              handleClick();
            }}
          />
        )}
      </div>
    </div>
  );
};

Post.propTypes = {
  image: PropTypes.string,
  name: PropTypes.string,
  price: PropTypes.string,
  article: PropTypes.string,
  color: PropTypes.string,
  handleFavourite: PropTypes.func,
  id: PropTypes.number.isRequired,
  isFavourite: PropTypes.bool,
  handleClick: PropTypes.func,
};

export default Post;
