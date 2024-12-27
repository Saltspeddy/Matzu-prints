export default function Itemcard() {
  return (
    <div className="relative w-[300px] h-[420px] border-2 border-solid p-4 rounded-xl flex flex-col items-center">
      <div className="w-[250px] h-[250px] bg-black"></div>
      <p>Item name</p>
      <div className=" absolute bottom-3 right-3"> 10.99</div>
    </div>
  );
}
