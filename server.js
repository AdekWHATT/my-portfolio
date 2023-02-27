// Создаем новый файл в корневом каталоге под названием server.js.
// В server.js, требуем express пакет и создаем новый экземпляр приложения:
const express = require('express');
const app = express();
// Определяем маршрут, который обслуживает статические файлы для нашего приложения React. Это позволит нашему Node.js сервер для обслуживания нашего приложения React.
app.use(express.static('build'));
// Примечание: create-react-app создает приложение React в каталог, вызываемый build по умолчанию. 
// Если мы изменили каталог сборки, обязательно нужно обновить путь в приведенном выше фрагменте кода.
// Определм универсальный маршрут, который обслуживает index.html файл. Это позволит нашему маршрутизатору React обрабатывать маршрутизацию на стороне клиента.
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
  });
// Примечание: нам нужно будет запросить path модуль в верхней части нашего server.js файла:
const path = require('path');
// Запустим сервер, прослушивая порт. Добавим следующий код в нижнюю часть нашего server.js файла:
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


// Примечание: Приведенный выше код задает номер порта process.env.PORT, если он существует 
// (полезно для хостинговых платформ, таких как Heroku), или по умолчанию используется порт 5000.
// В свой package.jsonфайл добавим новый скрипт с именем start:server:

// {
//     "scripts": {
//       "start": "react-scripts start",
//       "start:server": "node server.js",
//       "build": "react-scripts build",
//       "test": "react-scripts test",
//       "eject": "react-scripts eject"
//     }
//   }


// Запустим Node.js сервер, выполнив следующую команду в нашем терминале:

// npm run start:server