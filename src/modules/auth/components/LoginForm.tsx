import Input from "@/components/Input";

import useLoginForm from "../hooks/useLoginForm";

import FormCardTitle from "./FormCardTitle";

import IconLanding from "./icons/IconLanding";

import usePasswordVisibility from "@/hooks/usePasswordVisibility";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import InputWithIconContainer from "@/components/InputWithIconContainer";

import IconEmail from "@/components/icons/IconEmail";

import IconEye from "@/components/icons/IconEye";

import Button from "@/components/Button";

const LoginForm = () => {
  const { form, handleSubmit } = useLoginForm();

  const { inputType, toggleVisibility } = usePasswordVisibility();

  return (
    <form onSubmit={handleSubmit} noValidate id="login-form">
      <FormCardTitle
        icon={<IconLanding />}
        title="Welcome Back!"
        subtitle="Let’s build something great"
      />

      <div className="mt-1.88rem mb-1.25rem">
        <Label htmlFor="login-form-email">E-mail or phone number</Label>
        <InputWithIconContainer icon={<IconEmail />}>
          <Input
            {...form.register("email")}
            type="email"
            id="login-form-email"
            placeholder="Email"
            isError={!!form.formState.errors.email}
            autoComplete="username"
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
      </div>

      <div className="mb-1.25rem">
        <Label htmlFor="login-form-password">Password</Label>
        <InputWithIconContainer
          icon={
            <IconEye
              svgProps={{
                onClick: toggleVisibility,
              }}
            />
          }
        >
          <Input
            {...form.register("password")}
            type={inputType}
            id="login-form-password"
            placeholder="Password"
            isError={!!form.formState.errors.password}
            autoComplete="current-password"
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.password?.message}</ErrorMessage>
      </div>

      <Button type="submit" className="w-full">
        Login
      </Button>
    </form>
  );
};

export default LoginForm;
