import { Component } from "react";

class ImgWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imgClass: props.imgClass
        };
    }

    loadError = () => {
        this.setState({
            imgClass: "not_display",
        });
    }

    render() {
        let { imgWrapperClass, initialsClass, imgSrc, imgAlt} = this.props;
        return (
            <div className = {imgWrapperClass}>
                <div className={initialsClass}>{this.props.imgAlt.trim().split(' ').map((word) => word[0]).join(' ') || "Somebody"}</div>
                <img onError={this.loadError} src={imgSrc} alt={imgAlt} title={imgAlt} className={this.state.imgClass}/>
            </div>
        );
    }
}

export default ImgWrapper;