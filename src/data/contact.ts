import { SITE, type Site } from '../config/site';

interface ContactInfo {
	phone: { display: string; href: string };
	email: string;
	address: {
		display: string;
		mapsUrl: string;
	};
	hours: string;
}

const contactBySite: Record<Site, ContactInfo> = {
	plumbing: {
		phone: { display: '084 514 5186', href: 'tel:+27845145186' },
		email: 'j.garcia.portoengineering@gmail.co.za',
		address: {
			display: '43 Knights Rd, Germiston, 1400',
			mapsUrl: 'https://maps.app.goo.gl/ZrzGYtgMZQXymBpB6'
		},
		hours: 'Mon–Fri: 7am–7pm · Sat: 8am–4pm'
	},
	engineering: {
		phone: { display: '011 828 9948', href: 'tel:+27118289948' },
		email: 'portoengineering@gmail.com',
		address: {
			display: '43 Knights Rd, Germiston, 1400',
			mapsUrl: 'https://maps.app.goo.gl/ZrzGYtgMZQXymBpB6'
		},
		hours: 'Mon–Fri: 7am–7pm · Sat: 8am–4pm'
	}
};

export const contact: ContactInfo = contactBySite[SITE];
