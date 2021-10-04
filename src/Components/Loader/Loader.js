import style from './Loader.module.css';
import Spinner from 'react-loader-spinner';

const Loader = () => {
  return (
    <div className={style.loader}>
      <Spinner type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
