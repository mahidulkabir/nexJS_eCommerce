
import { NextResponse } from "next/server";
export const response = (success, statusCode, message, data = {}) => {
  return NextResponse.json({
    success,
    statusCode,
    message,
    data,
  });
};

export const catchError = (error, customMessage) => {
  // duplicate key error
  if (error.code === 11000) {
    const keys = Object.keys(error.keyPattern).join(",");
    error.message = `Duplicate fields: ${keys}. These fields value must be unique`;
  }

  if (process.env.NODE_ENV === "development") {
    return response(
      false,
      error.code || 500,
      error.message,
      error
    );
  }

  return response(
    false,
    error.code || 500,
    customMessage || "Internal Server Error"
  );
};


export const generateOTP = ()=>{
    const otp = Math.floor(100000 + Math.random() * 900000).toString()
    return otp
}



export const columnConfig = (column, isCreatedAt=false, isUpdatedAt= false, isDeletedAt= false) =>{
  const newColumn = [...column]

  if(isCreatedAt){
    newColumn.push({
      accessorKey:'createdAt',
      header:'Created At',
      Cell: ({renderedCellValue})=>(new Date(renderedCellValue).toLocaleString())
    })
  }
  if(isUpdatedAt){
    newColumn.push({
      accessorKey:'updatedAt',
      header:'Updated At',
      Cell: ({renderedCellValue})=>(new Date(renderedCellValue).toLocaleString())
    })
  }
  if(isDeletedAt){
    newColumn.push({
      accessorKey:'deletedAt',
      header:'Deleted At',
      Cell: ({renderedCellValue})=>(new Date(renderedCellValue).toLocaleString())
    })
  }

  return newColumn 
}