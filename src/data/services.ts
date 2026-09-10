import bathroom from '../assets/services/bathroom.jpeg';
import jojoTank from '../assets/services/jojo-tank.png';
import solarPanelHeating from '../assets/services/solar-panel-heating.jpeg';
import solarHeatedPool from '../assets/services/solar-heated-pool.jpeg';
import plumbingServices from '../assets/services/plumbing-services.jpeg';

export interface Service {
	slug: string;
	title: string;
	description: string;
	icon: string;
	image: ImageMetadata;
	intro: string;
	paragraphs: string[];
	highlights: string[];
}

export const services: Service[] = [
	{
		slug: 'system-upgrades',
		title: 'Domestic & Industrial Commercial System Upgrades',
		description: 'Installation of all Saniflo products.',
		icon: 'M4 4v5h5M20 20v-5h-5M4 9a8 8 0 0 1 14.9-4M20 15a8 8 0 0 1-14.9 4',
		// TODO Understand this
		image: bathroom,
		intro: 'Saniflo systems is the upgrade you need for your house!',
		paragraphs:[
			'The Saniflo systems can be installed in any domestic and industrial environment.',
			'The main aim of the system is to prevent any blockages with in your sewerage system. Easy to install and no major construction needs to take place for the installation.'
		],
		// FIXME Generated:
		// intro:
		// 	'From compact macerator pumps to full bathroom and kitchen re-fits, we upgrade domestic, industrial, and commercial plumbing systems so they meet current standards and work reliably for years to come.',
		// paragraphs: [
		// 	'We are certified installers of the full Saniflo range, giving you the freedom to add a bathroom, kitchen, or utility room in places a gravity drain can never reach — below ground level, at the end of a long run, or anywhere ripping up floors and walls isn’t an option.',
		// 	'Every upgrade starts with an assessment of your existing pipework and fixtures, so we can recommend the right unit for the job rather than a one-size-fits-all install. We handle the plumbing, electrical connection, and waterproofing, and test the system thoroughly before we call it done.',
		// 	'For commercial and industrial sites, we work around your operating hours to minimise disruption, and we can scope multi-unit upgrades across a whole building or facility.'
		// ],
		highlights: [
			'Certified Saniflo installation and servicing',
		// 	'Bathroom, kitchen & utility room upgrades',
		// 	'Below-ground and long-run drainage solutions',
		// 	'Minimal disruption scheduling for commercial sites'
		]
	},
	{
		// FIXME Generated
		slug: 'water-heating',
		title: 'Water Heating Solutions',
		description:
			'Geyser, heat pump, and solar water heating installations, serviced and maintained for reliable hot water year-round.',
		icon: 'M12 3c-3 3.5-5 6.2-5 9a5 5 0 0 0 10 0c0-1.2-.4-2.2-1-3a3 3 0 0 1-3 3c0-1.5.7-2.6 1.5-3.8C13.8 6.7 12.8 5 12 3Z',
		image: solarPanelHeating,
		intro:
			'Reliable hot water, lower running costs, and a system sized correctly for your household or business — we install, service, and repair geysers, heat pumps, and solar water heating systems.',
		paragraphs: [
			'Solar water heating is where we spend most of our time: roof-mounted flat-plate and evacuated tube systems paired with a well-insulated storage tank, sized to your hot water demand and angled for the best year-round yield.',
			'Where solar alone isn’t practical, we install heat pumps and conventional electric geysers as a primary or backup source, including geyser replacements, element and thermostat repairs, and compliance-certificate call-outs after burst geysers or insurance claims.',
			'All installations come with routine maintenance plans available, so scaling, corrosion, and worn elements get caught before they turn into a cold shower or a flood.'
		],
		highlights: [
			// 'Solar geyser design & installation',
			// 'Heat pump supply and install',
			// 'Geyser repairs, replacements & COC call-outs',
			// 'Scheduled maintenance plans'
				'Domestic Solar geysers',
				'High pressure Solar systems',
				'Direct and indirect systems',
				'Retrofit systems',
		]
		// FIXME Original
		// 	- Domestic Solar geysers
		// 	- High pressure Solar systems
		// 	- Direct and indirect systems
		// 	- Retrofit systems
	},
	{
		slug: 'water-saving-backup',
		title: 'Water Saving & Backup Water Systems',
		description:
			'Backup water storage, pressure pumps, and water-saving systems that keep your home or business running during outages.',
		icon: 'M5 6.5a7 2.5 0 1 0 14 0a7 2.5 0 1 0-14 0M5 6.5V17.5a7 2.5 0 0 0 14 0V6.5',
		image: jojoTank,
		intro:
			'Load shedding and municipal outages don’t have to mean no water. We design and install storage tanks, pressure pumps, and filtration systems that keep taps running when the supply doesn’t.',
		paragraphs: [
			'A typical backup setup pairs a JoJo (or equivalent) storage tank with a pressure pump and controller, automatically switching between mains and stored water so you barely notice an interruption. We size the tank and pump to your property’s actual usage, not a generic package.',
			'We also install in-line filtration to protect the system and your fixtures, and can integrate backup water storage with existing irrigation, geyser, or borehole setups.',
			'Every installation is plumbed in neatly, pressure-tested, and handed over with a walkthrough of the controls, so you know exactly how the system behaves during an outage.'
		],
		highlights: [
			// 'Storage tank sizing & installation',
			// 'Automatic mains/backup switching pumps',
			// 'In-line filtration',
			// 'Integration with boreholes & irrigation'
			'New Solar system installation',
			'Heat pump installations',
			'Maintenance and repairs to old systems.',
			'Pool pump servicing',
			'Pool pump installations and upgrades to systems',
		]
	},
	{
		slug: 'pool-heating',
		title: 'Pool Heated Solar',
		description:
			'Solar pool heating installation, maintenance, and support for private and commercial pools — comfortable, efficient, and energy-smart year-round.',
		icon: 'M12 3v2M12 19v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M2 12h2M20 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4M12 8a4 4 0 1 0 0 8 4 4 0 0 0 0-8Z',
		image: solarHeatedPool,
		intro:
			"Enjoy a warm and inviting swimming experience with Porto Plumbing's solar pool heating solutions. Designed for efficiency and sustainability, our systems harness the power of the sun to maintain the perfect water temperature year-round, reducing energy costs and environmental impact.",
		paragraphs: [
			'Whether for private homes or commercial pools, we provide expert installation, maintenance, and support, ensuring your pool remains comfortable, reliable, and energy-smart.'
		],
		highlights: [
			'Solar pool heating installation',
			'Private & commercial pool systems',
			'Lower energy costs & environmental impact',
			'Ongoing maintenance & support'
		]
	},
	{
		slug: 'plumbing-services',
		title: 'Full Plumbing Services',
		description:
			'Installations, repairs, maintenance, and upgrades for domestic and commercial plumbing — reliable service you can trust.',
		icon: 'M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z',
		image: plumbingServices,
		intro:
			'We offer comprehensive plumbing solutions for homes and businesses, covering everything from installations and repairs to maintenance and upgrades. Our experienced team ensures every project is completed efficiently, reliably, and to the highest standards.',
		paragraphs: [
			'Whether it\u2019s fixing leaks, installing new systems, or integrating modern water heating solutions, we provide professional service you can trust.'
		],
		highlights: [
			'Leak detection & repairs',
			'New installations & system upgrades',
			'Domestic & commercial maintenance',
			'Integration with modern water heating systems'
		]
	}
];
