import { useDispatch } from "react-redux";
import { addSeat } from "../redux/bookingSlice";

const SeatInfo = (props) => {
  //   console.log(props);
  const dispatch = useDispatch();

  return (
    <div className="seat_info">
      {props.danhSachGhe.map((item, index) => {
        // console.log(item);
        // console.log(item.danhSachGhe);

        return (
          <div className="grid grid-cols-12 space-y-5 mx-16">
            <div className="row_name col-span-1 h-100 flex justify-center items-end font-extrabold text-yellow-300">
              {item.hang}
            </div>

            <div className="col-span-11">
              <div className="grid grid-cols-12">
                {item.danhSachGhe.map((item1, index1) => {
                  return (
                    <button
                      onClick={() => {
                        dispatch(addSeat(item1));
                      }}
                    >
                      {item1.soGhe}
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SeatInfo;
