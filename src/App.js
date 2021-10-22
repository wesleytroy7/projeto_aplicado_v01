import React, { useRef, useEffect, useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import axios from 'axios';
import './styles/main.css';
import Header from './componets/Header';
import Main from './componets/Main';
import { Form } from '@unform/web';
import Mock_Data from './mock-data.json';
import { Fragment } from 'react/cjs/react.production.min';
import Input from './componets/form/Input';
import Button from './componets/form/Button';
import Table from './componets/Table/Table';
export default function App() {
  function handleSubmit(data) {
    console.log(data);
  }
  return (
    <Fragment>
      <Header>UTI</Header>
      <Main>
        <Form onSubmit={handleSubmit}>
          <Input type="date" name="date" />
          <Input type="number" name="number" />

          <Button textButton="Editar" />
        </Form>

        {Mock_Data.map(post => {
          return (
            <Table
              keyId={post.id}
              captiontable="Maquina Leve"
              thHeadCell="Peso Kg"
              tdDataCell={post.peso}
            ></Table>
          );
        })}
      </Main>
    </Fragment>
  );
}
