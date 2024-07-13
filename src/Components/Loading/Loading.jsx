import styles from './Loading.module.css';

const Loading = ({ color }) => {
  return (
    <>
      <span
        style={{
          border: `5px solid ${color}`,
          borderBottomColor: 'transparent',
        }}
        className={styles.loader}
      ></span>
    </>
  );
};

export default Loading;
