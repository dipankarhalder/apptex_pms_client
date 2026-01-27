import styled from "styled-components";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "../../shared/Input";
import { Dropdown } from "../../shared/Dropdown";
import { Button } from "../../shared/Button";
import { useToast } from "../../hooks/useToast";
import { addCompanySchema } from "../../validation/schema";
import { useCreateCompany } from "../../hooks/useCompany";

export const AppBtnCoverItems = styled.div`
  display: flex;
  gap: 10px;
`;

export const AddCompanyForm = ({ closeBtn }) => {
  const dropdownvalue = [
    { value: "Private", label: "Private" },
    { value: "Public", label: "Public" },
    { value: "Government", label: "Government" },
    { value: "Non-Profit", label: "Non-Profit" },
  ];

  const { showToast } = useToast();
  const { mutateAsync, isPending } = useCreateCompany();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: yupResolver(addCompanySchema),
    mode: "onChange",
    defaultValues: { name: "" },
  });

  const onSubmit = async (data) => {
    try {
      const res = await mutateAsync(data);
      showToast({
        type: "success",
        title: "Successfully company created",
        description: res.message,
      });
      closeBtn();
    } catch (err) {
      const title = err?.response?.statusText || "Error";
      const description =
        err?.response?.data?.message || err?.message || "Something went wrong";

      showToast({
        type: "error",
        title,
        description: JSON.stringify(description),
      });
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
      <Input
        label="Company Name"
        name="name"
        {...register("name")}
        required
        error={errors.name}
      />
      <Input
        label="Company Code"
        name="code"
        {...register("code")}
        required
        error={errors.code}
      />
      <Dropdown
        label="Select type of company"
        name="type"
        options={dropdownvalue}
        {...register("type")}
        required
        error={errors.type}
      />
      <AppBtnCoverItems>
        <Button
          type="submit"
          fullWidth
          disabled={isSubmitting || !!errors.email}
          loading={isPending}
        >
          Create
        </Button>
        <span onClick={() => closeBtn()}>Cancel</span>
      </AppBtnCoverItems>
    </form>
  );
};
