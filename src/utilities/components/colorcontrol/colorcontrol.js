
import { ColorIndicator, Popover, ColorPicker } from '@wordpress/components';
import { useState } from '@wordpress/element';
import './colorcontrol.scss';

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
				</Popover>
			)}
		</div>
	);
};

export default ColorControl;
