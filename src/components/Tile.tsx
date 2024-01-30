import React, { useState } from "react";
import { dragDrop, dragEnd, dragStart, dragOver } from "../store";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import './tile.css';
import debounce from 'lodash/debounce';


function Tile({ candy, candyId }:
  {
    candy: string;
    candyId: number
  }) {

  const [initialSquare, setInitialSquare] = useState(0);
  const [draggedOverSquare, setDraggedOverSquare] = useState<EventTarget | null>(null);
  const [isBeingDragged, setIsBeingDragged] = useState(false);
  const [glowingElements, setGlowingElements] = useState<HTMLImageElement[]>([]);


  const squareBeingDragged = useAppSelector((state) => state.candyCrush.squareBeingDragged);
  const squareBeingDraggedOver = useAppSelector((state) => state.candyCrush.squareBeingDraggedOver);

  const dispatch = useAppDispatch();

  // user initializes dragging a crypto candy event
  const handleMouseDragStart = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsBeingDragged(true);
    const target = e.target as HTMLImageElement;
    const candyId = parseInt(target.getAttribute('candy-id') || '0', 10);
    target.style.boxShadow = "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff";
    target.style.transform = "scale(1.3)"; // Grow the size by 10%
    setInitialSquare(candyId);
    dispatch(dragStart(e.target));

  };

  // when user drags the initial crypto candy over another one on the board event
  const handleMouseDragOver = (e: React.MouseEvent<HTMLImageElement>) => {
    setIsBeingDragged(true);
    e.preventDefault();
    const target = e.target as HTMLImageElement;
    const candyId = parseInt(target.getAttribute('candy-id') || '0', 10);

    const squareBeingDraggedInitialPosition = (squareBeingDragged as any).getAttribute('candy-id');

    const positionsX = (squareBeingDraggedOver as any)?.positionX;
    const positionsY = (squareBeingDraggedOver as any)?.positionY;
    const squareBeingDraggedOverPosition = positionsY * 8 + positionsX;

    // Apply glow effect only to the dragged image
    // Check for adjacency in all directions (including diagonals)
    // Check for adjacency in all directions (including diagonals)
    if (
      Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 1 || // check horizontal adjacency
      Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 8 || // Check for vertical adjacency
      (Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 7) || // Check for diagonal adjacency (top-left/bottom-right)
      (Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 9) // Check for diagonal adjacency (top-right/bottom-left)

    ) {
      if (squareBeingDraggedOverPosition !== squareBeingDraggedInitialPosition) {
        target.style.boxShadow = isBeingDragged ? "0 0 10px #ffffe0, 0 0 20px #ffffe0, 0 0 30px #ffffe0, 0 0 40px #ffffe0" : ''; // Apply glow effect
      } else {
        target.style.boxShadow = "";
      }
    }

    else if (candyId !== initialSquare) {
      target.style.boxShadow = ""; // Remove glow effect if not adjacent
      target.style.transform = ""; // Reset size
    } else {
      target.style.boxShadow = "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff";
    }
    // setDraggedOverSquare(draggedOverImage)
    // console.log(draggedOverSquare)
    dispatch(dragOver({ positionX: candyId % 8, positionY: Math.floor(candyId / 8) }));
    setDraggedOverSquare(target);
  };

  // when the user releases the dragged element 
  const handleMouseDragEnd = (e: React.DragEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.boxShadow = ""; // Remove the box shadow
    target.style.transform = ""; // Reset the size
    setInitialSquare(0); // Reset initial square
    dispatch(dragEnd());
    setIsBeingDragged(false); // Set isBeingDragged to false when the drag operation ends
  };

  // when the user drops the dragged element onto an invalid move
  const handleMouseDragLeave = (e: React.DragEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    const candyId = parseInt(target.getAttribute('candy-id') || '0', 10);

    if (draggedOverSquare instanceof HTMLImageElement) {
      (draggedOverSquare as HTMLImageElement).style.boxShadow = " "; // Remove the glow effect from the dragged over square
    }

    if (candyId !== initialSquare) {
      // Only remove the glow effect if it's not the initial square
      target.style.boxShadow = "";
      target.style.transform = "";
    }
    dispatch(dragEnd());
    setIsBeingDragged(false); // Set isBeingDragged to false when the drag operation ends

  };

  // when user drops onto another valid tile
  const handleMouseDrop = (e: React.DragEvent<HTMLImageElement>) => {
    const target = e.target as HTMLImageElement;
    target.style.boxShadow = "";
    dispatch(dragDrop(e.target))
    console.log(e.target)
  }

  // mouse

  const handleTouchStart = (e: React.TouchEvent<HTMLImageElement>) => {

    setIsBeingDragged(true);
    const touch = e.changedTouches[0]; // Get the first touch point
    const target = document.elementFromPoint(touch.clientX, touch.clientY); // Get the element under the touch

    if (target instanceof HTMLImageElement) { // Ensure it's an image element

      const candyId = parseInt(target.getAttribute('candy-id') || '0', 10);
      target.style.boxShadow = "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff";
      target.style.transform = "scale(1.3)"; // Grow the size by 10%
      setInitialSquare(candyId);
      dispatch(dragStart(target));
    }
  };

  // find a way to keep track of all previous glowing ones and make it so no more than one at a time
  // if more than one remove the previous one 

  const handleDebouncedTouchMove = debounce((e) => {
    // Your touch move handling logic goes here
  }, 100); // Adjust the debounce delay as needed
  

  const handleTouchMove = (e: React.TouchEvent<HTMLImageElement>) => {
    handleDebouncedTouchMove(e); // Invoke the debounced touch move handler

    const touch = e.changedTouches[0]; // Get the first touch point
    const target = document.elementFromPoint(touch.clientX, touch.clientY); // Get the element under the touch

    if (target instanceof HTMLImageElement) { // Ensure it's an image element
      const candyId = parseInt(target.getAttribute('candy-id') || '0', 10);

      const squareBeingDraggedInitialPosition = (squareBeingDragged as any).getAttribute('candy-id');

      const positionsX = (squareBeingDraggedOver as any)?.positionX;
      const positionsY = (squareBeingDraggedOver as any)?.positionY;
      const squareBeingDraggedOverPosition = positionsY * 8 + positionsX;


      // Apply glow effect only to the dragged image
      // Check for adjacency in all directions (including diagonals)
      // Check for adjacency in all directions (including diagonals)
      if (
        Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 1 || // check horizontal adjacency
        Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 8 || // Check for vertical adjacency
        (Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 7) || // Check for diagonal adjacency (top-left/bottom-right)
        (Math.abs(squareBeingDraggedInitialPosition - squareBeingDraggedOverPosition) === 9) // Check for diagonal adjacency (top-right/bottom-left)

      ) {

        if (!glowingElements.some((element) => parseInt(element.getAttribute('candy-id') || '0', 10) === candyId
        )) {
          // Add the target element only if its candy-id doesn't exist in the array
          if(target !== squareBeingDragged) {
          setGlowingElements((prevElements) => [...prevElements, target]);
          console.log('glowing array: ',glowingElements);
          }
        }

        if (glowingElements.length > 1) {

          if (squareBeingDraggedOverPosition !== squareBeingDraggedInitialPosition) {

            const updatedElements = glowingElements.slice(1); // Remove the first element
            glowingElements[0].style.boxShadow = ''; // Remove glow effect from the last element
            setGlowingElements(updatedElements);
          }

        }

        if (squareBeingDraggedOverPosition !== squareBeingDraggedInitialPosition
          && (target !== squareBeingDragged)
          ) {
          target.style.boxShadow = isBeingDragged ? "0 0 10px #ffffe0, 0 0 20px #ffffe0, 0 0 30px #ffffe0, 0 0 40px #ffffe0" : ''; // Apply glow effect

        }
        if (!isBeingDragged) {
          target.style.boxShadow = '';
        }

        if (target === squareBeingDragged) {
          glowingElements[0].style.boxShadow = '';
        }

      }

      else if (candyId !== initialSquare) {
        target.style.boxShadow = ""; // Remove glow effect if not adjacent
        target.style.transform = ""; // Reset size
      } else {
        target.style.boxShadow = "0 0 10px #00ffff, 0 0 20px #00ffff, 0 0 30px #00ffff, 0 0 40px #00ffff";
      }

      dispatch(dragOver({ positionX: candyId % 8, positionY: Math.floor(candyId / 8) }));
      setDraggedOverSquare(target);
    }
  };

  const handlePointerLeave = (e: React.PointerEvent<HTMLImageElement>) => {
    e.preventDefault(); // Prevent default touch behavior
    const target = e.target as HTMLImageElement;
    target.style.boxShadow = ""; // Remove the box shadow
    target.style.transform = ""; // Grow the size by 10%    console.log('it works', isBeingDragged)      dispatch(dragDrop(touchTarget));
    glowingElements[0].style.boxShadow = ""; // Remove the box shadow
    glowingElements[0].style.transform = ""; // Grow the size by 10%
    dispatch(dragEnd());
    setIsBeingDragged(false);
  }


  const handleTouchEnd = (e: React.TouchEvent<HTMLImageElement>) => {
    e.preventDefault(); // Prevent default touch behavior
    const touch = e.changedTouches[0]; // Get the first touch point
    const target = document.elementFromPoint(touch.clientX, touch.clientY); // Get the element under the touch

    if (target instanceof HTMLImageElement) { // Ensure it's an image element

      target.style.boxShadow = ""; // Remove the box shadow
      target.style.transform = ""; // Grow the size by 10%    console.log('it works', isBeingDragged)

      const touchTarget = document.elementFromPoint(e.changedTouches[0].clientX, e.changedTouches[0].clientY);
      if (touchTarget) {
        target.style.boxShadow = ""; // Remove the box shadow
        target.style.transform = ""; // Grow the size by 10%    console.log('it works', isBeingDragged)      dispatch(dragDrop(touchTarget));
        dispatch(dragDrop(touchTarget));
        setIsBeingDragged(false);
      }

        (squareBeingDragged as any).style.boxShadow = '';
        (squareBeingDragged as any).style.transform = '';

        glowingElements[0].style.boxShadow = ""; // Remove the box shadow
        glowingElements[0].style.transform = ""; // Grow the size by 10%
      console.log(squareBeingDragged)
      dispatch(dragEnd());
      setIsBeingDragged(false);
    }

  };

  return (
    <div
      className={`tile-padding md:w-16 md:h-16 lg:w-20 lg:h-20 sm:w-14 sm:h-14 flex justify-center items-center m-0.5 rounded-lg select-none ${isBeingDragged ? 'is-being-dragged' : ''}`}
      style={{
        boxShadow: "inset 5px 5px 15px #062525, inset -5px -5px 15px #aaaab7bb",
        width: "calc(100% / 8 - 1rem)", // Adjust the width to fit 8 tiles in a row
      }}
    >
      {candy && (
        <img
          src={candy}
          alt=""
          className={`md:w-17 md:h-17 lg:w-19 lg:h-19 sm:w-12 sm:h-12 p-1`}
          draggable={true}

          onDragStart={handleMouseDragStart}
          onDragOver={handleMouseDragOver}
          onDragLeave={handleMouseDragLeave}
          onDrop={handleMouseDrop}
          onDragEnd={handleMouseDragEnd}

          onPointerLeave={handlePointerLeave}

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
