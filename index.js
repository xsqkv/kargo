const rootNode = document.getElementById("app"); // элемент для рендеринга приложения React

const root = ReactDOM.createRoot(rootNode); // получаем корневой элемент 

root.render( /*#__PURE__*/React.createElement("h1", null, "Hello React") // элемент, который мы хотим создать
); // рендеринг в корневой элемент
