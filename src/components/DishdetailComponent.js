import React from 'react';
import {Card, CardImg, CardTitle, CardText, CardBody } from 'reactstrap';

function RenderDish({dish}) {
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
            );}
            else{
                return(
                    <div></div>
                );
    }
}

    function RenderComment({cmt}) {
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
       

    const DishDetail = (props) => {
    // eslint-disable-next-line no-lone-blocks
    {if (props.dish == null) {
            return (<div>

            </div>);
        }
        return (
            <div className = "container">
                <div className="row">
                  <RenderDish dish={props.dish} />
                  
                  <RenderComment cmt = {(props.dish.comments)} />
                </div>
                </div>
                
        );
    }
}



export default DishDetail; 