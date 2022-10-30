import React from 'react';
import './about.css';
import CardItem from './CardItem';

const About = () => {
    return (
        <div className='cards'>
          <h1>Bank Mandiri General News</h1>
          <div className='cards__container'>
            <div className='cards__wrapper'>
              <ul className='cards__items'>
                <CardItem
                  src='images/1.jpg'
                  text='Bank Mandiri Hadir Lebih Digital dan Kekinian'
                  label='Click'
                  path='/services'
                />
                <CardItem
                  src='images/2.jpg'
                  text='Bank Mandiri Hadir Lebih Digital dan Kekinian'
                  label='Click'
                  path='/services'
                />
              </ul>
              <ul className='cards__items'>
                <CardItem
                  src='images/3.jpg'
                  text='Bank Mandiri Hadir Lebih Digital dan Kekinian'
                  label='Click'
                  path='/services'
                />
                <CardItem
                  src='images/4.jpg'
                  text='Bank Mandiri Hadir Lebih Digital dan Kekinian'
                  label='Click'
                  path='/products'
                />
                <CardItem
                  src='images/5.jpg'
                  text='Bank Mandiri Hadir Lebih Digital dan Kekinian'
                  label='Click'
                  path='/sign-up'
                />
              </ul>
            </div>
          </div>
        </div>
      );
    }

export default About;