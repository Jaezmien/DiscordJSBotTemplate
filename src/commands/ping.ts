import { SlashCommandBuilder } from '@discordjs/builders'
import { CommandInteraction } from 'discord.js'
import { ICommandHandler } from 'src/globals'

const Builder = new SlashCommandBuilder().setDescription('Pings the bot')

function get_timestamp(i: CommandInteraction, discord_epoch = true): Date {
	return new Date(+i.id / 4194304 + (discord_epoch ? 1420070400000 : 0))
}

const Handler: ICommandHandler = {
	Command({ client, interaction }) {
		interaction.reply({
			content: `🏓 ${Math.round(
				Math.abs(Date.now() - get_timestamp(interaction, true).getTime())
			)}ms\n🌐 ${Math.round(client.ws.ping)}ms`,
		})
	},
}

export { Builder, Handler }
