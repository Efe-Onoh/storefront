import React, { useState } from "react";
import { DatePicker } from "@mui/x-date-pickers";

export default function Date({customClass}) {
    const [value, setValue] = React.useState(null);
  
    return (
          <DatePicker className={`date ${customClass}`} value={`Date Issued - ${value}`} onChange={(newValue) => setValue(newValue)} />
    );
  }