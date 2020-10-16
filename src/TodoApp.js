/* eslint-disable no-unused-vars */
/* eslint-disable array-callback-return */
/* eslint-disable no-useless-constructor */
import React , {Component} from 'react'

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
            date: new Date()    
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
         
    }

  

    render() {
        return (
            <div className="container">
                <div className="row">
                     <div className="col-md-6">
                         List Undone
                        <form>
                            <div class="input-group">
                                <input type="text" class="form-control" placeholder="add Todo"/>
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
                     </div>
                     <div className="col-md-6">
                         List done <h2>Il est {this.state.date.toLocaleTimeString()}.</h2>
                         <ul>
                         {
                            this.state.items.map(item => {
                                 if (item.done) {
                                    return  (<li onClick={() => this.move(item.key)} key={item.key}>
                                          {item.text}
                                     </li>); 
                                 }
                             })
                         }
                         </ul>
                     </div>
                </div>
            </div>
            
        );
    }
}