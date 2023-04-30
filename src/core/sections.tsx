import Button from "@/core/components/button";

const Sections = () => {
  return (
    <div className='flex flex-col sm:mb-8 md:flex-row md:mb-1 p-4'>
      <div className='basis-1/2 flex flex-col justify-center items-center px-8'>
        <p className='text-center'>
          Ayudanos a saber cuantos seremos en esté día tan especial para
          nosotros, por favor llena el siguiente formulario 🥺
        </p>
        <Button className='btn-form mt-8'>
          <div className='btn-content p-2'>
            <h2 className='btn-text'>Llenar formulario</h2>
          </div>
        </Button>
      </div>
      <div className='basis-1/2 flex flex-col mt-8 md:mt-0 justify-center items-center px-8'>
        <p className='text-center'>
          ¡O no! 😨 el novio es muy despistado y se a perdido antes de llegar al
          altar de la boda
          <br />
          <b>
            😱 ¡Ayudalo a regresar antes de que la novia recapacite su deciciòn!
            😱
          </b>
        </p>
        <Button className='btn-game mt-8'>
          <div className='btn-content p-2'>
            <h2 className='btn-text'>Jugar</h2>
          </div>
        </Button>
      </div>
    </div>
  );
};

export default Sections;
