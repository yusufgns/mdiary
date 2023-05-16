import React, { MouseEventHandler } from "react";
import CreateComponent from "./CreateComponent";
import {createClient} from '@/utils/supabase/supabase-server'
interface CreateType {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  data: any
}

const CreateContent: React.FC<CreateType> = ({ onClick, data }: CreateType) => {
  return (
    <>
      <div className="
          flex 
          flex-col
          w-[576px] 
          max-w-[576px]
        ">
        <CreateComponent data={data}></CreateComponent>
        <button onClick={onClick}>CREATE</button>
      </div>
    </>
  );
};

export default CreateContent;