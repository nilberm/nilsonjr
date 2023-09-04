"use client";

import React from "react";
import heroImg from "@/assets/hero.jpeg";
import Image from "next/image";
import { styled } from "styled-components";

interface HeroImgProps {}

const HeaderContainer = styled.header`
  background-color: rgb(8 47 73 / var(--tw-bg-opacity));
  background-position: center center;
  width: 100%;

  img {
    min-height: 400px;
    width: 100%;
    object-fit: cover;
  }
`;

export default function HeroImg(props: HeroImgProps) {
  return (
    <HeaderContainer>
      <Image
        src={heroImg}
        alt="capa do site de Nilson Júnior tocando"
        width={400}
        height={400}
      />
    </HeaderContainer>
  );
}
