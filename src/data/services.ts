import bathroom from '../assets/bathroom.jpeg';
import jojoTank from '../assets/jojo-tank.png';
import solarPanelHeating from '../assets/solar-panel-heating.jpeg';

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
	}
];
