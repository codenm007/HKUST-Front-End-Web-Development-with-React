import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';


 class DishDetail extends Component {

    // constructor(props) {
    //     super(props);

    //     this.state = {
    //         selectedDish: null,
    //         comments:null
    //     }
    // }

    componentDidMount(){
        console.log('Dishdetail Component componentDidMount constructor invoked ');
        }
      
        componentDidUpdate(){
            console.log('Dishdetail Component componentDidUpdate constructor invoked ');
        }
      

   renderDish(dish) {
    if(dish != null){
             return (
                 <div class = "container">
                <div className=" col-xs-12 col-sm-12 col-md-5 m-1">
                <Card >
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
            </div>
            </div>
             );
            }else{
                return(
                    <div></div>
                );
    }
}

    renderComment(cmt) {
        if(cmt!=null)
        { const comnts=cmt.map((c)=>{
            return(
                <li key={c.id}>
                    <p>
                        {c.comment}
                    </p>
                    <p>
                        -{c.author} , {new Intl.DateTimeFormat('en-US',{year:'numeric',month: 'short',day : '2-digit'}).format(new Date(Date.parse(c.date)))}
                    </p>
                </li>
        )});
        return (
            <div className='col-xs-12 col-sm-12 col-md-5 m-1'>
                <h4> Comments </h4>
                <ul className='list-unstyled'>
                    {comnts}
                </ul>

            </div>
        )
        } else{
             return (<div></div>)
        };
    }
       

    render()
    {
        console.log('Dishdetail Component componentDidMount render invoked ');
        if (this.props.dish == null) {
            return (<div>

            </div>);
        }
        return (
                <div className="row">
                  {this.renderDish(this.props.dish)}
                  {this.renderComment(this.props.comments)}
                </div>
                
        );
    }
}



export default DishDetail; 