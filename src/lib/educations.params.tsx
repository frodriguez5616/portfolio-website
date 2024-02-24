import Assets from './data/assets';
import type { Education } from './types';

export const MY_EDUCATIONS: Array<Education> = [

	{
		degree: 'Bachelor degree of Computer Science',
		description: '',
		location: 'Oregon',
		logo: Assets.Unknown,
		name: '',
		organization: 'Western Governors University',
		period: { from: new Date(2021, 0, 1), to: new Date(2024, 5, 1) },
		shortDescription: '',
		slug: 'dummy-education-item',
		subjects: ['Typescript', 'Algorithms', 'Python', 'C++', 'Java']
	},
	{
		degree: 'Bachelor degree of Sociology',
		description: '',
		location: 'Oregon',
		logo: Assets.Unknown,
		name: '',
		organization: 'University of Oregon',
		period: { from: new Date(2019, 0, 1), to: new Date(2024, 6, 15)},
		shortDescription: '',
		slug: 'dummy-education-item-2',
		subjects: ['R', 'Research Methods']
	}
];
