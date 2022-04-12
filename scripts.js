window.addEventListener("DOMContentLoaded", () => {
  const $inputsColor = document.querySelectorAll('input[name=product_color]');
  const $formColorLabel = document.getElementById('productColorValue');
  $inputsColor.forEach((input) => {
    input.addEventListener('change', (e) => {
      $formColorLabel.innerText = e.target.dataset.nameDisplay;
    });
  });

  const $inputsQuantity = document.querySelectorAll('.input-quantity');
  $inputsQuantity.forEach((input) => {
    const $inputField = input.querySelector('.input-quantity__field');
    const $inputBtnIncrease = input.querySelector('.input-quantity__btn[data-action=increase]');
    const $inputBtnDecrease = input.querySelector('.input-quantity__btn[data-action=decrease]');
    $inputBtnIncrease.addEventListener('click', () => {
      const initialValue = $inputField.value * 1;
      $inputField.value = initialValue + 1; 
    });
    $inputBtnDecrease.addEventListener('click', () => {
      const initialValue = $inputField.value * 1;
      if (initialValue > 1) $inputField.value = initialValue - 1;
    });    
  });

  const $accordions = document.querySelectorAll('.accordion__item');
  $accordions.forEach((accordion) => {
    const $accordionTitle = accordion.querySelector('.accordion__item__title');
    $accordionTitle.addEventListener('click', () => {
      accordion.classList.toggle('accordion__item_active');
    });    
  });  
})