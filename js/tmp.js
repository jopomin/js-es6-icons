$(document).ready(function () {
	const icons = [
		{
			name: 'cat',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'crow',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dog',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dove',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'dragon',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'horse',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'hippo',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'fish',
			prefix: 'fa-',
			type: 'animal',
			family: 'fas'
		},
		{
			name: 'carrot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'apple-alt',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'lemon',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'pepper-hot',
			prefix: 'fa-',
			type: 'vegetable',
			family: 'fas'
		},
		{
			name: 'user-astronaut',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-graduate',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-ninja',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		},
		{
			name: 'user-secret',
			prefix: 'fa-',
			type: 'user',
			family: 'fas'
		}
	];

const COLORS = ['red', 'green', 'blue'];
const list = $('#icons');
const COLORARRAY = colors(icons, COLORS);
console.log(COLORARRAY);
print(COLORARRAY,list);
});

function print(array, list) {
	array.forEach(ICON => {
		const {color, name, family, prefix} = ICON;
		const HTMLel = `<li><i class="${family} ${prefix}${name} ${color}"></i> ${name} </li>`;
		list.append(HTMLel);
	});
};


function colors(icons, COLORS) {
	const TYPES = getType(icons);
	const COLORARRAY = [];
	for(let i = 0; i < icons.length; i++) {
		const ICON = icons[i];
		const IDXTYPE = TYPES.indexOf(ICON.type);
		if(IDXTYPE !== -1) {
			ICON.color = COLORS[IDXTYPE];
		};
		COLORARRAY.push(ICON);
	};
	return COLORARRAY;
};


function getType(array) {
	const TYPES = [];
	array.forEach(icon => {
		if(TYPES.includes(icon.type) == false) {
			TYPES.push(icon.type);
		};
	});
	return TYPES;
};