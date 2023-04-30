import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	InnerBlocks
} from '@wordpress/block-editor';
import { PanelBody } from '@wordpress/components';
const { Fragment } = wp.element;
// import child block
// editor style
import './editor.scss';


export default function Edit({ attributes, setAttributes }) {
	const {  } = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<PanelBody
					title={__('Settings', 'boilerplate')}
					initialOpen={true}
				></PanelBody>
			</InspectorControls>

			<div {...useBlockProps()}>
				
			</div>
		</Fragment>
	);
}
