"use client";

import React, { useState } from "react";

const useDisclosure = () => {
  const [isOpen, setisOpen] = useState(false);
  const onClose = () => setisOpen(false);
  const onOpen = () => setisOpen(true);
  return { isOpen, onOpen, onClose };
};

export default useDisclosure;
