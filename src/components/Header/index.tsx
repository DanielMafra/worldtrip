import { Flex } from "@chakra-ui/react";
import Image from "next/image";
import Link from 'next/link';
import { ArrowBackIcon } from '@chakra-ui/icons';

export function Header({ back = false }) {
  return (
    <Flex as="header" align="center" justify={back ? "space-between" : "center"} padding="7">
      {back && <Link href="/"><a><ArrowBackIcon /></a></Link>}
      <Image src="/assets/logo.svg" alt="logo" width="185" height="46" />
      {back ? <div /> : null}
    </Flex>
  )
}