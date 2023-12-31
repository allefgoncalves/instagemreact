import { useState } from "react";

export default function Posts(){

  const post =[
    {imagem_user:"assets/img/meowed.svg", name:"meoweb", imagem_post:"assets/img/gato-telefone.svg", imagem_curtido:"assets/img/respondeai.svg", name_curtido:"respondeai", curtidasM:7,curtidas:790},
    {imagem_user:"assets/img/adorable_animals.svg", name:"adorable_animals", imagem_post:"assets/img/dog.svg", imagem_curtido:"assets/img/razoesparaacreditar.svg", name_curtido:"razoesparaacreditar", curtidasM:14,curtidas:429},
    {imagem_user:"assets/img/catanacomics.svg", name:"catanacomics", imagem_post:"assets/img/post.jpg ", imagem_curtido:"assets/img/smallcutecats.svg", name_curtido:"smallcutecats",curtidasM:0,curtidas:995}
  ]

  return (
      <lu className="posts">
        {post.map(post=><Post imagem1={post.imagem_user} name1= {post.name} imagemP={post.imagem_post} imagem2={post.imagem_curtido} name2={post.name_curtido} curtidas1={post.curtidasM} curtidas2={post.curtidas}/>)}
      </lu>
    );
}

function teste(){
  console.log("teste de função");
}

function Post(props){

  let [imagem1, setImagem1] = useState(props.imagem1);
  let [imagem2, setImagem2] = useState(props.imagem2);
  let [name1, setName1] = useState(props.name1);
  let [name2, setName2] = useState(props.name2);
  let [curtidas1, setCurtidas1] = useState(props.curtidas1);
  let [curtidas2, setCurtidas2] = useState(props.curtidas2);
  let [imagemP, setImagemP] = useState(props.imagemP);
  let [cor, setCor] = useState('black');
  let [icon, setIcon] = useState('heart-outline');


  function curtir(){
    if(cor == 'red'){
      setIcon('heart-outline');
      setCor('black')
    }
    if(cor == 'black'){
      setIcon('heart');
      setCor('red');
      curtidas2++;
      setCurtidas2(curtidas2);
      if(curtidas2==1000){
        curtidas1++;
        setCurtidas1(curtidas1);
        curtidas2=0; 
        setCurtidas2(curtidas2);
      }
   
    }
  }

  return(
    <li className="post" data-test="post">
          <div className="topo">
            <div className="usuario">
              <img src={imagem1} alt={imagem1}/>
              {name1}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
             <button onDoubleClick={curtir}><img src={imagemP} alt={imagemP} data-test="post-image"/></button>
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon style={{color: cor}} onClick={curtir} name={icon} data-test="like-post"></ion-icon>
                <ion-icon onClick={teste} name="chatbubble-outline"></ion-icon>
                <ion-icon onClick={teste} name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick="" name="bookmark-outline" data-test="save-post"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={imagem2} alt={name2}/>
              <div className="texto">
              Curtido por <strong>{name2}</strong> e <strong data-test="likes-number">outras {(curtidas1!=0) ?`${curtidas1}.${curtidas2}`:`${curtidas2}`} pessoas</strong>
              </div>
            </div>
          </div>
        </li>
  );
}
