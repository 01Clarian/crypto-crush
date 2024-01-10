import { dragDrop, dragEnd, dragStart } from "../store";
import { useAppDispatch } from "../store/hooks";

function Tile({ candy, candyId }: { candy: string; candyId: number }) {
  const dispatch = useAppDispatch();

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {
    dispatch(dragStart(e.target));
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    // Add touch move logic if needed
  };

  const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
    e.preventDefault(); // Prevent default touch behavior
    const touchTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
    if (touchTarget) {
      dispatch(dragDrop(touchTarget));
    }
    dispatch(dragEnd());
  };

  return (
    <div
    className="md:w-16  md:h-16 sm:w-10 sm:h-16 lg:w-22 lg:h-22 flex justify-center items-center m-0.5 rounded-lg select-none"
    style={{
      boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb",
      width: "calc(100% / 8 - 1rem)", // Adjust the width to fit 8 tiles in a row
      margin: "0.5rem", // Add some margin between tiles
      padding: "0.3rem", // Add padding to the container

    }}
  >
      {candy && (
        <img
          src={candy}
          alt=""
          className="sm:w-14 sm:h-14 md:w-17 md:h-17 lg:w-19 lg:h-19 p-1"
          draggable={true}
          onDragStart={(e) => dispatch(dragStart(e.target))}
          onDragOver={(e) => e.preventDefault()}
          onDragEnter={(e) => e.preventDefault()}
          onDragLeave={(e) => e.preventDefault()}
          onDrop={(e) => dispatch(dragDrop(e.target))}
          onDragEnd={() => dispatch(dragEnd())}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
          candy-id={candyId}
        />
      )}
    </div>
  );
}

export default Tile;
