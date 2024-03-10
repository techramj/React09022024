const SimpleInput = (props) => {
  const submitHandlder = function(event){
    console.log('button clicked');
  }
  return (
    <form>
      <div className='form-control'>
        <label htmlFor='name'>Your Name</label>
        <input type='text' id='name' />
      </div>
      <div className="form-actions">
        <button onClick={submitHandlder}>Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
