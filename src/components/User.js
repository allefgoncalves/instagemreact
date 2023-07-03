import { useState } from "react";

export default function User(){
    return (

<div className="usuario">
<img onClick={teste} src="assets/img/catanacomics.svg" alt="imagem de perfil" data-test="profile-image"/>
<div className="texto">
  <span>
    <strong data-test="name">catanacomics</strong>
    <ion-icon onClick={teste} name="pencil" data-test="edit-name"></ion-icon>
  </span>
</div>
</div>
    );
}

function teste(){
  console.log("teste da função 2");
}