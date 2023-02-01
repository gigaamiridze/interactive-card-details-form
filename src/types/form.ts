export type Inputs = {
  name: string | null;
  number: string | null;
  mm: string | null;
  yy: string | null;
  cvc: string | null;
}

export type FormProps = {
  formData: Inputs;
  setFormData: React.Dispatch<React.SetStateAction<Inputs>>;
}

export type CardProps = {
  formData: Inputs;
}