import * as React from 'react';
import './style.css';



interface UserCardPropsTypes{
  name:string;
  age:String;
  books:String;
  level:String
  imageUrl:any; }
  
  interface BookCardPropsTypes{
    title:string;
    emoji:String;
    }


 const books=[
{title:'Kniha1',
  emoji:'📕',},

{title:'Kniha2',
  emoji:'📘',},

  {title:'Kniha3',
emoji:'📗',
},];   
  
  function UCard({ name, age, books, level, imageUrl }: UserCardPropsTypes) {
    return (
      <div>
        <h1>{name}</h1>
        <ul>
          <li>{age}</li>
          <li>{books}</li>
          <li>{level}</li>
          </ul>
          <img src={imageUrl} alt={name} />
      </div>
    );
  }
  
  function BCard({ title, emoji,}: BookCardPropsTypes) {
    return (
      <div>
        <h4>{title}</h4>
        <p>{emoji}</p>
        
      </div>
    );
  }
  
  
  export default function Card() {
    return (
      <main>
        <UCard name="Petr Rychly" age="Věk:18" books="Moje knihy:4" level="Level:4" imageUrl="https://uybor.uz/borless/uybor/img/user-images/user_no_photo_600x600.png" />
        <div>
         {books.map(({title, emoji,}) => <BCard title={title} emoji={emoji}/>)}
        </div>
      </main>
    );
  }