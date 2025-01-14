import Input from "@/components/Input";

import FormCardTitle from "./FormCardTitle";

import IconRocket from "./icons/IconRocket";

import usePasswordVisibility from "@/hooks/usePasswordVisibility";

import Label from "@/components/Label";

import ErrorMessage from "@/components/ErrorMessage";

import InputWithIconContainer from "@/components/InputWithIconContainer";

import IconEye from "@/components/icons/IconEye";

import Button from "@/components/Button";

import useCreateNewPasswordForm from "../hooks/useCreateNewPasswordForm";

const CreateNewPasswordForm = () => {
  const { form, handleSubmit } = useCreateNewPasswordForm();

  const { inputType, toggleVisibility } = usePasswordVisibility();

  const {
    inputType: confirmPasswordInputType,
    toggleVisibility: confirmPasswordToggleVisibility,
  } = usePasswordVisibility();

  return (
    <form onSubmit={handleSubmit} noValidate id="create-new-password-form">
      <FormCardTitle
        icon={<IconRocket />}
        title="Create new password"
        subtitle="You are welcome!"
      />

      <div className="my-1.25rem">
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
        Reset Password
      </Button>
    </form>
  );
};

export default CreateNewPasswordForm;
