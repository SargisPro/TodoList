const tasks = [
  {
    _id: '5d2ca9e2e03d40b326596aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095c1288e0',
    completed: false,
    body:
      'Aliquip cupidatat ex adipisicing veniam do tempor. Lorem nulla adipisicing et esse cupidatat qui deserunt in fugiat duis est qui. Est adipisicing ipsum qui cupidatat exercitation. Cupidatat aliqua deserunt id deserunt excepteur nostrud culpa eu voluptate excepteur. Cillum officia proident anim aliquip. Dolore veniam qui reprehenderit voluptate non id anim.\r\n',
    title:
      'Deserunt laborum id consectetur pariatur veniam occaecat occaecat tempor voluptate pariatur nulla reprehenderit ipsum.',
  },
  {
    _id: '5d2ca9e2e03d40b3232496aa7',
    completed: true,
    body:
      'Occaecat non ea quis occaecat ad culpa amet deserunt incididunt elit fugiat pariatur. Exercitation commodo culpa in veniam proident laboris in. Excepteur cupidatat eiusmod dolor consectetur exercitation nulla aliqua veniam fugiat irure mollit. Eu dolor dolor excepteur pariatur aute do do ut pariatur consequat reprehenderit deserunt.\r\n',
    title: 'Eu ea incididunt sunt consectetur fugiat non.',
  },
  {
    _id: '5d2ca9e29c8a94095564788e0',
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

  // Elemets UI
  const listContainer = document.querySelector('.tasks-list-section .list-group');
  const form = document.forms['addTask'];
  const inputTitle = form.elements['title'];
  const inputBody = form.elements['body'];


  // Events
  renderAllTasks(objOfTasks);
  form.addEventListener('submit', onFormSubmitHandler);
  listContainer.addEventListener('click', onDeleteTask);

  function renderAllTasks(tasksList) {
    if(!tasksList) {
      alert('No tasks list');
      return;
    };

    Object.values(tasksList).forEach(task => {
      const list = listItemTemplate(task);
    });
  };

  function listItemTemplate({_id, title, body} = {}) {
    const task = `
    <li  class="list-group-item d-flex align-items-center flex-wrap mt-2" data-task-id="${_id}">
      <span style=" font-weight: bold">${title}</span>
      <button class="btn btn-danger ml-auto delete-btn">Delete</button>
      <p class="mt-2 w-100">
        ${body}
      </p>
    </li>
    `;
    listContainer.insertAdjacentHTML('afterbegin', task);
  };

  function onFormSubmitHandler(e) {
    e.preventDefault();

    const titleValue = inputTitle.value;
    const bodyValue = inputBody.value;

    if(!titleValue || !bodyValue) {
      alert('Please enter task title, and body');
      return;
    };

    const task = createNewTask(titleValue, bodyValue);
    listItemTemplate(task);
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

    return {... newTask};

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
    if (target.classList.contains('delete-btn') ) {
      const parent = target.parentElement;
      const id = parent.dataset.taskId;
      const confirmed = deleteTask(id);
      deleteTaskFromHTML(confirmed,parent);
    };
  };
};

getArrayOfTasks(tasks);