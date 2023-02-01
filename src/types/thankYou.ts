import { Inputs } from './form';

export type ThankYouProps = {
  setFormData: React.Dispatch<React.SetStateAction<Inputs>>;
  setValidate: React.Dispatch<React.SetStateAction<boolean>>;
}