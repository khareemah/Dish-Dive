import { ToastContainer } from 'react-toastify';

function Toast() {
  return (
    <ToastContainer
      position="top-right"
      autoClose={7000}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      bodyClassName="__toastify"
      theme="colored"
    />
  );
}

export default Toast;
