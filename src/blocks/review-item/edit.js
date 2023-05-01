import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	InnerBlocks,
	MediaUpload,
	BlockControls,
} from '@wordpress/block-editor';
import {
	PanelBody,
	Button,
	ToolbarGroup,
	ToolbarButton,
	Card,
	CardHeader,
	CardBody,
	RangeControl,
} from '@wordpress/components';
const { Fragment } = wp.element;
// import rater
import Rater from 'react-rater';
import 'react-rater/lib/react-rater.css';
// editor style
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { clientName, clientDesg, clientComment, rating, photo } = attributes;
	return (
		<Fragment>
			<InspectorControls>
				<Card>
					<CardHeader>
						<strong>{__('Client Rating', 'clr')}</strong>
					</CardHeader>
					<CardBody>
						<RangeControl
							label={__('Rating', 'clr')}
							value={rating}
							onChange={(value) =>
								setAttributes({ rating: value })
							}
							min={1}
							max={5}
							step={0.1}
						/>
					</CardBody>
				</Card>
			</InspectorControls>
			{photo && (
				<BlockControls>
					<ToolbarGroup>
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									photo: media,
								})
							}
							allowedTypes={['image']}
							value={photo && photo.id}
							render={({ open }) => (
								<ToolbarButton
									onClick={open}
									label="Edit"
									icon="edit"
								></ToolbarButton>
							)}
						/>
					</ToolbarGroup>
				</BlockControls>
			)}
			<div {...useBlockProps()}>
				<div className="bdt-image-wrap">
					{photo ? (
						<img
							src={photo.url}
							alt={photo.alt ? photo.alt : clientName}
						/>
					) : (
						<MediaUpload
							onSelect={(media) =>
								setAttributes({
									photo: media,
								})
							}
							allowedTypes={['image']}
							value={photo && photo.id}
							render={({ open }) => (
								<Button
									onClick={open}
									variant="secondary"
									icon={'cloud-upload'}
								>
									Upload Client Image
								</Button>
							)}
						/>
					)}
				</div>
				<div className="bdt-content">
					<RichText
						tagName="h4"
						className={'bdt-name'}
						value={clientName}
						onChange={(value) =>
							setAttributes({ clientName: value })
						}
						placeholder={__('Write client name', 'clr')}
					/>
					<RichText
						tagName="span"
						className={'bdt-designation'}
						value={clientDesg}
						onChange={(value) =>
							setAttributes({ clientDesg: value })
						}
						placeholder={__('Write your designation', 'clr')}
					/>
					<RichText
						tagName="p"
						className={'bdt-desc'}
						value={clientComment}
						onChange={(value) =>
							setAttributes({ clientComment: value })
						}
						placeholder={__('Write client comment', 'clr')}
					/>
				</div>
				<div className="bdt-review-icon">
					<Rater total={5} rating={rating} interactive={false} />
				</div>
			</div>
		</Fragment>
	);
}
