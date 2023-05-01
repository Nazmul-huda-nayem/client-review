import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';
import { PanelBody, TabPanel } from '@wordpress/components';
const { Fragment } = wp.element;

// import color control
import ColorControl from '../../utilities/components/colorcontrol/colorcontrol';
// import responsive size
import ResponsiveSize from '../../utilities/components/responsivesize/responsivesize';
// editor style
import './editor.scss';
import '../../utilities/admin/editor.scss';
import BdtContainer from './editor-styled';


export default function Edit({ attributes, setAttributes, clientId }) {
	const { textColor, textSizes, id } = attributes;
	console.log(id);
	//set unique id
	setAttributes({
		id: 'bdt-client-review-' + clientId.slice(0, 8),
	});
	return (
		<Fragment>
			<InspectorControls>
				<TabPanel
					className="bdt-tab-panel"
					activeClass="active-tab"
					initialTabName="bdt_general"
					tabs={[
						{
							name: 'bdt_general',
							title: __('Generral', 'text-domain'),
							className: 'bdt-tab bdt-general',
						},
						{
							name: 'bdt_style',
							title: __('Style', 'text-domain'),
							className: 'bdt-tab bdt-style',
						},
						{
							name: 'bdt_advanced',
							title: __('Advanced', 'text-domain'),
							className: 'bdt-tab bdt-advanced',
						},
					]}
				>
					{(tab) => {
						if (tab.name === 'bdt_general') {
							return (
								<Fragment>
									<PanelBody initialOpen={true}>
										{/* <ColorControl
											label={__(
												'Text Color',
												'text-domain'
											)}
											colorValue={color}
											colorName="color"
											setAttributes={setAttributes}
											enableAlpha={true}
										/> */}
										<ResponsiveSize 
											label={__('Text Size', 'clr')}
											attribute={textSizes}
											attributeName="textSizes"
											setAttributes={setAttributes}
											deskResetValue={20}
											tabResetValue={18}
											mobResetValue={16}
											min={1}
											max={100}
											unit="px"
										/>
									</PanelBody>
								</Fragment>
							);
						} else if (tab.name === 'bdt_style') {
							return <div>Style</div>;
						} else if (tab.name === 'bdt_advanced') {
							return <div>Advanced</div>;
						}
					}}
				</TabPanel>
			</InspectorControls>

			<BdtContainer {...useBlockProps()}
				textSizes={ textSizes }
			>
				<div className="bdt-container">
					<div className="bdt-review-grid-wrap">
						<InnerBlocks
							allowedBlocks={['clr/review-item']}
							template={[
								['clr/review-item'],
								['clr/review-item'],
								['clr/review-item'],
							]}
							renderAppender={() => (
								<InnerBlocks.ButtonBlockAppender />
							)}
						/>
					</div>
				</div>
			</BdtContainer>
		</Fragment>
	);
}
