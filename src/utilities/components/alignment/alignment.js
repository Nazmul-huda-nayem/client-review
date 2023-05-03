import './alignment.scss';

const Alignment = ({label}) => {
    return (
        <div className="bwd-Alignment">
            <p className="bwd-label">{label}</p>
            <div className="bwd-alignment-icon-wrapper">
                <button className="bwd-single-icon">
                    <span className="dashicons dashicons-editor-alignleft"></span>
                </button>
                <button className="bwd-single-icon">
                    <span className="dashicons dashicons-editor-aligncenter"></span>
                </button>
                <button className="bwd-single-icon">
                    <span className="dashicons dashicons-editor-alignright"></span>
                </button>
            </div>
        </div>
    );
};

export default Alignment;