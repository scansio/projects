
import reportWebVitals from './common/reportWebVitals';
import './common/globalInclude';
const appContainer = document.getElementById("appContainer");

if (appContainer) {
  //appContainer.innerText = "<h1>Hello TypeScript!</h1>";
}

/* if (module.hot) {
  module.hot.accept();
} */

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals(console.log);
