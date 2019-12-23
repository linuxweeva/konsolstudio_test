import React from 'react';
export interface Props {
    history: any;
}
const Hello: React.FC<Props> = (props) => {
  const [value, setValue] = React.useState(
    localStorage.getItem('myValueInLocalStorage') || ''
  );
  React.useEffect(() => {
    localStorage.setItem('myValueInLocalStorage', value);
  }, [value]);
  const onChange = (event:any) => setValue(event.target.value);
  const handleSubmit = ( event: any ) => {
  	props.history.push( '/layout' )
  	console.log('asd')
  }
  return (
    <div>
  		<h1 className="text-center mb-5">Home</h1>
      <div className="form-group">
      <label>Input text</label>
      	<textarea className="form-control form-control-lg" onChange={onChange} value={value}></textarea>
      </div>
      <button onClick={ handleSubmit} className="btn-block btn btn-primary btn-lg">Layout</button>
    </div>
  );
};
export default Hello;