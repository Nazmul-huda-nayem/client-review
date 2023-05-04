import './alignment.scss';



const Alignment = ({label, attribute, attributeName, setAttributes, options}) => {
    return (
		<div className="bwd-Alignment">
			<p className="bwd-label">{label}</p>
			<div className="bwd-alignment-icon-wrapper">
                {
                    options && options.map((option, index) => {
                        return (

                            <button
                                className={`bwd-single-icon ${
                                    attribute === option.value ? 'active' : ''
                                }`}
                                onClick={() =>
                                    setAttributes({
                                        [attributeName]: option.value,
                                    })
                                } key={index}
                            >
                                <span className={`dashicons dashicons-editor-${option.icon}`}></span>
                            </button>
                        )
                    })
                }
			</div>
		</div>
	);
};

export default Alignment;