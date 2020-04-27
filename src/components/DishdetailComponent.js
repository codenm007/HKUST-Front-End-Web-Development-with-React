import React, { Component } from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

 class DishDetail extends Component {


   renderDish(dish) {
    if(dish != null){
             return (
                <div className=" col-xs-12 col-sm-12 col-md-5 m-1">
                <Card >
                    <CardImg width="100%" object src={dish.image} alt={dish.name} />
                    <CardBody>
                        <CardTitle>{dish.name}</CardTitle>
                        <CardText>{dish.description}</CardText>
                    </CardBody>
                </Card>
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
                        -{c.author} , { c.date}
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