import PropTypes from "prop-types";
import classNames from "classnames";
import styles from "./Header.module.scss";
import StarSvg from "../StarSvg";
import CartSvg from "../CartSvg";


const Header = ({ count = 0, counter=0, deleteLocal=()=>{} }) => {
 

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>Ukrainian national clothes</h1>
      <div className={styles.icons}>
      <div className={styles.star}>
        <StarSvg /> {counter}
      </div>
      <div className={styles.count} onClick={deleteLocal}>
        <CartSvg /> {count}
      </div>
      </div>
      
    </div>
  );
};

Header.propTypes = {
  count: PropTypes.number,
  counter: PropTypes.number, 
  deleteLocal: PropTypes.func,
};
export default Header;
