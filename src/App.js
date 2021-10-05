import React from 'react';
import { useState } from 'react';
import './styles/main.css';
import Header from './componets/Header';
import Main from './componets/Main';
import TextInput from './componets/TextInput';
import getNewId from './services/idServices';
import Button from './componets/Button';
import mock_data from './mock-data.json';
import { Fragment } from 'react/cjs/react.production.min';
import Input from './componets/Input';
export default function App() {
  //useState pesagem inputText

  return (
    <Fragment>
      <Main className="posts">
        {mock_data.map(post => {
          return (
            <div key={post.id} className="post">
              <h3>{post.id}</h3>
              <h3>{post.peso}</h3>
            </div>
          );
        })}
      </Main>
    </Fragment>
  );
}
