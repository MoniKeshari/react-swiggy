import React from "react";

const CustomTextarea = (props) => {
  const { className, label, labelclassname } = props;
  return(
    <div>
           {label && (<label className={labelclassname}>{label}</label>)}

     <textarea {...props} className={className} />
    </div>

  )
};

export default CustomTextarea;
