import { useBlockProps, RichText } from '@wordpress/block-editor';

export default function save({ attributes }) {
	const { clientName, clientDesg, clientComment, rating, photo, showRating } = attributes;
	return (
		<div {...useBlockProps.save()}>
				{photo && (
					<div className="bdt-image-wrap">
						<img
							src={photo.url}
							alt={photo.alt ? photo.alt : clientName}
						/>
					</div>
				)}
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
			{
				showRating && (
					<div className="bdt-review-icon">
						<div className="bdt-rating" data-rate-value={rating}></div>
					</div>
				)
			}
		</div>
	);
}
