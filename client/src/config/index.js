export const signUpFormControlles = [
  {
    name: 'userName',
    label: "User name",
    placeholder: "Enter your user name",
    type: 'text',
    componentType: 'input'
  },
  {
    name: 'userEmail',
    label: "User Email",
    placeholder: "Enter your user email",
    type: 'email',
    componentType:'input'
  },
  {
    name: 'password',
    label: "Password",
    placeholder: "Enter your user password",
    type: 'password',
    componentType:'input'
  },

]


export const signInFormControlles = [
  {
    name: "userEmail",
    label: "User Email",
    placeholder: "Enter your user email",
    type: "email",
    componentType: "input",
  },
  {
    name: "password",
    label: "Password",
    placeholder: "Enter your user password",
    type: "password",
    componentType: "input",
  },
];


export const initialSignInFormData = {
  userEmail: "",
  password:"",
}

export const initialSignUpFormData = {
  userName:"",
  userEmail: "",
  password:"",
}



