import React from "react";

const Menu = () => {
  const ListMenu = [
    {
      name: "Friend",
    },
    {
      name: "Marketplace",
    },
    {
      name: "Watch",
    },
    {
      name: "Trang",
    },
    {
      name: "Bang Feed",
    },
    {
      name: "Nhom",
    },
    {
      name: "Ky Niem",
    },
    {
      name: "Events",
    },
  ];
  return (
    <>
      {ListMenu.map((item, index) => {
        return <li key={index}>{item.name}</li>;
      })}
    </>
  );
};

export default Menu;
