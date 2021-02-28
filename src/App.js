import { lazy, Suspense } from "react";
import './App.css';
const Slogan = lazy(() => import('./texto'));
const  Full = lazy(() => import('./img'));


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Suspense fallback={<p>Carregando...</p>}>
          <Full/>
        </ Suspense>
        <br /> <br />
        <Suspense fallback={<p>Carregando...</p>}>
          < Slogan />
        </Suspense>

        
      </header>
    </div>
  );
}

export default App;
