
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { content, color, id } = attributes;
	return (
		<div {...useBlockProps.save({
			className: id,
		})}>
			<div className="bdt-container">
				<div className="bdt-review-grid-wrap">
					<InnerBlocks.Content />
				</div>
			</div>
		</div>
	);
}
