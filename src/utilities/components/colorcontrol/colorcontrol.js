
import { ColorIndicator, Popover, ColorPicker } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './colorcontrol.scss';
import { __ } from '@wordpress/i18n';

const ColorControl = ({
	label,
	colorName,
	colorValue,
	setAttributes,
	enableAlpha,
}) => {
	const [visible, setVisible] = useState(false);
	return (
		<div className="bdt-color-picker">
			<div className="color-header">
				<div className="label">{label}</div>
				<button
					className="color-indicator"
					onClick={() => setVisible(true)}
				>
					<ColorIndicator colorValue={colorValue} />
				</button>
			</div>
			{visible && (
				<Popover
					onFocusOutside={() => setVisible(false)}
					position="bottom left"
				>
					<ColorPicker
						color={colorValue}
						onChangeComplete={(value) =>
							setAttributes({ [colorName]: value.hex })
						}
						disableAlpha={enableAlpha}
					/>
					{/*Button to clear color */}
					<button className='bwd-clear-btn'
						onClick={() => setAttributes({[colorName]: ''})}
					>{__('Clear', 'clr')}</button>
				</Popover>
			)}
		</div>
	);
};

export default ColorControl;
