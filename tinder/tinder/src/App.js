import Bottom from "./bottom.js"

import Header from "./header.js"
import Tindercards from "./tindercards.js"
function App() {//./src/reportWebVitals.js
  return (
    <div className="App">
    
     {/*header */}
     <Header />
     {/*tinder cards */}
     <Tindercards />
     
     {/*setup buttons  */}
      <Bottom />
    </div>
  );
}

export default App;
