var arrLang = {

	"en": {
		"Total": 'Total Payment',
		"Remaining": 'Remaining time',
		"Code": 'Code',
		"Copy": 'Copy code',
		"Expired": 'va code expired',
		"Payment": 'Payment Method:',
		"Order": 'Order Number:',
		"Product": 'Product:',
		"Contents": 'Payment contents:',

	},

	"id": {
		"Total": 'Total Pembayaran',
		"Remaining": 'Sisa waktu expired',
		"Code": 'Kode',
		"Copy": 'Salin kode',
		"Expired": 'Va kode kadaluwarsa',
		"Payment": 'Cara Pembayaran:',
		"Order": 'Nomor Pesanan:',
		"Product": 'Produk:',
		"Contents": 'Pembayaran:',
	}

};

// The default language is en

var lang = "en";

// Check for localStorage support

if ('localStorage' in window) {

	var lang = localStorage.getItem('lang') || navigator.language.slice(0, 2);
	if (lang === 'id') {
		document.getElementById("ChangeLanguage").options[0].selected = true
	} else {
		document.getElementById("ChangeLanguage").options[1].selected = true
	}
	if (!Object.keys(arrLang).includes(lang)) lang = 'en';

}

document.ready(function() {
	let list = document.getElementsByClassName('lang');
	for (let i = 0; i < list.length; i++) {
		list[i].innerHTML = arrLang[lang][list[i].getAttribute('key')]
	}
});

// get/set the selected language

function change() {
	let obj = document.getElementById('ChangeLanguage');
	let index = document.getElementById('ChangeLanguage').selectedIndex;
	let lang = obj[index].value;
	// update localStorage key
	if ('localStorage' in window) {
		localStorage.setItem('lang', lang)
	};

	let list = document.getElementsByClassName('lang');
	for (let i = 0; i < list.length; i++) {
		list[i].innerHTML = arrLang[lang][list[i].getAttribute('key')]
	};
}