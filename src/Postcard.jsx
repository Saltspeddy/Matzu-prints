export default function Postcard(prop) {
  function showContents() {
    const element = document.getElementById(prop.id);
    element.classList.remove("translate-y-full");
    console.log(3);
  }
  function hideContents() {
    let element = document.getElementById(prop.id);
    element.classList.add("translate-y-full");
    console.log(4);
  }

  return (
    <div
      onMouseOver={showContents}
      onMouseLeave={hideContents}
      className="relative h-fit w-full overflow-hidden rounded-xl flex flex-col items-center"
    >
      <img src={prop.url} alt="no visible image" />
      <div
        id={prop.id}
        className="absolute backdrop-blur-md translate-y-full flex flex-col justify-center items-center  h-full w-full duration-500"
      >
        <h2 className="font-roboto text-2xl">{prop.name}</h2>
        <div className="bottom-3 right-3"> @{prop.creator}</div>
      </div>
    </div>
  );
}
