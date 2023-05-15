import React, { MouseEventHandler } from "react";

interface CreateType {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const CreateContent: React.FC<CreateType> = ({ onClick }) => {
  return (
    <>
      <button onClick={onClick}>CREATE</button>
    </>
  );
};

export default CreateContent;