export default function Button({ active, element, setActive }) {

  //logic here
  function HandleClick(idToActivate) {
    setActive(idToActivate);
  }

  //return here
  return (
    <>
      <button className={`btn ${active === element.id ? "btn-warning" : "btn-primary"}`} onClick={() => {
        HandleClick(element.id);
      }}>{element.name}</button>
    </>
  );
}