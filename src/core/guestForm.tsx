import { useEffect, useState } from "react";

type Props = {
  handleShow: any;
};
const GuestForm = ({ handleShow }: Props) => {
  const TIME_TO_SHOW = 2000;
  const [showForm, setShowForm] = useState(true);

  const handleCloseFunction = () => {
    setShowForm(false);
    setTimeout(() => {
      handleShow();
    }, TIME_TO_SHOW);
  };

  return (
    <>
      <div className='courtain-form'></div>
      <div
        className={`guest-form ${
          showForm ? "guest-form-show" : "guest-form-fading"
        }`}
      >
        <div className='flex flex-row justify-between'>
          <div className='text-center font-alkatra basis-4/5'>
            Ayudanos a contabilizar a los invitados 🥺
          </div>
          <div className='flex justify-end basis-1/5'>
            <button onClick={handleCloseFunction}>x</button>
          </div>
        </div>
      </div>
    </>
  );
};

GuestForm.defaultProps = {};

export default GuestForm;
