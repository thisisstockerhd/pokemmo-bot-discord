const { SlashCommandBuilder } = require('discord.js');
const date = require('date-and-time');

function getLegendariesForMonth(d = new Date()) {
  const month = date.format(d, 'MM');

  switch (month) {
    case '01': return { kanto: "Zapdos",   johto: "Entei"   };
    case '02': return { kanto: "Moltres",  johto: "Suicune" };
    case '03': return { kanto: "Articuno", johto: "Raikou"  };
    case '04': return { kanto: "Zapdos",   johto: "Entei"   };
    case '05': return { kanto: "Moltres",  johto: "Suicune" };
    case '06': return { kanto: "Articuno", johto: "Raikou"  };
    case '07': return { kanto: "Zapdos",   johto: "Entei"   };
    case '08': return { kanto: "Moltres",  johto: "Suicune" };
    case '09': return { kanto: "Articuno", johto: "Raikou"  };
    case '10': return { kanto: "Zapdos",   johto: "Entei"   };
    case '11': return { kanto: "Moltres",  johto: "Suicune" };
    case '12': return { kanto: "Articuno", johto: "Raikou"  };
    default:   return { kanto: "Unknown",  johto: "Unknown" };
  }
}

module.exports = {
  data: new SlashCommandBuilder()
    .setName('currentlegendary')
    .setDescription('Replies with current roaming legendary'),

  async execute(interaction) {
    const { kanto, johto } = getLegendariesForMonth();
    await interaction.reply(`Current legendary Kanto: ${kanto}\nCurrent legendary Johto: ${johto}`);
  },
};