# 🌟 Pi4️
Um repositório que contém o código-fonte de Projecto Integrado IV

# 📁 Pastas

#### backend/
É um servidor Node Express, com ligação Sequelize a uma base de dados Postgres. O Back Office, website, e aplicação móvel vêm buscar aqui conteúdo.

#### backoffice/
É uma aplicação em React criada para a gestão administrativa da aplicação móvel.

#### sql_scripts/
É uma pasta que guarda vários scripts úteis ao desenvolvimento do projeto. Útil quando alteramos o model/tabelas.js e precisamos que o sequelize crie de raiz uma base de dados vazia.

#### website/
É uma aplicação em React como o back office, mas serve apenas para publicitar a aplicação móvel. Menos complexa do que o back office. Poderá ser um site estático, ou em formato de blog (com capacidade de adicionar/gerir os artigos a partir do back office)


# 📚 Como usar

1. Importa o repositório no Github Desktop, indo a 'File' -> 'Clone repository' 💯
2. Depois de teres o repositório no pc, vai a 'Repository' -> 'Open in Visual Studio Code' para o veres! 👀
3. *Instalar tudo e mais alguma coisa!* Aqui está um script para instalar todos os módulos necessários. Copia e cola na consola do VS Code! **Só precisas de fazer isto uma vez!**

```
cd backend;
npm i;
cd ../backoffice;
npm i;
cd ../website;
npm i;
cd ..
``` 
Este último passo demora cerca de 10 minutos. Pagas o café? ☕

# 🧪 Testar localmente

Podes iniciar os serviços das pastas backend, backoffice e website. Para cada pasta uma consola nova!

| Pasta      | Comando       | Port |
| :--------- |:------------- |:---- |
| backend    | `npm run dev` | 4001 |
| backoffice | `npm start`   | 4002 |
| website    | `npm start`   | 4003 |

**Nota:** Podes iniciar o backend com `npm start` também, mas para desenvolver o projeto não é aconselhado porque não atualiza automaticamente o servidor quando há alterações.
