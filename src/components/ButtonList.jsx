export default function ButtonsList() {

  //logic here

  //return here
  return (
    <>
      <div className="d-flex my-5 gap-3">
        <button className="btn btn-primary" onClick={() => {
          console.log("Ci ho cliccato!");
        }}>HTML</button>
        <button className="btn btn-primary">CSS</button>
        <button className="btn btn-primary">Javascript</button>
        <button className="btn btn-primary">Node.js</button>
        <button className="btn btn-primary">Express</button>
        <button className="btn btn-primary">ReactsJS</button>
      </div>
    </>
  );
}