import React, { Component } from 'react';
import { Card , CardImg,CardImgOverlay,CardTitle} from 'reactstrap';
import DishDetail from './DishdetailComponent';
class Menu extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedDish:null,
            comments:null,
        };
       
    }

    onDishSelect(dish,content){
        this.setState({selectedDish:dish});
        this.setState({comments:content});
    }

    // renderDish(dish){
    //     if(dish != null){
    //      return (
    //         <div className="row col-xs-12 col-sm-12 m-1">
    //         <Card className="col-md-5 custom">
    //             <CardImg width="100%" object src={dish.image} alt={dish.name} />
    //             <CardBody>
    //                 <CardTitle>{dish.name}</CardTitle>
    //                 <CardText>{dish.description}</CardText>
    //             </CardBody>
    //         </Card>
    //         <div className="col-md-5">
    //             <DishDetail dishes={this.props.dishes} />
    //         </div>
    //     </div>
    //      );
    //     }else{
    //         return(
    //             <div></div>
    //         );
    //     }
    // }  // edited this part as it have to reder from dishdetail.js

    render() {
        const menu = this.props.dishes.map((dish) => {
            return (
              <div key={dish.id} className="col-12 col-md-5 m-1"> 
                <Card key={dish.id} onClick = {() =>this.onDishSelect(dish,dish.comments)}>
                      <CardImg width="100%" object src={dish.image} alt={dish.name} />
            
                  <CardImgOverlay>
                    <CardTitle>{dish.name}</CardTitle>
                    
                  </CardImgOverlay>
                </Card>
              </div>
            );
        });
        
        return (
          <div className="container">
            <div className="row">
               {menu}
            </div>
            <DishDetail dish={this.state.selectedDish} comments={this.state.comments}/>
            </div>
         
        );
    }
}

export default Menu;

