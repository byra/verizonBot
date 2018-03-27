import React from "react";
import {Component} from "react";
import {v4} from "uuid";
import StarRatingComponent from 'react-star-rating-component';



class Cards extends Component{
    constructor(props){
        super(props);
    };

    render(){
        if(this.props.cardDetails){
            return(
                <div className="d-flex justify-content-start mt-1">
                    {
                        this.props.cardDetails.map(card =>(
                            <div className="card text-white border-info mb-3 custom-styles mr-1" key={v4()}>
                                    <div className="card-header">
                                        <div className="d-flex justify-content-center">
                                            {card.title}
                                            </div>
                                    </div>
                                <div className="d-flex justify-content-center">
                                    <a href={card.url} target="_blank">
                                        <img className="card-img-top mt-1" src={card.imageURL} alt="Card image cap"/>
                                    </a>
                                </div>
                                <div className="card-body">
                                    <StarRatingComponent
                                        name="rate"
                                        editing={false}
                                        renderStarIcon={() => <span>★</span>}
                                        starCount={5}
                                        value={card.rating}
                                    />
                                    <div className="d-flex justify-content-between">
                                        <p className="h6 card-title mr-2">{card.info}</p>
                                        <p className="h6 card-title">{card.price}</p>
                                    </div>

                                    <p className="card-text">{card.description}</p>
                                </div>
                            </div>
                        ))
                    }
                </div>

            );
        }
        else{
            return(null);
        }
    }
}

export default Cards;
