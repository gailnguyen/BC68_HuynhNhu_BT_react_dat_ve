import BookingArea from "./components/BookingArea";

function App() {
  return (
    <>
      <div className="bg_overlay fixed inset-0 py-10 w-screen h-screen">
        <BookingArea />
      </div>
    </>
  );
}

export default App;
