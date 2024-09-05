import './App.css';
import conf from './config';

function App() {

  //For App created through CREATE-REACT_APP
  //  console.log(process.env.REACT_APP_APPWRITE_URL);

  console.log(conf.appWriteUrl);
  console.log(conf.appWriteProjectId);

  return (
    <>
     <h1>A blog with appwrite</h1>
    </>
  )
}

export default App
