export default function Card({ props }) {

  //logic here

  //return here
  return (
    <>
      <div className="card p-3">
        <h2>{props[0].name}</h2>
        <p>{props[0].description}</p>
      </div>
    </>
  );
}