import {
  Box,
  Button,
  Checkbox,
  Divider,
  Group,
  PasswordInput,
  TextInput,
} from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import React from "react";
import { Link } from "react-router-dom";
import OAuth from "../../../components/OAuth";
import { FcGoogle } from "react-icons/fc";
import { FaGithub } from "react-icons/fa";
import usePageTitle from "../../../hooks/useTitle";

const SignUp = ({ title }) => {
  usePageTitle(title);

  const form = useForm({
    initialValues: {
      email: "",
      name: "",
      username: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: isEmail("Invalid email"),
      name: (value) =>
        /^[^\d!@#$%^&*()_+=[\]{};:'|,.<>/?`~]*\s[^\d!@#$%^&*()_+=[\]{};:'|,.<>/?`~]*$/.test(
          value
        )
          ? null
          : "Invalid name",
      username: hasLength(
        { min: 6 },
        "Username must be atleast 6 characters long"
      ),
      password: hasLength(
        { min: 6 },
        "Password must be atleast 6 characters long"
      ),
    },
  });
  return (
    <>
      <Box w={440} p={24} className="border rounded-lg shadow-md">
        <h1 className="text-center text-2xl font-bold my-3">Sign Up</h1>
        <form
          onSubmit={form.onSubmit((values) => console.log(values))}
          className="space-y-4"
        >
          <TextInput
            withAsterisk
            label="Email"
            placeholder="your@email.com"
            {...form.getInputProps("email")}
          />

          <TextInput
            withAsterisk
            label="Fullname"
            placeholder="Enter your Fullname"
            {...form.getInputProps("name")}
          />
          <TextInput
            withAsterisk
            label="Username"
            placeholder="Enter your Username"
            {...form.getInputProps("username")}
          />
          <PasswordInput
            withAsterisk
            label="Password"
            placeholder="Enter your Password"
            {...form.getInputProps("password")}
          />

          <Checkbox
            mt="md"
            label="I agree to sell my privacy"
            {...form.getInputProps("termsOfService", { type: "checkbox" })}
          />

          <Group justify="flex-end" mt="md">
            <Button type="submit" fullWidth>
              Sign Up
            </Button>
          </Group>
        </form>
        <p className="text-sm text-center mt-4">
          Already have an account?{" "}
          <Link to={"/signin"} className="text-blue-500">
            Signin
          </Link>
        </p>
        <Divider my={10} label="Or" labelPosition="center" />

        <div className=" space-y-3">
          <OAuth title="Continue with Google" Logo={<FcGoogle />} />
          <OAuth title="Continue with Github" Logo={<FaGithub />} />
        </div>
      </Box>
    </>
  );
};

export default SignUp;
