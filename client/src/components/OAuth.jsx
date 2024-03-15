import { Button } from "@mantine/core";
import React from "react";

const OAuth = ({ title, Logo }) => {
  return (
    <Button
      justify="space-between"
      fullWidth
      leftSection={Logo}
      rightSection={<span />}
      variant="default"
    >
      <span>{title}</span>
    </Button>
  );
};

export default OAuth;
