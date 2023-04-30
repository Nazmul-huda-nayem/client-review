// import { __ } from '@wordpress/i18n';
import { useBlockProps, RichText, InnerBlocks } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { content, color } = attributes;
	return <div {...useBlockProps.save()}>child</div>;
}
