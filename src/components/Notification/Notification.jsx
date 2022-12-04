import PropTypes from 'prop-types';

export const Notification = ({ title }) => {
  <p>{title}</p>;
};

Notification.propsTypes = {
  title: PropTypes.string.isRequired,
};
