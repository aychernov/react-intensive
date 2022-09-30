import { Component } from 'react';
import './App.css'


class App extends Component {
  constructor(props) {
    super(props)

    // Все инпуты и техтареа очищаем поля со значением
    this.onCancel = (e) => {
      e.preventDefault();
      const inputs = document.querySelectorAll('input');
      const textareas = document.querySelectorAll('textarea');
      [...inputs, ...textareas].map((item) => (item.value = ''));
    };

    // Используем formData и записываем данные в res{}
    this.handleSubmit = (event) => {
      const formData = new FormData(event.currentTarget);
      event.preventDefault();
      const res = {}
      for (let [key, value] of formData.entries()) {
        // console.log(key + ':', value)
        res[key] = value
      }
      alert(JSON.stringify(res, null, 1));
    };

  }




  render() {
    return (
      <div className="wrapper">
        <h1 className='head'>Создание анкеты</h1>
        <form id='myForm' onSubmit={this.handleSubmit}>
          <label htmlFor="name">
            Имя
            <input name="name" type="text" placeholder="Имя" required />
          </label>
          <label htmlFor="secondname">
            Фамилия
            <input name="secondname" type="text" placeholder="Фамилия" required />
          </label>
          <label htmlFor="birthday">
            Дата рождения
            <input name="birthday" type="date" placeholder="Дата рождения" required />
          </label>
          <label htmlFor="phone">
            Телефон
            <input name="phone" type="number" placeholder="Телефон" required />
          </label>
          <label htmlFor="site">
            Сайт
            <input name="site" type="text" placeholder="Сайт" required />
          </label>
          <label htmlFor="about">
            О себе
            <textarea rows={7} name="about" type="text" placeholder="О себе" required />
          </label>
          <label htmlFor="stack">
            Стек технологий
            <textarea
              rows={7}
              name="stack"
              type="text"
              placeholder="Стек технологий"
              required
            />
          </label>
          <label htmlFor="project">
            Описание последнего проекта
            <textarea
              rows={7}
              name="project"
              type="text"
              placeholder="Описание последнего проекта"
              required
            />
          </label>
          <button className="cancel" onClick={this.onCancel}>
            Отмена
          </button>
          <button className="save" type='submit'>
            Сохранить
          </button>
        </form>
      </div>
    );
  }
}

export default App;
