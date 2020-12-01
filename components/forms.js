function Form(props) {
   
    return (
      <div>
        <form>
          <div className="form-group">
            <lable >Movie Name</lable>
            <input type="text" className="form-control" id="inputMovie" value={props.name} onChange={props.changeName} />
          </div>
          <div className="form-group">
            <lable >Year</lable>
            <input type="text" className="form-control" id="inputYear" value={props.year} onChange={props.changeYear}  />
          </div>
          
        </form>
        
      </div>
    );
  }
  
  export default Form;
  