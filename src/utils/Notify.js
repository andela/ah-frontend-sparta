import { notify } from 'react-notify-toast';

const notification = (message, type, timeout) => {
  notify.show(message, type, timeout);
};

export default notification;
