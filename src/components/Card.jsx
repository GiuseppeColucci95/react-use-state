export default function Card({ active, array }) {

  //logic here

  //return here
  return (
    <>
      <div className="card p-3">
        <h2>{array[active - 1].name}</h2>
        <p>{array[active - 1].description}</p>
      </div>
    </>
  );
}