import React from 'react';

// Import all steps.
import PageBuilder from './page-builder';
import SiteList from './site-list';
import SiteListHeader from './site-list/header';
import CustomizeSite from './customize-site';
import ImportSite from './import-site';
import Survey from './survey';

export const STEPS = [
	{
		content: <PageBuilder />,
		class: 'step-page-builder',
	},
	{
		header: <SiteListHeader />,
		content: <SiteList />,
		class: 'step-site-list',
	},
	{
		content: <CustomizeSite />,
		class: 'step-customizer',
	},
	{
		content: <Survey />,
		class: 'step-survey',
	},
	{
		title: 'We are buiding your website...',
		content: <ImportSite />,
		class: 'step-import-site',
	},
];
