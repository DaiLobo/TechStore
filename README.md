<div align="center">
  <img src="https://github.com/DaiLobo/TechStore/assets/47689708/088fe91c-9b44-46ce-b93f-598c302dfb5b" alt="techstore">
</div>

<h4 align="center"> 
	🚧 Em desenvolvimento: Acesse o projeto <a href="">TechStore</a>
</h4>

## 📝 Sobre

Este é um projeto em React com Redux de uma loja de eletrônicos no qual o usuário pode favoritar item, adicionar no carrinho, fazer pesquisa de produtos e anunciar seu próprio produto. 

<br>

<div align="center">
  <img src="https://github.com/DaiLobo/TechStore/assets/47689708/7312ec08-6976-4f90-b688-f59913706a76" alt="Página inicial">
</div>

## 📱 Índice

<br>
<p align="center">
 <a href="#-pré-requisitos">Pré-requisitos</a> •
 <a href="#-instalação">Instalação</a> • 
 <a href="#%EF%B8%8F-executando-o-projeto">Executando o Projeto</a> • 
 <a href="#-funcionalidades-do-projeto">Funcionalidades do projeto</a> • 
 <a href="#-layout">Layout</a> • 
 <a href="#-tecnologias">Tecnologias</a> • 
 <a href="#%EF%B8%8F-autora">Autora</a>
</p>
<br>

## 📋&nbsp; Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas:
[Git](https://git-scm.com), [Node.js](https://nodejs.org/en/). 
Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/)

## 🔧 Instalação

```bash
# Clone este repositório
$ git clone https://github.com/seu-usuario/TechStore.git

# Acesse a pasta do projeto no terminal/cmd
$ cd techstore

# Instale as dependências
$ yarn
```

## ⌨️ Executando o Projeto

Nesse projeto além do front-end, temos um servidor que precisamos rodar para pegar os items de produtos do "banco de dados" que é um arquivo json.

Para rodar a aplicação execute em um terminal o seguinte comando:
```bash
yarn start
```
A aplicação estará disponível em http://localhost:3000.

Para rodar o servidor que pegará os itens dos produtos execute um segundo terminal e digite o seguinte comando:
```bash
yarn server
```
A aplicação estará disponível em http://localhost:3001.

<hr/>

## 💻 Funcionalidades do projeto

Ao acessar a página inicial, o usuário será apresentado a opções de categorias de eletrônicos, incluindo automotivo, jogos, escritório, som e imagem; e muito mais. Cada categoria contém uma variedade de produtos correspondentes. Ao clicar em uma categoria específica, o usuário será redirecionado para uma página onde encontrará todos os produtos relacionados a essa categoria. Isso facilita a busca pelos itens que você está interessado. Ademais, existe um campo de pesquisa para busca do produto.

Cada produto da aplicação vem com várias opções de interação:

<ul>
  <li>Favoritar: Usuário pode favoritar seus produtos favoritos, permitindo fácil acesso posteriormente.</li>
  <li>Adicionar ao Carrinho: Adicionar produtos ao seu carrinho de compras com facilidade. O usuário pode especificar a quantidade desejada de cada item.</li>
  <li>Editar Nome do Produto: Se desejar, o usuário pode editar o nome de um produto para melhor atender às suas preferências ou necessidades.</li>
</ul>

Além de comprar produtos, o usuário também pode anunciar seus próprios produtos na nossa plataforma. Para isso, oferecemos um formulário intuitivo onde ele possa fornecer detalhes sobre o produto que deseja vender:

<ul>
  <li>
    Nome do Produto: Insira o nome do seu produto.
  </li>
  <li>
    Descrição: Descreva seu produto de forma detalhada para atrair potenciais compradores.
  </li>
  <li>
    URL da Imagem: Forneça um link para a imagem do seu produto.
  </li>
  <li>
    Categoria: Selecione a categoria à qual seu produto pertence.
  </li>
  <li>
    Preço do Produto: Defina o preço pelo qual você está vendendo seu produto.
  </li>
</ul>

Ao adicionar produtos ao carrinho, o usuário terá a opção de especificar a quantidade desejada. Pode aumentar ou diminuir a quantidade de cada item no carrinho de forma intuitiva, ajustando de um em um.

<hr/>

## 🖨 Layout

### Página inicial - Categorias
  <img src="https://github.com/DaiLobo/TechStore/assets/47689708/fb1a386b-4e49-4d28-a444-ba8a30040e07" alt="Página inicial - Categorias">

### Página de produtos
  <img src="https://github.com/DaiLobo/TechStore/assets/47689708/4ab51843-d5ef-47da-a796-137654dd20f6" alt="Produtos">

### Carrinho de compras
  <img src="https://github.com/DaiLobo/TechStore/assets/47689708/0f61e2b7-a52a-422d-be06-7ae9ccc1cccc" alt="Carrinho de compras">
  
### Página do cadastro de produto para anunciar
  <img src="https://github.com/DaiLobo/TechStore/assets/47689708/9a20182e-42d4-473b-9b65-d32fbe781188" alt="Anuncie aqui">



<hr/>

## 🔌 Tecnologias
<div align="center">
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" height="40" width="52" alt="react logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" height="40" width="52" alt="js logo"  />
  <img src="https://github.com/DaiLobo/TechStore/assets/47689708/2b04824b-898b-47ef-b807-1a52ce3de43b" height="40" width="40" alt="scss logo"   />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg" height="40" width="52" alt="git logo"  />
  <img src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg" height="40" width="52" alt="github logo" />                                   
</div>
<hr/>

## ✒️ Autora
Desenvolvido com 💜 por Diana Rose
