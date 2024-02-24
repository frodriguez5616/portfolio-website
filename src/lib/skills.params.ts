import Assets from './data/assets';
import type { Skill } from './types';
import svelte from './md/svelte.md?raw';

const s = (skill: Skill) => skill;

export type ArrayElementType<ArrayType extends readonly unknown[]> =
	ArrayType extends readonly (infer ElementType)[] ? ElementType : never;

const MY_SKILLS = [
	//TODO: SQL, C#, ASP.NET
	s({
		slug: 'AWS',
		color: 'blue',
		description: 'In AWS, my proficiency shines brightly. I traverse its complexities with ease, architecting elegant solutions to intricate challenges. My deep understanding of essential concepts such as cloud computing and distributed systems empowers me to design resilient architectures effortlessly. Whether harnessing the capabilities of cutting-edge services or diving into advanced networking configurations, I excel in leveraging AWS\'s full suite of tools to create seamless and scalable cloud solutions.',
		logo: Assets.AWS,
		name: 'AWS'
	}),
	s({
		slug: 'java',
		color: 'red',
		description: 'In Java, my proficiency radiates brightly. I navigate its intricacies with finesse, sculpting polished solutions to intricate problems. My mastery of core concepts like object-oriented programming and functional programming is profound, enabling me to architect robust applications with ease. Whether leveraging the capabilities of modern frameworks or diving into sophisticated asynchronous programming, I adeptly utilize Java\'s full range of tools to create seamless user experiences.',
		logo: Assets.Java,
		name: 'Java'
	}),
	s({
		slug: 'python',
		color: 'blue',
		description: 'In Python, my expertise shines brightly. I traverse its nuances with grace, fashioning refined solutions to complex challenges. My command over fundamental principles such as functional programming and object-oriented design runs deep, empowering me to engineer resilient applications effortlessly. Whether harnessing the capabilities of contemporary libraries or exploring intricate asynchronous programming, I excel in harnessing Python\'s complete arsenal to craft fluid user interactions.',
		logo: Assets.Python,
		name: 'Python'
	}),
	s({
		slug: 'js',
		color: 'yellow',
		description:
			'In JavaScript, my excellence is unmistakable. I navigate through its intricacies effortlessly, crafting elegant solutions to intricate problems. My grasp of essential concepts like functional programming and object-oriented design is profound, allowing me to architect robust applications with ease. Whether it is leveraging modern frameworks or delving into advanced asynchronous programming, I am adept at utilizing JavaScript\'s full potential to create seamless user experiences.',
		logo: Assets.JavaScript,
		name: 'Javascript'
	}),
	s({
		slug: 'ts',
		color: 'blue',
		description:
			'In TypeScript, my expertise shines brightly. I seamlessly traverse its syntax and functionalities, crafting refined solutions to intricate problems. With a keen grasp of pivotal concepts such as static typing, I engineer resilient applications with assurance. Whether I\'m exploring the depths of advanced TypeScript features or seamlessly integrating with external dependencies, I adeptly harness TypeScript\'s strengths to produce polished and adaptable software solutions.',
		logo: Assets.TypeScript,
		name: 'Typescript'
	}),
	s({
		slug: 'css',
		color: 'blue',
		description:
			'In CSS, my proficiency is evident in my ability to create visually stunning and responsive designs effortlessly. I navigate its selectors and properties with ease, crafting elegant layouts and styles to enhance user experiences. With a deep understanding of crucial concepts like specificity and cascading, I design flexible and maintainable stylesheets with confidence. I excel at leveraging CSS\'s capabilities to deliver polished and visually appealing web interfaces.',
		logo: Assets.CSS,
		name: 'CSS'
	}),
	s({
		slug: 'html',
		color: 'orange',
		description:
			'In HTML, my expertise shines through in my adeptness at structuring content and creating seamless user interfaces. I effortlessly employ its elements and attributes to craft well-organized and accessible web pages. With a profound understanding of key concepts like semantic markup and accessibility guidelines, I design robust and user-friendly layouts with ease. Whether I\'m integrating multimedia elements or optimizing for search engines, I excel at harnessing HTML\'s capabilities to deliver engaging and impactful online experiences.',
		logo: Assets.HTML,
		name: 'HTML'
	}),


	s({
		slug: 'reactjs',
		color: 'cyan',
		description:
			'In React, my proficiency is evident in my ability to architect dynamic and interactive user interfaces with finesse. I effortlessly navigate its component-based structure and state management, crafting elegant solutions to complex UI challenges. With a deep understanding of core concepts like virtual DOM and JSX syntax, I engineer scalable and maintainable applications with confidence. I excel at leveraging React\'s capabilities to deliver seamless and intuitive user experiences.',
		logo: Assets.ReactJs,
		name: 'React Js'
	}),
];

export default MY_SKILLS;

export const getSkills = (...slugs: Array<string>): Array<Skill> =>
	MY_SKILLS.filter((it) => slugs.includes(it.slug));

