import React from "react";
//import './Kpp.css'
class Contact extends React.Component
{
    constructor(props)
    {
        super(props)
        this.state={text1:'',text2:'',text3:'',text4:'',cal:''}

    }
    mynew(event)
    {
        this.setState({[event.target.name]:[event.target.value]})
    }
    myavg(event)
    {
        var a = parseInt(this.state.text1)
        var b = parseInt(this.state.text2)
        var c = parseInt(this.state.text3)
        var d = parseInt(this.state.text4)
        var avg = a+b+c+d%4
        this.setState({cal:avg})
        event.preventDefault();

    }
    render()
    {
        
        return(
            <React.Fragment >
                
            

            <h1>Hey!!</h1>
            <form>
            <input type="text" name="text1" onChange={this.mynew.bind(this)}/><br/>
            <input type="text" name="text2" onChange={this.mynew.bind(this)}/><br/>
            <input type="text" name="text3" onChange={this.mynew.bind(this)}/><br/>
            <input type="text" name="text4" onChange={this.mynew.bind(this)}/><br/><br/>
            <button onClick={this.myavg.bind(this)}>CAl</button>
            {this.state.cal}
            </form>
            

            </React.Fragment >
        )
    }
}
export default Contact;