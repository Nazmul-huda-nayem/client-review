import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n'; 

registerBlockType( 'clr/child', {
    title: __('Child Item', 'clr'), 
    description: 'Child block',
    category: 'clr',
    icon: {
        src: 'Dashicon',
    },
    supports: {
        html: false, 
        align: true
    },
    attributes: {
        content: {
            type: 'string' 
        }
    },
    edit: ({attributes, setAttributes}) => {
        const {content} = attributes;
        return(
            <h2>Child Block</h2>
        )
    },
    save: ({attributes}) => {
        const { content } = attributes;
        return(
            <h2>My Frontend</h2>
        )
    }
});