import { useState } from "react";

export default function Stories(){
  const stories=[
    {imagem:"assets/img/9gag.svg",user:"9gag"},
    {imagem:"assets/img/meowed.svg",user:"meowed"},
    {imagem:"assets/img/barked.svg",user:"barked"},
    {imagem:"assets/img/nathanwpylestrangeplanet.svg",user:"nathanwpylestrangeplanet"},
    {imagem:"assets/img/wawawicomics.svg",user:"wawawicomics"},
    {imagem:"assets/img/respondeai.svg",user:"respondeai"},
    {imagem:"assets/img/filomoderna.svg",user:"filomoderna"},
    {imagem:"assets/img/memeriagourmet.svg",user:"memeriagourmet"},
  ]


    return (
      <lu className="stories">
        {stories.map(stories1=><Storiesrender imagem1={stories.imagem} user1= {stories1.user}/>)}
        

        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </lu>
    );

}

function Storiesrender(){
return(
<div className="story">
          <div className="imagem">
            <img src={imagem1} alt={user1}/>
          </div>
          <div className="usuario">
            {user1}
          </div>
        </div>
);
} 