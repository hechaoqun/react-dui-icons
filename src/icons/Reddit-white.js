import React from 'react';
import PropTypes from 'prop-types';

const RedditWhite = props => {
  const { color, size, ...otherProps } = props;
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 24 24"
      class="dui-icon"
      fill="currentcolor"
      color={color}
      {...otherProps}
    >
      <rect width="24" height="24" rx="12" fill="#fff"></rect>
      <path
        d="M18 12.11a1.298 1.298 0 01-.73 1.188 2.463 2.463 0 010 .393c0 2-2.351 3.626-5.252 3.626-2.9 0-5.252-1.626-5.252-3.626a2.373 2.373 0 010-.393 1.315 1.315 0 01-.717-.832 1.292 1.292 0 01.176-1.08 1.309 1.309 0 01.944-.568 1.326 1.326 0 011.048.346 6.477 6.477 0 013.513-1.098l.666-3.098a.274.274 0 01.122-.176.286.286 0 01.212-.039l2.207.438a.905.905 0 011.103-.384.891.891 0 01-.37 1.725.898.898 0 01-.85-.796l-1.928-.402-.585 2.786a6.453 6.453 0 013.468 1.098 1.319 1.319 0 011.404-.268 1.296 1.296 0 01.82 1.16zm-8.94 1.236a.893.893 0 00.487.483.902.902 0 001.177-.483.887.887 0 00-.195-.973.907.907 0 00-.982-.194.893.893 0 00-.487 1.166zm5.16 2.143a.24.24 0 00-.167-.414.297.297 0 00-.18.063 2.954 2.954 0 01-1.383.53 2.982 2.982 0 01-.499.014 2.981 2.981 0 01-1.874-.562.245.245 0 00-.326.016.24.24 0 00-.016.323 3.461 3.461 0 001.632.662c.197.025.395.034.593.026a3.51 3.51 0 001.722-.375c.177-.09.345-.194.503-.313l-.006.03zm-.166-1.52a.911.911 0 00.656-.272.891.891 0 00.254-.657.893.893 0 00-.556-.826.907.907 0 00-.982.194.887.887 0 00-.195.973c.14.334.468.551.832.551l-.009.036z"
        fill="#FF4500"
      ></path>
    </svg>
  );
};

RedditWhite.propTypes = {
  color: PropTypes.string,
  size: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

RedditWhite.defaultProps = {
  // color: 'currentColor',
  color: '#0C0F0F',
  size: '24'
};

export default RedditWhite;
