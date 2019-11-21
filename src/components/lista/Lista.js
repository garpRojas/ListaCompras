import React, { Component } from 'react';
import './lista.css';
import Item from '../item/item';
import Form from '../form/form';
import Data from "../data/data.json"; 

const listData = Data.list;

const Lista = () => {
    
    const listItems = listData.map((d) => <Item titulo={d.titulo} notas={d.notas} precio={d.precio} lugar={d.lugar} user={d.user} date={d.date} comprado={d.comprado}/>);
                                   
    const myFunction = function(){
        alert("testing function");
    }
    
        return(
<div>
    <header className="title-list ">
        <h1>Lista de Cosas por Comprar</h1>
    </header>

    <Form />
    <div className="list-group col-lg-6 col-sm-10 offset-lg-3 offset-sm-1">
      {listItems }
    </div>
</div>

        )
}
            
export default Lista;