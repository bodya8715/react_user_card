import { Component } from "react";
import ImgWrapper from "../ImgWrapper";
import data from '../../data';

class UserCard extends Component {
    render() {
        let {cardWrapperClass, useCardClass, imgWrapperClass, initialsClass, imgClass, imgSrc, imgAlt, cardNameClass, cardDescriptionClass, cardDescriptionText} = this.props;
        
        if(!imgSrc) {
            imgClass = "not_display";
        }

        return (
            <li className={cardWrapperClass}>
                <article className={useCardClass}>
                    <ImgWrapper 
                        imgWrapperClass={imgWrapperClass} 
                        initialsClass={initialsClass}
                        imgClass={imgClass} 
                        imgSrc={imgSrc} 
                        imgAlt={imgAlt}
                    />
                    <h2 className={cardNameClass}>{imgAlt.trim() || "Somebody"}</h2>
                    <p className={cardDescriptionClass}>{cardDescriptionText}</p>
                </article>
            </li>
        );
    }
}

let array = data.map( (item) => 
  <UserCard
      key = {item.id}
      cardWrapperClass = "cardWrapper" 
      useCardClass = "userCard"
      imgWrapperClass = "imgWrapper"
      initialsClass = "initials"
      imgClass = "img"
      imgSrc = {item.profilePicture}
      imgAlt = {item.firstName + " "+ item.lastName}
      cardNameClass = "cardName"
      cardDescriptionClass = "cardDescription"
      cardDescriptionText = "test"
    />
);

export default array;
