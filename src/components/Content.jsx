import PropTypes from "prop-types";

function Content({ title, paragraph, imageSrc }){
    return (<div>
        <h2>{title}</h2>
        <p>{paragraph}</p>
        <img src={imageSrc} alt={title} />
    </div>)
}

Content.prototype = {
    title: PropTypes.string,
    paragraph: PropTypes.string,
    imageSrc: PropTypes.string
};


export default Content;