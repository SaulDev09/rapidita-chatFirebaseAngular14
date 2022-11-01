# Chat de Firebase con Angular 14

![Screen Shot 2022-11-01 at 19 54 10](https://user-images.githubusercontent.com/54446713/199315193-2fa7c67c-a1ba-4b9f-952f-5ffc1a2041c0.png)

## Parte 1. Firebase
1. Buscar google firebase console
2. Login con tu cuenta de google
3. Create Project o Add Project
4. Nombre de proyecto, continue
5. No es necesario Google Analytics y Create Project
6. Continue
7. Proyecto creado

## Parte 2. Firebase Crear proyecto
1. Clic en el ícono de Web
2. Escribir el nombre del proyecto y Register app
3. Copia el objeto firebaseConfig en un block de notas (luego se usará) y Continue to console

## Parte 3. Firebase Configurar Cloud Firestore
1. Clic en Build > Firestore Database > Create database > test mode (la fecha expira en un mes) - Next > Enable

## Parte 4. Código - Create proyecto:
1. ng new rapChat 
2. routing -> no 
3. type -> scss
4. cd rapChat
5. code .

## Parte 5. Código - Instalar Librerias y generar componentes:
1. npm i @angular/fire@7.4.1
2. npm i firebase@9.12.1
3. npm i uuid@9.0.0
4. ng g s services/chat --skip-tests 
5. ng g c components/chat --style none --skip-tests 
6. ng g c components/login --style none --skip-tests 
7. cd src/app
8. mkdir model
9. touch model/message.model.ts

## Parte 6: Orden de modificación de archivos:
1. index.html
2. styles.scss
3. environment.ts
4. environment.prod.ts
5. app.module.ts
6. message.model.ts
7. chat.service.ts
8. login.component.ts
9. login.component.html
10. chat.component.ts
11. chat.component.html
12. app.component.ts
13. app.component.html

Demo [here](https://codesandbox.io/p/github/SaulDev09/rapidita-chatFirebaseAngular14/draft/objective-wind?file=%2FREADME.md&workspace=%257B%2522activeFileId%2522%253A%2522cl9ykqg8b000wlrht2pq79phu%2522%252C%2522openFiles%2522%253A%255B%2522%252FREADME.md%2522%255D%252C%2522sidebarPanel%2522%253A%2522EXPLORER%2522%252C%2522gitSidebarPanel%2522%253A%2522COMMIT%2522%252C%2522sidekickItems%2522%253A%255B%257B%2522key%2522%253A%2522cl9yl5g25000i3b6gnlgmz74g%2522%252C%2522type%2522%253A%2522PROJECT_SETUP%2522%252C%2522isMinimized%2522%253Atrue%257D%252C%257B%2522type%2522%253A%2522PREVIEW%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522port%2522%253A4200%252C%2522key%2522%253A%2522cl9yl5wzj005c3b6g2ll9jwg6%2522%252C%2522isMinimized%2522%253Afalse%257D%252C%257B%2522type%2522%253A%2522TASK_LOG%2522%252C%2522taskId%2522%253A%2522start%2522%252C%2522key%2522%253A%2522cl9ykrnvf005v3b6h3vb2zr5h%2522%252C%2522isMinimized%2522%253Afalse%257D%255D%257D)

No usar modo incógnito porque bloquea al SessionStorage
![Screen Shot 2022-11-01 at 20 19 31](https://user-images.githubusercontent.com/54446713/199319986-d6e7b1bc-cafe-4676-9d21-89ed59a0252f.png)

