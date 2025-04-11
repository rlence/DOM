import "./style.css";

const reset = () => {
  const emailInput = document.querySelector('#email');
  const emailError = document.querySelector('#emailError');
  const passwordInput = document.querySelector('#password');
  const passwordError = document.querySelector('#passwordError');

  emailInput.style.borderColor = '#ccc';
  passwordInput.style.borderColor = '#ccc';
  emailError.textContent = '';
  passwordError.textContent = '';
}

const resetInput = () => {
  const emailInput = document.querySelector('#email');
  const passwordInput = document.querySelector('#password');

  emailInput.value = '';
  passwordInput.value = '';
}

const validEmail = () => {
  const emailInput = document.querySelector('#email');
  const emailError = document.querySelector('#emailError');

  const emailValue = emailInput.value.trim();
  console.log('emailValue',emailValue);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if(!emailValue){
    emailError.textContent = 'El correo es obligatorio';
    emailInput.style.borderColor = 'red';
    return false;
  }

  if(!emailRegex.test(emailValue)){
    emailError.textContent = 'Correo no válido';
    emailInput.style.borderColor = 'red';
    return false;
  }

  return true;
}

const validPassword = () => {
  const passwordInput = document.querySelector('#password');
  const passwordError = document.querySelector('#passwordError');

  const passwordValue = passwordInput.value.trim();

  if(!passwordValue){
    passwordError.textContent = 'La contraseña es obligatoria';
    passwordInput.style.borderColor = 'red';
    return false;
  }

  console.log(passwordValue);
  console.log(passwordValue.length < 6);
  if(passwordValue.length < 6){
    passwordError.textContent = 'Debes de tener al menos 6 caracteres.';
    passwordInput.style.borderColor = 'red';
    return false;
  }

  return true;
}

const addFormListener = (form) => {
  form.addEventListener('submit', (event) => {
    event.preventDefault();
    let isValid = true;

    reset();
    
    isValid = validEmail();
    isValid = validPassword();



    if(isValid){
      alert('formulario eviando con exito');
      resetInput();
    }

  });
}
 


window.onload = function() {
  const form = document.querySelector('#loginForm');
  addFormListener(form);
};
