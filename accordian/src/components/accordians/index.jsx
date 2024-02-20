import { useState } from "react";
import data from "./data";
import "./styles.css";

export default function Accordian() {
  const [selected, setSelected] = useState(null);
  const [enableMulti, setEnableMulti] = useState(false);
  const [multiple, setMultiple] = useState([]);

  const handleSingle = (getCurrentid) => {
    setSelected(getCurrentid === selected ? null : getCurrentid);
  };

  const handleMultiSelection = (getCurrentid) => {
    let copyMultiple = [...multiple];
    const findCurrentIndexOfiD = copyMultiple.indexOf(getCurrentid);
    console.log(findCurrentIndexOfiD);
    if (findCurrentIndexOfiD === -1) copyMultiple.push(getCurrentid);
    else copyMultiple.splice(findCurrentIndexOfiD, 1);
    setMultiple(copyMultiple);
  };
  console.log(selected, multiple);

  return (
    <>
      <div className="wrapper">
        <button onClick={() => setEnableMulti(!enableMulti)}>
          Multi Selection click Button
        </button>
        <div className="accordian">
          {data && data.length > 0 ? (
            data.map((dataItem) => (
              <div className="item">
                <div
                  onClick={
                    enableMulti
                      ? () => handleMultiSelection(dataItem.id)
                      : () => handleSingle(dataItem.id)
                  }
                  className="title"
                >
                  <h3>{dataItem.question}</h3>
                  <span>+</span>
                </div>
                {enableMulti
                  ? multiple.indexOf(dataItem.id) !== -1 && (
                      <div className="content">{dataItem.answer}</div>
                    )
                  : selected === dataItem.id && (
                      <div className="content">{dataItem.answer}</div>
                    )}

                {/*   {selected === dataItem.id || multiple.indexOf(dataItem.id) !=== -1 ? (
                  <div className="content">{dataItem.answer}</div>
                ) : null}*/}
              </div>
            ))
          ) : (
            <div>No data found</div>
          )}
        </div>
      </div>
    </>
  );
}
