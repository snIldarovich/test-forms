import '../scss/style.scss';

document.addEventListener('DOMContentLoaded', function () {

  (document.getElementById('button-1') as HTMLInputElement).addEventListener('click', function (event) {
    event.preventDefault();
    if ((document.getElementById('button-1') as HTMLInputElement).getAttribute('type') === 'button') {
      const errorElement = (document.getElementById('button-1') as HTMLInputElement).previousElementSibling;
      if (errorElement && document.querySelector('#error-1')) {
        (errorElement as HTMLInputElement).style.display = 'block';
      }
    }
  });


  document.querySelectorAll('.form__label').forEach(element => {
    element.addEventListener('click', () => {
      (document.getElementById('button-1') as HTMLInputElement).setAttribute('type', 'submit');
      (document.getElementById('button-1') as HTMLInputElement).addEventListener('click', function (event) {
        event.preventDefault();
        (document.getElementById('form-1') as HTMLInputElement).classList.add('form_checked');
        (document.getElementById('form-2') as HTMLInputElement).classList.remove('form_inactive');
      });

    });
  });

  (document.getElementById('button-2') as HTMLInputElement).addEventListener('click', function (event) {
    event.preventDefault();
    if ((document.getElementById('button-2') as HTMLInputElement).getAttribute('type') === 'button') {
      const errorElement = document.querySelector('#error-2'); // Получаем элемент с id="error-2"
      if (errorElement) {
        (errorElement as HTMLInputElement).style.display = 'block';// Присваиваем свойство display: block;
      }
    }
  });

  function checkRequiredInputs() {
    const inputs = document.querySelectorAll('.form__input[required]');
    for (const input of inputs) {
      if (!(input as HTMLInputElement).value) {
        return false;
      }
    }
    return true;
  }
  (document.getElementById('button-2') as HTMLInputElement).addEventListener('click', function (event) {
    if (checkRequiredInputs()) {
      (document.getElementById('button-2') as HTMLInputElement).setAttribute('type', 'submit');
      event.preventDefault();
      (document.getElementById('form-2') as HTMLInputElement).classList.add('form_checked');
      (document.getElementById('form-3') as HTMLInputElement).classList.remove('form_inactive');
    }
    // else {
    //   console.log('не все данные заявителя заполнены корректно')
    // }
  });

  (document.getElementById('button-3') as HTMLInputElement).addEventListener('click', function (event) {
    event.preventDefault();
    if ((document.getElementById('button-3') as HTMLInputElement).getAttribute('type') === 'button') {
      const errorElement = (document.getElementById('button-3') as HTMLInputElement).previousElementSibling;
      if (errorElement && document.querySelector('#error-3')) {
        (errorElement as HTMLInputElement).style.display = 'block';
      }
    }
  });

  document.querySelectorAll('.form__label-checkbox').forEach(element => {
    element.addEventListener('click', () => {
      (document.getElementById('button-3') as HTMLInputElement).setAttribute('type', 'submit');
 
        (document.getElementById('button-3') as HTMLInputElement).addEventListener('click', function (event) {
          event.preventDefault();
          ['form-1', 'form-2', 'form-3'].forEach(id => {
            (document.getElementById(id) as HTMLInputElement).classList.add('form_invisible');
          });
          {
            (document.getElementById('form-4') as HTMLInputElement).classList.remove('form_invisible');
            (document.getElementById('form-4') as HTMLInputElement).classList.add('form_checked');
          }
        });
    });
  });


},);






