import Input from "@/components/Input";

import useRegisterForm from "../hooks/useRegisterForm";

import FormCardTitle from "./FormCardTitle";

import IconRocket from "./icons/IconRocket";

import usePasswordVisibility from "@/hooks/usePasswordVisibility";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import InputWithIconContainer from "@/components/InputWithIconContainer";

import IconEmail from "@/components/icons/IconEmail";

import IconUser from "@/components/icons/IconUser";

import IconEye from "@/components/icons/IconEye";

import Button from "@/components/Button";

import IconPhone from "@/components/icons/IconPhone";

const RegisterForm = () => {
  const { form, handleSubmit } = useRegisterForm();

  const { inputType, toggleVisibility } = usePasswordVisibility();

  const {
    inputType: confirmPasswordInputType,
    toggleVisibility: confirmPasswordToggleVisibility,
  } = usePasswordVisibility();

  return (
    <form onSubmit={handleSubmit} noValidate id="register-form">
      <FormCardTitle
        icon={<IconRocket />}
        title="Create an account"
        subtitle="You are welcome!"
      />

      <div className="grid sm:grid-cols-2 gap-1.25rem mb-1.25rem mt-1.88rem">
        <div>
          <Label htmlFor="register-form-first-name">First name</Label>
          <InputWithIconContainer icon={<IconUser />}>
            <Input
              {...form.register("firstName")}
              type="text"
              id="register-form-first-name"
              placeholder="First name"
              isError={!!form.formState.errors.firstName}
            />
          </InputWithIconContainer>
          <ErrorMessage>
            {form.formState.errors.firstName?.message}
          </ErrorMessage>
        </div>
        <div>
          <Label htmlFor="register-form-last-name">Last name</Label>
          <InputWithIconContainer icon={<IconUser />}>
            <Input
              {...form.register("lastName")}
              type="text"
              id="register-form-last-name"
              placeholder="Last name"
              isError={!!form.formState.errors.lastName}
            />
          </InputWithIconContainer>
          <ErrorMessage>{form.formState.errors.lastName?.message}</ErrorMessage>
        </div>
      </div>

      <div className="mt-1.88rem mb-1.25rem">
        <Label htmlFor="register-form-email">E-mail</Label>
        <InputWithIconContainer icon={<IconEmail />}>
          <Input
            {...form.register("email")}
            type="email"
            id="register-form-email"
            placeholder="Email"
            isError={!!form.formState.errors.email}
            autoComplete="username"
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.email?.message}</ErrorMessage>
      </div>

      <div className="mt-1.88rem mb-1.25rem">
        <Label htmlFor="register-form-phone">Phone number</Label>
        <InputWithIconContainer icon={<IconPhone />}>
          <Input
            {...form.register("phone")}
            type="text"
            id="register-form-phone"
            placeholder="(+01)"
            isError={!!form.formState.errors.phone}
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.phone?.message}</ErrorMessage>
      </div>

      <div className="mb-1.25rem">
        <Label htmlFor="register-form-password">Password</Label>
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
            id="register-form-password"
            placeholder="Password"
            isError={!!form.formState.errors.password}
            autoComplete="new-password"
          />
        </InputWithIconContainer>
        <ErrorMessage>{form.formState.errors.password?.message}</ErrorMessage>
      </div>

      <div className="mb-1.25rem">
        <Label htmlFor="register-form-confirm-password">Confirm Password</Label>
        <InputWithIconContainer
          icon={
            <IconEye
              svgProps={{
                onClick: confirmPasswordToggleVisibility,
              }}
            />
          }
        >
          <Input
            {...form.register("confirmPassword")}
            type={confirmPasswordInputType}
            id="register-form-confirm-password"
            placeholder="Password"
            isError={!!form.formState.errors.confirmPassword}
            autoComplete="new-password"
          />
        </InputWithIconContainer>
        <ErrorMessage>
          {form.formState.errors.confirmPassword?.message}
        </ErrorMessage>
      </div>

      <Button type="submit" className="w-full">
        Sign up
      </Button>
    </form>
  );
};

export default RegisterForm;
