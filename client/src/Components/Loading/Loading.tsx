import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSpinner } from '@fortawesome/free-solid-svg-icons'


const Loading: React.FC  = ({
}) => {


  return (
    <div className="flex flex-col justify-center pb-28 items-center h-screen md:h-0 md:justify-start md:mt-24">
    <FontAwesomeIcon icon={faSpinner} size="3x" className="animate-spin" color="#dc2626"/>
    <div className="text-2xl mt-4">Loading...</div>
        
    </div>
  );
};

export default Loading;
