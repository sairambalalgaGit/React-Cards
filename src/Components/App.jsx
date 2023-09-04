import React from "react";
import Card from './Card';
import contacts from "../contacts";

function createCard(contact){
    return (<Card 
            id = {contact.id}
            key = {contact.id}
            name = {contact.name}
            img = {contact.imgURL}
            tagline ={contact.tagline}
            description ={contact.description}
        />
    );
}

function App(){

    return <div>

        <h1 className="heading">My Dancers</h1>

        {contacts.map(createCard)}
       {/* <Card 

            name = {contacts[0].name}
            img ={contacts[0].imgURL}
            tagline = {contacts[0].tagline}
            description = {contacts[0].description}
        />
        <Card 
                 name = {contacts[1].name}
                 img ={contacts[1].imgURL}
                 tagline = {contacts[1].tagline}
                 description = {contacts[1].description}
        />
        <Card 

            name = {contacts[2].name}
            img ={contacts[2].imgURL}
            tagline = {contacts[2].tagline}
            description = {contacts[2].description}
        />
        <Card 

            name = {contacts[3].name}
            img ={contacts[3].imgURL}
            tagline = {contacts[3].tagline}
            description = {contacts[3].description}
        />
    */}
    </div>;
}


export default App;