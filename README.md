# Coffee Delivery 1.0 :coffee:

Esta solução é baseada no curso Rocketseat - Coffee Delivery Desafio prático. 

## Índice

- [Visão geral](#visão-geral)
   - [Captura de tela](#sobre-o-projeto)
   - [Links](#links)
- [Meu processo](#meu-processo)
   - [Construído com](#construído-com)
   - [O que aprendi](#o-que-aprendi)
- [Autor](#autor)

# Visão geral

Coffee Delivery - é um sistema prático de compras de café online. Os usuários podem explorar uma variedade de cafés, escolher a quantidade desejada e adicioná-los ao carrinho de compras. O sistema inclui uma funcionalidade de carrinho, onde os usuários podem inserir o endereço de entrega com busca automática por CEP via [ViaCEP]. Além disso, oferece opções de escolha de pagamento, a capacidade de ajustar a quantidade de cafés no carrinho e a remoção fácil de itens específicos. O valor total do pedido é exibido, e ao concluir a compra, os usuários são redirecionados para uma página com detalhes, incluindo o endereço de entrega e a forma de pagamento escolhidos.

### Captura de tela
  <img  title="HomeImage" src="./src/assets/ImagemDelivery.png" width="90%">


## Links

- Solução URL: 
- Live Site URL: 

## Meu processo

### Construido com

- [ReactJS]
- [Typescript]
- [React Router DOM]
- [Styled Components]
- [Context API]
- [Reducer](https://react.dev/reference/react/useReducer)
- [Effect Hook]
- [Axios]
- [Phosphor Icons]
- [React Input Mask]
- [UUID]
- [ImmerJS](https://immerjs.github.io/immer/)

### O que aprendi

Durante o desenvolvimento deste projeto, adquiri habilidades essenciais, incluindo:

- Utilização eficaz do Styled Components para estilizar componentes de forma modular e reutilizável.
- Implementação do ImmerJS em conjunto com o Reducer para facilitar a manipulação do estado de forma imutável, melhorando a previsibilidade e legibilidade do código.

````JS Styled Components
      export const GlobalStyle = createGlobalStyle`
        body {
          background: ${(props) => props.theme.white};
          color: ${(props) => props.theme['base-text']};
          -webkit-font-smoothing: antiliased;
        }
      `
````

````JS Recuder - Immer
      switch (action.type) {
        case ActionTypes.ADD_ADDRESS: {
          return produce(state, (draft) => {
            draft.address = action.payload.newAddress
          })
        }
      }
````

## Autor

- Site - [Celio Junior](https://www.linkedin.com/in/celio-junior-152529193/)
