const tasks = [
  {
    _id: Date.now()+1,
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: Date.now()+2,
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: Date.now()+3,
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: Date.now()+4,
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },

  {
    _id: Date.now()+5,
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: Date.now()+6,
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: Date.now()+7,
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: Date.now()+8,
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
];



function getArrayOfTasks(arrOfTasks) {
  const objOfTasks = arrOfTasks.reduce((acc, task) => {
    acc[task._id] = task;
    return acc;
  }, {});


  const themes = {
    default: {
      '--base-text-color': '#212529',
      '--header-bg': '#748ca1',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#9eb2cd99',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#0069d9',
      '--default-btn-border-color': '#0069d9',
      '--danger-btn-bg': '#dc3545',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#bd2130',
      '--danger-btn-border-color': '#dc3545',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#80bdff',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(0, 123, 255, 0.25)',
    },
    dark: {
      '--base-text-color': '#212529',
      '--header-bg': '#343a40',
      '--header-text-color': '#fff',
      '--default-btn-bg': '#58616b',
      '--default-btn-text-color': '#fff',
      '--default-btn-hover-bg': '#292d31',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#b52d3a',
      '--danger-btn-text-color': '#fff',
      '--danger-btn-hover-bg': '#88222c',
      '--danger-btn-border-color': '#88222c',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
    light: {
      '--base-text-color': '#212529',
      '--header-bg': '#fff',
      '--header-text-color': '#212529',
      '--default-btn-bg': '#fff',
      '--default-btn-text-color': '#212529',
      '--default-btn-hover-bg': '#e8e7e7',
      '--default-btn-border-color': '#343a40',
      '--default-btn-focus-box-shadow':
        '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
      '--danger-btn-bg': '#f1b5bb',
      '--danger-btn-text-color': '#212529',
      '--danger-btn-hover-bg': '#ef808a',
      '--danger-btn-border-color': '#e2818a',
      '--input-border-color': '#ced4da',
      '--input-bg-color': '#fff',
      '--input-text-color': '#495057',
      '--input-focus-bg-color': '#fff',
      '--input-focus-text-color': '#495057',
      '--input-focus-border-color': '#78818a',
      '--input-focus-box-shadow': '0 0 0 0.2rem rgba(141, 143, 146, 0.25)',
    },
  };

  let lastSelectedTheme = 'default';

  // Elemets UI
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];
  const card = document.querySelector('.card');
  const optionTasks = document.getElementById('option-sort');
  const selectTheme = document.getElementById('themeSelect');

  // Events
  renderAllTasks(objOfTasks);
  addShowMsg(arrOfTasks);

  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click', onDeleteTask);
  listContainer.addEventListener('click', onCompleteHandler);
  optionTasks.addEventListener('change', sortInput);
  selectTheme.addEventListener('change', onThemeSelect);

  function renderAllTasks(tasksList) {

    listContainer.textContent = '';

    if(!tasksList) {
      alert('No tasks list');
      return;
    };

    const fragment = document.createDocumentFragment();

    Object.values(tasksList).forEach(task => {
      const list = listItemTemplate(task);
      fragment.appendChild(list);
    });

    listContainer.appendChild(fragment);
  };

  function listItemTemplate({_id, title, body, completed} = {}) {

    const li = document.createElement('li');
    li.classList.add(
    'list-group-item',
    'd-flex',
    'align-items-center',
     'flex-wrap',
    'mt-2');

    li.setAttribute('data-completed', completed);
    li.setAttribute('data-task-id', _id);

    const span = document.createElement('span');
    span.style.fontWeight = 'bold';
    span.textContent = title;

    const deleteBtn = document.createElement('button');
    deleteBtn.classList.add(
    'btn',
    'btn-danger',
    'ml-auto',
    'delete-btn');
    deleteBtn.textContent = 'Delete';

    const completedBtn = document.createElement('button');
    completedBtn.classList.add(
      'btn',
      'btn-primary',
      'btn-completed',
      );
    completedBtn.textContent = 'Completed';


    const article = document.createElement('p');
    article.classList.add('mt-2', 'w-100');
    article.textContent = body;

    li.appendChild(span);
    li.appendChild(deleteBtn);
    li.appendChild(article);
    li.appendChild(completedBtn);

    if (completed === true) {
      li.style.background = '#9eb2cd99';
    };


    return li;
  };

  function onFormSubmitHandler(e) {
    e.preventDefault();

    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if(!titleValue || !bodyValue) {
      alert('Please enter task title, and body');
      return;
    };

    listContainer.insertAdjacentElement('afterbegin', listItemTemplate(createNewTask(titleValue, bodyValue)))
    form.reset();

  };

  function  createNewTask(title, body) {
    const newTask = {
      title,
      body,
      completed: false,
      _id: `${Date.now()}`
    };

    objOfTasks[newTask._id] = newTask;

    checkObjectLength(Object.keys(objOfTasks).length);

    return {...newTask};

  };

  function deleteTask(id) {
    const isConfirm = confirm(`Exactly remove: ${objOfTasks[id].title} ?`);
    if(!isConfirm) return isConfirm;
    delete objOfTasks[id];
    return isConfirm;
  };

  function deleteTaskFromHTML(confirmed, el) {
    if(!confirmed) return;
    el.remove();
  };

  function onDeleteTask({target}) {
    if (target.classList.contains('delete-btn')) {
      const parent = target.parentElement;
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHTML(confirmed,parent);
    };
    addShowMsg([], Object.keys(objOfTasks).length == 0);
  };

  function addShowMsg(task = [], obj = {}) {
    const msg = `
    <div class="card mt-5 card-info">
      <div class="card-body">
        No tasks !
      </div>
    </div>`;
    if((task.length == 0 && obj)) {
      card.insertAdjacentHTML('afterend', msg);
      return;
    };
  };

  function checkObjectLength(objTasks) {
    if(objTasks === 1) {
      const h1 = document.querySelector('.card-info');
      h1.remove();
    } else if(objTasks === 0){
      addShowMsg(objTasks);
    };
  };

  function onCompleteHandler({target}) {
    if(target.classList.contains('btn-completed')){
      const parent = target.parentElement
      const id = parent.dataset.taskId;
      if(!objOfTasks[id].completed) {
        objOfTasks[id].completed = true;
        taskCompletedMarker(objOfTasks[id], id);
      };
    };
  };

  function taskCompletedMarker(tasks, id) {
    const li = document.querySelectorAll('li');
    li.forEach(task => {
      const taskId = task.dataset.taskId;
      if (tasks.completed !== false && id === taskId) {
        task.dataset.completed = true;
        task.style.background = '#9eb2cd99';
      };
    });
  };

  function sortInput() {
    const sortValue = optionTasks.value;
    let resultContent;

    switch(sortValue) {
      case 'default':
        resultContent = Object.values(objOfTasks);
        break;

      case 'incomplete-tasks':
        resultContent = Object.values(objOfTasks).filter((task) => task.completed).reduce((acc, task) => {
          acc[task._id] = task;
          return acc;
        }, {});
        break;

      case 'completed-tasks':
        resultContent = Object.values(objOfTasks).filter((task) => !task.completed).reduce((acc, task) => {
          acc[task._id] = task;
          return acc;
        }, {});
        break;
    };
    renderAllTasks(resultContent);
  };

  function onThemeSelect(e) {
    const selectedTheme = selectTheme.value;
    const isConfirmed = confirm(`Chache theme: ${selectedTheme}`);
    if(!isConfirmed) {
      selectTheme.value = lastSelectedTheme;
      return;
    }
    setTheme(selectedTheme);
    lastSelectedTheme = selectedTheme;
  };

  function setTheme(name) {
    const selectedThemeObj = themes[name];

    Object.entries(selectedThemeObj).forEach(([key, value]) => {
      document.documentElement.style.setProperty(key, value);
    })
  };

};

getArrayOfTasks(tasks);