import { useContext } from "react";
import CurrencyParse from "./CurrencyParse";

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
  price?: boolean | undefined;
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
    price,
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

  if (onChange || price) {
    const onChangeFunction = (event: any) => {
      let valueAsNumber;
      if (price) {
        let inputElement = event.target;
        let selectionStart = inputElement.selectionStart;
        let selectionEnd = inputElement.selectionEnd;
        let value = inputElement.value;
    
        // Remove all characters before the dollar sign $
        value = value.replace(/.*\$/g, '');
        // Remove all characters except numbers
        value = value.replace(/[^0-9]/g, '');

        if(maxValue && parseInt(value) > maxValue) {
          //slice based on the length of the maxValue
          value = value.substring(0, maxValue.toString().length);
        }

        if(minValue && parseInt(value) < minValue) {
          value = value.slice(0, -1);
        }

        valueAsNumber = parseInt(value);
    
        if (value !== '') {
            // Convert to currency
            value = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP' }).format(value).replace(',00', '');
    
            // Adjust selection range based on the currency formatting
            selectionStart = selectionStart + value.length - inputElement.value.length;
            selectionEnd = selectionEnd + value.length - inputElement.value.length;
        }
    
        inputElement.value = value;
    
        // Restore selection range
        inputElement.setSelectionRange(selectionStart, selectionEnd);
    }
    

      if (onChange) {
        onChange(valueAsNumber ?? event.target.value);
      }
    }
    validator = { ...validator, onChange: onChangeFunction };
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