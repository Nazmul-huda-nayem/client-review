import styled from "styled-components";

const BdtContainer = styled.div`
	.wp-block-clr-review-item  {
		background-color: ${(props) => props.itemBg} !important;
	}
	.bdt-content .bdt-name {
		color: ${(props) => props.textColor} !important;
	}
	.bdt-content .bdt-designation {
		color: ${(props) => props.desgColor} !important;
	}
	.bdt-content .bdt-desc {
		color: ${(props) => props.commentColor} !important;
	}
	// Desktop View
	@media (min-width: 1025px) {
		.block-editor-block-list__layout {
			grid-template-columns: ${(props) =>
				`repeat(${props.gridCols.desktop}, 1fr)`};
			gap: ${(props) => props.gridGap.desktop}px;
		}
		.bdt-content .bdt-name {
			font-size: ${(props) => props.textSizes.desktop}px !important;
		}
		.bdt-content .bdt-designation {
			font-size: ${(props) => props.desgTextSizes.desktop}px !important;
		}
		.bdt-content .bdt-desc {
			font-size: ${(props) =>
				props.commentTextSizes.desktop}px !important;
		}
	}

	// Tablet View
	@media (min-width: 768px) and (max-width: 1024px) {
		.block-editor-block-list__layout {
			grid-template-columns: ${(props) =>
				`repeat(${props.gridCols.tablet}, 1fr)`};
			gap: ${(props) => props.gridGap.tablet}px;
		}
		.bdt-content .bdt-name {
			font-size: ${(props) => props.textSizes.tablet}px !important;
		}
		.bdt-content .bdt-designation {
			font-size: ${(props) => props.desgTextSizes.tablet}px !important;
		}
		.bdt-content .bdt-desc {
			font-size: ${(props) => props.commentTextSizes.tablet}px !important;
		}
	}

	// Mobile View
	@media (max-width: 767px) {
		.block-editor-block-list__layout {
			grid-template-columns: ${(props) =>
				`repeat(${props.gridCols.mobile}, 1fr)`};
			gap: ${(props) => props.gridGap.mobile}px;
		}
		.bdt-content .bdt-name {
			font-size: ${(props) => props.textSizes.mobile}px !important;
		}
		.bdt-content .bdt-designation {
			font-size: ${(props) => props.desgTextSizes.mobile}px !important;
		}
		.bdt-content .bdt-desc {
			font-size: ${(props) => props.commentTextSizes.mobile}px !important;
		}
	}
`;

export default BdtContainer;