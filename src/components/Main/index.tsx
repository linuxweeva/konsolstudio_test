import React from 'react';

export interface Props {
    cols: number;
    text: string;
    changeText: any;
}

const Content: React.FC<Props> = (props) => {
  if ( props.cols === 1 ) {
    return <div className="row" >
    	<div className="col-12 text-break">
    	<input className="form-control" onChange={props.changeText} value={ props.text } />
    	</div>
	</div>;
  } else if ( props.cols === 2 ) {
  	let length = props.text.length;
  	let pt_1 = props.text.substr( 0 , length / 2 );
  	let pt_2 = props.text.substr( length / 2 );
    return (
	<div className="row">
	    <div className="col-6 text-break">
	    	<p>{ pt_1 }</p>
	    </div>
	    <div className="col-6 text-break">
	    	<p>{ pt_2 }</p>
	    </div>
    </div>
    )
  } else {
  	let length = props.text.length;
  	console.log(length / 3,length * 2 / 3)
  	let pt_1 = props.text.substr( 0 , length / 3 );
  	let pt_2 = props.text.substr( length / 3 , length / 3 );
  	let pt_3 = props.text.substr( length * 2 / 3 );
    return (
	<div className="row">
	    <div className="col-4 text-break">
	    	<p>{ pt_1 }</p>
	    </div>
	    <div className="col-4 text-break">
	    	<p>{ pt_2 }</p>
	    </div>
	    <div className="col-4 text-break">
	    	<p>{ pt_3 }</p>
	    </div>
    </div>
    )
  }
}


class Layout extends React.Component<any, any> {
  constructor(props: any) {
    super( props );
    this.state = {
      cols: 1,
		text: localStorage.getItem( 'myValueInLocalStorage' )      
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeText = this.handleChangeText.bind(this);
  }

  handleChange(event :any) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event :any) {
    alert('Сочинение отправлено: ' + this.state.value);
    event.preventDefault();
  }
  handleCols ( cols: number ) {
  	this.setState({cols});
  }
  handleChangeText ( event: any ) {
  console.log(event.target.value)
  	localStorage.setItem( 'myValueInLocalStorage' , event.target.value );
  	this.setState({ text: event.target.value });
  }
  render() {
    return (
    <div>
  		<h1 className="text-center mb-5">Home</h1>
  		<div className="btn-group mb-4 d-flex" role="group" aria-label="Basic example">
		  <button type="button" onClick={() => this.handleCols( 1 )} className="btn btn-info btn-lg w-100">Single column</button>
		  <button type="button" onClick={() => this.handleCols( 2 )} className="btn btn-info btn-lg w-100">2 columns</button>
		  <button type="button" onClick={() => this.handleCols( 3 )} className="btn btn-info btn-lg w-100">3 columns</button>
		</div>
		<div className="text-center">
    	 <Content cols={this.state.cols} changeText={this.handleChangeText} text={this.state.text} />
		</div>
	</div>
    );
  }
}


export default Layout;