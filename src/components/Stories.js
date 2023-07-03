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
        {stories.map(stories=><Storiesrender imagem1={stories.imagem} user1= {stories.user}/>)}
        <div className="setinha">
          <ion-icon name="chevron-forward-circle"></ion-icon>
        </div>
      </lu>
    );

}

function Storiesrender(props){
return(
<div className="story">
          <div className="imagem">
            <img src={props.imagem1} alt={props.user1}/>
          </div>
          <div className="usuario">
            {props.user1}
          </div>
        </div>
);
} 