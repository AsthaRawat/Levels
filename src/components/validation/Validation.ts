// validation.ts
export const validateEmail = (email: string): boolean => {
  const emailRegex =
    /^([^\S\.]{0,})+(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})+([^\S\.]{0,})$/;
  return emailRegex.test(email);
};

export const validateName = (name: string): boolean => {
  const nameRegex = /^[a-zA-Z ]+$/
  return nameRegex.test(name);
};
