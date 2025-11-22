# Site de imobiliária com Consumo de API, Fetch, JSON, Promise, Create Element com HTML, CSS e JavaScript.

[Acesse o site](https://prof-marneicardoso.github.io/imobiliaria-fs50/)

### Link da MockAPI utilizado no projeto:
https://690f565745e65ab24ac355d4.mockapi.io/api/imoveis

> Crie sua própria API: https://mockapi.io/

### Como usar o sistema

1. Instale a extension Thunder Client

![Thunder Client](assets/image-01.png)

2. Abra o Thunder Client e clique em **New Request** (nova requisição)

3. Altere o tipo para **POST** e cole o link da API (mostrado anteriormente)

![alt text](assets/image-02.png)

4. Vá em **Body** > **JSON** e cole o JSON com as informações (conforme o modelo)

![alt text](assets/image-03.png)

5. Clique em **Send** para enviar, via POST, os dados do JSON e cadastrar na API.

6. Deve mostrar o **Status: 201** que significa que foi criado.

![alt text](assets/image-04.png)

Qualquer outro número de status significa erro para esta situação, que podem ser conferidas no site HTTP Cats: https://http.cat/

#### Os mais comuns:

```
200: conexão OK  
201: criado  
404: não encontrado o endereço  
500: erro interno do servidor
```
