
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { content, color, customClasses, id } = attributes;
	return (
		<div {...useBlockProps.save({
			className: `${ customClasses || ''}`,
		})}>
			<div className="bdt-container">
				<div className="bdt-review-grid-wrap">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
