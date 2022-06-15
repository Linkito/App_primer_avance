// Dom7
var $$ = Dom7;

// Init App
var app = new Framework7({
  	id: 'com.app',
  	root: '#app',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'App Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/home/',
    	url: 'index.html',
    	name: 'home',
  		},
		{
		path: '/buscar/',
    	url: 'buscar.html',
    	name: 'buscar',
  		},
		{
		path: '/notificaciones/',
    	url: 'notificaciones.html',
    	name: 'notificaciones',
  		},

	],
	dialog: {
		title: 'RunGran Shop',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#login');
		
		app.dialog.alert('¡ Welcome to Rungran Shop !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {

		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		 icon: '<i class="material-icons">check</i>',
		 title: 'Order',
		 titleRightText: '',
		 subtitle: '',
		 text: "Your order has been received.",
		 closeTimeout: 3000,
		});
		notification.open();

	});



});


