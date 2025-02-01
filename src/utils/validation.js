const validationRules = {
  name: {
    regex: /^[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+([ ]?[A-Za-zА-Яа-яЁёІіЇїЄєҐґ]+)*$/,
    errorMessage: "Ім'я повинно містити принаймні дві літери",
  },
  phone: {
    regex: /^(\+?38)?\s?\(?0\d{2}\)?[\s-]?\d{3}[\s-]?\d{2}[\s-]?\d{2}$/,
    errorMessage: "Невірний формат номера телефону",
  },
};

export const validateField = (name, value) => {
  const { regex, errorMessage } = validationRules[name] || {};
  if (!value) {
    return `це поле не може бути порожнім`;
  }
  if (regex && !regex.test(value)) {
    return errorMessage;
  }
  return "";
};
