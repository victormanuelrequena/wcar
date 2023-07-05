import { useContext } from "react";

interface Props {
  required?: boolean | undefined;
  email?: boolean | undefined;
  minLength?: number | undefined;
  maxLength?: number | undefined;
  minValue?: number | undefined;
  maxValue?: number | undefined;
  mustBeNumber?: boolean | undefined;
  specialCharacterRequired?: boolean | undefined;
  uppercaseRequired?: boolean | undefined;
  lowercaseRequired?: boolean | undefined;
  numberRequired?: boolean | undefined;
  mustBeEqual?: string | undefined;
  noSpecialCharacter?: boolean | undefined;
  noUpperCase?: boolean | undefined;
  noLowerCase?: boolean | undefined;
  noNumber?: boolean | undefined;
  name?: boolean | undefined;
  phone?: boolean | undefined;
  isPassword?: boolean | undefined;
  pattern?: RegExp | undefined;
  validate?: Function | undefined;
  onChange?: (event: any) => void;
}

const Validators = ({ ...props }: Props): any => {
  const {
    required,
    minLength,
    maxLength,
    pattern,
    validate,
    email,
    onChange,
    minValue,
    maxValue,
    mustBeNumber,
    specialCharacterRequired,
    uppercaseRequired,
    lowercaseRequired,
    numberRequired,
    mustBeEqual,
    noSpecialCharacter,
    noUpperCase,
    noLowerCase,
    noNumber,
    name,
    phone,
    isPassword,
  } = props;

  let validator: any = {};
  let validateInside: any = {};

  if (required) {
    validator = { ...validator, required: "El campo es obligatorio" };
  }

  if (onChange) {
    validator = { ...validator, onChange: onChange };
  }


  if (email) {
    validateInside = {
      ...validateInside,
      email: (value: string) =>
        value.match(/^[a-zA-Z0-9.a-zA-Z0-9.!#$%&'*+-/=?^_`{|}~]+@[a-zA-Z0-9]+\.[a-zA-Z]+/g)
          ? null
          : "El formato del correo electrónico es inválido",
    };
  }

  if (minLength) {
    validator = {
      ...validator,
      minLength: {
        value: minLength,
        message: `Debe tener al menos ${minLength} caracteres`,
      },
    };
  }

  if (maxLength) {
    validator = {
      ...validator,
      maxLength: {
        value: maxLength,
        message: `Debe tener como máximo ${maxLength} caracteres`,
      },
    };
  }

  if (minValue) {
    validator = {
      ...validator,
      min: {
        value: minValue,
        message: `Debe ser mayor o igual a ${minValue}`,
      },
    };
  }

  if (maxValue) {
    validator = {
      ...validator,
      max: {
        value: maxValue,
        message: `Debe ser menor o igual a ${maxValue}`,
      },
    };
  }

  if (mustBeNumber) {
    validateInside = {
      ...validateInside,
      mustBeNumber: (value: string) =>
        value.match(/(?=.*[0-9])/g) ? null : "Debe contener al menos un número",
    };
  }

  if (specialCharacterRequired || isPassword) {
    validateInside = {
      ...validateInside,
      specialCharacterRequired: (value: string) =>
        value.match(/(?=.*[\^$*.[\]{}()?"!@#%&/\\,><'+r':;|_~`=+\- ])/g)
          ? null
          : "Debe contener al menos un carácter especial",
    };
  }

  if (uppercaseRequired || isPassword) {
    validateInside = {
      ...validateInside,
      uppercaseRequired: (value: string) =>
        value.match(/(?=.*[A-Z])/g) ? null : "Debe contener al menos una letra mayúscula",
    };
  }

  if (lowercaseRequired || isPassword) {
    validateInside = {
      ...validateInside,
      lowercaseRequired: (value: string) =>
        value.match(/(?=.*[a-z])/g) ? null : "Debe contener al menos una letra minúscula",
    };
  }

  if (numberRequired || isPassword) {
    validateInside = {
      ...validateInside,
      numberRequired: (value: string) =>
        value.match(/(?=.*[0-9])/g) ? null : "Debe contener al menos un número",
    };
  }

  if (noSpecialCharacter || name) {
    validateInside = {
      ...validateInside,
      noSpecialCharacter: (value: string) =>
        !value.match(/^((?![\{}()?"!@#%&/\\,.:;|_~`=+$\><]).)*$/g)
          ? "No se permiten caracteres especiales"
          : null,
    };
  }

  if (noUpperCase) {
    validateInside = {
      ...validateInside,
      noUpperCase: (value: string) =>
        value.match(/^((?![A-Z]).)*$/g) ? "No se permiten letras mayúsculas" : null,
    };
  }

  if (noLowerCase) {
    validateInside = {
      ...validateInside,
      noLowerCase: (value: string) =>
        value.match(/^((?![a-z]).)*$/g) ? "No se permiten letras minúsculas" : null,
    };
  }

  if (noNumber || name) {
    validateInside = {
      ...validateInside,
      noNumber: (value: string) =>
        /\d/.test(value) ? "No se permiten números" : null,
    };
  }

  if (mustBeEqual) {
    validateInside = {
      ...validateInside,
      mustBeEqual: (value: string) =>
        value === mustBeEqual ? null : `Debe ser igual a ${mustBeEqual}`,
    };
  }

  if (phone) {
    validator = {
      ...validator,
      minLength: {
        value: 5,
        message: "Debe tener al menos 5 caracteres",
      },
    };

    validator = {
      ...validator,
      maxLength: {
        value: 13,
        message: "Debe tener como máximo 13 caracteres",
      },
    };

    validateInside = {
      ...validateInside,
      phone: (value: string) =>
        value.match(/^(?:[0-9] ?){5,13}[0-9]$/g)
          ? null
          : "El número de teléfono no es válido",
    };
  }

  if (isPassword) {
    validator = {
      ...validator,
      minLength: {
        value: 6,
        message: "Debe tener al menos 6 caracteres",
      },
    };

    validator = {
      ...validator,
      maxLength: {
        value: 20,
        message: "Debe tener como máximo 20 caracteres",
      },
    };
  }

  if (pattern) {
    validateInside = {
      ...validateInside,
      pattern: (value: string) =>
        value.match(pattern) ? null : "El formato es inválido",
    };
  }

  if (validate) {
    validateInside = { ...validateInside, custom: validate };
  }


  return {
    ...validator,
    validateInside,
  };
};

export default Validators;