import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	InnerBlocks
} from '@wordpress/block-editor';
import { CardDivider, PanelBody, TabPanel, TextControl, ToggleControl } from '@wordpress/components';
const { Fragment } = wp.element;

// import color control
import ColorControl from '../../utilities/components/colorcontrol/colorcontrol';
// import responsive size
import ResponsiveSize from '../../utilities/components/responsivesize/responsivesize';
// import alignment
import Alignment from '../../utilities/components/alignment/alignment';
// import option align
import aligns from '../../utilities/options/align';
// editor style
import './editor.scss';
import '../../utilities/admin/editor.scss';
import BdtContainer from './editor-styled';


export default function Edit({ attributes, setAttributes, clientId }) {
	const { textColor, textSizes, desgColor, desgTextSizes, commentColor, commentTextSizes, gridCols, gridGap, customClasses, enableBoxShadow, itemBg, textAlign } = attributes;

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
										<ResponsiveSize
											label={__('Grid Columns', 'clr')}
											attribute={gridCols}
											attributeName="gridCols"
											setAttributes={setAttributes}
											deskResetValue={3}
											tabResetValue={2}
											mobResetValue={1}
											min={1}
											max={5}
											unit=""
										/>
										<ResponsiveSize
											label={__('Grid Gap', 'clr')}
											attribute={gridGap}
											attributeName="gridGap"
											setAttributes={setAttributes}
											deskResetValue={20}
											tabResetValue={15}
											mobResetValue={15}
											min={0}
											max={100}
											unit="px"
										/>
										<Alignment 
											label={__('Name Alignment', 'clr')}
											attribute={textAlign}
											attributeName='textAlign'
											setAttributes={setAttributes}
											options= {
												aligns
											}
										/>
									</PanelBody>
									<PanelBody
										initialOpen={false}
										title={__('Reviewer Name', 'clr')}
									>
										<ColorControl
											label={__('Name Color', 'clr')}
											colorValue={textColor}
											colorName="textColor"
											setAttributes={setAttributes}
											enableAlpha={true}
										/>
										<CardDivider />
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
									<PanelBody
										title={__('Designation', 'clr')}
										initialOpen={false}
									>
										<ColorControl
											label={__('Color', 'clr')}
											colorValue={desgColor}
											colorName="desgColor"
											setAttributes={setAttributes}
											enableAlpha={true}
										/>
										<CardDivider />
										<ResponsiveSize
											label={__('Text Size', 'clr')}
											attribute={desgTextSizes}
											attributeName="desgTextSizes"
											setAttributes={setAttributes}
											deskResetValue={18}
											tabResetValue={16}
											mobResetValue={16}
											min={1}
											max={100}
											unit="px"
										/>
									</PanelBody>
									<PanelBody
										title={__('Client Comment', 'clr')}
										initialOpen={false}
									>
										<ColorControl
											label={__('Color', 'clr')}
											colorValue={commentColor}
											colorName="commentColor"
											setAttributes={setAttributes}
											enableAlpha={true}
										/>
										<CardDivider />
										<ResponsiveSize
											label={__('Text Size', 'clr')}
											attribute={commentTextSizes}
											attributeName="commentTextSizes"
											setAttributes={setAttributes}
											deskResetValue={16}
											tabResetValue={15}
											mobResetValue={15}
											min={1}
											max={100}
											unit="px"
										/>
									</PanelBody>
									<PanelBody
										title={__('Item Box', 'clr')}
										initialOpen={false}
									>
										<ColorControl
											label={__(
												'Background Color',
												'clr'
											)}
											colorValue={itemBg}
											colorName="itemBg"
											setAttributes={setAttributes}
											enableAlpha={true}
										/>
										<CardDivider />
										<ToggleControl
											label="Item Boxshadow"
											checked={enableBoxShadow}
											onChange={() =>
												setAttributes({
													enableBoxShadow:
														!enableBoxShadow,
												})
											}
										/>
									</PanelBody>
								</Fragment>
							);
						} else if (tab.name === 'bdt_style') {
							return <div>Style</div>;
						} else if (tab.name === 'bdt_advanced') {
							return (
								<Fragment>
									<TextControl
										label="Additional CSS Class"
										value={ customClasses }
										onChange={ ( value ) => setAttributes({customClasses: value}) }
										help={__('Please write multiple custom classes using space', 'clr')}
									/>
								</Fragment>
							)
						}
					}}
				</TabPanel>
			</InspectorControls>

			<BdtContainer {...useBlockProps({
				className: `${ customClasses || '' } ${ enableBoxShadow ? 'active-box-shadow' : ''}`
			})}
				textSizes= { textSizes }
				textColor= { textColor }
				desgTextSizes= { desgTextSizes }
				desgColor= { desgColor }
				commentTextSizes= { commentTextSizes }
				commentColor= { commentColor }
				gridCols= { gridCols }
				gridGap= { gridGap }
				itemBg= { itemBg }
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
