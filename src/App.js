import React from "react";
import './App.css';
import './Component/StyleComponent.css';
import Nav from './Component/Nav';

function App() {
  return (
  <div>
    <Nav/>
    <div className="animation">

<ul>
   <li> <i className="fas fa-cheese"> </i> </li>
   <li> <i className="fas fa-hotdog"></i> </li>
   <li><i className="fas fa-drumstick-bite"></i></li>
   <li><i className="fas fa-pepper-hot"></i> </li>
   <li><i className="fas fa-stroopwafel"></i> </li>
   <li><i className="fas fa-bread-slice"></i> </li>
   <li> <i className="fas fa-pizza-slice"></i></li>
   <li><i className="fas fa-utensils"></i> </li>

</ul>
</div>

  </div>
  );
}
export default App;

