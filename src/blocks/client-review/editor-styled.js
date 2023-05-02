import styled from "styled-components";

const BdtContainer = styled.div`
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