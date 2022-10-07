import React, { useState } from 'react';
import './App.css'
import FormInput from './components/FormInput/FormInput'
import TextAreas from './components/TextArea/Textareas';
import maskPhone from './utils/mask';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import { Modal } from './components/Modal';


function App(props) {


  const [modalActive, setModalActive] = useState(true)

  maskPhone('.tel')

  const onCancel = (e) => {
    e.preventDefault();
    const inputs = document.querySelectorAll('input');
    const textareas = document.querySelectorAll('textarea');
    [...inputs, ...textareas].map((item, index) => (index, item.value = ''));
    document.getElementById('myDiv').remove('active')
  };


  const [values, setValues] = useState({
    username: '',
    secondName: '',
    birthday: '',
    phone: '',
    site: '',
    self: '',
    stack: '',
    lastProject: ''
  })

  const inputs = [
    {
      id: 1,
      name: 'Имя',
      type: 'text',
      placeholder: 'Имя',
      errorMessage: 'Имя должно начинаться с большой буквы и быть без чисел (RU)',
      label: 'Имя',
      pattern: '^[А-Я][а-яА-Я]+$',
      required: true
    },
    {
      id: 2,
      name: 'Фамилия',
      type: 'text',
      placeholder: 'Фамилия',
      errorMessage: 'Фамилия должна начинаться с большой буквы и быть без чисел (RU)',
      label: 'Фамилия',
      pattern: '^[А-Я][а-яА-Я]+$',
      required: true
    },
    {
      id: 3,
      name: 'Дата рождения',
      type: 'date',
      placeholder: 'Дата рождения',
      errorMessage: 'Введите дату',
      label: 'Дата рождения',
      required: true
    },
    {
      id: 4,
      name: 'Телефон',
      className: 'tel',
      type: 'tel',
      placeholder: 'Телефон',
      errorMessage: 'Введите полный номер',
      label: 'Телефон',
      maxlength: '18',
      'data-tel-input': '',
      required: true
    },
    {
      id: 5,
      name: 'Сайт',
      type: 'text',
      placeholder: 'https://',
      errorMessage: 'Сайт некорректный',
      label: 'Сайт',
      pattern: 'https://.*',
      required: true
    }
  ]
  const textareas = [
    {
      id: 1,
      name: 'О себе',
      type: 'textarea',
      placeholder: 'О себе',
      errorMessage: 'Расскажите о себе :)',
      label: 'О себе',
      required: true
    },
    {
      id: 2,
      name: 'Стек технологий',
      type: 'textarea',
      placeholder: 'Стек технологий',
      errorMessage: 'Что вы использовали',
      label: 'Стек технологий',
      required: true
    },
    {
      id: 3,
      name: 'Последний проект',
      type: 'textarea',
      placeholder: 'Последний проект',
      errorMessage: 'нет проекта??(',
      label: 'Последний проект',
      required: true
    }
  ]
  // Используем formData и записываем данные в res{}
  const handleSubmitForm = (event) => {
    const formData = new FormData(event.currentTarget);
    event.preventDefault();
    const res = {}
    for (let [key, value] of formData.entries()) {
      console.log(key + ':', value)
      res[key] = value
    }

    for (let key in res) {
      document.getElementById("myDiv").innerHTML += key + ': ' + res[key] + '<br>'
    }
    document.getElementById('myDiv').classList.add('active')




    // console.log(JSON.stringify(res, null, 1));
  };


  const onChange = (e) => {
    setValues({ ...values, [e.target.name]: e.target.value.trim() })
  }

  // const hanSub = (e) => {
  //   e.preventDefault()
  //   // let keys = Object.keys(values)
  //   // console.log(keys);

  //   // let val = Object.values(values)
  //   // console.log('keys: ' + keys + '  ' + val);

  //   let ent = Object.entries(values)

  //   ent.map(([index, item]) => console.log(index, item))
  // }




  return (
    <div className="form-wrapper">
      <div id="myDiv"></div>
      <form onSubmit={handleSubmitForm}>
        <h1>Создание анкеты</h1>
        {inputs.map(input => (
          <FormInput
            key={input.id}
            {...input}
            value={values[input.name]}
            onChange={onChange}
            onkeydown={onkeydown} />

        ))}
        {textareas.map(textarea => (
          <TextAreas
            key={textarea.id}
            {...textarea}
            value={values[textarea.name]}
            onChange={onChange}
            onkeydown={onkeydown} />
        ))}
        <button type='submit' onClick={onCancel}>Очистить поля</button>
        <button type='submit' onClick={handleSubmitForm}>Сохранить анкету</button>
        <Link className='link-nav' to="/">Хочу обратно</Link>
        <Link className='link-nav' to="/modal">Посмотреть результаты</Link>
      </form >
    </div >
  )
}

export default App;
