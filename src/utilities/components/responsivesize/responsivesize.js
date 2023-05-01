import { RangeControl } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './responsivesize.scss';

const ResponsiveSize = ({
	label,
	attribute,
	attributeName,
	setAttributes,
	min,
	max,
	unit,
    deskResetValue,
    tabResetValue,
    mobResetValue,
}) => {
	const [device, setDevice] = useState('desktop');
	return (
		<div className="bdt-responsive-size">
			<div className="bdt-flex">
				<p className="bdt-label no-margin">{label}</p>
				<div className="bdt-device-icon-wrapper">
					<button
						className={`bdt-device ${
							device === 'desktop' ? 'active-device' : ''
						}`}
						onClick={() => setDevice('desktop')}
					>
						<svg
							version="1.1"
							width="10"
							height="10"
							x="0"
							y="0"
							viewBox="0 0 548.172 548.172"
						>
							<g>
								<path d="M534.75 49.965c-8.945-8.945-19.694-13.422-32.261-13.422H45.681c-12.562 0-23.313 4.477-32.264 13.422C4.471 58.913 0 69.663 0 82.226v310.633c0 12.566 4.471 23.315 13.417 32.265 8.951 8.945 19.702 13.414 32.264 13.414h155.318c0 7.231-1.524 14.661-4.57 22.269-3.044 7.614-6.09 14.273-9.136 19.981-3.042 5.715-4.565 9.897-4.565 12.56 0 4.948 1.807 9.24 5.424 12.847 3.615 3.621 7.898 5.435 12.847 5.435h146.179c4.949 0 9.233-1.813 12.848-5.435 3.62-3.606 5.427-7.898 5.427-12.847 0-2.468-1.526-6.611-4.571-12.415-3.046-5.801-6.092-12.566-9.134-20.267-3.046-7.71-4.569-15.085-4.569-22.128h155.318c12.56 0 23.309-4.469 32.254-13.414 8.949-8.949 13.422-19.698 13.422-32.265V82.226c.003-12.563-4.474-23.313-13.423-32.261zm-23.123 269.803c0 2.475-.903 4.613-2.711 6.424-1.81 1.804-3.952 2.707-6.427 2.707H45.681c-2.473 0-4.615-.903-6.423-2.707-1.807-1.817-2.712-3.949-2.712-6.424V82.226c0-2.475.902-4.615 2.712-6.423 1.809-1.805 3.951-2.712 6.423-2.712h456.815c2.471 0 4.617.904 6.42 2.712 1.808 1.809 2.711 3.949 2.711 6.423v237.542z"></path>
							</g>
						</svg>
					</button>
					<button
						className={`bdt-device ${
							device === 'tablet' ? 'active-device' : ''
						}`}
						onClick={() => setDevice('tablet')}
					>
						<svg
							version="1.1"
							width="10"
							height="10"
							x="0"
							y="0"
							viewBox="0 0 33.994 33.994"
						>
							<g>
								<path d="M27.125 0H6.867a2.304 2.304 0 0 0-2.305 2.309v29.377a2.306 2.306 0 0 0 2.305 2.308h20.258a2.308 2.308 0 0 0 2.306-2.308V2.309A2.305 2.305 0 0 0 27.125 0zM16.997 33.129a1.37 1.37 0 1 1 0-2.742 1.37 1.37 0 0 1 0 2.742zm10.101-3.943H6.896V2.774h20.202v26.412z"></path>
							</g>
						</svg>
					</button>
					<button
						className={`bdt-device ${
							device === 'mobile' ? 'active-device' : ''
						}`}
						onClick={() => setDevice('mobile')}
					>
						<svg
							version="1.1"
							width="10"
							height="10"
							x="0"
							y="0"
							viewBox="0 0 27.442 27.442"
						>
							<g>
								<path d="M19.494 0H7.948a1.997 1.997 0 0 0-1.997 1.999v23.446c0 1.102.892 1.997 1.997 1.997h11.546a1.998 1.998 0 0 0 1.997-1.997V1.999A1.999 1.999 0 0 0 19.494 0zm-8.622 1.214h5.7c.144 0 .261.215.261.481s-.117.482-.261.482h-5.7c-.145 0-.26-.216-.26-.482s.115-.481.26-.481zm2.85 24.255a1.275 1.275 0 1 1 0-2.55 1.275 1.275 0 0 1 0 2.55zm6.273-4.369H7.448V3.373h12.547V21.1z"></path>
							</g>
						</svg>
					</button>
				</div>
			</div>
			<div className="bdt-controls">
				{device === 'desktop' && (
					<RangeControl
						value={attribute.desktop}
						onChange={(value) =>
							setAttributes({
								[attributeName]: {
									...attribute,
									desktop: value,
								},
							})
						}
						min={min}
						max={max}
						allowReset={true}
						resetFallbackValue={deskResetValue}
						help={`Desktop: ${attribute.desktop} ${unit || ''}`}
					/>
				)}
				{device === 'tablet' && (
					<RangeControl
						value={attribute.tablet}
						onChange={(value) =>
							setAttributes({
								[attributeName]: {
									...attribute,
									tablet: value,
								},
							})
						}
						min={min}
						max={max}
						allowReset={true}
						resetFallbackValue={tabResetValue}
						help={`Desktop: ${attribute.tablet} ${unit || ''}`}
					/>
				)}
				{device === 'mobile' && (
					<RangeControl
						value={attribute.mobile}
						onChange={(value) =>
							setAttributes({
								[attributeName]: {
									...attribute,
									mobile: value,
								},
							})
						}
						min={min}
						max={max}
						allowReset={true}
						resetFallbackValue={mobResetValue}
						help={`Desktop: ${attribute.mobile} ${unit || ''}`}
					/>
				)}
			</div>
		</div>
	);
};

export default ResponsiveSize;
