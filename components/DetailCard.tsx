"use client"

import React from "react";

import {Card, CardHeader, CardBody, Image} from '@nextui-org/react'
import Link from "next/link";

interface Props{
  image: string;
  title:string;
  description:string;
  downloadLink:string;
}
export default function DetailCard({image,title,description,downloadLink}:Props) {

  return (
    <Card className="flex flex-col justify-center items-center ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
        <p className="mb-4 text-tiny uppercase font-bold text-white-800">{title}</p>
        <small className="text-default-500 text-white-500">{description}</small>
        <Link  href={downloadLink} download className='mt-4 gradient_blue-purple px-8 py-4 rounded-3xl text-white'>
            Download
        </Link>
      </CardHeader>
      <CardBody className="overflow-visible py-2 mt-4 flex justify-center items-center">
        <Image
          alt="Card background"
          className="object-cover rounded-3xl"
          src={image}
          width={270}
        />
      </CardBody>
    </Card>
  );
}
