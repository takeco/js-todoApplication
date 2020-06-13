'use strict';
{
  document.querySelectorAll('form>input')[1].addEventListener('click', () => {
    const todoName = document.createElement('li');
    const text = document.querySelectorAll('form>input')[0];
    todoName.textContent = text.value;

    const removeButton = document.createElement('button');
    removeButton.textContent = "削除";


    if(text.value != ''){
    todoName.appendChild(removeButton);
    document.querySelector('ul').appendChild(todoName);
    }

    // 削除タスク
    removeButton.addEventListener('click', () =>{
      document.querySelector('ul').removeChild(todoName);
    })

    // フォーム入力後の遷移キャンセル
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
      
    });


    text.value = '';
    text.focus();
  });

}
