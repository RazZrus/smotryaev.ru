import i18next from 'i18next';

const changeLangRu = document.getElementById('ruChange');
const changeLangEn = document.getElementById('enChange');
const heading = document.getElementById('heading');
const firstParagraph = document.getElementById('first-paragraph');
const secondParagraph = document.getElementById('second-paragraph');
const skills = document.getElementById('skills');
const quote = document.getElementById('quote');

changeLangRu?.addEventListener('click', () => {
	i18next.changeLanguage('ru').then((t) => {
		if (heading) heading.innerHTML = t('heading');
		if (firstParagraph) firstParagraph.innerHTML = t('firstParagraph');
		if (secondParagraph) secondParagraph.innerHTML = t('secondParagraph', { githubLink: '<a href="https://github.com/RazZrus" target="_blank">GitHub</a>', vkLink: '<a href="https://vk.com/dmitrysmotryaev" target="_blank">VK</a>', telegramLink: '<a href="https://t.me/razzrus" target="_blank">Telegram</a>', interpolation: { escapeValue: false } });
		if (skills) skills.innerHTML = t('skills');
		if (quote) quote.innerHTML = t('quote');
	});
});

changeLangEn?.addEventListener('click', () => {
	i18next.changeLanguage('en').then((t) => {
		if (heading) heading.innerHTML = t('heading');
		if (firstParagraph) firstParagraph.innerHTML = t('firstParagraph');
		if (secondParagraph) secondParagraph.innerHTML = t('secondParagraph', { githubLink: '<a href="https://github.com/RazZrus" target="_blank">GitHub</a>', vkLink: '<a href="https://vk.com/dmitrysmotryaev" target="_blank">VK</a>', telegramLink: '<a href="https://t.me/razzrus" target="_blank">Telegram</a>', interpolation: { escapeValue: false } });
		if (skills) skills.innerHTML = t('skills');
		if (quote) quote.innerHTML = t('quote');
	});
});

i18next
	.init({
		lng: 'ru', // if you're using a language detector, do not define the lng option
		debug: true,
		resources: {
			en: {
				translation: {
					heading: 'Hello!\nMy name is\nDmitry Smotryaev',
					firstParagraph: "I'm a 19 y.o. frontend developer based in Moscow, currently navigating the exciting world of web development while pursuing my education at MISIS University.",
					secondParagraph: "With a passion for clean and efficient code, I specialize in a versatile tech stack. You can look at my pet-projects on my {{githubLink}}. Let's Connect! Feel free to reach out and connect with me on {{vkLink}}, {{telegramLink}}. I'm always up for interesting collaborations and job experience. Let's build the future of the web together!",
					skills: 'My skills',
					quote: 'remember: code is poetry, and every pixel tells a story ✨',
				},
			},
			ru: {
				translation: {
					heading: 'Привет!\nМеня зовут\nДмитрий Смотряев',
					firstParagraph: 'Я 19-летний фронтенд-разработчик проживающий в Москве. Изучаю захватывающий мир веб-разработки и учусь в университете МИСИС',
					secondParagraph: 'Со страстью к чистому и эффективному коду, я пишу на универсальном стеке. Вы можете посмотреть мои проекты на {{githubLink}}. Если хотите связаться со мной, то не стесняйтесь, пишите в {{vkLink}}, {{telegramLink}}. Я всегда за интересные коллаборации и за опыт в работе. Построим будущее веба вместе!',
					skills: 'Мои навыки',
					quote: 'и запомните: код это поэзия, и каждый пиксель рассказывает историю ✨',
				},
			},
		},
	})
	.then(function () {
		if (heading) heading.innerHTML = i18next.t('heading');
		if (firstParagraph) firstParagraph.innerHTML = i18next.t('firstParagraph');
		if (secondParagraph) secondParagraph.innerHTML = i18next.t('secondParagraph', { githubLink: '<a href="https://github.com/RazZrus" target="_blank">GitHub</a>', vkLink: '<a href="https://vk.com/dmitrysmotryaev" target="_blank">VK</a>', telegramLink: '<a href="https://t.me/razzrus" target="_blank">Telegram</a>', interpolation: { escapeValue: false } });
		if (skills) skills.innerHTML = i18next.t('skills');
		if (quote) quote.innerHTML = i18next.t('quote');
	});
