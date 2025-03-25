export default function ButtonsList({ active, setActive }) {

  //logic here

  //return here
  return (
    <>
      <div className="d-flex my-5 gap-3">
        <button className="btn btn-primary" onClick={() => { setActive(1) }}>HTML</button>
        <button className="btn btn-primary" onClick={() => { setActive(2) }}>CSS</button>
        <button className="btn btn-primary" onClick={() => { setActive(3) }}>Javascript</button>
        <button className="btn btn-primary" onClick={() => { setActive(4) }}>Node.js</button>
        <button className="btn btn-primary" onClick={() => { setActive(5) }}>Express</button>
        <button className="btn btn-primary" onClick={() => { setActive(6) }}>ReactsJS</button>
      </div>
    </>
  );
}