import React from "react";

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";

const BreadCrumb = ({ breadCrumbData, children }) => {
  return (
    <>
      <Breadcrumb className="mb-5">
        <BreadcrumbList>
          {breadCrumbData.length > 0 &&
            breadCrumbData.map((data, index) => {
              return index !== breadCrumbData.length - 1 ? (
                <div key={index} className="flex items-center justify-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink href={data.href}>
                      {data.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator className="ms-2 mt-1" />
                </div>
              ) : (
                <div key={index} className="flex items-center justify-center">
                  <BreadcrumbItem>
                    <BreadcrumbLink className="font-bold" href={data.href}>
                      {data.label}
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                </div>
              );
            })}
        </BreadcrumbList>
      </Breadcrumb>
      <div>{children}</div>
    </>
  );
};

export default BreadCrumb;
