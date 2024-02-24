import Assets from './data/assets';
import { getSkills } from './skills.params';
import { ContractType, type Experience } from './types';

const MY_EXPERIENCES: Array<Experience> = [
	
	{
		slug: 'janet-smith',
		company: 'Janet Smith Coop',
		description: 'Resolving labor and relational issues.',
		contract: ContractType.SelfEmployed,
		type: 'Social ',
		location: 'Eugene',
		period: { from: new Date("October 2023") },
		skills: getSkills(),
		name: 'Job Coordinator',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},

	{
		slug: 'it-job',
		company: 'Columbia Gorge Education Service District',
		description: 'Resolving Tech Issues.',
		contract: ContractType.SelfEmployed,
		type: 'Tech',
		location: 'The Dalles',
		period: { from: new Date("June 2023"), to: new Date("October 2023") },
		skills: getSkills(),
		name: 'Tech Intern',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	}, 
	{
		slug: 'osu',
		company: 'Oregon State University',
		description: 'Teaching students critical thinking skills.',
		contract: ContractType.SelfEmployed,
		type: 'Teaching',
		location: 'Corvallis',
		period: { from: new Date("October 2022"), to: new Date("January 2023") },
		skills: getSkills(),
		name: 'Math Tutor ',
		color: 'red',
		links: [],
		logo: Assets.Unknown,
		shortDescription: ''
	},
];

export default MY_EXPERIENCES;
