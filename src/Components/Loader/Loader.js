import style from './Loader.module.css';

const Loader = () => {
  return (
    <div className={style.loader}>
      <Loader type="ThreeDots" color="#00BFFF" height={80} width={80} />
    </div>
  );
};

export default Loader;
