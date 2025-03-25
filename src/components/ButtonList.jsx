import Button from './Button';

export default function ButtonsList({ active, setActive, array }) {

  //logic here

  //return here
  return (
    <>
      <div className="d-flex my-5 gap-3">

        {
          array.map(element =>
            <Button key={`button-${element.id}`} active={active} setActive={setActive} element={element}></Button>
          )
        }

      </div>
    </>
  );
}