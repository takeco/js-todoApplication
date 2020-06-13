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

//サイドボタンを押した際の挙動
  menu.addEventListener('click',()=>{
    if(menu.textContent == menuName[0]){
      menu.textContent = menuName[1];
      titleName.textContent = "ゴミ箱";
    }
    else{
      menu.textContent = menuName[0];
      titleName.textContent = "買い物リスト";
    }
    // 表示範囲の切り替え
    todolistPage.classList.toggle('change');
    dustboxPage.classList.toggle('change');
    inputForm.classList.toggle('change');
  })

// 追加ボタンを押した際の挙動
  document.querySelectorAll('form>input')[1].addEventListener('click', () => {
    const todoName = document.createElement('li');
    const text = document.querySelectorAll('form>input')[0];
    todoName.textContent = text.value;

    // ゴミ箱ボタン生成
    const dustboxButton = document.createElement('img');
    dustboxButton.src = "img/dustbin.svg";
    dustboxButton.classList.add('dustbin');
    dustboxButton.classList.add('dustbinColor');
    dustboxButton.alt = 'ゴミ箱へ移動';
    dustboxButton.title = 'ゴミ箱へ移動';

    // inputが空白でなければmainlistに追加
    if(text.value != ''){
      todoName.appendChild(dustboxButton);
      const mainlist = document.getElementById('mainlist');
      mainlist.appendChild(todoName);
    }

    // undoボタン生成
    const undoButton = document.createElement('img');
    undoButton.src = "img/undo.svg";
    undoButton.classList.add('undo');
    undoButton.alt = 'もとへ戻す';
    undoButton.title = 'もとへ戻す';

    //ゴミ箱ボタンを押した際の挙動
    dustboxButton.addEventListener('click', () =>{
      const dustbox = document.getElementById('dustbox');
      // 買い物リストの時
      if(menu.textContent == menuName[0]){
        dustbox.appendChild(todoName);
        dustboxButton.classList.remove('dustbinColor');
        todoName.appendChild(undoButton);
        dustboxButton.alt = '完全に削除';
        dustboxButton.title = '完全に削除';
      }
      // ゴミ箱のとき
      else{
        dustbox.removeChild(todoName);
      }
    })

    // undoボタンを押したときの挙動
    undoButton.addEventListener('click', () =>{
      todoName.removeChild(undoButton);
      dustboxButton.classList.add('dustbinColor');
      mainlist.appendChild(todoName);
      dustboxButton.alt = 'ゴミ箱へ移動';
      dustboxButton.title = 'ゴミ箱へ移動';
    })

    // フォーム入力後の遷移キャンセル
    document.querySelector('form').addEventListener('submit', e => {
      e.preventDefault();
    });
    // フォームを空白にしフォーカスして返す。
    text.value = '';
    text.focus();
  });
}
