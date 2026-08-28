import {createRoot} from 'react-dom/client';
function Hello(){
  return(
    <>
   <h1>Hello</h1>
    </>
  )

}
const App = () => {
    const COMPANY = ["GEEKS", "FOR", "GEEKS"];
    const handleClick = (COMPANY) => {
        alert(`You clicked on ${COMPANY}`);
    };

    return (
        <ul>
            {COMPANY.map((COMPANY, index) => (
                <button key={index} onClick={() => handleClick(COMPANY)}>
                    {COMPANY}
                </button>
            ))}
        </ul>
    );
};
export default App;
createRoot(document.getElementById('root')).render(
  <App/>

)