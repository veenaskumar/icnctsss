import React from "react";

export const WorkshopCards = ({ WorkshopData }) => {
  return (
    <div>
      {WorkshopData.map((item, index) => {
        return (
          <div className="join join-vertical w-full">
            <div className="collapse collapse-arrow join-item border-base-300 border">
              <input type="radio" name="my-accordion-4" defaultChecked />
              <div className="collapse-title lg:text-xl font-medium text-[12px]">
                {item.title}
              </div>
              <div className="collapse-content text-[10px] lg:text-bodyText">
                <p>{item.desc}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
};
