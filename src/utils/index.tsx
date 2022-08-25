interface IPropsInput {
  isValid: boolean;
  value: string;
  required: boolean;
  error: string;
}

const defaultInput = { value: "", error: "", isValid: true };
const requiredTrue = { ...defaultInput, required: true };

const initialInputValue = {
  defaultInput,
  required: requiredTrue,
};

export const isEmpty = (item: string | Object): Boolean => {
  if (typeof item === "string") {
    return item.trim().length === 0;
  }

  if (item instanceof Object) {
    return Object.entries(item).length === 0;
  }

  return false;
};

export const setInputValue = (value: {
  value: string;
  error?: string;
  required?: true | false;
  isValid?: true | false;
}): IPropsInput => {
  const initialValue = initialInputValue.required;

  if (typeof value === "object") {
    return { ...initialValue, ...value };
  }

  return { ...initialValue, value };
};

export const validateForm = (state: {
  [key: string]: IPropsInput;
}): { [key: string]: IPropsInput } => {
  const inputsWithError: { [key: string]: IPropsInput } = {};

  Object.entries(state).forEach((input: any) => {
    const [key, { value, required }] = input;

    // Campos obrigatórios
    if (isEmpty(value) && required) {
      inputsWithError[key] = setInputValue({
        value,
        error: "Campo obrigatório",
      });
    }
  });

  return inputsWithError;
};

export const generateInputValues = (array: any[], required = false): object => {
  const inputs: any = {};

  array.forEach((input: any) => {
    inputs[input] = required
      ? initialInputValue.required
      : initialInputValue.defaultInput;
  });

  return inputs;
};

export const generateDefaultInputValues = (array: any[]): object =>
  generateInputValues(array);

export const generateRequiredInputValues = (array: any[]): object =>
  generateInputValues(array, true);
