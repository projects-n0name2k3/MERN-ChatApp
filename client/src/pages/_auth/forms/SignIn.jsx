import {
  Box,
  Button,
  Divider,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { useForm } from "@mantine/form";
import React from "react";
import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";
import OAuth from "../../../components/OAuth";
import { FaGithub } from "react-icons/fa";
import usePageTitle from "../../../hooks/useTitle";

const SignIn = ({ title }) => {
  usePageTitle(title);
  const form = useForm({
    initialValues: {
      emailorusername: "",
      password: "",
    },
  });
  return (
    <>
      <Box w={440} p={24} className="border rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold my-3">Sign In</h1>
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          className="space-y-4"
        >
          <TextInput
            withAsterisk
            label="Email or Username"
            placeholder="your@email.com or your username"
            {...form.getInputProps("emailorusername")}
          />

          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="Enter your Password"
            {...form.getInputProps("password")}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" fullWidth>
              Sign In
            </Button>
          </Group>
        </form>
        <p className="text-sm text-center mt-4">
          {"Don't"} have an account?{" "}
          <Link to={"/signup"} className="text-blue-500">
            Signup
          </Link>
        </p>
        <Divider my={10} label="Or" labelPosition="center" />

        <div className=" space-y-3">
          <OAuth title="Sign in with Google" Logo={<FcGoogle />} />
          <OAuth title="Sign in with Github" Logo={<FaGithub />} />
        </div>
      </Box>
    </>
  );
};

export default SignIn;
