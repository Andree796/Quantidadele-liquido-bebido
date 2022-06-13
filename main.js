const botao = document.querySelector('#button');
const input = document.querySelector('#input');
const spanLiquido = document.querySelector('#liquido')


botao.addEventListener('click', () => {
  function litros(tempo){
    if(tempo != 0){
      //console.log(0.5 * tempo);
      spanLiquido.innerHTML=`A quantidade de água bebida foi de: ${Math.floor(0.5 * tempo)} litros!`;
      //Math.floor <- arredonda para valor menor
      //Math.ceil <- arredonda para valor maior
    }else{
      spanLiquido.innerHTML='Não foi feito nenhum tempo!';
    }
  }

  litros(input.value);
  setTimeout(litros(input.value), 100);

});

