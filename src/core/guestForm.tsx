import { Button, TextField } from "@mui/material";
import { ChangeEvent, useState } from "react";
import DBController, { GuestType } from "./firebase/dbController";

type Props = {
  handleShow: any;
};
const GuestForm = ({ handleShow }: Props) => {
  const TIME_TO_SHOW = 1000;
  const INITIAL_MESSAGE = "Ayudanos a contabilizar a los invitados 🥺";
  const FAIL_MESSAGE = "Hubo un error intenta de nuevo más tarde 💀";
  const EXIST_GUEST = "¡Ya tienes apartados tus boletos! 🥳";

  const GUEST_EXIST = localStorage.getItem("guestId");

  const [showForm, setShowForm] = useState(true);
  const [guestName, setGuestName] = useState("");
  const [tickets, setTikets] = useState(1);
  const [title, setTitle] = useState(INITIAL_MESSAGE);

  const incremet = () => setTikets(tickets + 1);
  const decrement = () => setTikets(tickets - 1);

  const disableButtonDecrement = tickets === 0;

  const handleName = (event: ChangeEvent<HTMLInputElement>) =>
    setGuestName(event.target.value);

  const handleCloseFunction = () => {
    setShowForm(false);
    setTimeout(() => {
      handleShow();
    }, TIME_TO_SHOW);
  };

  const handleOnSubmit = async () => {
    const dbController = new DBController();
    const guest: GuestType = {
      name: guestName,
      tickets: tickets,
    };
    const result = await dbController.addNewGuest(guest);
    if (!result) {
      setTitle(FAIL_MESSAGE);
      alert(`Algo salio mal: ${dbController.getErrors()}`);
    } else {
      alert("Gracias por ayudarnos :) ");
    }
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
            {GUEST_EXIST === null || GUEST_EXIST === "" ? title : EXIST_GUEST}
          </div>
          <div className='flex justify-end basis-1/5'>
            <button onClick={handleCloseFunction}>x</button>
          </div>
        </div>
        <div className='mt-8 flex flex-col'>
          <TextField
            id='name-guest'
            label='Nombre'
            variant='outlined'
            className='w-full'
            onChange={handleName}
          />
          <div className='mt-8 flex flex-row justify-center'>
            <Button
              className='!mr-4'
              onClick={decrement}
              variant='contained'
              disabled={disableButtonDecrement}
            >
              -
            </Button>
            <TextField
              id='nuber-of-tickets'
              label='Boletos'
              value={tickets}
              variant='outlined'
              type='number'
            />
            <Button className='!ml-4' onClick={incremet} variant='contained'>
              +
            </Button>
          </div>
          <div className='mt-8'>
            <Button
              onClick={handleOnSubmit}
              className='w-full'
              variant='contained'
              color='success'
            >
              Solicitar :)
            </Button>
          </div>
        </div>
      </div>
    </>
  );
};

GuestForm.defaultProps = {};

export default GuestForm;
