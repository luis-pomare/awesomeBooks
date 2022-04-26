import domObject from './domReading.js';

const setListeners = function () {
  domObject.firstItem.addEventListener('click', () => {
    domObject.mainContainer.classList.add('books');
    domObject.mainContainer.classList.remove('noVisible');
    domObject.addContainer.classList.add('noVisible');
    domObject.contactContainer.classList.add('noVisible');
    domObject.firstItem.classList.add('selected');
    domObject.secondItem.classList.remove('selected');
    domObject.thirdItem.classList.remove('selected');
  });

  domObject.secondItem.addEventListener('click', () => {
    domObject.addContainer.classList.add('flexColumn');
    domObject.addContainer.classList.remove('noVisible');
    domObject.mainContainer.classList.add('noVisible');
    domObject.contactContainer.classList.add('noVisible');
    domObject.firstItem.classList.remove('selected');
    domObject.secondItem.classList.add('selected');
    domObject.thirdItem.classList.remove('selected');
  });

  domObject.thirdItem.addEventListener('click', () => {
    domObject.contactContainer.classList.add('flexColumn');
    domObject.contactContainer.classList.remove('noVisible');
    domObject.addContainer.classList.add('noVisible');
    domObject.mainContainer.classList.add('noVisible');
    domObject.firstItem.classList.remove('selected');
    domObject.secondItem.classList.remove('selected');
    domObject.thirdItem.classList.add('selected');
  });
};
export default setListeners;
