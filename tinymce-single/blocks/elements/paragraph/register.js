window.wp.blocks.register( {
	elements: [ 'p' ],
	type: 'text',
	icon: 'gridicons-posts',
	buttons: [
		{
			icon: 'gridicons-heading',
			onClick: function( editor ) {
				editor.formatter.apply( 'h1' );
			}
		},
		{
			icon: 'gridicons-quote',
			onClick: function( editor ) {
				editor.formatter.apply( 'blockquote' );
			}
		},
		{
			icon: 'gridicons-list-unordered',
			onClick: function( editor, element ) {
				editor.execCommand( 'InsertUnorderedList' );
			}
		},
		{
			icon: 'gridicons-code',
			onClick: function( editor ) {
				editor.formatter.apply( 'pre' );
			}
		},
		'text-align-center'
	]
} );