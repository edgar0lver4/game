import Button from "@/core/components/button";

type Props = {
  onClickConfirm?: any;
  onClickPlay?: any;
};

const Sections = ({ onClickConfirm, onClickPlay }: Props) => {
  return (
    <div className='flex flex-col sm:mb-8 md:flex-row md:mb-1 p-4'>
      <div className='basis-1/2 flex flex-col justify-center items-center px-8'>
        <p className='text-center'>
          Ayudanos a saber cuantos seremos en esté día tan especial para
          nosotros, por favor llena el siguiente formulario 🥺
        </p>
        <Button className='btn-form mt-8' onClick={onClickConfirm}>
          <div className='btn-content p-2'>
            <h2 className='btn-text'>Confirmar asistencia</h2>
          </div>
        </Button>
      </div>
      <div className='basis-1/2 flex flex-col mt-8 md:mt-0 justify-center items-center px-8'>
        <p className='text-center'>
          ¡Oh no! &#128552; El novio es muy despistado y se a perdido antes de
          llegar al altar de la boda
          <br />
          <b>
            &#128561; ¡Ayudalo a regresar antes de que la novia recapacite su
            decisión! &#128561;
          </b>
        </p>
        <Button className='btn-game mt-8' onClick={onClickPlay}>
          <div className='btn-content p-2'>
            <h2 className='btn-text'>Jugar</h2>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Sections;
