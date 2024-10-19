"use client";
import React from "react";
import { 
  FaLinkedin,
  FaSquareGithub 
} from "react-icons/fa6";

import { Dock, DockIcon } from "@/components/ui/dock";
import Link from "next/link";

const ContactInfo = () => {
  return (
    <Dock direction="middle">
      <DockIcon>
        <Link 
          href="https://www.linkedin.com/in/chairat-chaikong-6583622a7/"
          target="_blank"
        >
          <FaLinkedin />
        </Link>
      </DockIcon>
      <DockIcon>
        <Link 
          href="https://github.com/themadman159"
          target="_blank"
        >
          <FaSquareGithub />
        </Link>
      </DockIcon>
    </Dock>
  )
}

export {
  ContactInfo,
}
