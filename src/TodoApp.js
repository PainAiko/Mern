/* eslint-disable no-undef */
/* eslint-disable no-unused-expressions */
/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-useless-constructor */
import React , {Component} from 'react';
import './style/Todo.css';
export default class TodoApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [
               {text: "item #1" , done: true , key: new Date().getMilliseconds() + Math.random()},
               {text: "item #2" , done: false , key: new Date().getMilliseconds() + Math.random()},
               {text: "item #3" , done: false , key: new Date().getMilliseconds()+ Math.random()},
               {text: "item #4" , done: false , key: new Date().getMilliseconds() + Math.random()}
            ] ,
            date: new Date(),
            input : ''    
        };
        //console.log(this.state);
    }

    move = (key) => {
          //this.setState.items()
          const filtered = this.state.items.map(item => {
              if(item.key === key) { 
                  item.done = !item.done;
                }
                return item;
          });
          this.setState({items : filtered});
    }

    add = () => {
          //console.log(this.state.input); 
          let newItem = {text: this.state.input, done: false ,
                         key: new Date().getMilliseconds() + Math.random() }
          this.setState((state) => ({
                 items: [newItem].concat(state.items)
          }));
         
            
    }

    handleChange = (e) => {
         this.setState({input:e.target.value});
    }  

    getUndone = () => {
        let undonne = this.state.items.filter(item =>{
            return !item.done
        })
        if(!undonne.length) {
            return "vide ";
        }
        return undonne.length;
    }

   componentDidMount(){
        this.setState({date: new Date()});
   }  
    
    render() {
        return (
            <div className="container">
                <div className="row">
                     <div className="col-md-6">
                        <div className="todolist">
                         List Undone
                        <form onSubmit={(e) => {e.preventDefault(); this.add();} }>
                            <div className="input-group">
                                <input type="text" value={this.state.value}
                                onChange={(e) => {
                                    this.handleChange(e)
                                }} 
                                className="form-control form-control-lg" placeholder="add Todo"/>
                            </div>
                        </form>
                         
                         <ul>
                         {
                            this.state.items.map(item => {
                                 if (!item.done) {
                                    return  (<li onClick={() => this.move(item.key)} key={item.key}>
                                          {item.text}
                                     </li>); 
                                 }
                             })
                         }
                         </ul>
                         <div className="todo-footer"> 
                         <span>{this.getUndone()}</span>Items left 
                         </div>
                         </div>
                     </div>
                     <div className="col-md-6">
                     <div className="todolist">
                         List done <h2>Il est {this.state.date.toLocaleTimeString() }.</h2>
                         <ul>
                         {
                            this.state.items.map(item => {
                                 if (item.done) {
                                    return  (<li  key={item.key}>
                                          {item.text} 
                                          <button onClick={() => this.move(item.key)} className="btn btn-danger">
                                              <i className="fas fa-trash" ></i> 
                                          </button>
                                     </li>); 
                                 }
                             })
                         }
                         </ul>
                     </div>   
                     </div>
                </div>
            </div>
            
        );
    }
}