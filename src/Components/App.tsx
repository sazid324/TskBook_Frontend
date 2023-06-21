// Library imports
import React, { useState, useEffect } from "react";

// Component imports
import Header from "./Header";
import ListGroup from "./ListGroup";
import Copyright from "./Copyright";
import Button from "./Button";
import CardList from "./CardList";

// Component exports
export const addNewNoteContext: any = React.createContext(null);
export const cardArrayContext: any = React.createContext(null);

function App() {
  // Functions
  window.onresize = () => {
    setViewPort({
      viewPortWidth: window.innerWidth,
      viewPortHeight: window.innerHeight,
    });
  };

  // Hooks
  const [viewPort, setViewPort] = useState({
    viewPortWidth: window.innerWidth,
    viewPortHeight: window.innerHeight,
  });
  const [addNew, setAddNew] = useState(() => {
    const storedValue = localStorage.getItem("card-notes-in-local-storage");
    return storedValue ? JSON.parse(storedValue) : [];
  });
  const [query, setQuery] = useState("");

  useEffect(() => {
    // Effects on viewport change.
    for (let i = 0; i < cardArray.length; i++) {
      const threeDotMenuOfCard: any = document.getElementsByClassName(
        "three-dot-items-wraper-in-lower-part-OfCard"
      )[i];
      const themeMenuButtonOfCard: any = document.getElementsByClassName(
        "theme-items-wraper-in-lower-part-OfCard"
      )[i];
      const containerOfCardDistanceFromRight: any = document
        .getElementsByClassName("container-OfCard")
        [i].getBoundingClientRect().right;
      const containerOfCardDistanceFromBottom: any = document
        .getElementsByClassName("container-OfCard")
        [i].getBoundingClientRect().bottom;

      if (viewPort.viewPortWidth < containerOfCardDistanceFromRight + 95) {
        if (viewPort.viewPortHeight < containerOfCardDistanceFromBottom + 95) {
          threeDotMenuOfCard.style.cssText = "left: -142px; top: -113px";
          themeMenuButtonOfCard.style.cssText = "left: 11px; top: -117px";
        } else {
          threeDotMenuOfCard.style.cssText = "left: -142px; top: 11px";
          themeMenuButtonOfCard.style.cssText = "left: 11px; top: 11px";
        }
      } else {
        if (viewPort.viewPortHeight < containerOfCardDistanceFromBottom + 95) {
          threeDotMenuOfCard.style.cssText = "left: 11px; top: -113px";
          themeMenuButtonOfCard.style.cssText = "left: 11px; top: -117px";
        } else {
          threeDotMenuOfCard.style.cssText = "left: 11px; top: 11px";
          themeMenuButtonOfCard.style.cssText = "left: 11px; top: 11px";
        }
      }
    }
  }, [viewPort]);

  // Adding functionality of Add New button.
  const functionCalledByAddNewButton = () => {
    const addNewContainerOfCard: any = [
      ...addNew,
      {
        id: Date.now() + Math.floor(Math.random() * 78),
        headerValue: "",
        bodyValue: "",
        color: "#FFFFFF",
      },
    ];

    setAddNew(addNewContainerOfCard);
  };

  // Reverse array
  const newReversedArray = (addNewArray: any) => {
    const newArray: any = [];

    for (let i = addNew.length - 1; i >= 0; --i) {
      newArray.push(addNewArray[i]);
    }

    return newArray;
  };

  const cardArray: any = newReversedArray(addNew);

  /////////////////////// Return Method ///////////////////////

  return (
    <>
      <addNewNoteContext.Provider value={[addNew, setAddNew]}>
        <cardArrayContext.Provider value={cardArray}>
          <header>
            <Header setNewQuery={setQuery} />
          </header>
          <section id="main-body">
            <div className="main-container">
              <div className="left-part">
                <div className="left-part-container">
                  <div className="left-part-upper-section">
                    <Button
                      functionCallingOnBtnClick={functionCalledByAddNewButton}
                    >
                      Add New
                    </Button>
                    <ListGroup />
                  </div>
                  <div className="left-part-lower-section">
                    <Copyright />
                  </div>
                </div>
              </div>
              <div className="right-part">
                <div className="elements-container">
                  <CardList
                    cardArrayProp={cardArray.filter(
                      (items: any) =>
                        items.headerValue.toLowerCase().includes(query) ||
                        items.bodyValue.toLowerCase().includes(query)
                    )}
                  />
                </div>
              </div>
            </div>
          </section>
        </cardArrayContext.Provider>
      </addNewNoteContext.Provider>
    </>
  );
}

export default App;
