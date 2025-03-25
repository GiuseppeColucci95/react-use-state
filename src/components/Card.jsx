export default function Card({ active, array }) {

  //logic here

  //return here
  return (
    <>
      <div className="card p-3">
        <h2>{active === 0 ? "No languages selected!" : array[active - 1].name}</h2>
        <p>{active === 0 ? "To select a language please click one of buttons above!" : array[active - 1].description}</p>
      </div>
    </>
  );
}