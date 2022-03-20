import './app-serach.css'

function Appsearch (props) {
    const {value, onTextChange} = props;
    return (<div className='app-search'>
        <input 
        className="app-search-input"
        placeholder="Search ..."
        type= "text"
        value={value}
        onChange={(event) => onTextChange(event.target.value)}
        />

    </div>);
}

export default Appsearch;