'use strict';
{

  const dustboxImage = 'img/dustbin.svg';
  const menu = document.querySelector('nav>button');
  const menuName = ['ゴミ箱','買い物リスト'];
  menu.textContent = menuName[0];
  const todolistPage = document.querySelectorAll('main>div')[0];
  const dustboxPage = document.querySelectorAll('main>div')[1];
  const inputForm = document.querySelector('form');
  const titleName = document.querySelector('h1');


  menu.addEventListener('click',()=>{
    if(menu.textContent == menuName[0]){
      menu.textContent = menuName[1];
      titleName.textContent = "ゴミ箱";
    }
    else{
      menu.textContent = menuName[0];
      titleName.textContent = "買い物リスト";
    }
    todolistPage.classList.toggle('change');
    dustboxPage.classList.toggle('change');
    inputForm.classList.toggle('change');
    

  })


  document.querySelectorAll('form>input')[1].addEventListener('click', () => {
    const todoName = document.createElement('li');
    const text = document.querySelectorAll('form>input')[0];
    todoName.textContent = text.value;

    const removeButton = document.createElement('img');
    removeButton.src = "img/dustbin.svg";
    removeButton.classList.add('dustbin');


    if(text.value != ''){
    todoName.appendChild(removeButton);
    document.getElementById('mainlist').appendChild(todoName);
    }
    


  // document.querySelectorAll('form>input')[1].addEventListener('click', () => {
  //   const todoName = document.createElement('li');
  //   const text = document.querySelectorAll('form>input')[0];
  //   todoName.textContent = text.value;

  //   const removeButton = document.createElement('button');
  //   removeButton.textContent = "削除";


  //   if(text.value != ''){
  //   todoName.appendChild(removeButton);
  //   document.getElementById('mainlist').appendChild(todoName);
  //   }

    // 削除タスク
    removeButton.addEventListener('click', () =>{
      document.getElementById('mainlist').removeChild(todoName);
    })

    // フォーム入力後の遷移キャンセル
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      

    document.class
    });


    text.value = '';
    text.focus();
  });

}
