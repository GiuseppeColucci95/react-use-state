export default function Button({ active, element, setActive }) {

  //logic here
  function HandleClick() {
    setActive(element.id);
  }

  //return here
  return (
    <>
      <button className={`btn ${active === element.id ? "btn-warning" : "btn-primary"}`} onClick={HandleClick}>{element.name}</button>
    </>
  );
}