/**
 * @license Copyright (c) 2003-2015, CKSource - Frederico Knabben. All rights reserved.
 * For licensing, see LICENSE.md or http://ckeditor.com/license
 */

 CKEDITOR.editorConfig = function( config ) {

 	config.extraPlugins = 'panelbutton, colorbutton, colordialog';
	//config.extraPlugins = 'colordialog';
	config.toolbarGroups = [
	{ name: 'clipboard', groups: [ 'clipboard', 'undo' ] },
	{ name: 'editing', groups: [ 'find', 'selection', 'spellchecker', 'editing' ] },
	{ name: 'links', groups: [ 'links' ] },
	{ name: 'insert', groups: [ 'insert' ] },
	{ name: 'forms', groups: [ 'forms' ] },
	{ name: 'tools', groups: [ 'tools' ] },
	{ name: 'document', groups: [ 'mode', 'document', 'doctools' ] },
	{ name: 'others', groups: [ 'others' ] },
	{ name: 'colors', groups: [ 'colors' ] },
	'/',
	{ name: 'basicstyles', groups: [ 'basicstyles', 'cleanup' ] },
	{ name: 'paragraph', groups: [ 'list', 'indent', 'blocks', 'align', 'bidi', 'paragraph' ] },
	{ name: 'styles', groups: [ 'styles' ] },
	{ name: 'about', groups: [ 'about' ] },
	];

	config.removeButtons = 'Scayt,Anchor,Unlink,SpecialChar,Maximize,Source,About';
	config.skin = 'minimalist';
};
