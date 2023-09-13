import React from 'react';

import { ThreeCircles } from 'react-loader-spinner';

import styles from './loader.module.scss';

const Loader = () => {
  return (
    <div className={styles.load_wrapper}>
      <ThreeCircles
        height="100"
        width="100"
        color="#C71585"
        wrapperStyle={{}}
        wrapperClass=""
        visible={true}
        ariaLabel="three-circles-rotating"
        outerCircleColor="#D02090"
        innerCircleColor="#EE82EE"
        middleCircleColor="#FFC0CB"
      />
    </div>
  );
};
export default Loader;
