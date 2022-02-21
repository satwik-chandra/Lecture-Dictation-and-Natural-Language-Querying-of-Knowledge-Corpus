import logo from './logo.svg';
import './App.css';
import Button from './Components/Button.js'
import Response from './Components/Response.js'

function App() {
  return (
    <div className="Container">
      <h1>Hello World</h1>
      <Button color='blue' text='Run Query' resp ='p'/>
      {/* <Response text = 'We and our partners store
        and/or access information on a device, such
        as cookies and process personal data, such
        as unique identifiers and standard information
        sent by a device for personalised ads and content,
        ad and content measurement, and audience insights,
        as well as to develop and improve products.'/> */}
    </div>
  );
}

export default App;

