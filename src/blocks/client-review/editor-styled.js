import styled from "styled-components";

const BdtContainer = styled.div`

    // Desktop View
    @media (min-width: 1025px) {
        .bdt-content .bdt-name {
            font-size: ${(props) => props.textSizes.desktop }px !important;
        }
    }

    // Tablet View
    @media (min-width: 768px) and (max-width: 1024px){
        .bdt-content .bdt-name {
            font-size: ${(props) => props.textSizes.tablet }px !important;
        }
    }

    // Mobile View
    @media (max-width: 767px){
        .bdt-content .bdt-name {
            font-size: ${(props) => props.textSizes.mobile }px !important;
        }
    }
`;

export default BdtContainer;