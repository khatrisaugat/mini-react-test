import React from "react";

type Props = {};

function Checkbox(Props: { checkAll?: boolean }) {
  return (
    <>
      {Props.checkAll ? (
        <input
          type="checkbox"
          className="checkbox"
          onChange={(e) =>
            document
              .querySelectorAll("input[type=checkbox]")
              .forEach((el: any) =>
                e.target.checked === true
                  ? (el.checked = true)
                  : (el.checked = false)
              )
          }
        />
      ) : (
        <input type="checkbox" className="checkbox" />
      )}
    </>
  );
}

export default Checkbox;
