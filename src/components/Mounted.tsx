"use client";
import React, { PropsWithChildren, useEffect, useState } from "react";

const Mounted = ({ children }: PropsWithChildren) => {
  const [mount, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mount) {
    return (
      <div className="h-screen flex justify-center items-center">
        <div className="loader"></div>
      </div>
    );
  }

  return <>{children}</>;
};

export default Mounted;
