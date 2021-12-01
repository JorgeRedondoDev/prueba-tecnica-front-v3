# Prueba técnica React de LaLiga

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

Versión de Node: 12.16.1 o superior.

Versión de NPM: 6.13.4 o superiror.

Compatibilidad: ES6 Navegadores evergreen (Chrome, Firefox, Edge, Safari).

## Instrucciones

- [Instrucciones](src/docs/laliga-prueba-tecnica-instrucciones.md)

## Entorno de desarrollo local

### `npm install`

Para instalación de dependencias

### `npm start`

Entorno de desarrollo

### `npm test`

Para ejecutar los tests

## Memoria

### Modulos añadidos

- React Hot Toast
- redux mock store

### Estructura del proyecto

```
src/
├── Atoms/
│   └── Button.tsx
│
├── store/
│   ├── actions/
│   │   ├── getTokenAction.ts
│   │   ├── getUsersAction.ts
│   │   └──  modalAction.ts
│   ├─── reducers/
│   │   ├── index.ts
│   │   ├── getTokenReducer.ts
│   │   ├── getUsersReducer.ts
│   │   └── modalReducer.ts
│   ├─── sagas/
│   │   ├── index.ts
│   │   ├── getTokenSaga.ts
│   │   └── getUsersSaga.ts
│   └── index.ts
│
├── types/
│   └── users.ts
│
├── view/
│   ├── Listado/
│   │   ├── Components/
│   │   │   ├── UserCard.tsx
│   │   │   └── UserModal.tsx
│   │   ├── index.ts
│   │   └── Listado.test.tsx
│   ├── Login/
│   │   ├── index.tsx
│   │   └── Login.test.tsx
│   ├── App.tsx
│   └── index.tsx
│
├── App.tsx
│
└── index.tsx

```

### Observaciones

La carpeta Atom esta diseñana para almacenar componentes que se repiten en muchos lugares, teniendo subcarpetas para cada componente.

Al hacer la llamada a la api _POST_ `https://reqres.in/api/login` con tan solo ingresar un usuario que exista este te devuelve el token, es por ello que antes de hacer un _POST_ comprobamos las credenciales del usuario en su correspondiente [saga](src/store/sagas/getTokenSaga.ts).
