export default function MessageBar() {
  return (
    <div className=" bottom-0 left-0 right-0 fixed">
      <form className="flex flex-row w-full bg-gray-700">
        <input
          type="text"
          className=" text-sm rounded-lg outline-none w-full p-2.5 bg-gray-700 placeholder-gray-400 text-white inline"
          placeholder="Type a message..."
          required
        />
        <button className="px-2 py-1 text-slate-200 inline">Send</button>
      </form>
    </div>
  );
}
