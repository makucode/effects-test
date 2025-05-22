"use client";

import React from "react";

import useLenisScroll from "@/hooks/useLenisScroll";

const SmoothScrollProvider = ({ children }: { children: React.ReactNode }) => {
    useLenisScroll();

    return <>{children}</>;
};

export default SmoothScrollProvider;
