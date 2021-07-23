import * as yup from "yup";

const formSchema = yup.object().shape({
  name: yup
    .string()
    .trim()
    .required("Name is Required")
    .min(2, "name must be at least 2 characters"),
  size: yup.string().required("Must select a size"),
  sauce: yup.string().required("You must select a sauce"),
  special: yup.string(),
});

export default formSchema;
