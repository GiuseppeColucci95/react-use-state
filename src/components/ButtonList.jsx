export default function ButtonsList({ active, setActive, array }) {

  //logic here
  function HandleClick(idToActivate) {
    setActive(idToActivate);
  }

  //return here
  return (
    <>
      <div className="d-flex my-5 gap-3">

        {
          array.map(element =>
            <button key={`button-${element.id}`} className={`btn ${active === element.id ? "btn-warning" : "btn-primary"}`} onClick={() => {
              HandleClick(element.id);
            }}>{element.name}</button>
          )
        }

      </div>
    </>
  );
}