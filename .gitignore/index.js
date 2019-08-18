const Discord = require("discord.js");
var client = new Discord.Client();
let prefix = "!"

client.on("ready", function() {
    client.user.setGame("baiser la mere a TK78");
    console.log("Le bot a bien été connecté");
});

client.on('guildMemberAdd', member =>{
    member.guild.channels.get('605736278985801728').send(':tada: **Wesh**' + member.user + ' **on te souhaite pas la bienvenue !** :smile:');
});

client.on('guildMemberRemove', member =>{
    member.guild.channels.get('605736278985801728').send('** Alors' + member.user + ' tu pars deja ? :smiling_imp:');
});



client.on('message', function (message) {
    if (!message.guild) return
    let args = message.content.trim().split(/ +/g)
 
    if (args[0].toLowerCase() === prefix + "question") {
        if (!args[1]) return message.channel.send("Veuillez **poser une question** :x:")
        let answers = ["WOLA QUE NON", "Le coran jrepond pas tu va etre choqué :joy: ", "Balecouille fdp :face_palm:", "Peut être... :thinking:", "Ouiiiiii :thumbsup::skin-tone-2: ", "Oui :joy:", "jrepond pa wola :sweat_smile: ", "Beh biensur que oui ! :thumbsup::skin-tone-2: "]
        let question = args.slice(1).join(" ")
        let embed = new Discord.RichEmbed()
            .setAuthor(message.author.tag, message.author.displayAvatarURL)
            .setColor("ORANGE")
            .addField("Question :", question)
            .addField("Réponse :", answers[Math.floor(Math.random() * answers.length)])
        message.channel.send(embed)
    }
})

client.login("NjEyNDM3MjQwMTY5MjM0NDQz.XVjKqw.40fJzqbYgYByxbhUbah38WVD5Os");
