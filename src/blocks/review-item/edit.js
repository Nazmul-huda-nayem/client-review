import { __ } from '@wordpress/i18n';
import {
	useBlockProps,
	InspectorControls,
	RichText,
	InnerBlocks,
	MediaUpload,
} from '@wordpress/block-editor';
import { PanelBody, Button } from '@wordpress/components';
const { Fragment } = wp.element;
// import child block
// editor style
import './editor.scss';

export default function Edit({ attributes, setAttributes }) {
	const { clientName, clientDesg, clientComment, rating, photo } = attributes;
	return (
		<Fragment>
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
								<Button onClick={open}>
									Open Media Library
								</Button>
							)}
						/>
					)}
				</div>
				<div className="bdt-content">
					<RichText
						tagName="h3"
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
			</div>
		</Fragment>
	);
}
