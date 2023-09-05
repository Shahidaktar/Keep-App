import React, { useState } from "react";
import Mynote from "./Mynote";
import Note from "./Note";
import Header from "./Header";
import Footer from "./Footer";
const Keep = () => {
  const [notes, setNotes] = useState([]);

  const addEvent = (note) => {
    setNotes((pre) => {
      return [...pre, note];
    });
  };
  const deleteitem = (id) => {
    setNotes((pre) => {
      return pre.filter((val, index) => {
        return index !== id;
      });
    });
  };
  return (
    <>
      <Header />
      <Mynote onClickw={addEvent} />
      <div className="grid grid-cols-6 gap-1 justify-evenly">
        {notes.map((val, index) => {
          return (
            <Note
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              setitem={deleteitem}
            />
          );
        })}
      </div>
      <Footer />
    </>
  );
};

export default Keep;
