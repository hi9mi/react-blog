import React from 'react'

export default function Subscribe() {
  return (
    <div className='sub__bg'>
    <div className='container'>
      <div className='sub__title'>
        <h2>Подписаться</h2>
      </div>
      <div className='sub__items'>
        <div className='sub__item'>
          <i className='fab fa-telegram'></i>
          <a href='/'>Telegram</a>
        </div>
        <div className='sub__item'>
          <i className='fab fa-facebook'></i>
          <a href='/'>Facebook</a>
        </div>
        <div className='sub__item'>
          <i className='fab fa-instagram'></i>
          <a href='/'>Instagram</a>
        </div>
        <div className='sub__item'>
          <i className='fas fa-envelope'></i>
          <a href='/'>Email</a>
        </div>
      </div>
    </div>
  </div>
  )
}
