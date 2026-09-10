import plumbing1 from '../assets/gallery/plumbing-1.jpg';
import plumbing2 from '../assets/gallery/plumbing-2.jpg';
import plumbing3 from '../assets/gallery/plumbing-3.jpg';
import plumbing4 from '../assets/gallery/plumbing-4.jpg';
import waterHeating1 from '../assets/gallery/water-heating-1.jpeg';
import waterHeating2 from '../assets/gallery/water-heating-2.jpg';
import waterHeating3 from '../assets/gallery/water-heating-3.jpg';
import waterBackup1 from '../assets/gallery/water-backup-1.jpg';
import waterBackup2 from '../assets/gallery/water-backup-2.jpeg';

export interface GalleryImage {
	image: ImageMetadata;
	alt: string;
}

export interface GalleryCategory {
	slug: string;
	title: string;
	images: GalleryImage[];
}

export const galleryCategories: GalleryCategory[] = [
	{
		slug: 'plumbing',
		title: 'Plumbing',
		images: [
			{ image: plumbing1, alt: 'Newly installed toilet in a renovated bathroom' },
			{ image: plumbing2, alt: 'Exterior plumbing pipework installed at a commercial building' },
			{ image: plumbing3, alt: 'Rough-in plumbing during a bathroom renovation' },
			{ image: plumbing4, alt: 'Drainage pipes being laid in a trench' }
		]
	},
	{
		slug: 'water-heating',
		title: 'Water Heating Solutions',
		images: [
			{ image: waterHeating1, alt: 'Solar water heating unit installed on an exterior wall' },
			{ image: waterHeating2, alt: 'Electric geyser installed on an exterior brick wall' },
			{ image: waterHeating3, alt: 'Two tankless water heaters installed on an exterior wall' }
		]
	},
	{
		slug: 'water-saving-backup',
		title: 'Water Saving & Backup Water Systems',
		images: [
			{ image: waterBackup1, alt: 'Backup water storage tanks installed on an exterior wall' },
			{ image: waterBackup2, alt: 'Multiple backup water storage tanks installed on a rooftop' }
		]
	}
];
