"use client";

import React from "react";
import { FooterNavigation } from "./FooterNavigation";

import type { SettingsDocumentData } from "@/prismicio-types";

type NavClientWrapperProps = {
  navItems: SettingsDocumentData["navigation_link"];
};

export const NavClientWrapper: React.FC<NavClientWrapperProps> = ({
  navItems,
}) => {
  return <FooterNavigation navItems={navItems} />;
};
