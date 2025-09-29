import { envs } from "../../config";

export class DiscordService {

    private readonly discordWebhookUrl = envs.DISCORD_WEBHOOK_URL;


    constructor() { }

    async notify(message: string) {

        const body = {
            content: message,
            embeds: [
                {
                    image: { url: 'https://giphy.com/gifs/ufc-ilia-topuria-BtKCbT9l6FmSSeRV4d' }
                }
            ]
        }

        const response = await fetch(this.discordWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(body),
        });

        return (response)
            ? true
            : false;
    }

}