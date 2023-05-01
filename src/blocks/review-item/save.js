import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { clientName, clientDesg, clientComment, rating, photo } = attributes;
	return (
		<div {...useBlockProps.save()}>
			<div className="bdt-image-wrap">
				{photo && (
					<img
						src={photo.url}
						alt={photo.alt ? photo.alt : clientName}
					/>
				)}
			</div>
			<div className="bdt-content">
				{clientName && (
					<RichText.Content
						tagName="h4"
						className={'bdt-name'}
						value={clientName}
					/>
				)}
				{clientDesg && (
					<RichText.Content
						tagName="span"
						className={'bdt-designation'}
						value={clientDesg}
					/>
				)}
				{clientComment && (
					<RichText.Content
						tagName="p"
						className={'bdt-desc'}
						value={clientComment}
					/>
				)}
			</div>
			<div className="bdt-review-icon">rating</div>
		</div>
	);
}
