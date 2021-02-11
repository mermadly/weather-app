import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faExclamationTriangle } from '@fortawesome/free-solid-svg-icons'


type Props = {
    error: string
}

const Error: React.FC<Props> = ({ 
    error
  }) =>  {


  return (
    <div className="flex flex-col justify-center pb-28 items-center h-screen md:h-0 md:justify-start md:mt-24">
    <FontAwesomeIcon icon={faExclamationTriangle} size="3x" color="#dc2626"/>
    <div className="text-2xl mt-4 text-center">Failed to get weather info.</div>
    <div className="text-2xl mt-4 text-center">Please try again.</div>
    </div>
  );
};

export default Error;
