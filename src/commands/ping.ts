import { SlashCommandBuilder } from '@discordjs/builders'
import { get_timestamp, ICommandHandler } from '../globals'

const Builder = new SlashCommandBuilder().setDescription('Pings the bot')

const Handler: ICommandHandler = {
	Command({ client, interaction }) {
		interaction.reply({
			content: `š ${Math.round(
				Math.abs(Date.now() - get_timestamp(interaction, true).getTime())
			)}ms\nš ${Math.round(client.ws.ping)}ms`,
		})
	},
}

export { Builder, Handler }
