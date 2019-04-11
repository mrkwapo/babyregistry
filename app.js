document.addEventListener('DOMContentLoaded', function(){

  const list = document.querySelector('#item-list ul');
  const forms = document.forms;

  // delete items
  list.addEventListener('click', (e) => {
    if(e.target.className == 'delete'){
      const li = e.target.parentElement;
      li.parentNode.removeChild(li);
    }
  });

  // add items
  const addForm = forms['add-item'];
  addForm.addEventListener('submit', function(e){
    e.preventDefault();

    // create elements
    const value = addForm.querySelector('input[type="text"]').value;
    const li = document.createElement('li');
    const itemName = document.createElement('span');
    const deleteBtn = document.createElement('span');

    // add text content
    itemName.textContent = value;
    deleteBtn.textContent = 'delete';

    // add classes
    itemName.classList.add('name');
    deleteBtn.classList.add('delete');

    // append to DOM
    li.appendChild(itemName);
    li.appendChild(deleteBtn);
    list.appendChild(li);
  });

  // hide items
  const hideBox = document.querySelector('#hide');
  hideBox.addEventListener('change', function(e){
    if(hideBox.checked){
      list.style.display = "none";
    } else {
      list.style.display = "initial";
    }
  });

  // filter items
  const searchBar = forms['search-items'].querySelector('input');
  searchBar.addEventListener('keyup', (e) => {
    const term = e.target.value.toLowerCase();
    const items = list.getElementsByTagName('li');
    Array.from(items).forEach((item) => {
      const title = item.firstElementChild.textContent;
      if(title.toLowerCase().indexOf(e.target.value) != -1){
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });

  // tabbed content
  const tabs = document.querySelector('.tabs');
  const panels = document.querySelectorAll('.panel');
  tabs.addEventListener('click', (e) => {
    if(e.target.tagName == 'LI'){
      const targetPanel = document.querySelector(e.target.dataset.target);
      Array.from(panels).forEach((panel) => {
        if(panel == targetPanel){
          panel.classList.add('active');
        }else{
          panel.classList.remove('active');
        }
      });
    }
  });

})