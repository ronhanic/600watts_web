const languages = require("./languages.json");
//const AccessToken = require('./AccessToken').AccessToken


const {RtcTokenBuilder, RtmTokenBuilder, RtcRole, RtmRole} = require('agora-access-token')


function getAllLanguages(req,res) {

    var channel = req.query.channel;
    if (!channel) {
        return resp.status(500).json({ 'error': 'channel name is required' });
    }

    console.log("accessoken");
    
    var uid = req.query.uid;
    if (!uid) {
        uid = 0;
    }

    var expiredTs = req.query.expiredTs;
    if (!expiredTs) {
        expiredTs = 0;
    }
    
    
    const appID = "b873c7d3ccd0411cad0c4144f7af20d9";
     
const appCertificate =  "641967bc755644648757d9fa6c494e16";
//const channelName = '1234';
//const uid = 2882341273;
//const account = "2882341273";
const role = RtcRole.PUBLISHER;
 
const expirationTimeInSeconds = 3600
 
const currentTimestamp = Math.floor(Date.now() / 1000)
 
const privilegeExpiredTs = currentTimestamp + expirationTimeInSeconds
 
// IMPORTANT! Build token with either the uid or with the user account. Comment out the option you do not want to use below.
 
// Build token with uid
const tokenA = RtcTokenBuilder.buildTokenWithUid(appID, appCertificate, channel, uid, role, privilegeExpiredTs);
console.log("Token With Integer Number Uid: " + tokenA);
   return res.json({ 'token': tokenA,'user': req.user.phone_number });


    // var token = new Token("b873c7d3ccd0411cad0c4144f7af20d9",
    //  "641967bc755644648757d9fa6c494e16", channel, uid);
    // // typically you will ONLY need join channel priviledge
    // token.addPriviledge(Priviledges.kJoinChannel, expiredTs);
    // return resp.json({ 'token': token.build() });

    // return res.json({ <-- this one works
    //   success:true,
    //   data:languages
    // });
    
}

function getLanguage(req,res) {
    const requiredLang = req.params.language;
    const lang = languages.filter((lang)=> lang.name=== requiredLang);
    const exists = lang.length > 0;
    
    return res.status(exists?200:404)
    .send({
        success:exists,
        data:exists?lang[0]: 'language not found'
    })
}

module.exports= {
   getAllLanguages,
    getLanguage
}