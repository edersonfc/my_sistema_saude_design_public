
'use strict'

//
const handleThemeUpdate = (cssVars) => {
	const root = document.querySelector(':root');
	const keys = Object.keys(cssVars);
	keys.forEach(key => {
		root.style.setProperty(key, cssVars[key]);
	});
}

function dynamicPrimaryColor(primaryColor) {
	primaryColor.forEach((item) => {
		item.addEventListener('input', (e) => {
			const cssPropName = `--primary-${e.target.getAttribute('data-id')}`;
			const cssPropName1 = `--primary-${e.target.getAttribute('data-id1')}`;
			const cssPropName2 = `--primary-${e.target.getAttribute('data-id2')}`;
			const cssPropName7 = `--primary-${e.target.getAttribute('data-id7')}`;
			const cssPropName8 = `--darkprimary-${e.target.getAttribute('data-id8')}`;
			const cssPropName3 = `--dark-${e.target.getAttribute('data-id3')}`;
			handleThemeUpdate({
				[cssPropName]: e.target.value,
				// 95 is used as the opacity 0.95
				[cssPropName1]: e.target.value + 95,
				[cssPropName2]: e.target.value,
				[cssPropName3]: e.target.value,
				[cssPropName7]: e.target.value + 20,
				[cssPropName8]: e.target.value + 20,
			});
		});
	});
}

(function () {
	// Light theme color picker
	const dynamicPrimaryLight = document.querySelectorAll('input.color-primary-light');
	dynamicPrimaryColor(dynamicPrimaryLight);

	// dark theme color picker
	const DarkDynamicPrimaryLight = document.querySelectorAll('input.color-primary-dark');
	dynamicPrimaryColor(DarkDynamicPrimaryLight);

	localStorageBackup();

	$('#myonoffswitch1').on('click', function () {
		document.querySelector('body')?.classList.remove('dark-theme');
		$('#myonoffswitch1').prop('checked', true);

		localStorage.setItem('efc7lightMode', true);
		localStorage.removeItem('efc7darkMode');
	})
	$('#myonoffswitch2').on('click', function () {
		document.querySelector('body')?.classList.remove('light-theme');
		$('#myonoffswitch2').prop('checked', true);

		localStorage.setItem('efc7darkMode', true);
		localStorage.removeItem('efc7lightMode');
	})
})();

function localStorageBackup() {
	'use strict'
	// if there is a value stored, update color picker and background color
	// Used to retrive the data from local storage
	if (localStorage.efc7primaryColor) {
		// document.getElementById('colorID').value = localStorage.efc7primaryColor;
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.efc7primaryColor);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.efc7primaryHoverColor);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.efc7primaryBorderColor);
		document.querySelector('html').style.setProperty('--primary-transparentcolor', localStorage.efc7primaryTransparent);
		document.querySelector('body')?.classList.add('light-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');

		$('#myonoffswitch1').prop('checked', true);
		$('#myonoffswitch6').prop('checked', true);
		if (document.querySelector('body')?.classList.contains('dark-menu')) {
			$('#myonoffswitch5').prop('checked', true);
		}
		else {
			$('#myonoffswitch3').prop('checked', true);
		}

	}

	if (localStorage.efc7darkPrimary) {
		// document.getElementById('darkPrimaryColorID').value = localStorage.efc7darkPrimary;
		document.querySelector('html').style.setProperty('--primary-bg-color', localStorage.efc7darkPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-hover', localStorage.efc7darkPrimary);
		document.querySelector('html').style.setProperty('--primary-bg-border', localStorage.efc7darkPrimary);
		document.querySelector('html').style.setProperty('--dark-primary', localStorage.efc7darkPrimary);
		document.querySelector('html').style.setProperty('--darkprimary-transparentcolor', localStorage.efc7darkprimaryTransparent);
		document.querySelector('body')?.classList.add('dark-theme');
		document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');

		$('#myonoffswitch2').prop('checked', true);
		$('#myonoffswitch5').prop('checked', true);
		$('#myonoffswitch8').prop('checked', true);
	}

	if (localStorage.efc7lightMode) {
		document.querySelector('body')?.classList.add('light-theme');
		document.querySelector('body')?.classList.remove('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');
		$('#myonoffswitch1').prop('checked', true);
		$('#myonoffswitch3').prop('checked', true);
		$('#myonoffswitch6').prop('checked', true);
	}

	if (localStorage.efc7darkMode) {
		document.querySelector('body')?.classList.remove('light-theme');
		document.querySelector('body')?.classList.add('dark-theme');
		document.querySelector('body')?.classList.remove('transparent-theme');
		$('#myonoffswitch2').prop('checked', true);
		$('#myonoffswitch5').prop('checked', true);
		$('#myonoffswitch8').prop('checked', true);
	}

	if (localStorage.efc7rtl) {
		$('body').addClass('rtl');
	}
	if (localStorage.efc7horizontalmenu) {
		$('body').addClass('horizontalmenu');
	}
	if (localStorage.efc7horizontalmenuhover) {
		$('body').addClass('horizontalmenu-hover');
	}
}


// triggers on changing the color picker
function changePrimaryColor() {
	'use strict'
	$('#myonoffswitch3').prop('checked', true);
	$('#myonoffswitch6').prop('checked', true);
	checkOptions();

	var userColor = document.getElementById('colorID').value;
	localStorage.setItem('efc7primaryColor', userColor);
	// to store value as opacity 0.95 we use 95
	localStorage.setItem('efc7primaryHoverColor', userColor + 95);
	localStorage.setItem('efc7primaryBorderColor', userColor);
	localStorage.setItem('efc7primaryTransparent', userColor + 20);

	// removing dark theme properties
	localStorage.removeItem('efc7darkPrimary')
	localStorage.removeItem('efc7transparentBgColor');
	localStorage.removeItem('efc7transparentThemeColor');
	localStorage.removeItem('efc7transparentPrimary');
	localStorage.removeItem('efc7transparentprimaryTransparent');
	localStorage.removeItem('efc7darkprimaryTransparent');
	document.querySelector('body')?.classList.add('light-theme');
	document.querySelector('body')?.classList.remove('dark-theme');
	document.querySelector('body')?.classList.remove('transparent-theme');
	localStorage.removeItem('efc7BgImage');
	document.querySelector('body')?.classList.add('dark-menu');

	$('#myonoffswitch1').prop('checked', true);

	names()

	localStorage.setItem('efc7lightMode', true);
	localStorage.removeItem('efc7darkMode');
	localStorage.removeItem('efc7transparentMode');

}

function darkPrimaryColor() {
	'use strict'
	var userColor = document.getElementById('darkPrimaryColorID').value;
	localStorage.setItem('efc7darkPrimary', userColor);
	localStorage.setItem('efc7darkprimaryTransparent', userColor + 20);
	$('#myonoffswitch5').prop('checked', true);
	$('#myonoffswitch8').prop('checked', true);


	// removing light theme data
	localStorage.removeItem('efc7primaryColor')
	localStorage.removeItem('efc7primaryHoverColor')
	localStorage.removeItem('efc7primaryBorderColor')
	localStorage.removeItem('efc7primaryTransparent');

	localStorage.removeItem('efc7transparentBgColor');
	localStorage.removeItem('efc7transparentThemeColor');
	localStorage.removeItem('efc7transparentPrimary');
	localStorage.removeItem('efc7transparentprimaryTransparent');
	localStorage.removeItem('efc7transparentBgImgPrimary');
	localStorage.removeItem('efc7transparentBgImgprimaryTransparent');
	localStorage.removeItem('efc7BgImage');

	document.querySelector('body')?.classList.remove('light-theme');
	document.querySelector('body')?.classList.add('dark-theme');
	document.querySelector('body')?.classList.remove('transparent-theme');

	$('#myonoffswitch2').prop('checked', true);
	checkOptions();
	names()
	localStorage.setItem('efc7darkMode', true);
	localStorage.removeItem('efc7lightMode');
	localStorage.removeItem('efc7transparentMode');
}

// to check the value is hexa or not
const isValidHex = (hexValue) => /^#([A-Fa-f0-9]{3,4}){1,2}$/.test(hexValue)

const getChunksFromString = (st, chunkSize) => st.match(new RegExp(`.{${chunkSize}}`, "g"))
// convert hex value to 256
const convertHexUnitTo256 = (hexStr) => parseInt(hexStr.repeat(2 / hexStr.length), 16)
// get alpha value is equla to 1 if there was no value is asigned to alpha in function
const getAlphafloat = (a, alpha) => {
	if (typeof a !== "undefined") { return a / 255 }
	if ((typeof alpha != "number") || alpha < 0 || alpha > 1) {
		return 1
	}
	return alpha
}
// convertion of hex code to rgba code
function hexToRgba(hexValue, alpha) {
	if (!isValidHex(hexValue)) { return null }
	const chunkSize = Math.floor((hexValue.length - 1) / 3)
	const hexArr = getChunksFromString(hexValue.slice(1), chunkSize)
	const [r, g, b, a] = hexArr.map(convertHexUnitTo256)
	return `rgba(${r}, ${g}, ${b}, ${getAlphafloat(a, alpha)})`
}

let myVarVal, primaryColorVal;
function names() {

	let docStyle = getComputedStyle(document.documentElement);
	primaryColorVal = getComputedStyle(document.documentElement).getPropertyValue('--primary-bg-color').trim();

	//get variable
	myVarVal = localStorage.getItem("efc7primaryColor") || localStorage.getItem("efc7darkPrimary") || primaryColorVal;

	if (document.querySelector('#project') !== null) {
		index();
	}

	if (document.querySelector('#bar-chart') !== null) {
		barchart();
	}

	if (document.querySelector('#project2') !== null) {
		index_2();
	}

	if (document.querySelector('.forth.circle') !== null) {
		forthcircle();
	}

	if (document.querySelector('#btc_chart') !== null) {
		btcchart();
	}

	if (document.querySelector('#cryptoChart2') !== null) {
		cryptoChart2();
	}

	if (document.querySelector('#sparkline11') !== null) {
		spark1();
	}

	if (document.querySelector('#sparkline111') !== null) {
		spark111();
	}


	if (document.querySelector('#sparkline12') !== null) {
		spark2();
	}

	if (document.querySelector('#sparkline13') !== null) {
		spark3();
	}

	if (document.querySelector('#sparkline14') !== null) {
		spark4();
	}

	if (document.querySelector('#crypto-donut') !== null) {
		cryptodonut();
	}

	if (document.querySelector('#revenuechart') !== null) {
		revenuechart();
	}

	if (document.querySelector('#recentorders') !== null) {
		recentorders();
	}

	if (document.querySelector('#world-map-markers') !== null) {
		vectormap();
	}


	if (document.querySelector('#regulacao_grafico') !== null) {
		regulacao_grafico_f()
	}





	let colorData = hexToRgba(myVarVal || primaryColorVal, 0.05)
	document.querySelector('html').style.setProperty('--primary005', colorData);

	let colorData1 = hexToRgba(myVarVal || primaryColorVal, 0.2)
	document.querySelector('html').style.setProperty('--primary02', colorData1);

	let colorData2 = hexToRgba(myVarVal || primaryColorVal, 0.3)
	document.querySelector('html').style.setProperty('--primary03', colorData2);

	let colorData5 = hexToRgba(myVarVal || primaryColorVal, 0.5)
	document.querySelector('html').style.setProperty('--primary05', colorData5);

	let colorData3 = hexToRgba(myVarVal || primaryColorVal, 0.7)
	document.querySelector('html').style.setProperty('--primary07', colorData3);

	let colorData4 = hexToRgba(myVarVal || primaryColorVal, 0.8)
	document.querySelector('html').style.setProperty('--primary08', colorData4);

	let colorData6 = hexToRgba(myVarVal || primaryColorVal, 0.1)
	document.querySelector('html').style.setProperty('--primary01', colorData6);


}
names()