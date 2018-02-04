 /*	__  __          _____  _______     __
 	|  \/  |   /\   |  __ \|  __ \ \   / /
 	| \  / |  /  \  | |__| | |__| \ \_/ /
 	| |\/| | / /\ \ |  ___/|  ___/ \   /
 	| |  | |/ ____ \| |    | |      | |
 	|_|  |_/_/    \_\_|    |_|      |_|
 	*/

//Aqui van las credenciales de tu apikey
const TelegramBot = require('');
const token = '';
const bot = new TelegramBot(token, {polling: true});

bot.on('message', (msg) => {
	if (msg.text.toString().toLowerCase().indexOf("hola") === 0) {
	bot.sendMessage(msg.chat.id,"Hola, soy Mappy");
	}
	else if(msg.text.toString().toLowerCase().includes("amor")){
		bot.sendMessage(msg.chat.id,"Solo soy un pobre bot que no sabe amar :(");
	} /*else{
		bot.sendMessage(msg.chat.id,"Lo siento tu no eres mi padre :(");
	}*/
	
});
bot.onText(/\/start/, (msg) => {
	bot.sendMessage(msg.chat.id, "¡Hola, soy Mappy!");
	bot.sendMessage(msg.chat.id, "Puedes consultarme cualquier duda que tengas sobre nuestra aplicación.");
	bot.sendMessage(msg.chat.id, "Para ver los comandos disponibles escribe /help");
});

bot.onText(/\/help/, (msg) => {
	bot.sendMessage(msg.chat.id, "Puedes hacer cualquiera de las siguientes acciones :D");
	bot.sendMessage(msg.chat.id, "/tecnico Si quieres que te facilitemos el numero de uno de nuestros tecnicos para poder llamarle");
	bot.sendMessage(msg.chat.id, "/ayuntamiento si quieres que te facilitemos el contacto con algun miembro del ayuntamiento");
	bot.sendMessage(msg.chat.id, "/list si quieres que te facilitemos el contacto con algun miembro del ayuntamiento");
	bot.sendMessage(msg.chat.id, "/localizar Para que te enviemos la direccion exacta del local");
	bot.sendMessage(msg.chat.id, "/emergencias Para facilitartes el numero de emergencias que te corresponde");
});

bot.onText(/\/tecnico/, (msg) => {
	bot.sendMessage(msg.chat.id, "servicio tecnico: 902902902");
});

bot.onText(/\/ayuntamiento/, (msg) => {
	bot.sendMessage(msg.chat.id, "De que ciudad quieres la info ");
	bot.once('message', (msg) => {
		if (msg.text.toString().toLowerCase().includes("mataro")) {
			bot.sendMessage(msg.chat.id, "Telefono: 930000001");
			bot.sendMessage(msg.chat.id, "AjMataro@mail.com");
		}else if(msg.text.toString().toLowerCase().includes("arenys")){
			bot.sendMessage(msg.chat.id, "Telefono: 930000002");
			bot.sendMessage(msg.chat.id, "AjArenys@mail.com");
		}else if(msg.text.toString().toLowerCase().includes("blanes")){
			bot.sendMessage(msg.chat.id, "Telefono: 930000003");
			bot.sendMessage(msg.chat.id, "AjBlanes@mail.com");
		}else{
			bot.sendMessage(msg.chat.id, "No tenemos registrada esta localidad");
		}
	});
});

bot.onText(/\/list/, (msg) => {
	bot.sendMessage(msg.chat.id, "mataro");
	bot.sendMessage(msg.chat.id, "arenys");
	bot.sendMessage(msg.chat.id, "blanes");
});

bot.onText(/\/localizar/, (msg) => {
	//por hacer
});

bot.onText(/\/emergencias/, (msg) => {
	bot.sendMessage(msg.chat.id, "llamar al 112");
});


//Bromas programadas para relajarse un poco

bot.onText(/\/joke/, (msg) => {
	var random = Math.floor(Math.random() * (5 - 0) + 0);
	if(random == 0){
		bot.sendMessage(msg.chat.id, "Mi papa Raxi se caso con mi mama Oscar, pero el a quien queria era a Jordi");
	}else if(random == 1){
		bot.sendMessage(msg.chat.id, "van 2 y se cae el del medio");
	}else if (random == 2){
		bot.sendMessage(msg.chat.id, "Nuestro marketing no para esta on fire");
	}else if (random == 3){
		bot.sendMessage(msg.chat.id, "Mi mama no sabe hablar D':");
	}else if(random == 4){
		bot.sendMessage(msg.chat.id, "Sin tele y sin pizza Mappy se va de tu vista");
	}
});


bot.onText(/^\/place_order/, function (msg, match) {
    var option = {
        "parse_mode": "Markdown",
        "reply_markup": {
            "one_time_keyboard": true,
            "keyboard": [[{
                text: "My phone number",
                request_contact: true
            }], ["Cancel"]]
        }
    };
    bot.sendMessage(msg.chat.id, "How can we contact you?", option).then(() => {
        // handle user phone
    })

});

//_________________________________________________________________________

bot.onText(/\/qr/, (msg) => {
	bot.sendMessage(msg.chat.id, "Voy a generar tu QR");
	
	bot.sendMessage(msg.chat.id, "Aqui tienes tu codigo QR!");
});


