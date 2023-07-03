export default function Posts(){
  
  const post =[
    {imagem_user:"assets/img/meowed.svg", name:"meoweb", imagem_post:"assets/img/gato-telefone.svg", imagem_curtido:"assets/img/respondeai.svg", name_curtido:"respondeai", curtidasM:7,curtidas:790},
    {imagem_user:"assets/img/adorable_animals.svg", name:"adorable_animals", imagem_post:"assets/img/dog.svg", imagem_curtido:"assets/img/razoesparaacreditar.svg", name_curtido:"razoesparaacreditar", curtidasM:14,curtidas:429},
    {imagem_user:"assets/img/catanacomics.svg", name:"catanacomics", imagem_post:"assets/img/post.jpg ", imagem_curtido:"assets/img/smallcutecats.svg", name_curtido:"smallcutecats",curtidasM:0,curtidas:917}
  ]

  return (
      <lu className="posts">
        {post.map((post)=><Post imagem1={post.imagem_user} name1= {post.name} imagemP={post.imagem_post} imagem2={post.imagem_curtido} name2={post.name_curtido} curtidas1={post.curtidasM} curtidas2={post.curtidas}/>)}
      </lu>
    );
}

function Post(props){
  return(
    <li className="post" data-test="post">
          <div className="topo">
            <div className="usuario">
              <img src={props.imagem1} alt={props.imagem1}/>
              {props.name1}
            </div>
            <div className="acoes">
              <ion-icon name="ellipsis-horizontal"></ion-icon>
            </div>
          </div>

          <div className="conteudo">
            <img onClick="" src={props.imagemP} alt={props.imagemP} data-test="post-image"/>
          </div>

          <div className="fundo">
            <div className="acoes">
              <div>
                <ion-icon onClick="" name="heart-outline" data-test="like-post"></ion-icon>
                <ion-icon onClick="" name="chatbubble-outline"></ion-icon>
                <ion-icon onClick="" name="paper-plane-outline"></ion-icon>
              </div>
              <div>
                <ion-icon onClick="" name="bookmark-outline" data-test="save-post"></ion-icon>
              </div>
            </div>

            <div className="curtidas">
              <img src={props.imagem2} alt={props.name2}/>
              <div className="texto">
              Curtido por <strong>{props.name2}</strong> e <strong data-test="likes-number">outras {props.curtidas1}.{props.curtidas2} pessoas</strong>
              </div>
            </div>
          </div>
        </li>
  );
}