import { questionsList } from './Contants';
import { SectionName } from './SectionName';
import { Accordion } from '../utils/Accordion';

const Questions = () => {
	return (
		<section className='stack container-full lg:container customStyle-container flex flex-col gap-5 py-10 px-10 w-full'>
			<SectionName number={'06'}>Остались Вопросы?</SectionName>
			<Accordion list={questionsList} />
		</section>
	);
};

export default Questions;