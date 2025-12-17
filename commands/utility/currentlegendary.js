const { SlashCommandBuilder } = require('discord.js');

// Comfigure date-and-time module
const date = require('date-and-time');
const currentDate = new Date();
const dateFormat = 'MM';
const formattedDate = date.format(currentDate, dateFormat);

switch(formattedDate) {
    case '01':
        kantoLegendary = "Zapdos";
        johtoLegendary = "Entei";
        break;
    case '02':
        kantoLegendary = "Moltres";
        johtoLegendary = "Suicune";
        break;
    case '03':
        kantoLegendary = "Articuno";
        johtoLegendary = "Raikou";
        break;
    case '04':
        kantoLegendary = "Zapdos";
        johtoLegendary = "Entei";
        break;
    case '05':
        kantoLegendary = "Moltres";
        johtoLegendary = "Suicune";
        break;
    case '06':
        kantoLegendary = "Articuno";
        johtoLegendary = "Raikou";
        break;
    case '07':
        kantoLegendary = "Zapdos";
        johtoLegendary = "Entei";
        break;
    case '08':
        kantoLegendary = "Moltres";
        johtoLegendary = "Suicune";
        break;
    case '09':
        kantoLegendary = "Articuno";
        johtoLegendary = "Raikou";
        break;
    case '10':
        kantoLegendary = "Zapdos";
        johtoLegendary = "Entei";
        break;
    case '11':
        kantoLegendary = "Moltres";
        johtoLegendary = "Suicune";
        break;
    case '12':
        kantoLegendary = "Articuno";
        johtoLegendary = "Raikou";
        break;
    default:
        break;
}

module.exports = {
	data: new SlashCommandBuilder().setName('currentlegendary').setDescription('Replies with current roaming legendary'),
	async execute(interaction) {
		await interaction.reply(`Current legendary Kanto: ${kantoLegendary}\nCurrent legendary Johto: ${johtoLegendary}`);
	},
};