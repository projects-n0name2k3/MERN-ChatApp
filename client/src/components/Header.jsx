import {
  ActionIcon,
  AppShell,
  Burger,
  Group,
  useComputedColorScheme,
  useMantineColorScheme,
} from "@mantine/core";
import { useDisclosure, useHeadroom } from "@mantine/hooks";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { IoMoonOutline, IoSunnyOutline } from "react-icons/io5";
import Logo from "../../public/assets/Logo";
const Header = () => {
  const [opened, { toggle }] = useDisclosure();
  const { setColorScheme } = useMantineColorScheme({ keepTransitions: true });
  const computedColorScheme = useComputedColorScheme("light", {
    getInitialValueInEffect: true,
  });
  const colorScheme = useComputedColorScheme();
  return (
    <AppShell header={{ height: 60 }}>
      <AppShell.Header className=" flex justify-between items-center">
        <Group h="100%" px="lg">
          <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm" />
          <Link to={"/"}>
            <Logo />
          </Link>
        </Group>
        <Group px="lg">
          <ActionIcon
            size={32}
            variant="default"
            aria-label="ActionIcon with size as a number"
            onClick={() =>
              setColorScheme(computedColorScheme === "light" ? "dark" : "light")
            }
          >
            {colorScheme === "light" ? (
              <IoSunnyOutline size={20} />
            ) : (
              <IoMoonOutline size={20} />
            )}
          </ActionIcon>
        </Group>
      </AppShell.Header>
    </AppShell>
  );
};

export default Header;
